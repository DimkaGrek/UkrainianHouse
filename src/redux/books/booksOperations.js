import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../services/api';

export const fetchAllBooks = createAsyncThunk(
  'books/getAll',
  async (config, thunkAPI) => {
    try {
      const { params, isAdmin = false } = config;
      const { data } = await api.get(`${isAdmin ? '/admin' : ''}/books`, {
        params,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const { data } = await api.post('/admin/books', book, {
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

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ id, ...bookChanges }, thunkAPI) => {
    try {
      const { data } = await api.put(`/admin/books/${id}`, bookChanges);

      return { data, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCoverBook = createAsyncThunk(
  'books/updateCoverBook',
  async ({ bookId, cover }, thunkAPI) => {
    try {
      const { data } = await api.put(`/admin/books/${bookId}/cover`, cover, {
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

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/admin/books/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
