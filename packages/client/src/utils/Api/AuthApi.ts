import { BASE_URL } from '../../config/ApiConfig';
import { BaseApi } from './BaseApi';

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

class AuthApi extends BaseApi {
  constructor() {
    super({
      headers: HEADERS,
      baseUrl: BASE_URL,
      endpoint: '/auth',
    });
  }

  public signUp(data: string) {
    return this.post('/signup', { body: JSON.stringify(data) });
  }

  public signIn(data: string) {
    return this.post('/signin', { body: JSON.stringify(data) });
  }

  public getUser() {
    return this.get('/user');
  }

  public logout() {
    return this.post('/logout');
  }
}

const authApi = new AuthApi();
export default authApi;
