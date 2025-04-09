import { FormEvent, memo } from 'react';
import style from './CustomButton.module.scss';

interface IProps {
  type: 'submit' | 'reset' | 'button',
  color: 'primary' | 'secondary' | 'succes' | 'transparent',
  text?: string,
  title?: string,
  isDisabled?: boolean,
  onClick: (e: FormEvent) => void,
}

function CustomButton({ text = '', title = '', type, color, isDisabled = false, onClick }: IProps) {
  const className = [style.customButton];

  className.push(style[`customButton_${color}`]);
  if (isDisabled) className.push(style.customButton_disabled);

  return (
    <button
      className={className.join(' ')}
      type={type}
      title={title}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default memo(CustomButton);
