import React from 'react'
import { Link } from 'react-router-dom'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function CarCard({ car }) {
  return (
    <article className="car-card">
      <div className="car-card__image-wrap">
        <img src={car.image} alt={car.name} loading="lazy" />
        <span className="car-card__category">{car.category}</span>
      </div>
      <div className="car-card__body">
        <div className="car-card__title-row">
          <h3>{car.name}</h3>
          <span className="car-card__price">{currency.format(car.price)}</span>
        </div>
        <p className="car-card__tagline">{car.tagline}</p>
        <div className="car-card__stats">
          <span>{car.year}</span>
          <span>{car.horsepower} hp</span>
          <span>{car.topSpeed}</span>
        </div>
        <Link to={`/cars/${car.id}`} className="btn btn--ghost car-card__cta">
          View details
        </Link>
      </div>
    </article>
  )
}