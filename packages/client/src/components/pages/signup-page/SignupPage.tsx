import { useCallback, FormEvent, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useWithPasswordForm from '../../utils/hooks/form/useWithPasswordForm';
import { signupFormText, signupInputs, getFormData } from '../../utils/form-helper';
import { useAppDispatch } from '../../../store/hooks';
import { fetchSignUp } from '../../../store/slices/userSlice';
import { IReqData } from '../../../utils/Api/AuthApi';

function SignupPage() {
  const formType = 'signup';
  const ids = signupInputs.map(({ id }) => id);
  const {
    formData, isFormValid, handleChange, handleBlur,
  } = useWithPasswordForm(getFormData(ids), formType);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.LOGIN);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const reqData: IReqData = {};

    for (const [key, { value }] of Object.entries(formData)) {
      reqData[key] = value;
    }

    try {
      const data = await dispatch(fetchSignUp(reqData));
      if (data) navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error('Login error:', error);
    }
  }, [formData]);

  const { formTitle, submitText, linkText } = signupFormText;
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
