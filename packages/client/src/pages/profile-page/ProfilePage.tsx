import React, { ChangeEvent, useCallback, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/constants';
import InputField from '../../components/inputField/InputField';
import style from './ProfilePage.module.scss';
import { changeAvatar, changePassword, changeProfile } from '../../services/UserServices';
import { IProfile } from '../../models/Profile';
import apiConfig from '../../config/ApiConfig';
import Popup from '../../components/popup/Popup';
import usePrevious from '../../components/hooks/usePrevios';
import ErrorBoundary from '../../components/utils';
import { CustomButton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogout } from '../../store/slices/userExtraReducers';
import { selectUser } from '../../store/slices/userSlice';

type field = { key: string; label: string; value?: string; };

function ProfilePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile>({
    first_name: '',
    second_name: '',
    display_name: '',
    email: '',
    phone: '',
    avatar: '',
    login: '',
  });

  const user = useAppSelector((state) => selectUser(state));
  console.log('user', user);

  const prevProfile = usePrevious(profile);
  const [isEditing, setEditingMode] = useState<boolean>(false);
  const [isPasswordMode, setPasswordMode] = useState<boolean>(false);
  const fieldsUserInfo: field[] = [
    { key: 'first_name', label: 'Имя', value: profile?.first_name },
    { key: 'second_name', label: 'Фамилия', value: profile?.second_name },
    { key: 'email', label: 'Почта', value: profile?.email },
    { key: 'phone', label: 'Телефон', value: profile?.phone },
    { key: 'display_name', label: 'Никнейм', value: profile?.display_name },
  ];
  const fieldsUserPassword: field[] = [
    { key: 'oldPassword', label: 'Старый пароль', value: '' },
    { key: 'newPassword', label: 'Новый пароль', value: '' },
  ];

  const handleLogout = useCallback(async () => {
    try {
      const data = await dispatch(fetchLogout()).unwrap();
      if (data) navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error('ProfilePage error:', error);
    }
  }, [dispatch]);

  const handleFieldChange = (key: string, value?: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleCancel = () => {
    if (isPasswordMode) {
      setPasswordMode(false);
    } else {
      setProfile(prevProfile as IProfile);
    }

    setEditingMode(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = (event.target as HTMLFormElement).closest('form');

    if (form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (isPasswordMode) {
        await changePassword(data).then(() => {
          setEditingMode(false);
          setPasswordMode(false);
        });
      } else if (isEditing) {
        await changeProfile(data).then((res) => {
          setProfile(res);
          setEditingMode(false);
        });
      }
    }
  };

  const getAvatar = (url: string | undefined) =>
    (url ? `${apiConfig.baseUrlResource}${url}` : '');

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();

    if (!file) {
      return;
    }

    formData.append('avatar', file);

    await changeAvatar(formData).then((res) => {
      setProfile(res);
      setPopupOpen(false);
    });
  };

  return (
    <section className={style.profilePage}>
      <ErrorBoundary>
        <div className={style.profilePage__card}>
          <div className={style.profilePage__card__avatarContainer}>
            <img src={getAvatar(profile?.avatar)} alt="Avatar" className={style.profilePage__avatar} />
          </div>

          <div className={style.profilePage__actions}>
            <CustomButton
              type="button"
              color="transparent"
              text="Изменить аватар"
              onClick={() => setPopupOpen(true)}
            />

            <CustomButton
              type="button"
              color="transparent"
              text={!isPasswordMode ? 'Изменить пароль' : 'Данные пользователя'}
              onClick={() => setPasswordMode(!isPasswordMode)}
            />

            {!(isEditing || isPasswordMode) && (
              <>
                <CustomButton
                  type="button"
                  color="transparent"
                  text="Редактировать"
                  onClick={() => setEditingMode(true)}
                />

                <CustomButton
                  className={[style.button__cancel]}
                  type="button"
                  color="transparent"
                  text="Выйти"
                  onClick={handleLogout}
                />
              </>
            )}
          </div>
          <form onSubmit={handleSubmit} className={style.profilePage__form}>
            <div className={style.profilePage__fields}>
              {isPasswordMode
                ? fieldsUserPassword.map(({ label, key, value }) => (
                  <InputField
                    label={label}
                    value={value}
                    key={key}
                    name={key}
                    isEditing={isPasswordMode}
                    onChange={(e) => handleFieldChange(key, e)}
                  />
                ))
                : fieldsUserInfo.map(({ label, key, value }) => (
                  <InputField
                    label={label}
                    value={value}
                    name={key}
                    key={key}
                    isEditing={isEditing}
                    onChange={(e) => handleFieldChange(key, e)}
                  />
                ))}
            </div>
            {(isEditing || isPasswordMode) && (
              <div className={style.profilePage__form__actions}>
                <button
                  className={`${style.button} ${style.button__cancel}`}
                  type="button"
                  onClick={() => handleCancel()}
                >
                  Отмена
                </button>
                <button className={style.button} type="submit">
                  Сохранить
                </button>
              </div>
            )}
          </form>
        </div>

        <Popup isOpen={isPopupOpen} title="Загрузка аватара" onClose={() => setPopupOpen(false)}>
          <label htmlFor="file">
            Выберите файл:
            <input type="file" id="file" onChange={handleFileChange} />
          </label>
        </Popup>
      </ErrorBoundary>
    </section>
  );
}

export default memo(ProfilePage);
