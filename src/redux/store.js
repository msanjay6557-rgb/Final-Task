import { configureStore } from '@reduxjs/toolkit'
import bookingsReducer from './bookingsSlice.js'

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
})