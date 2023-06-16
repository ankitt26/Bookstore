import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';
import Fetch from './books/Fetch';

const store = configureStore({
  reducer: {
    books: bookSlice,
    categories: categoriesSlice,
    fetchdata: Fetch,
  },
});

export default store;
