// import ErrorBoundary from '../../utils';
import { ReactElement } from 'react';
import style from './ContentContainer.module.scss';

interface IProps {
  children: ReactElement,
}

export default function ContentContainer({ children }: IProps) {
  return (
    <div className={style.contentContainer}>
      {children}
    </div>
  );
}
