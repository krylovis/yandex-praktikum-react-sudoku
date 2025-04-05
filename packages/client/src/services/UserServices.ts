import apiConfig from '../config/ApiConfig';
import { fetchWithCookies } from './BaseApi';
import { IProfile } from '../models/Profile';

const endPoint: string = '/user';

export const changeProfile = async (data: { [k: string]: unknown }) =>
  fetchWithCookies<IProfile>(`${apiConfig.baseUrl}${endPoint}/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const changeAvatar = async (data: FormData) =>
  fetchWithCookies<IProfile>(`${apiConfig.baseUrl}${endPoint}/profile/avatar`, {
    method: 'PUT',
    body: data,
  });
