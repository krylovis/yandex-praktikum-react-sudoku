import React, { useCallback } from 'react';
import { IValues, getErrorText } from '../../form-helper';

export default function useSignupForm(inputValues: IValues, type = 'signup') {
  const [formData, setValues] = React.useState(inputValues);
  const [isFormValid, setFormValid] = React.useState(false);

  const getFormValid = (items: IValues) => Object.values((items)).every(({ isValid }) => isValid);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;
    let errorText = getErrorText({ value, name, message: validationMessage, type });

    setValues((oldValues) => {
      if (name === 'password_confirmation') {
        if (oldValues.password.value !== value && !errorText) {
          errorText = 'Пароли не совпадают';
        }
      }

      const newValues = { ...oldValues,
        [name]: {
          ...oldValues[name], value, errorText, isValid: !errorText,
        },
      };

      setFormValid(getFormValid(newValues));
      return newValues;
    });
  }, []);

  const handleBlur = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;
    let errorText = getErrorText({ value, name, message: validationMessage, type });

    setValues((oldValues) => {
      if (name === 'password_confirmation') {
        if (oldValues.password.value !== value && !errorText) {
          errorText = 'Пароли не совпадают';
        }
      }

      const newValues = { ...oldValues,
        [name]: {
          ...oldValues[name], errorText, isValid: !errorText,
        },
      };

      setFormValid(getFormValid(newValues));
      return newValues;
    });
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    console.log('useSignupForm', formData);
  }, [formData]);

  return { formData, isFormValid, handleChange, handleBlur, handleSubmit };
}
