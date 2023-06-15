import { createSlice } from "@reduxjs/toolkit";

const Fetch = createSlice({
  name: "fetch",
  initialState: {
    items: [],
    isLoading: false,
    error: undefined,
  },
  reducers:{},
  extraReducers : {},

});

export default Fetch.reducer;