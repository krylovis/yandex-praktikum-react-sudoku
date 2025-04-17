import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from '../../models/Profile';
import { UserState } from '../types';
import authApi, { IReqData } from '../../utils/Api/AuthApi';

const initialState: UserState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk('user/fetchUserData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await authApi.getUser();
      dispatch(setUser(response));
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  }
);

// Создание слайса пользователя с редьюсерами
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Синхронные действия для управления состоянием
    setUser(state, action: PayloadAction<IProfile>) {
      state.user = action.payload;
      state.isAuth = true;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUser(state) {
      state.user = null;
      state.isAuth = false;
    },
    updateUser(state, action: PayloadAction<Partial<IProfile>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
  // Обработка асинхронных действий
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
  selectors: {
    selectUser: (state) => state.user,
    selectAuth: (state) => state.isAuth,
    selectError: (state) => state.error,
    selectLoading: (state) => state.loading,
  },
});


export const { setUser, setLoading, setError, logoutUser, updateUser } = userSlice.actions;
export const { selectUser, selectAuth, selectError, selectLoading } = userSlice.selectors;

export default userSlice.reducer;
