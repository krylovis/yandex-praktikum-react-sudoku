import { fetchWithCookies } from './BaseApi';
import apiConfig from '../config/ApiConfig';
import { IProfile } from '../models/Profile';

const endPoint: string = '/auth';

export default async function getUserInfo(): Promise<IProfile> {
  return fetchWithCookies<IProfile>(`${apiConfig.baseUrl}${endPoint}/user`);
}
