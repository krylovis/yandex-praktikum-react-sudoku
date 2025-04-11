import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useSignupForm from '../../utils/hooks/form/useSignupForm';
import { signupFormText, signupInputs, getFormData } from '../../utils/form-helper';

function SignupPage() {
  const ids = signupInputs.map(({ id }) => id);
  const {
    formData, isFormValid, handleChange, handleBlur, handleSubmit,
  } = useSignupForm(getFormData(ids));
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.LOGIN);
  }, []);

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
