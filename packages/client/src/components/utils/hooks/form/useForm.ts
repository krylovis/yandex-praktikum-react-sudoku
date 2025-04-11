import React, { useCallback } from 'react';
import { IValues, IInputsRules, getErrorText } from '../../form-helper';

export default function useForm(inputValues: IValues, type: keyof IInputsRules) {
  const [formData, setValues] = React.useState(inputValues);
  const [isFormValid, setFormValid] = React.useState(false);

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

  return { formData, isFormValid, handleChange, handleBlur };
}
