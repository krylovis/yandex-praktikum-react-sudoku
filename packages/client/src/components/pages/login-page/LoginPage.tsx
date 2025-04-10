import { FormEvent, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/useForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setUser } from '../../../store/slices/userSlice';

interface IProps {
  id: string,
  placeholder: string,
  text: string,
  type: 'number' | 'email' | 'text' | 'password' | 'tel',
}

const formText = {
  formTitle: 'Вход',
  submitText: 'Авторизоваться',
  linkText: 'Нет аккаунта?',
};

const loginInputs: IProps[] = [
  {
    id: 'email',
    placeholder: 'Введите почту',
    type: 'text',
    text: 'Почта',
  },
  {
    id: 'password',
    placeholder: 'Введите пароль',
    type: 'password',
    text: 'Пароль',
  },
];

function LoginPage() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { values, handleChange } = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.SIGN_UP);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit', values);
    try {
      // TODO: Здесь должна быть реальная логика авторизации, например:
      // const response = await authService.signIn(values.login, values.password);

      // Моковые данные для примера:
      const mockUser = {
        first_name: 'Ivan',
        second_name: 'Ivanov',
        display_name: 'Iv',
        email: 'ivan_ivanov@mail.ru',
        phone: '+1234567890',
        avatar: '',
        login: 'IvanIvanov',
      };

      dispatch(setUser(mockUser));
      console.log('mockUser from store', user);
      navigate(ROUTES.MAIN);
    } catch (error) {
      console.error('Login error:', error);
      // Можно добавить обработку ошибок
    }
  }, [values, dispatch, navigate]);

  return (
    <ContentContainer>
      <MainForm
        formTitle={formText.formTitle}
        submitText={formText.submitText}
        linkText={formText.linkText}
        type="login"
        onSubmit={handleSubmit}
        onNavigate={handleNavigate}
      >

        {loginInputs.map(({ id, type, placeholder, text }) => (
          <FormField
            key={id}
            id={id}
            type={type}
            placeholder={placeholder}
            text={text}
            value={values[id]}
            onChange={handleChange}
          />
        ))}
      </MainForm>
    </ContentContainer>
  );
}

export default memo(LoginPage);
