import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createNewsPhoto,
  createOneNews,
  deleteNewsPhoto,
  deleteOneNews,
  fetchAllNews,
  fetchAnnounceNews,
  updateOneNews,
} from './newsOperations';
import { PAGE_LIMIT } from '../../constants';

const initialState = {
  news: [],
  announceNews: [],
  page: 0,
  totalPages: 0,
  totalNews: 0,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPageNews: (state, { payload }) => {
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
        (state, { payload: { totalPages, totalNews, news }, meta }) => {
          if (meta.arg.isAdmin) {
            state.news = news;
          } else {
            state.news.push(...news);
          }
          state.totalPages = totalPages;
          state.totalNews = totalNews;

          state.isLoading = false;
        }
      )
      .addCase(fetchAnnounceNews.fulfilled, (state, { payload: { news } }) => {
        state.announceNews = news;
        state.isLoading = false;
      })
      .addCase(createOneNews.fulfilled, (state, { payload }) => {
        state.news.unshift(payload);
        state.totalNews += 1;
        state.totalPages = Math.ceil(state.totalNews / PAGE_LIMIT);

        state.isLoading = false;
      })
      .addCase(createNewsPhoto.fulfilled, (state, { payload }) => {
        const newsItem = state.news.find(item => item.id === payload.newsId);
        if (newsItem) {
          newsItem.photoUrls.push(payload.data);
        }

        state.isLoading = false;
      })
      .addCase(updateOneNews.fulfilled, (state, { payload }) => {
        state.news = state.news.map(item => {
          if (item.id === payload.id) {
            return { ...item, ...payload };
          }
          return item;
        });

        state.isLoading = false;
      })
      .addCase(deleteOneNews.fulfilled, (state, { payload }) => {
        state.news = state.news.filter(item => item.id !== payload);
        state.totalNews -= 1;
        state.totalPages = Math.ceil(state.totalNews / PAGE_LIMIT);
        state.page =
          state.page > 0 &&
          state.totalNews % PAGE_LIMIT === 0 &&
          state.page === state.totalPages
            ? state.page - 1
            : state.page;

        state.isLoading = false;
      })
      .addCase(deleteNewsPhoto.fulfilled, (state, { payload }) => {
        const { newsId, photoId } = payload;
        const newsItem = state.news.find(item => item.id === newsId);
        if (newsItem) {
          newsItem.photoUrls = newsItem.photoUrls.filter(
            photo => photo.id !== photoId
          );
        }

        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchAllNews.rejected,
          fetchAnnounceNews.rejected,
          createOneNews.rejected,
          createNewsPhoto.rejected,
          updateOneNews.rejected,
          deleteOneNews.rejected,
          deleteNewsPhoto.rejected
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
          createOneNews.pending,
          createNewsPhoto.pending,
          updateOneNews.pending,
          deleteOneNews.pending,
          deleteNewsPhoto.pending
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
    selectTotalNews: state => state.totalNews,
    selectIsLoadingNews: state => state.isLoading,
    selectError: state => state.error,
  },
});
export const { setPageNews, clearNews } = newsSlice.actions;
export const {
  selectNews,
  selectAnnounceNews,
  selectPageNews,
  selectTotalPagesNews,
  selectTotalNews,
  selectIsLoadingNews,
  selectError,
} = newsSlice.selectors;
export const newsReducer = newsSlice.reducer;
