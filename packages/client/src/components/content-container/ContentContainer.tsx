import { ReactElement, memo } from 'react';
import style from './ContentContainer.module.scss';

interface IProps {
  children: ReactElement,
}

function ContentContainer({ children }: IProps) {
  return (
    <div className={style.contentContainer}>
      {children}
    </div>
  );
}

export default memo(ContentContainer);
