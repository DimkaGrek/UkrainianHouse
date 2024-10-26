import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const createMessage = createAsyncThunk(
  'messages/createMessage',
  async (message, thunkAPI) => {
    try {
      const { data } = await api.post('/messages', message);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
