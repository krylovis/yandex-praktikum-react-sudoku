import React, { ChangeEvent, useEffect, useState } from 'react';
import InputField from '../../inputField/InputField';
import './ProfilePage.scss';
import { changeAvatar, changePassword, changeProfile } from '../../../services/UserServices';
import getUserInfo from '../../../services/AuthService';
import { IProfile } from '../../../models/Profile';
import apiConfig from '../../../config/ApiConfig';
import Popup from '../../popup/Popup';
import usePrevious from '../../hooks/usePrevios';

type field = { key: string; label: string; value?: string; };

export default function ProfilePage() {
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

  useEffect(() => {
    const fetchUserData = async () => {
      await getUserInfo().then((data: IProfile) => setProfile(data));
    };

    fetchUserData();
  }, []);

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

  const getAvatar = (url: string|undefined) =>
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
    <section className="profile-page">
      <div className="profile-page__card">
        <div className="profile-page__avatar-container">
          <img src={getAvatar(profile?.avatar)} alt="Avatar" className="profile-page__avatar" />
        </div>
        <div className="profile-page__actions">
          <button className="button" type="button" onClick={() => setPopupOpen(true)}>
            Изменить аватар
          </button>
          <button className="button" type="button" onClick={() => setPasswordMode(!isPasswordMode)}>
            {!isPasswordMode ? 'Изменить пароль' : 'Данные пользователя'}
          </button>
          {!(isEditing || isPasswordMode) && (
            <button className="button" type="button" onClick={() => setEditingMode(true)}>
              Редактировать
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit} className="profile-page__form">
          <div className="profile-page__form-fields">
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
            <div className="profile-page__form-actions">
              <button
                className="button button__cancel"
                type="button"
                onClick={() => handleCancel()}
              >
                Отмена
              </button>
              <button className="button" type="submit">
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
    </section>
  );
}
