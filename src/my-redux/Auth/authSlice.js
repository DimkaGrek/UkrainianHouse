import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk } from './operations';

const initialState = {
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, state => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
        state.isError = null;
      })
      .addCase(refreshThunk.rejected, () => {
        return initialState;
      })
      .addMatcher(isAnyOf(loginThunk.pending, logoutThunk.pending), state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(
        isAnyOf(loginThunk.pending, logoutThunk.pending),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      ),
  selectors: {
    selectToken: state => state.token,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsRefreshing: state => state.isRefreshing,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectIsError,
} = authSlice.selectors;
