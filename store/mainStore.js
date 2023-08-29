import { configureStore } from '@reduxjs/toolkit'
import flags from '../reducers/flags'

export default configureStore({
  reducer: {
    flags: flags,
  },
})
