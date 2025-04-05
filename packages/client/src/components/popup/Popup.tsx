import './Popup.scss';
import { ReactNode } from 'react';

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
    <div className="popup-overlay">
      <div className="popup-overlay__content">
        <div className="popup-overlay__header">
          <h2>{title}</h2>
          <button className="close" onClick={onClose} type="button">
            &times;
          </button>
        </div>
        <div className="popup-overlay__body">
          <form>{children}</form>
        </div>
      </div>
    </div>
  );
}
