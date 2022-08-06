import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";

export const routesSlice = createSlice({
  name: "routes",
  initialState: {
    queryParams: {},
  },
  reducers: {
    processQueryParams: (state, action) => {
      state.queryParams = queryString.parse(window.location.search);
    },
  },
  extraReducers: {},
});

export const { processQueryParams } = routesSlice.actions;

export default routesSlice.reducer;
