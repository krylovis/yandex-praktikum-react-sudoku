import { Link } from 'react-router-dom';
import ROUTES from '../../constants/constants';
import style from './ErrorComponent.module.scss';

export type TErrorProps = {
    code: string;
    subtitle: string;
}

export default function ErrorComponent({ code, subtitle }: TErrorProps) {
  return (
    <div className={style.error}>
      <h1 className={style.error__title}>{code}</h1>
      <p className={style.error__subtitle}>{subtitle}</p>
      <Link className={style.error__link} to={ROUTES.MAIN}>На главную</Link>
    </div>
  );
}
