const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
const EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.\\-]+\.[a-z]{2,3}$/;
const SPASE_CHARACTERS = /^\S*$/;
const PHONE_REGEXP = /^((\+7|7|8)+([0-9]){10,15})$/;
const NAME_REGEXP = /^[A-ZА-ЯЁ]{1}[a-zа-яё]+$/;
const LOGIN_REGEXP = /^[0-9a-zA-Z\-_]{3,20}$/;

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

export interface IInputsRules {
  [key: string]: { [key: string]: string[] },
}

export const RULES: IRules = {
  required: {
    text: 'Вы пропустили это поле',
  },
  isEmail: {
    text: 'Пример почты "example@example.ru"',
    regExp: EMAIL_REGEXP,
  },
  isPassword: {
    text: 'Мин. 8 знаков. Мин. 1 заглав. буква, 1 строч., 1 цифра, 1 символ',
    regExp: PASSWORD_REGEXP,
  },
  isSpaceCharacters: {
    text: 'Не должно быть пробелов',
    regExp: SPASE_CHARACTERS,
    break: true,
  },
  isPhone: {
    text: 'Пример телефона (+7|7|8)1234567',
    regExp: PHONE_REGEXP,
  },
  isName: {
    text: 'С большой буквы. Мин. 2 символа',
    regExp: NAME_REGEXP,
  },
  isLogin: {
    text: 'Латиница. Мин. 3 символа',
    regExp: LOGIN_REGEXP,
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

const profileRules = {
  email: ['required', 'isEmail'],
  first_name: ['required', 'isName'],
  second_name: ['required', 'isName'],
  phone: ['required', 'isPhone'],
  login: ['required', 'isLogin'],
};

const passwordRules = {
  password: ['required', 'isSpaceCharacters', 'isPassword'],
  password_confirmation: ['required'],
};

export const inputsRules: IInputsRules = {
  login: {
    email: ['required', 'isEmail'],
    password: ['required'],
  },

  signup: {
    ...profileRules,
    ...passwordRules,
  },

  profile: {
    ...profileRules,
  },

  password: {
    ...passwordRules,
  },
};

export interface IGetErrorText {
  name: string,
  value: string,
  message: string,
  type: keyof IInputsRules,
}

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

export function getErrorText({ name, value, message, type }: IGetErrorText): string {
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
