import { FormEvent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './MainForm.module.scss';
import CustomButton from '../custom-button/CustomButton';
import ROUTES from '../../constants/constants';

interface IProps {
  formTitle: string,
  children: ReactElement,
  submitText: string,
  linkText: string,
}

export default function MainForm({ formTitle, children, submitText, linkText }: IProps) {
  const navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('handleSubmit');
  }

  function handleNavigate() {
    navigate(ROUTES.SIGN_UP);
  }

  return (
    <section className={style.mainForm}>
      <h1 className={style.mainForm__title}>{formTitle}</h1>

      <form className={style.mainForm__form} action="" onSubmit={onSubmit}>
        {children}

        <div className={style.mainForm__btnContainer}>
          <CustomButton
            type="submit"
            color="primary"
            text={submitText}
          />

          <CustomButton
            type="button"
            color="transparent"
            text={linkText}
            title="Перейти на страницу регистрации"
            onClick={() => handleNavigate()}
          />
        </div>
      </form>
    </section>
  );
}
