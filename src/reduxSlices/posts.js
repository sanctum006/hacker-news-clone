import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPostById, getPostsBySearchString } from "../apis/posts";
import { PENDING, REJECTED, FULFILLED } from "../constants/posts";

export const fetchPostsBySearchString = createAsyncThunk(
  "posts/fetchPostsBySearchString",
  async (payload, { getState }) => {
    const searchString = getState().posts.searchString;

    return Promise.resolve({
      posts: await getPostsBySearchString(searchString),
    });
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (payload, { getState }) => {
    const id = getState().routes.queryParams?.postId;

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
  reducers: {
    updateSearchString: (state, action) => {
      state.searchString = action.payload.value;
    },
  },
  extraReducers: {
    [fetchPostsBySearchString.pending]: (state, action) => {
      state.fetchAllPostsStatus = PENDING;
    },
    [fetchPostsBySearchString.fulfilled]: (state, action) => {
      state.fetchAllPostsStatus = FULFILLED;
      state.posts = action.payload.posts?.hits;
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

export const { updateSearchString } = postsSlice.actions;

export default postsSlice.reducer;
