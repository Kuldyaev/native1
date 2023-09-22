import { createSlice } from '@reduxjs/toolkit'

export const statusReducer = createSlice({
  name: 'status',
  initialState: {
    finalModalVisibleMemoryGame: false
  },
  reducers: {
    hideFinalModalVisibleMemoryGame: state => {
      state.finalModalVisibleMemoryGame = false
    },
    showFinalModalVisibleMemoryGame: state => {
      state.finalModalVisibleMemoryGame = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  hideFinalModalVisibleMemoryGame, 
  showFinalModalVisibleMemoryGame
} = statusReducer.actions

export default statusReducer.reducer