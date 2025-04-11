import React, { useCallback } from 'react';
import { IValues, IInputsRules, getErrorText } from '../../form-helper';

export default function useWithPasswordForm(inputValues: IValues, type: keyof IInputsRules) {
  const [formData, setValues] = React.useState(inputValues);
  const [isFormValid, setFormValid] = React.useState(false);

  const getFormValid = (items: IValues) => Object.values((items)).every(({ isValid }) => isValid);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;
    let errorText = getErrorText({ value, name, message: validationMessage, type });

    setValues((oldValues) => {
      let obj = {};
      if (name === 'password_confirmation') {
        if (oldValues.password.value !== value && !errorText) {
          errorText = 'Пароли не совпадают';
        }
      } else if (name === 'password') {
        if (oldValues.password_confirmation.value !== value) {
          obj = { password_confirmation: {
            ...oldValues.password_confirmation, errorText: 'Пароли не совпадают', isValid: false,
          } };
        } else {
          obj = { password_confirmation: {
            ...oldValues.password_confirmation, errorText: '', isValid: true,
          } };
        }
      }

      const newValues = { ...oldValues,
        ...obj,
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
      const newValues = { ...oldValues };

      if (name === 'password_confirmation') {
        if (oldValues.password.value !== value && !errorText) {
          errorText = 'Пароли не совпадают';
        }
      } else if (name === 'password') {
        const isSame = oldValues.password_confirmation.value === value;

        newValues.password_confirmation = {
          ...oldValues.password_confirmation,
          errorText: isSame ? '' : 'Пароли не совпадают',
          isValid: isSame,
        };
      }

      newValues[name] = {
        ...oldValues[name], errorText, isValid: !errorText,
      };

      setFormValid(getFormValid(newValues));
      return newValues;
    });
  }, []);

  return { formData, isFormValid, handleChange, handleBlur };
}
