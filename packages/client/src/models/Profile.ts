export interface IProfile {
  id?: number
  display_name: string
  email: string
  first_name: string
  login: string
  phone: string
  second_name: string
  avatar: string
}

export interface IPassword {
  newPassword: string
  oldPassword: string
}
