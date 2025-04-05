import { useEffect, useState } from 'react';
import './InputField.scss';
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
    <div className="field">
      <label htmlFor={name} className="field__label">{label}</label>
      {isEditing ? (
        <Input
          value={inputValue}
          type="text"
          name={name}
          onChange={setInputValue}
          onBlur={handleBlur}
        />
      ) : (
        <p className="field__value">{value}</p>
      )}
    </div>
  );
}

export default InputField;
