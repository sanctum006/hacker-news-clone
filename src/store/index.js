import { configureStore } from "@reduxjs/toolkit";

import posts from "../reduxSlices/posts";
import routes from "../reduxSlices/routes";

export default configureStore({
  reducer: {
    posts,
    routes,
  },
});
