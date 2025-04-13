import { useCallback, FormEvent, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/form/useForm';
import { loginFormText, loginInputs, getFormData } from '../../utils/form-helper';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setUser } from '../../../store/slices/userSlice';

function LoginPage() {
  const formType = 'login';
  const ids = loginInputs.map(({ id }) => id);
  const { formData, isFormValid, handleChange, handleBlur } = useForm(getFormData(ids), formType);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.SIGN_UP);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('useLoginForm', formData);
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
  }, [formData, dispatch, navigate]);

  const { formTitle, submitText, linkText } = loginFormText;
  return (
    <ContentContainer>
      <MainForm
        type={formType}
        formTitle={formTitle}
        submitText={submitText}
        linkText={linkText}
        isFormValid={isFormValid}
        onSubmit={handleSubmit}
        onNavigate={handleNavigate}
      >

        {loginInputs.map(({ id, type, placeholder, text }) => (
          <FormField
            key={id}
            id={id}
            placeholder={placeholder}
            type={type}
            text={text}
            errorMessage={formData[id].errorText}
            value={formData[id].value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </MainForm>
    </ContentContainer>
  );
}

export default memo(LoginPage);
