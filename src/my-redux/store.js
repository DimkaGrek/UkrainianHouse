import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './News/newsSlice';
import { booksReducer } from './Books/booksSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    books: booksReducer,
  },
});

export default store;
