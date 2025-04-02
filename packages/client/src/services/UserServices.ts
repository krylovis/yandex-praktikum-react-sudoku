import apiConfig from '../config/ApiConfig';
import { IUser } from '../models/Profile';

const getUserInfo = async (): Promise<IUser> => {
  const url = `${apiConfig.baseUrl}/user`;
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  return response.json();
};

const login = async (): Promise<IUser> => {
  const url = `${apiConfig.baseUrl}/user`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  return response.json();
};

export default { getUserInfo };
