import React, { memo } from 'react';
import style from './FormField.module.scss';
import CustomInput from '../custom-input/CustomInput';

interface IProps {
  id: string,
  placeholder: string,
  value: string,
  text: string,
  errorMessage: string,
  isReadonly?: boolean,
  type: 'text' | 'email' | 'tel' | 'password' | 'number',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function FormField({
  id, placeholder, value, type, text, errorMessage, isReadonly, onChange, onBlur,
}: IProps) {
  return (
    <label className={style.formField} htmlFor={id}>
      <span className={style.formField__text}>{text}</span>

      <CustomInput
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        isError={!!errorMessage}
        isReadonly={isReadonly}
        onChange={onChange}
        onBlur={onBlur}
      />

      {errorMessage && (
        <span
          className={style.formField__error}
          title={errorMessage}
        >
          {errorMessage}
        </span>
      )}
    </label>
  );
}

export default memo(FormField);
