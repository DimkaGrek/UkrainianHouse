import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createBook,
  deleteBook,
  fetchAllBooks,
  updateBook,
  updateCoverBook,
} from './booksOperations';
import { PAGE_LIMIT } from '../../constants';

const initialState = {
  books: [],
  page: 0,
  totalPages: 0,
  totalBooks: 0,
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setPageBooks: (state, { payload }) => {
      state.page = payload;
    },
    clearBooks: state => {
      state.news = [];
      state.page = 0;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(
        fetchAllBooks.fulfilled,
        (state, { payload: { totalPages, totalBooks, books }, meta }) => {
          if (meta.arg.isAdmin) {
            state.books = books;
          } else {
            state.books.push(...books);
          }
          state.totalPages = totalPages;
          state.totalBooks = totalBooks;

          state.isLoading = false;
        }
      )
      .addCase(createBook.fulfilled, (state, { payload }) => {
        state.books.unshift(payload);
        state.totalBooks += 1;
        state.totalPages = Math.ceil(state.totalBooks / PAGE_LIMIT);
        state.isLoading = false;
      })
      .addCase(updateBook.fulfilled, (state, { payload }) => {
        state.books = state.books.map(item => {
          if (item.id === payload.id) {
            return { ...item, ...payload };
          }
          return item;
        });

        state.isLoading = false;
      })
      .addCase(updateCoverBook.fulfilled, (state, { payload }) => {
        const bookItem = state.books.find(item => item.id === payload.id);
        if (bookItem) {
          bookItem.coverImageUrl = payload.coverImageUrl;
        }

        state.isLoading = false;
      })
      .addCase(deleteBook.fulfilled, (state, { payload }) => {
        state.books = state.books.filter(item => item.id !== payload);
        state.totalBooks -= 1;
        state.totalPages = Math.ceil(state.totalBooks / PAGE_LIMIT);
        state.page =
          state.page > 0 &&
          state.totalBooks % PAGE_LIMIT === 0 &&
          state.page === state.totalPages
            ? state.page - 1
            : state.page;

        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchAllBooks.rejected,
          createBook.rejected,
          updateBook.rejected,
          updateCoverBook.rejected,
          deleteBook.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllBooks.pending,
          createBook.pending,
          updateBook.pending,
          updateCoverBook.pending,
          deleteBook.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      ),
  selectors: {
    selectBooks: state => state.books,
    selectPageBooks: state => state.page,
    selectTotalPagesBooks: state => state.totalPages,
    selectTotalBooks: state => state.totalBooks,
    selectIsLoadingBooks: state => state.isLoading,
    selectBooksError: state => state.error,
  },
});

export const { setPageBooks, clearBooks } = booksSlice.actions;
export const {
  selectBooks,
  selectPageBooks,
  selectTotalPagesBooks,
  selectTotalBooks,
  selectIsLoadingBooks,
  selectBooksError,
} = booksSlice.selectors;
export const booksReducer = booksSlice.reducer;
