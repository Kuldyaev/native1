import { createSlice } from "@reduxjs/toolkit";

export const statusReducer = createSlice({
  name: "status",
  initialState: {
    finalModalVisibleMemoryGame: false,
    finalModalVisibleSnakeGame: false,
    shopingListAllCategoruesShowed: false,
  },
  reducers: {
    hideFinalModalVisibleMemoryGame: (state) => {
      state.finalModalVisibleMemoryGame = false;
    },
    showFinalModalVisibleMemoryGame: (state) => {
      state.finalModalVisibleMemoryGame = true;
    },
    hideFinalModalVisibleSnakeGame: (state) => {
      state.finalModalVisibleSnakeGame = false;
    },
    showFinalModalVisibleSnakeGame: (state) => {
      state.finalModalVisibleSnakeGame = true;
    },
    switchShopingListAllCategoruesShowed: (state) => {
      state.shopingListAllCategoruesShowed = !state.shopingListAllCategoruesShowed;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  hideFinalModalVisibleMemoryGame,
  showFinalModalVisibleMemoryGame,
  hideFinalModalVisibleSnakeGame,
  showFinalModalVisibleSnakeGame,
  switchShopingListAllCategoruesShowed
} = statusReducer.actions;

export default statusReducer.reducer;
