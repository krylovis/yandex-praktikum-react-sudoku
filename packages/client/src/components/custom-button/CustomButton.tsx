import { FormEvent, memo } from 'react';
import classNames from 'classnames';
import style from './CustomButton.module.scss';

interface IProps {
  type: 'submit' | 'reset' | 'button',
  color: 'primary' | 'secondary' | 'success' | 'transparent',
  text?: string,
  className?: string[],
  title?: string,
  onClick: (e: FormEvent) => void,
}

function CustomButton({ text = '', title = '', type, color, onClick, className = [] }: IProps) {
  const classList = classNames(
    ...className,
    style.customButton,
    style[`customButton_${color}`]
  );

  return (
    <button
      className={classList}
      type={type}
      title={title}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default memo(CustomButton);
