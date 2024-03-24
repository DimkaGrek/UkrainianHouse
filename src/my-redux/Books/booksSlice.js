import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createBook,
  deleteOneBook,
  fetchAllBooks,
  getOneBook,
  updateBook,
} from './operations';

const initialState = {
  books: [],
  book: {},
  totalBooks: 0,
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

      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.totalBooks = action.payload.totalBooks;
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(getOneBook.fulfilled, (state, action) => {
        state.book = action.payload;
        state.isLoading = false;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.books = state.books.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        state.isLoading = false;
      })
      .addCase(deleteOneBook.fulfilled, (state, action) => {
        state.books = state.books.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchAllBooks.rejected,
          createBook.rejected,
          getOneBook.rejected,
          updateBook.rejected,
          deleteOneBook.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllBooks.pending,
          createBook.pending,
          getOneBook.pending,
          updateBook.pending,
          deleteOneBook.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      ),
});

export const booksReducer = booksSlice.reducer;
export const { selectorsBooks } = booksSlice.selectors;
