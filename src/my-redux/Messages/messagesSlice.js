import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { createMessage } from './operations';

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(createMessage.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(createMessage.rejected), (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(createMessage.pending), state => {
        state.isLoading = true;
        state.error = null;
      }),
  selectors: {
    selectMessages: state => state.messages,
    selectIsLoadingMessages: state => state.isLoading,
    selectErrorMessages: state => state.error,
  },
});

export const { selectMessages, selectIsLoadingMessages, selectErrorMessages } =
  messagesSlice.selectors;
export const messagesReducer = messagesSlice.reducer;
