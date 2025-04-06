import { useEffect, useState } from 'react';
import style from './InputField.module.scss';
import Input from '../input/Input';

interface InputFieldProps {
  label: string
  value: string|undefined
  name: string
  isEditing: boolean
  onChange: (value?: string) => void
}

function InputField({
  label,
  value,
  name,
  isEditing,
  onChange,
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleBlur = () => {
    onChange(inputValue);
  };

  return (
    <label className={style.wrapper} htmlFor={name}>
      <span className={style.wrapper__label}>{label}</span>
      <div className={style.wrapper__field}>
        <Input
          type="text"
          name={name}
          value={inputValue}
          disabled={!isEditing}
          onChange={setInputValue}
          onBlur={handleBlur}
          className={style.wrapper__input}
        />
      </div>
    </label>
  );
}

export default InputField;
