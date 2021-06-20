import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postsReducer from "./posts.slice";
import helloReducer from "./hello.slice"

import logger from "../middleware/logger.middleware";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    hello: helloReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...getDefaultMiddleware(), logger]
});
export default store;