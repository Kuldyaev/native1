import { configureStore } from '@reduxjs/toolkit';
import flagsReducer from '../reducers/flags';
import counterReducer from '../reducers/counter';

export default configureStore({
  reducer: {
    
    counter: counterReducer,
    flags: flagsReducer,
  },
})
