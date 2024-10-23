import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../services/api';

export const fetchAllNews = createAsyncThunk(
  'news/getAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await api.get('/news', { params });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchHomeNews = createAsyncThunk(
  'news/getHomeNews',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/news', {
        params: { size: 3, status: 'PUBLISHED' },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAnnounceNews = createAsyncThunk(
  'news/getAnnounceNews',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/news', {
        params: { status: 'ANNOUNCE' },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNews = createAsyncThunk(
  'news/addItem',
  async (news, thunkAPI) => {
    try {
      const { data } = await api.post('/news', news, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneNews = createAsyncThunk(
  'news/getOneItem',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`news/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOneNews = createAsyncThunk(
  'news/deleteItem',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`news/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNews = createAsyncThunk(
  'news/updateNews',
  async (news, thunkAPI) => {
    try {
      const { id } = news;
      delete news.id;
      const { data } = await api.put(`news/${id}`, news);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
