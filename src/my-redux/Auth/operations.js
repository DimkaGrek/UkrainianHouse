import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, clearToken, setToken } from '../../services/api';
import { fetchAllMessages } from '../Messages/operations';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { token },
      } = await api.post('/login', credentials);
      setToken(token);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('/admin/logout');
      clearToken();
      thunkAPI.dispatch(fetchAllMessages());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();

    if (!token) {
      return thunkAPI.rejectWithValue('There is no token');
    }

    setToken(token);
    thunkAPI.dispatch(fetchAllMessages());
    try {
      const { data } = await api.get('/admin/checkToken');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
