import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createNews,
  deleteOneNews,
  fetchAllNews,
  fetchAnnounceNews,
  getOneNews,
  updateNews,
} from './newsOperations';

import newsData from '../../assets/news.json';
import announceNewsData from '../../assets/announceNews.json';

const initialState = {
  news: newsData,
  announceNews: announceNewsData,
  oneNews: null,
  page: 1,
  totalNews: 0,
  filter: '',
  isLoading: false,
  error: null,
};
const selectNews = ({ news: { news } }) => news;
const selectAnnounceNews = ({ news: { announceNews } }) => announceNews;
const selectPageNews = ({ news: { page } }) => page;
const selectTotalNews = ({ news: { totalNews } }) => totalNews;
const selectFilter = ({ news: { filter } }) => filter;
const selectIsLoadingNews = ({ news: { isLoading } }) => isLoading;
const selectError = ({ news: { error } }) => error;
const selectFilteredNews = createSelector(
  [selectNews, selectFilter],
  (news, filter) => {
    const normalizedFilter = filter?.toLowerCase().trim();
    return news.filter(
      item =>
        item.title.toLowerCase().includes(normalizedFilter) ||
        item.content.toLowerCase().includes(normalizedFilter)
    );
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    increasePage: state => {
      state.page += 1;
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(createNews.fulfilled, (state, { payload }) => {
        state.news = [...state.news, payload];
        state.isLoading = false;
      })

      .addCase(
        fetchAnnounceNews.fulfilled,
        (state, { payload: { totalNews, news } }) => {
          state.totalNews = totalNews;
          state.announceNews = news;
          state.isLoading = false;
        }
      )
      .addCase(
        fetchAllNews.fulfilled,
        (state, { payload: { totalNews, news } }) => {
          state.news.push(...news);
          state.totalNews = totalNews;

          state.isLoading = false;
        }
      )
      .addCase(getOneNews.fulfilled, (state, { payload }) => {
        state.oneNews = payload;
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
});
export const { increasePage, changeFilter } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
export {
  selectNews,
  selectFilteredNews,
  selectAnnounceNews,
  selectPageNews,
  selectTotalNews,
  selectFilter,
  selectIsLoadingNews,
  selectError,
};
