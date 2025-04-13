import { useCallback, FormEvent, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/form/useForm';
import { loginFormText, loginInputs, getFormData } from '../../utils/form-helper';

function LoginPage() {
  const formType = 'login';
  const ids = loginInputs.map(({ id }) => id);
  const { formData, isFormValid, handleChange, handleBlur } = useForm(getFormData(ids), formType);
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.SIGN_UP);
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log('useLoginForm', formData);
  }, [formData]);

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
