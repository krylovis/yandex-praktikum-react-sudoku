import React, { useCallback } from 'react';

export interface IValues {
  [key: string]: string,
}

export default function useForm(inputValues: IValues) {
  const [values, setValues] = React.useState(inputValues);
  const [errors, setErrors] = React.useState(inputValues);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;

    setValues((oldValues) => ({ ...oldValues, [name]: value }));
    setErrors((oldErrors) => ({ ...oldErrors, [name]: validationMessage }));
  }, []);

  const handleBlur = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, validationMessage } = event.target;

    setErrors((oldErrors) => ({ ...oldErrors, [name]: validationMessage }));
  }, []);

  return { values, errors, handleChange, handleBlur, setValues };
}
