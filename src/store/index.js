import { configureStore } from "@reduxjs/toolkit";

import posts from "../reduxSlices/posts";

export default configureStore({
  reducer: {
    posts,
  },
});
