import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createNews, fetchAllNews, getOneNews } from './operations';

const initialState = {
  news: [],
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
      })

      .addMatcher(
        isAnyOf(fetchAllNews.fulfilled, getOneNews.fulfilled),
        (state, action) => {
          state.news = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllNews.rejected,
          createNews.rejected,
          getOneNews.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(fetchAllNews.pending, createNews.pending, getOneNews.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      ),
});

export const newsReducer = newsSlice.reducer;
export const { selectorsNews } = newsSlice.selectors;
