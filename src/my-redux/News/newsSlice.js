import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createNews,
  deleteOneNews,
  fetchAllNews,
  getOneNews,
  updateNews,
} from './operations';

const initialState = {
  news: [],
  oneNews: {},
  totalNews: 0,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  selectors: {
    selectorsNews: state => state.news,
  },
  extraReducers: builder =>
    builder

      .addCase(createNews.fulfilled, (state, action) => {
        state.news = [...state.news, action.payload];
        state.isLoading = false;
      })

      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.totalNews = action.payload.totalNews;
        state.news = action.payload.news;
        state.isLoading = false;
      })
      .addCase(getOneNews.fulfilled, (state, action) => {
        state.oneNews = action.payload;
        state.isLoading = false;
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        state.news = state.news.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        state.isLoading = false;
      })
      .addCase(deleteOneNews.fulfilled, (state, action) => {
        state.news = state.news.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchAllNews.rejected,
          createNews.rejected,
          getOneNews.rejected,
          updateNews.rejected,
          deleteOneNews.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllNews.pending,
          createNews.pending,
          getOneNews.pending,
          updateNews.pending,
          deleteOneNews.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      ),
});

export const newsReducer = newsSlice.reducer;
export const { selectorsNews } = newsSlice.selectors;
