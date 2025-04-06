import { ReactNode } from 'react';
import style from './Popup.module.scss';

interface IProps {
  isOpen: boolean,
  title: string,
  children: ReactNode,
  onClose: () => void
}

export default function Popup({ isOpen, title, children, onClose }: IProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupOverlay__content}>
        <div className={style.popupOverlay__header}>
          <h2>{title}</h2>
          <button className={style.close} onClick={onClose} type="button">
            &times;
          </button>
        </div>
        <div>
          <form>{children}</form>
        </div>
      </div>
    </div>
  );
}
