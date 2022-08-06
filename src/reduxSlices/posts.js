import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPostById, getPostsBySearchString } from "../src/apis/posts";
import { PENDING, REJECTED, FULFILLED } from "../src/constants/posts";

export const fetchPostsBySearchString = createAsyncThunk(
  "posts/fetchPostsBySearchString",
  async (payload) => {
    const { searchString } = payload;

    return Promise.resolve({
      posts: await getPostsBySearchString(searchString),
    });
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (payload) => {
    const { id } = payload;

    return Promise.resolve({
      post: await getPostById(id),
    });
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    fetchAllPostsStatus: null,
    posts: [],
    fetchActivePostStatus: null,
    activePost: null,
    searchString: "",
  },
  reducers: {},
  extraReducers: {
    [fetchPostsBySearchString.pending]: (state, action) => {
      state.fetchAllPostsStatus = PENDING;
    },
    [fetchPostsBySearchString.fulfilled]: (state, action) => {
      state.fetchAllPostsStatus = FULFILLED;
      state.posts = action.payload.posts;
    },
    [fetchPostsBySearchString.rejected]: (state, action) => {
      state.fetchAllPostsStatus = REJECTED;
    },
    [fetchPostById.pending]: (state, action) => {
      state.fetchActivePostStatus = PENDING;
    },
    [fetchPostById.fulfilled]: (state, action) => {
      state.fetchActivePostStatus = FULFILLED;
      state.activePost = action.payload.post;
    },
    [fetchPostById.rejected]: (state, action) => {
      state.fetchActivePostStatus = REJECTED;
    },
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
