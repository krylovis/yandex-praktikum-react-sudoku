import React, { useCallback } from 'react';
import { IValues, RULES, inputsRules, IGetErrorText } from '../form-helper';

export default function useForm(inputValues: IValues, type: 'login' | 'signup') {
  const [formData, setValues] = React.useState(inputValues);
  const [isFormValid, setFormValid] = React.useState(false);

  function getErrorText({ name, value, message }: IGetErrorText): string {
    let errorText = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const rule of inputsRules[type][name]) {
      if (rule === 'required' && value.length === 0) {
        errorText = RULES[rule].text;
        break;
      } else if (RULES[rule].regExp && !RULES[rule]?.regExp?.test(value)) {
        errorText = RULES[rule].text;
        if (RULES[rule].break) break;
      } else if (message) {
        errorText = message;
      } else {
        errorText = '';
      }
    }

    return errorText;
  }

  const getFormValid = (items: IValues) => Object.values((items)).every(({ isValid }) => isValid);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;
    let errorText = getErrorText({ value, name, message: validationMessage });

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
    let errorText = getErrorText({ value, name, message: validationMessage });

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

  return { formData, isFormValid, handleChange, handleBlur, setValues };
}
