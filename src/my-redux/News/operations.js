import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchAllNews = createAsyncThunk(
  'news/All',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/news');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNews = createAsyncThunk(
  'news/One',
  async (news, thunkAPI) => {
    try {
      const { data } = await api.post('/news', news);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneNews = createAsyncThunk('news/One', async (id, thunkAPI) => {
  try {
    const { data } = await api.get(`news/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchCurrentAnnounce = createAsyncThunk(
//   'announce',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await api.get('/announce');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
