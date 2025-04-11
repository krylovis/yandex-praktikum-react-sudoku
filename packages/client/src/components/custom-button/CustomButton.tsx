import { FormEvent, memo } from 'react';
import classNames from 'classnames';
import style from './CustomButton.module.scss';

interface IProps {
  type: 'submit' | 'reset' | 'button';
  color: 'primary' | 'secondary' | 'success' | 'transparent';
  text?: string;
  className?: string[];
  title?: string;
  isDisabled?: boolean,
  onClick: (e: FormEvent) => void;
}

function CustomButton({
  text = '',
  title = '',
  type,
  color,
  isDisabled = false,
  className = [],
  onClick,
}: IProps) {
  const classList = classNames(
    ...className,
    style.customButton,
    style[`customButton_${color}`]
  );
  if (isDisabled) classList.push(style.customButton_disabled);

  return (
    <button className={classList} type={type} title={title} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(CustomButton);
