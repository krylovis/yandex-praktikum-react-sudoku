import React, { memo } from 'react';
import style from './CustomInput.module.scss';

interface IProps {
  id: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ id, placeholder, value, type, onChange }: IProps) {
  const className = [style.customInput];

  return (
    <input
      className={className.join(' ')}
      id={id}
      type={type}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default memo(CustomInput);
