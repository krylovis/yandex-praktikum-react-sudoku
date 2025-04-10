import { fetchWithCookies } from './BaseApi';
import apiConfig from '../config/ApiConfig';
import { IProfile } from '../models/Profile';

const endPoint: string = '/auth';

export default async function getUserInfo(): Promise<IProfile> {
  return fetchWithCookies<IProfile>(`${apiConfig.baseUrl}${endPoint}/user`);
}

// Авторизация пользователя
export const signIn = async (login: string, password: string) => fetchWithCookies<IProfile>(`${apiConfig.baseUrl}/auth/signin`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ login, password }),
});
