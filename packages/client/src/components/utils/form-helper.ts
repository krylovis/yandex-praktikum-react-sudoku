export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
export const EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.\\-]+\.[a-z]{2}$/;
export const REQUIRED_REGEXP = /\S/;
export const SPASE_CHARACTERS = /^\S*$/;

export interface IProps {
  id: string,
  placeholder: string,
  type: 'number' | 'email' | 'text' | 'password' | 'tel',
  text: string,
}
export interface IFormText {
  formTitle: string,
  submitText: string,
  linkText: string,
}

export interface IValues {
  [key: string]: { value: string, errorText: string, isValid: boolean},
}

export interface IRules {
  [key: string]: { text: string, regExp?: RegExp, break?: boolean},
}

export interface IData {
  [key: string]: string[],
}

export interface IGetErrorText {
  name: string,
  value: string,
  message: string,
}

export const RULES: IRules = {
  required: {
    text: 'Вы пропустили это поле',
  },
  isEmail: {
    text: 'Пример почты "example@example.com"',
    regExp: EMAIL_REGEXP,
  },
  isPassword: {
    text: 'Слишком простой пароль',
    regExp: PASSWORD_REGEXP,
  },
  isSpaceCharacters: {
    text: 'Не должно быть пробелов',
    regExp: SPASE_CHARACTERS,
    break: true,
  },
};

export const getFormData = (ids: string[]): IValues => {
  const object: IValues = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const id of ids) {
    object[id] = { value: '', errorText: '', isValid: false };
  }

  return object;
};

export const inputsRules: IData = {
  email: ['required', 'isEmail'],
  password: ['required', 'isSpaceCharacters', 'isPassword'],

  first_name: [],
  second_name: [],
  phone: [],
  login: [],
  password_confirmation: [],
};

export const loginFormText: IFormText = {
  formTitle: 'Вход',
  submitText: 'Авторизоваться',
  linkText: 'Нет аккаунта?',
};

export const signupFormText = {
  formTitle: 'Регистрация',
  submitText: 'Зарегистрироваться',
  linkText: 'Войти',
};

export const loginInputs: IProps[] = [
  {
    id: 'email',
    placeholder: 'Введите почту',
    type: 'text',
    text: 'Почта',
  },
  {
    id: 'password',
    placeholder: 'Введите пароль',
    type: 'password',
    text: 'Пароль',
  },
];

export const signupInputs: IProps[] = [
  {
    id: 'first_name',
    placeholder: 'Введите имя',
    type: 'text',
    text: 'Имя',
  },
  {
    id: 'second_name',
    placeholder: 'Введите фамилию',
    type: 'text',
    text: 'Фамилия',
  },
  {
    id: 'email',
    placeholder: 'Введите почту',
    type: 'email',
    text: 'Почта',
  },
  {
    id: 'phone',
    placeholder: 'Введите телефон',
    type: 'tel',
    text: 'Телефон',
  },
  {
    id: 'login',
    placeholder: 'Придумайте логин',
    type: 'text',
    text: 'Логин',
  },
  {
    id: 'password',
    placeholder: 'Введите пароль',
    type: 'password',
    text: 'Пароль',
  },
  {
    id: 'password_confirmation',
    placeholder: 'Повторите пароль',
    type: 'password',
    text: 'Пароль (ещё раз)',
  },
];
