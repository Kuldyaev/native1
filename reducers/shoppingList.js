import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

const initialState = {
    allItems: ["y"]
};

const shopListReducer = createSlice({
  name: "shopList",
  initialState: initialState,
  reducers: {
    reciveShopListFromAPI: (state) => {
      state.allItems = [...state.allItems ,"x"];
    },
  },
});
// Action creators are generated for each case reducer function
export const { reciveShopListFromAPI } = shopListReducer.actions;

export default shopListReducer.reducer;
