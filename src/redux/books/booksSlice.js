import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    book: [],
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.book.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.book = state.book.filter((book) => book.id !== bookId);
    },
  },
});

export default bookSlice.reducer;
