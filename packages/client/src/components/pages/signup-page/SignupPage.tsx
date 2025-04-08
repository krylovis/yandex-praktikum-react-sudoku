import { FormEvent, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/useForm';

interface IProps {
  id: string,
  placeholder: string,
  type: 'number' | 'email' | 'text' | 'password' | 'tel',
  text: string,
}

const formText = {
  formTitle: 'Регистрация',
  submitText: 'Зарегистрироваться',
  linkText: 'Войти',
};

const loginInputs: IProps[] = [
  {
    id: 'first_name',
    placeholder: 'Введите имя',
    type: 'text',
    text: 'Имя',
  },
  {
    id: 'second_name',
    placeholder: 'Введите фамилию',
    type: 'text',
    text: 'Фамилия',
  },
  {
    id: 'email',
    placeholder: 'Введите почту',
    type: 'email',
    text: 'Почта',
  },
  {
    id: 'phone',
    placeholder: 'Введите телефон',
    type: 'tel',
    text: 'Телефон',
  },
  {
    id: 'login',
    placeholder: 'Придумайте логин',
    type: 'text',
    text: 'Логин',
  },
  {
    id: 'password',
    placeholder: 'Введите пароль',
    type: 'password',
    text: 'Пароль',
  },
  {
    id: 'password_confirmation',
    placeholder: 'Повторите пароль',
    type: 'password',
    text: 'Пароль (ещё раз)',
  },
];

function SignupPage() {
  const { values, handleChange } = useForm({
    first_name: '',
    second_name: '',
    email: '',
    phone: '',
    login: '',
    password: '',
    password_confirmation: '',
  });
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.LOGIN);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit', values);
  }, [values]);

  return (
    <ContentContainer>
      <MainForm
        formTitle={formText.formTitle}
        submitText={formText.submitText}
        linkText={formText.linkText}
        type="signup"
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

export default memo(SignupPage);
