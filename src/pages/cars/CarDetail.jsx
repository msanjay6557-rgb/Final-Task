import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCarById } from '../../data/carsData.js'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { EmptyState } from '../../components/Loader.jsx'
import { addBooking } from '../../redux/bookingsSlice.js'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const emptyForm = { name: '', phone: '', date: '' }

export default function CarDetail() {
  const { id } = useParams()
  const car = getCarById(id)
  const dispatch = useDispatch()

  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('autovault-recent', [])
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(false)

  // Track recently viewed cars in localStorage whenever this page loads.
  useEffect(() => {
    if (!car) return
    setRecentlyViewed((prev) => {
      const withoutCurrent = prev.filter((entry) => entry !== car.id)
      return [car.id, ...withoutCurrent].slice(0, 4)
    })
  }, [car, setRecentlyViewed])

  if (!car) {
    return (
      <section className="section">
        <EmptyState
          title="We couldn't find that car"
          message="It may have sold or the link is out of date."
        />
        <Link to="/cars" className="btn btn--ghost">
          Back to inventory
        </Link>
      </section>
    )
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (!form.date) {
      nextErrors.date = 'Pick a date.'
    } else if (new Date(form.date) < new Date(new Date().toDateString())) {
      nextErrors.date = 'Choose a date from today onward.'
    }
    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setConfirmed(false)
      return
    }
    dispatch(addBooking({ carName: car.name, ...form }))
    setForm(emptyForm)
    setConfirmed(true)
  }

  return (
    <div className="page">
      <section className="section car-detail">
        <img src={car.image} alt={car.name} className="car-detail__image" />
        <div className="car-detail__info">
          <span className="badge">{car.category}</span>
          <h1>{car.name}</h1>
          <p className="car-detail__tagline">{car.tagline}</p>
          <p className="car-detail__price">{currency.format(car.price)}</p>
          <p>{car.description}</p>

          <ul className="tag-list">
            {car.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="car-detail__stats">
            <div>
              <span>Year</span>
              <strong>{car.year}</strong>
            </div>
            <div>
              <span>Power</span>
              <strong>{car.horsepower} hp</strong>
            </div>
            <div>
              <span>Top speed</span>
              <strong>{car.topSpeed}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__heading">
          <h2>Book a test drive</h2>
        </div>
        <form className="form form--inline" onSubmit={handleSubmit} noValidate>
          <div className="form__row">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className="form__error">{errors.name}</span>}
          </div>
          <div className="form__row">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className="form__error">{errors.phone}</span>}
          </div>
          <div className="form__row">
            <label htmlFor="date">Preferred date</label>
            <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
            {errors.date && <span className="form__error">{errors.date}</span>}
          </div>
          <button type="submit" className="btn btn--primary">
            Request test drive
          </button>
        </form>
        {confirmed && (
          <p className="form__success">
            Booked — track it any time from <Link to="/profile">My Garage</Link>.
          </p>
        )}
      </section>

      {recentlyViewed.length > 1 && (
        <section className="section">
          <div className="section__heading">
            <h2>Recently viewed</h2>
          </div>
          <ul className="tag-list">
            {recentlyViewed
              .filter((entryId) => entryId !== car.id)
              .map((entryId) => {
                const viewedCar = getCarById(entryId)
                if (!viewedCar) return null
                return (
                  <li key={entryId}>
                    <Link to={`/cars/${entryId}`}>{viewedCar.name}</Link>
                  </li>
                )
              })}
          </ul>
        </section>
      )}
    </div>
  )
}