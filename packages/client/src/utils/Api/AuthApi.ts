import { BASE_URL } from '../../config/ApiConfig';
import { BaseApi, IReqData } from './BaseApi';

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

  public signUp({ data }: IReqData) {
    return this.post('/signup', { data });
  }

  public signIn({ data }: IReqData) {
    return this.post('/signin', { data });
  }

  public getUser() {
    return this.get('/user');
  }

  public logout() {
    return this.post('/logout', {});
  }
}

const authApi = new AuthApi();
export default authApi;
