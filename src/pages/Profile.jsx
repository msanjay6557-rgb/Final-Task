import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addBooking,
  updateBooking,
  removeBooking,
  setBookingStatus,
} from '../redux/bookingsSlice.js'
import { EmptyState } from '../components/Loader.jsx'
import { CARS } from '../data/carsData.js'

const emptyDraft = { carName: CARS[0].name, name: '', phone: '', date: '' }

export default function Profile() {
  const bookings = useSelector((state) => state.bookings.items)
  const dispatch = useDispatch()

  const [draft, setDraft] = useState(emptyDraft)
  const [errors, setErrors] = useState({})
  const [editingId, setEditingId] = useState(null)
  const [editDraft, setEditDraft] = useState(null)
  const [statusFilter, setStatusFilter] = useState('All')

  const visibleBookings = useMemo(() => {
    if (statusFilter === 'All') return bookings
    return bookings.filter((booking) => booking.status === statusFilter)
  }, [bookings, statusFilter])

  function validate(values) {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[0-9+\-\s]{7,15}$/.test(values.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (!values.date) nextErrors.date = 'Pick a date.'
    return nextErrors
  }

  // CREATE
  function handleCreate(event) {
    event.preventDefault()
    const validationErrors = validate(draft)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    dispatch(addBooking(draft))
    setDraft(emptyDraft)
  }

  // UPDATE (enter edit mode)
  function startEdit(booking) {
    setEditingId(booking.id)
    setEditDraft({ ...booking })
  }

  // UPDATE (save)
  function saveEdit(event) {
    event.preventDefault()
    const validationErrors = validate(editDraft)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    dispatch(updateBooking({ id: editingId, changes: editDraft }))
    setEditingId(null)
    setEditDraft(null)
    setErrors({})
  }

  // DELETE
  function handleDelete(id) {
    dispatch(removeBooking(id))
    if (editingId === id) {
      setEditingId(null)
      setEditDraft(null)
    }
  }

  return (
    <div className="page">
      <section className="section">
        <div className="page__intro">
          <h1>My Garage</h1>
          <p>
            Every test drive you&apos;ve requested, in one place. Add,
            reschedule, or cancel without calling the showroom.
          </p>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__heading">
          <h2>Book a new test drive</h2>
        </div>
        <form className="form form--inline" onSubmit={handleCreate} noValidate>
          <div className="form__row">
            <label htmlFor="carName">Car</label>
            <select
              id="carName"
              value={draft.carName}
              onChange={(e) => setDraft((prev) => ({ ...prev, carName: e.target.value }))}
            >
              {CARS.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form__row">
            <label htmlFor="bname">Name</label>
            <input
              id="bname"
              value={draft.name}
              onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))}
            />
            {errors.name && <span className="form__error">{errors.name}</span>}
          </div>
          <div className="form__row">
            <label htmlFor="bphone">Phone</label>
            <input
              id="bphone"
              value={draft.phone}
              onChange={(e) => setDraft((prev) => ({ ...prev, phone: e.target.value }))}
            />
            {errors.phone && <span className="form__error">{errors.phone}</span>}
          </div>
          <div className="form__row">
            <label htmlFor="bdate">Date</label>
            <input
              id="bdate"
              type="date"
              value={draft.date}
              onChange={(e) => setDraft((prev) => ({ ...prev, date: e.target.value }))}
            />
            {errors.date && <span className="form__error">{errors.date}</span>}
          </div>
          <button type="submit" className="btn btn--primary">
            Add booking
          </button>
        </form>
      </section>

      <section className="section">
        <div className="section__heading">
          <h2>Your bookings · {visibleBookings.length}</h2>
          <label className="sort-control">
            Filter
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option>All</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Cancelled</option>
            </select>
          </label>
        </div>

        {visibleBookings.length === 0 ? (
          <EmptyState
            title="No bookings here yet"
            message="Add one above, or book directly from any car's detail page."
          />
        ) : (
          <div className="booking-list">
            {visibleBookings.map((booking) =>
              editingId === booking.id ? (
                <form key={booking.id} className="booking-row booking-row--editing" onSubmit={saveEdit}>
                  <select
                    value={editDraft.carName}
                    onChange={(e) => setEditDraft((prev) => ({ ...prev, carName: e.target.value }))}
                  >
                    {CARS.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                  <input
                    value={editDraft.name}
                    onChange={(e) => setEditDraft((prev) => ({ ...prev, name: e.target.value }))}
                  />
                  <input
                    value={editDraft.phone}
                    onChange={(e) => setEditDraft((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                  <input
                    type="date"
                    value={editDraft.date}
                    onChange={(e) => setEditDraft((prev) => ({ ...prev, date: e.target.value }))}
                  />
                  <div className="booking-row__actions">
                    <button type="submit" className="btn btn--small btn--primary">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn--small btn--ghost"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div key={booking.id} className="booking-row">
                  <div>
                    <strong>{booking.carName}</strong>
                    <span className="booking-row__meta">
                      {booking.name} · {booking.phone} · {booking.date}
                    </span>
                  </div>
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      dispatch(setBookingStatus({ id: booking.id, status: e.target.value }))
                    }
                    className={`status-pill status-pill--${booking.status.toLowerCase()}`}
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Cancelled</option>
                  </select>
                  <div className="booking-row__actions">
                    <button className="btn btn--small btn--ghost" onClick={() => startEdit(booking)}>
                      Edit
                    </button>
                    <button
                      className="btn btn--small btn--danger"
                      onClick={() => handleDelete(booking.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </div>
  )
}