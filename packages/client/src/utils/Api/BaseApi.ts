export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IParams {
  baseUrl: string,
  headers: Record<string, string>,
  endpoint?: string,
}

export interface IReqData {
  [key: string]: string | number | FormData,
}

export interface IRequest {
  path: string,
  options?: IReqData,
}

export class BaseApi {
  _baseUrl: string;

  _endpoint: string;

  _url: string;

  _headers: Record<string, string>;

  _baseOptions: {
    [key: string]: string | number | Record<string, string>,
  };

  constructor({ baseUrl, headers, endpoint = '' }: IParams) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._endpoint = endpoint;
    this._url = `${this._baseUrl}${endpoint}`;
    this._baseOptions = {
      headers: this._headers,
      credentials: 'include',
    };
  }

  _getResponse(res: Response) {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  _request({ path, options }: IRequest) {
    return fetch(`${this._url}${path}`, { ...this._baseOptions, ...options })
      .then(this._getResponse);
  }

  public get(path: string) {
    return this._request({ path, options: { method: METHODS.GET } });
  }

  public post(path: string, { data }: IReqData) {
    return this._request({ path, options: { method: METHODS.POST, data } });
  }

  public put(path: string, { data }: IReqData) {
    return this._request({ path, options: { method: METHODS.PUT, data } });
  }

  public delete(path: string, { data }: IReqData) {
    return this._request({ path, options: { method: METHODS.DELETE, data } });
  }
}
