export interface IProfile {
  id?: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  avatar: string
  email: string
  phone: string
}

export interface IPassword {
  newPassword: string;
  oldPassword: string;
}
