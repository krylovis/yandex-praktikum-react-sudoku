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
  const { values, errors, handleChange, handleBlur } = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.SIGN_UP);
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
            errorMessage={errors[id]}
            value={values[id]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </MainForm>
    </ContentContainer>
  );
}

export default memo(LoginPage);
