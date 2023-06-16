// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const appUrl =
//   "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtNFhlL0BNvzbTbQF18L/books";

// const fetchData = createAsyncThunk("fetchdata", async () => {
//   try {
//     const response = await axios.get(appUrl);
//     const { data } = response;
//     console.log(data);
//     return data;
//     // return Object.values(data); // to convert object to array
//   } catch (error) {
//     throw new Error("Data not fetched properly");
//   }
// });

// const declear = (newBook) => {
//   const postBook = createAsyncThunk("postData", async () => {
//     try {
//       const res = await axios.post(`${appUrl}`, { newBook });
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       console.log("new error here");
//       return error;
//     }
//   });
// };

// const fetchSlice = createSlice({
//   name: "fetch",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addBook: (state, action) => {
//       const newBook = action.payload;
//       console.log(newBook);
//       declear(newBook);
//     },
//     removeBook: (state, action) => {
//       const bookId = action.payload;
//       state.books = state.books.filter((book) => book.item_id !== bookId);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => ({
//         ...state,
//         isLoading: true,
//       }))
//       .addCase(fetchData.fulfilled, (state, action) => ({
//         ...state,
//         isLoading: false,
//         items: action.payload,
//       }))
//       .addCase(fetchData.rejected, (state) => ({
//         ...state,
//         isLoading: false,
//         error: "Error occurred",
//       }));
//   },
// });

// export { fetchData };
// export default fetchSlice.reducer;
// export const { addBook, removeBook } = fetchSlice.actions;
