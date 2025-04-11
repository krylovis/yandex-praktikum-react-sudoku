import { FormEvent, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/useForm';
import { signupFormText, signupInputs, getFormData } from '../../utils/form-helper';

function SignupPage() {
  const ids = signupInputs.map(({ id }) => id);
  const { formData, isFormValid, handleChange, handleBlur } = useForm(getFormData(ids), 'signup');
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.LOGIN);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit', formData);
  }, [formData]);

  const { formTitle, submitText, linkText } = signupFormText;
  return (
    <ContentContainer>
      <MainForm
        type="signup"
        formTitle={formTitle}
        submitText={submitText}
        linkText={linkText}
        isFormValid={isFormValid}
        onSubmit={handleSubmit}
        onNavigate={handleNavigate}
      >

        {signupInputs.map(({ id, type, placeholder, text }) => (
          <FormField
            key={id}
            id={id}
            type={type}
            placeholder={placeholder}
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

export default memo(SignupPage);
