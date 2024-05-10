import { createSlice } from '@reduxjs/toolkit';
import {
  refreshUserThunk,
  registerThunk,
  userLoginThunk,
  userLogoutThunk,
} from './operations';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
  },

  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogoutThunk.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authSliceReducer = authSlice.reducer;
