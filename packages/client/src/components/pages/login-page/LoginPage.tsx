import { FormEvent, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentContainer from '../../content-container/ContentContainer';
import FormField from '../../form-field/FormField';
import MainForm from '../../main-form/MainForm';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/useForm';

interface IProps {
  id: string,
  placeholder: string,
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
  },
  {
    id: 'password',
    placeholder: 'Введите пароль',
    type: 'password',
  },
];

function LoginPage() {
  const { values, handleChange } = useForm({ email: '', password: '' });
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

export default memo(LoginPage);
