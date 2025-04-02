import React, { useEffect, useState } from 'react';
import './userPage.scss';
import UserField from './UserField';

type field = { key: string; value: string; label: string };

function UserPage() {
  // const [user, setUser] = useState<IUser | null>(null);
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const [user, setUser] = useState({
    avatar: 'https://via.placeholder.com/150',
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'pochta@yandex.ru',
    phone: '+7 (909) 967 30 30',
    nickname: 'Ivanushka',
    password: '********',
  });
  const [password, setPassword] = useState({
    oldPassword: 'Nikita12',
    newPassword: 'Nikita123',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordMode, setIsPassword] = useState(false);
  const handleFieldChange = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const cancel = () => {
    // setUser(user);
  };

  const save = () => {
    // put запрос
  };

  const back = () => {
    // back
  };

  useEffect(() => {
    // const authenticateAndFetchUser = async () => {
    //   try {
    //     const authResponse = await userService.login(); // Авторизация
    //     if (authResponse.success) {
    //       setIsAuthenticated(true);
    //       const userData = await userService.getUserInfo(); // Получение данных пользователя
    //       setUser(userData);
    //     }
    //   } catch (error) {
    //     console.error("Ошибка авторизации или загрузки данных:", error);
    //   }
    // };
    //
    // authenticateAndFetchUser();
    // const fetchUserData = async () => {
    //   const data = await userService.getUserInfo();
    //   setUser(data);
    // };
    //
    // fetchUserData();
  }, []);

  const fieldsUserInfo: field[] = [
    { key: 'firstName', label: 'Имя', value: user.firstName },
    { key: 'lastName', label: 'Фамилия', value: user.lastName },
    { key: 'email', label: 'Почта', value: user.email },
    { key: 'phone', label: 'Телефон', value: user.phone },
    { key: 'nickname', label: 'Никнейм', value: user.nickname },
    { key: 'password', label: 'Пароль', value: user.password },
  ];
  const fieldsUserPassword: field[] = [
    { key: 'oldPassword', label: 'Старый пароль', value: password.oldPassword },
    { key: 'newPassword', label: 'Новый пароль', value: password.newPassword },
  ];

  return (
    <div className="user">
      <div className="user__card">
        <button type="button" className="user__back" onClick={() => back()}>
          ← Назад
        </button>
        <div className="user__avatar-container">
          <img src={user.avatar} alt="Avatar" className="user__avatar" />
        </div>
        <div className="user__edit">
          <button type="button" onClick={() => setIsPassword(!isPasswordMode)}>
            Изменить пароль
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(!isEditing);
                cancel();
              }}
            >
              Отмена
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (isEditing) {
                save();
              } else {
                setIsEditing(!isEditing);
              }
            }}
          >
            {isEditing ? 'Сохранить' : 'Редактировать'}
          </button>
        </div>
        <div className="user__fields">
          {isPasswordMode
            ? fieldsUserPassword.map((fieldPassword) => (
              <UserField
                label={fieldPassword.label}
                value={fieldPassword.value}
                key={fieldPassword.key}
                isEditing={isEditing}
                onChange={(value) => handleFieldChange(fieldPassword.key, value)}
              />
            ))
            : fieldsUserInfo.map((fieldUser) => (
              <UserField
                label={fieldUser.label}
                value={fieldUser.value}
                key={fieldUser.key}
                isEditing={isEditing}
                onChange={(value) => handleFieldChange(fieldUser.key, value)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
