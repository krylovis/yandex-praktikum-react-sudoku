import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from '../../models/Profile';
import { UserState } from '../types';
import getUserInfo from '../../services/AuthService';

// Начальное состояние хранилища пользователя
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Асинхронный запрос для загрузки данных пользователя
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserInfo();
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
      state.isAuthenticated = true;
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
      state.isAuthenticated = false;
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
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { setUser, setLoading, setError, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
