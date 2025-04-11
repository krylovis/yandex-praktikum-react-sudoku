import React, { useCallback } from 'react';
import { IValues, getErrorText } from '../../form-helper';

export default function useLoginForm(inputValues: IValues, type = 'login') {
  const [formData, setValues] = React.useState(inputValues);
  const [isFormValid, setFormValid] = React.useState(false);
  // const type = 'login';

  const getFormValid = (items: IValues) => Object.values((items)).every(({ isValid }) => isValid);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;
    const errorText = getErrorText({ value, name, message: validationMessage, type });

    setValues((oldValues) => {
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
    const errorText = getErrorText({ value, name, message: validationMessage, type });

    setValues((oldValues) => {
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
    console.log('useLoginForm', formData);
  }, [formData]);

  return { formData, isFormValid, handleChange, handleBlur, handleSubmit };
}
