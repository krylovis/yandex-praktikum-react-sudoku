import { useCallback, FormEvent, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer, FormField, MainForm,
} from '../../index';
import ROUTES from '../../../constants/constants';
import useForm from '../../utils/hooks/form/useForm';
import { loginFormText, loginInputs, getFormData } from '../../utils/form-helper';
import { useAppDispatch } from '../../../store/hooks';
import { fetchAuthorize } from '../../../store/slices/userSlice';
import { IReqData } from '../../../utils/Api/AuthApi';

function LoginPage() {
  const formType = 'login';
  const ids = loginInputs.map(({ id }) => id);
  const { formData, isFormValid, handleChange, handleBlur } = useForm(getFormData(ids), formType);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.SIGN_UP);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const reqData: IReqData = {};

    for (const [key, { value }] of Object.entries(formData)) {
      reqData[key] = value;
    }

    try {
      const data = await dispatch(fetchAuthorize(reqData)).unwrap();;
      if (data) navigate(ROUTES.MAIN);
    } catch (error) {
      console.error('LoginPage error:', error);
    }
  }, [formData, dispatch]);


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
