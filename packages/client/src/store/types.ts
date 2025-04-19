import { IProfile } from '../models/Profile';

export interface UserState {
  user: IProfile | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}
