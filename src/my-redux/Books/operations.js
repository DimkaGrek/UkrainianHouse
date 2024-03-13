import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchAllBooks = createAsyncThunk(
  'books/All',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/books');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBook = createAsyncThunk(
  'book/One',
  async (book, thunkAPI) => {
    try {
      const { data } = await api.post('/books', book);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneBook = createAsyncThunk(
  'books/One',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`books/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
