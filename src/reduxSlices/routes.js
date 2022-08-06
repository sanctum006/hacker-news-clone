import { createAction, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";

export const processQueryParams = createAction(
  "routes/processQueryParams",
  () => {
    const queryParams = queryString.parse(window.location.search);

    return Promise.resolve({
      queryParams,
    });
  }
);

export const routesSlice = createSlice({
  name: "routes",
  initialState: {
    queryParams: {},
  },
  reducers: {},
  extraReducers: {
    [processQueryParams.fulfilled]: (state, action) => {
      state.queryParams = action.payload.queryParams;
    },
  },
});

export default routesSlice.reducer;
