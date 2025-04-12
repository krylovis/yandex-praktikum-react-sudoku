import React, { memo } from 'react';
import style from './FormField.module.scss';
import CustomInput from '../custom-input/CustomInput';

interface IProps {
  id: string;
  placeholder: string;
  value: string;
  text: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'number';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormField({ id, placeholder, value, type, text, onChange }: IProps) {
  return (
    <label className={style.formField} htmlFor={id}>
      <span className={style.formField__text}>{text}</span>

      <CustomInput
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />

      <span className={style.formField__error} />
    </label>
  );
}

export default memo(FormField);
