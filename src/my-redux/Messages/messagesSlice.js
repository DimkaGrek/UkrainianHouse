import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  changeMessageStatus,
  createMessage,
  deleteMessage,
  fetchAllMessages,
} from './operations';
import { PAGE_LIMIT } from '../../constants';

const initialState = {
  messages: [],
  page: 0,
  totalPages: 0,
  totalMessages: 0,
  isLoading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setPageMessages: (state, { payload }) => {
      state.page = payload;
    },
    clearMessages: state => {
      state.messages = [];
      state.page = 0;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(
        fetchAllMessages.fulfilled,
        (state, { payload: { totalPages, totalMessages, messages } }) => {
          state.messages = messages;
          state.totalPages = totalPages;
          state.totalMessages = totalMessages;
          state.isLoading = false;
        }
      )
      .addCase(createMessage.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(changeMessageStatus.fulfilled, (state, { payload }) => {
        const messageItem = state.messages.find(item => item.id === payload);
        if (messageItem) {
          messageItem.read = true;
        }
        state.isLoading = false;
      })
      .addCase(deleteMessage.fulfilled, (state, { payload }) => {
        state.messages = state.messages.filter(item => item.id !== payload);
        state.totalMessages -= 1;
        state.totalPages = Math.ceil(state.totalMessages / PAGE_LIMIT);
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
          fetchAllMessages.rejected,
          fetchAllMessagescreateMessage.rejected,
          changeMessageStatus.rejected,
          deleteMessage.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllMessages.pending,
          createMessage.pending,
          changeMessageStatus.pending,
          deleteMessage.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      ),

  selectors: {
    selectMessages: state => state.messages,
    selectPageMessages: state => state.page,
    selectTotalPagesMessages: state => state.totalPages,
    selectTotalMessages: state => state.totalMessages,
    selectIsLoadingMessages: state => state.isLoading,
    selectErrorMessages: state => state.error,
  },
});

export const { setPageMessages, clearMessages } = messagesSlice.actions;
export const {
  selectMessages,
  selectPageMessages,
  selectTotalPagesMessages,
  selectTotalMessages,
  selectIsLoadingMessages,
  selectErrorMessages,
} = messagesSlice.selectors;
export const messagesReducer = messagesSlice.reducer;
