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
  'book/addItem',
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
  'book/updateBook',
  async (book, thunkAPI) => {
    try {
      const { id } = book;
      delete book.id;
      const { data } = await api.put(`books/${id}`, book);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'book/deleteItem',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`books/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
