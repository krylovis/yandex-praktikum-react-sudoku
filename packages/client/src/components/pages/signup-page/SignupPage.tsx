import { FormEvent, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/useForm';

// Регистрация с формой, имена полей: first_name, second_name, login, email, password, phone.
interface IProps {
  id: string,
  placeholder: string,
  type: 'number' | 'email' | 'text' | 'password' | 'tel',
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
  },
  {
    id: 'second_name',
    placeholder: 'Введите фамилию',
    type: 'text',
  },
  {
    id: 'email',
    placeholder: 'Введите почту',
    type: 'email',
  },
  {
    id: 'phone',
    placeholder: 'Введите телефон',
    type: 'tel',
  },
  {
    id: 'login',
    placeholder: 'Придумайте логин',
    type: 'text',
  },
  {
    id: 'password',
    placeholder: 'Введите пароль',
    type: 'password',
  },
  {
    id: 'password_confirmation',
    placeholder: 'Повторите пароль',
    type: 'password',
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
        onSubmit={handleSubmit}
        onNavigate={handleNavigate}
      >

        {loginInputs.map(({ id, type, placeholder }) => (
          <FormField
            key={id}
            id={id}
            type={type}
            placeholder={placeholder}
            value={values[id]}
            onChange={handleChange}
          />
        ))}
      </MainForm>
    </ContentContainer>
  );
}

export default memo(SignupPage);
