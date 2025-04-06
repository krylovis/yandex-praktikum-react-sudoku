import React, { memo } from 'react';
import style from './FormField.module.scss';
import { CustomInput } from '../index';

interface IProps {
  id: string,
  placeholder: string,
  value: string,
  type: 'text' | 'email' | 'tel' | 'password' | 'number',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function FormField({ id, placeholder, value, type, onChange }: IProps) {
  return (
    <label className={style.formField} htmlFor={id}>
      <CustomInput
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />

      <span className={style.formField} />
    </label>
  );
}

export default memo(FormField);
