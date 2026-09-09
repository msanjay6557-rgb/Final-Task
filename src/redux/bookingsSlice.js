import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: nanoid(),
      carName: 'Solene GT Coupe',
      name: 'Priya Nair',
      phone: '9876543210',
      date: '2026-09-10',
      status: 'Confirmed',
    },
  ],
}

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    // CREATE
    addBooking: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare({ carName, name, phone, date }) {
        return {
          payload: {
            id: nanoid(),
            carName,
            name,
            phone,
            date,
            status: 'Pending',
          },
        }
      },
    },
    // UPDATE
    updateBooking(state, action) {
      const { id, changes } = action.payload
      const booking = state.items.find((item) => item.id === id)
      if (booking) {
        Object.assign(booking, changes)
      }
    },
    // UPDATE (status shortcut)
    setBookingStatus(state, action) {
      const { id, status } = action.payload
      const booking = state.items.find((item) => item.id === id)
      if (booking) booking.status = status
    },
    // DELETE
    removeBooking(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addBooking, updateBooking, setBookingStatus, removeBooking } =
  bookingsSlice.actions
export default bookingsSlice.reducer