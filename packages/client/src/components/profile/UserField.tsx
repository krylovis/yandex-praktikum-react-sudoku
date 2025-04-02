import React, { useState } from 'react';
import './UserField.scss';

interface UserFieldProps {
  label: string
  value: string
  isEditing: boolean
  onChange: (value: string) => void
}

function UserField({
  label,
  value,
  isEditing,
  onChange,
}: UserFieldProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = () => {
    onChange(inputValue);
  };

  return (
    <div className="field">
      <p className="field__label">{label}</p>
      {isEditing ? (
        <input
          className="field__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
        />
      ) : (
        <p className="field__value">{value}</p>
      )}
    </div>
  );
}

export default UserField;
