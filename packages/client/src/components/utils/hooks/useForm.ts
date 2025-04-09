import React, { useCallback } from 'react';

export interface IValues {
  [key: string]: string,
}

export default function useForm(inputValues: IValues) {
  const [values, setValues] = React.useState(inputValues);
  const [errors, setErrors] = React.useState(inputValues);
  const [isFormValid, setFormValid] = React.useState(false);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;

    setValues((oldValues) => ({ ...oldValues, [name]: value }));

    setErrors((oldErrors) => {
      const newValues = { ...oldErrors, [name]: validationMessage };
      const valid = Object.values((newValues)).every((item) => !item);
      setFormValid(valid);

      return newValues;
    });
  }, []);

  const handleBlur = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, validationMessage } = event.target;

    // setErrors((oldErrors) => ({ ...oldErrors, [name]: validationMessage }));
    setErrors((oldErrors) => {
      const newValues = { ...oldErrors, [name]: validationMessage };
      const valid = Object.values((newValues)).every((item) => !item);
      setFormValid(valid);

      return newValues;
    });
  }, []);

  return { values, errors, isFormValid, handleChange, handleBlur, setValues };
}
