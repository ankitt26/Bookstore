import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [] },
  reducers: {
    setStatus: () => 'Under Construction',
  },
});

export default categoriesSlice.reducer;
