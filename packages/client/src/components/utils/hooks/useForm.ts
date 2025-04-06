import React, { useCallback } from 'react';

export interface IValues {
  [key: string]: string,
}

export default function useForm(inputValues: IValues) {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  }, [values]);

  return { values, handleChange, setValues };
}
