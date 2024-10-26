import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../services/api';

export const fetchAllNews = createAsyncThunk(
  'news/getAllNews',
  async (config, thunkAPI) => {
    const { params, isAdmin = false } = config;
    try {
      const { data } = await api.get(`${isAdmin ? '/admin' : ''}/news`, {
        params,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
  'news/addNews',
  async (news, thunkAPI) => {
    try {
      const { data } = await api.post('/admin/news', news, {
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
  'news/getOneNews',
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
  'news/deleteNews',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`admin/news/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const archiveOneNews = createAsyncThunk(
  'news/archiveNews',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.put(`admin/news/${id}`, {
        status: 'ARCHIVED',
      });
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
