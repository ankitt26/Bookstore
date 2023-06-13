import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    book: [],
  },
  reducers: {
    addbook: () => {},
    removebook: () => {},
  },
});

export default bookSlice.reducer;
