import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createBook,
  deleteBook,
  fetchAllBooks,
  updateBook,
} from './booksOperations';

const initialState = {
  books: [],
  page: 0,
  totalPages: 0,
  totalBooks: 0,
  isMoreBooks: true,
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  selectors: {
    selectorsBooks: state => state.books,
  },
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
        (
          state,
          { payload: { currentPage, totalPages, totalBooks, books }, meta }
        ) => {
          if (meta.arg.isAdmin) {
            state.books = books;
          } else {
            state.books.push(...books);
          }

          state.totalPages = totalPages;
          state.totalBooks = totalBooks;
          state.isMoreBooks = currentPage + 1 < totalPages;

          state.isLoading = false;
        }
      )
      .addCase(createBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
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
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchAllBooks.rejected,
          createBook.rejected,
          updateBook.rejected,
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
    selectIsMoreBooks: state => state.isMoreBooks,
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
  selectIsMoreBooks,
  selectIsLoadingBooks,
  selectBooksError,
} = booksSlice.selectors;
export const booksReducer = booksSlice.reducer;
