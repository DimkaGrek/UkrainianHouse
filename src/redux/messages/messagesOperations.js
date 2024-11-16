import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../services/api";

export const fetchAllMessages = createAsyncThunk("messages/getAll", async (config, thunkAPI) => {
  try {
    const { data } = await api.get("/admin/messages", config);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createMessage = createAsyncThunk(
  "messages/createMessage",
  async (message, thunkAPI) => {
    try {
      const { data } = await api.post("/messages", message);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeMessageStatus = createAsyncThunk(
  "messages/changeMessageStatus",
  async (id, thunkAPI) => {
    try {
      await api.put(`/admin/messages/${id}/read`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMessage = createAsyncThunk("messages/deleteMessages", async (id, thunkAPI) => {
  try {
    await api.delete(`/admin/messages/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchUnreadMessages = createAsyncThunk(
  "messages/getTotalUnreadMessages",
  async (config, thunkAPI) => {
    try {
      const { data } = await api.get("/admin/messages/unread");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
