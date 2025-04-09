import { FormEvent, ReactElement, memo } from 'react';
import style from './MainForm.module.scss';
import { CustomButton } from '../index';

interface IProps {
  formTitle: string,
  children: ReactElement[],
  submitText: string,
  linkText: string,
  type: string,
  onSubmit: (e: FormEvent) => void,
  onNavigate: () => void,
}

function MainForm({
  formTitle, children, submitText, linkText, type, onSubmit, onNavigate,
}: IProps) {
  const btnContainerClass = [style.mainForm__btnContainer];
  btnContainerClass.push(style[`mainForm__btnContainer_${type}`]);

  return (
    <section className={style.mainForm}>
      <h1 className={style.mainForm__title}>{formTitle}</h1>

      <form className={style.mainForm__form} action="action">
        {children}

        <div className={btnContainerClass.join(' ')}>
          <CustomButton
            type="submit"
            color="primary"
            text={submitText}
            onClick={onSubmit}
          />

          <CustomButton
            type="button"
            color="transparent"
            text={linkText}
            title="Перейти на страницу регистрации"
            onClick={onNavigate}
          />
        </div>
      </form>
    </section>
  );
}

export default memo(MainForm);
