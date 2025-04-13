import { IProfile } from '../models/Profile';

export interface UserState {
  user: IProfile | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
