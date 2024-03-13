import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createBook, fetchAllBooks, getOneBook } from './operations';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  selectors: {
    selectorsBooks: state => state.books,
  },
  extraReducers: builder =>
    builder
      .addCase(createBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(fetchAllBooks.fulfilled, getOneBook.fulfilled),
        (state, action) => {
          state.books = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllBooks.rejected,
          createBook.rejected,
          getOneBook.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(fetchAllBooks.pending, createBook.pending, getOneBook.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      ),
});

export const booksReducer = booksSlice.reducer;
export const { selectorsBooks } = booksSlice.selectors;
