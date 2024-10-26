import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createNews,
  deleteOneNews,
  fetchAllNews,
  fetchAnnounceNews,
  getOneNews,
  updateNews,
} from './newsOperations';

const initialState = {
  news: [],
  announceNews: [],
  oneNews: null,
  page: 0,
  totalPages: 0,
  isMoreNews: true,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    clearNews: state => {
      state.news = [];
      state.page = 0;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(
        fetchAllNews.fulfilled,
        (state, { payload: { currentPage, totalPages, news } }) => {
          if (currentPage === 0) {
            state.news = news;
          } else {
            state.news.push(...news);
          }

          state.totalPages = totalPages;
          state.isMoreNews = currentPage + 1 < totalPages;

          state.isLoading = false;
        }
      )
      .addCase(fetchAnnounceNews.fulfilled, (state, { payload: { news } }) => {
        state.announceNews = news;

        state.isLoading = false;
      })
      .addCase(getOneNews.fulfilled, (state, { payload }) => {
        state.oneNews = payload;
        state.isLoading = false;
      })
      .addCase(createNews.fulfilled, (state, { payload }) => {
        state.news = [...state.news, payload];
        state.isLoading = false;
      })
      .addCase(updateNews.fulfilled, (state, { payload }) => {
        state.news = state.news.map(item => {
          if (item.id === payload.id) {
            return payload;
          }
          return item;
        });
        state.isLoading = false;
      })
      .addCase(deleteOneNews.fulfilled, (state, { payload }) => {
        state.news = state.news.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchAllNews.rejected,
          fetchAnnounceNews.rejected,
          createNews.rejected,
          getOneNews.rejected,
          updateNews.rejected,
          deleteOneNews.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllNews.pending,
          fetchAnnounceNews.pending,
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
  selectors: {
    selectNews: state => state.news,
    selectAnnounceNews: state => state.announceNews,
    selectPageNews: state => state.page,
    selectTotalPagesNews: state => state.totalPages,
    selectIsMoreNews: state => state.isMoreNews,
    selectIsLoadingNews: state => state.isLoading,
    selectError: state => state.error,
  },
});
export const { setPage, clearNews } = newsSlice.actions;
export const {
  selectNews,
  selectAnnounceNews,
  selectPageNews,
  selectTotalPagesNews,
  selectIsMoreNews,
  selectIsLoadingNews,
  selectError,
} = newsSlice.selectors;
export const newsReducer = newsSlice.reducer;
