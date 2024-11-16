import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../services/api";

export const fetchAllNews = createAsyncThunk(
  "news/getAllNews",
  async ({ params, isAdmin = false }, thunkAPI) => {
    try {
      const { data } = await api.get(`${isAdmin ? "/admin" : ""}/news`, {
        params,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchAnnounceNews = createAsyncThunk("news/getAnnounceNews", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/news", {
      params: { status: "ANNOUNCE" },
    });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createOneNews = createAsyncThunk("news/createNews", async (news, thunkAPI) => {
  try {
    const { data } = await api.post("/admin/news", news, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createNewsPhoto = createAsyncThunk(
  "news/createNewsPhoto",
  async ({ newsId, fd }, thunkAPI) => {
    try {
      const { data } = await api.post(`/admin/news/${newsId}/addphoto`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return { newsId, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateOneNews = createAsyncThunk(
  "news/updateNews",
  async ({ id, ...newsChanges }, thunkAPI) => {
    try {
      const { data } = await api.put(`/admin/news/${id}`, newsChanges);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNewsPhoto = createAsyncThunk(
  "news/updateNewsPhoto",
  async ({ newsId, ...photoChanges }, thunkAPI) => {
    try {
      const { data } = await api.put(`/admin/news/${newsId}/update`, photoChanges, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOneNews = createAsyncThunk("news/deleteNews", async (id, thunkAPI) => {
  try {
    await api.delete(`/admin/news/${id}`);

    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteNewsPhoto = createAsyncThunk("news/deleteNewsPhoto", async (ids, thunkAPI) => {
  try {
    await api.delete(`/admin/news/photo/${ids.photoId}`);

    return ids;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
