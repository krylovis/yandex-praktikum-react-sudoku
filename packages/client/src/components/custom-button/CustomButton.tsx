import { FormEvent, memo } from 'react';
import style from './CustomButton.module.scss';

interface IProps {
  type: 'submit' | 'reset' | 'button',
  color: 'primary' | 'secondary' | 'succes' | 'transparent',
  text?: string,
  title?: string,
  onClick: (e: FormEvent) => void,
}

function CustomButton({ text = '', title = '', type, color, onClick }: IProps) {
  const className = [style.customButton];
  className.push(style[`customButton_${color}`]);

  return (
    <button
      className={className.join(' ')}
      type={type}
      title={title}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default memo(CustomButton);
