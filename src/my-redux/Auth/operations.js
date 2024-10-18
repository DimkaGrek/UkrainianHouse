import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../../services/api';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('/login', credentials);
      setToken(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await api.post('/logout');
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const {
      auth: { token },
    } = thunkApi.getState();

    if (!token) {
      return thunkApi.rejectWithValue('There is no token');
    }

    return token;
  }
);
