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

export const createOneNews = createAsyncThunk(
  'news/createNews',
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

export const updateOneNews = createAsyncThunk(
  'news/updateNews',
  async (news, thunkAPI) => {
    try {
      const { id, ...newsChanges } = news;

      const { data } = await api.put(`/admin/news/${id}`, newsChanges);
      // eslint-disable-next-line no-unused-vars
      const { photoUrls, ...updatedPhoto } = data;

      return updatedPhoto;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNewsPhoto = createAsyncThunk(
  'news/updateNewsPhoto',
  async (data, thunkAPI) => {
    const { newsId, ...photoChanges } = data;
    try {
      const { data } = await api.put(
        `/admin/news/${newsId}/update`,
        photoChanges,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

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
      await api.delete(`/admin/news/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNewsPhoto = createAsyncThunk(
  'news/deleteNewsPhoto',
  async (ids, thunkAPI) => {
    try {
      await api.delete(`/api/admin/news/photo/${ids.photoId}`);

      return ids;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
