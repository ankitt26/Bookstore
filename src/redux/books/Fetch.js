import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// const appid="ZtNFhlL0BNvzbTbQF18L";
const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtNFhlL0BNvzbTbQF18L/books';

const Fetchdata = createAsyncThunk('fetchdata', async () => {
  try {
    const response = await axios.get(appUrl);
    return response.data;
  } catch (error) {
    throw new Error('data not fetch properly');
  }
});

const Fetch = createSlice({
  name: 'fetch',
  initialState: {
    items: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: {},
});

export { Fetchdata };
export default Fetch.reducer;
