import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/booksSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
