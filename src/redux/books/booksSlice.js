import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtNFhlL0BNvzbTbQF18L/books';

const fetchData = createAsyncThunk('fetchdata', async () => {
  try {
    const response = await axios.get(appUrl);
    const { data } = response;

    return data;
    // return Object.values(data); // to convert object to array
  } catch (error) {
    throw new Error('Data not fetched properly');
  }
});

const deleteBook = createAsyncThunk('deletebooks', async (bookId) => {
  await axios.delete(`${appUrl}/${bookId}`);
  return bookId;
});

const postBook = createAsyncThunk('postbooks', async (book) => {
  try {
    const response = await axios.post(appUrl, book);
    const apiResult = response.data.result;
    return { apiResult, book };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response.data.message);
    } else {
      throw error;
    }
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: action.payload,
      }))
      .addCase(fetchData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Error occurred',
      }));
  },
});

export { fetchData, deleteBook, postBook };
export default bookSlice.reducer;
