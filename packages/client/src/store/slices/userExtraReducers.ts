import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi, { IReqData } from '../../utils/Api/AuthApi';
import { setUser, logoutUser } from './userSlice';

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

export const fetchAuthorize = createAsyncThunk('user/fetchAuthorize',
  async (data: IReqData, { rejectWithValue, dispatch }) => {
    try {
      const response = await authApi.signIn(data);
      await dispatch(fetchUserData());
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  });

export const fetchSignUp = createAsyncThunk('user/fetchSignUp',
  async (data: IReqData, { rejectWithValue, dispatch }) => {
    try {
      const response = await authApi.signUp(data);
      await dispatch(fetchUserData());
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  });

export const fetchLogout = createAsyncThunk('user/fetchLogout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await authApi.logout();
      dispatch(logoutUser());
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  });
