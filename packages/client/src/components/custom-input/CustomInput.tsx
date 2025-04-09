import React, { memo } from 'react';
import style from './CustomInput.module.scss';

interface IProps {
  id: string,
  placeholder: string,
  type: 'text' | 'email' | 'tel' | 'password' | 'number',
  value: string,
  isError: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function CustomInput({ id, placeholder, value, type, isError, onChange }: IProps) {
  const className = [style.customInput];

  if (isError) className.push(style.customInput_typeError);
  if (value && !isError) {
    className.push(style.customInput_typeSucces);
  }

  return (
    <input
      className={className.join(' ')}
      id={id}
      type={type}
      name={id}
      value={value}
      placeholder={placeholder}
      required
      onChange={onChange}
    />
  );
}

export default memo(CustomInput);
