import { configureStore } from '@reduxjs/toolkit';
import flagsReducer from '../reducers/flags';
import counterReducer from '../reducers/counter';
import iconsReducer from '../reducers/iconsCards';
import petsReduser from '../reducers/pets';
import statusReduser from '../reducers/status'

export default configureStore({
  reducer: {
    icons: iconsReducer,
    counter: counterReducer,
    flags: flagsReducer,
    pets: petsReduser,
    status: statusReduser,
  },
})
