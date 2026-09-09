import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CATEGORIES } from '../../data/carsData.js'

export default function CarsLayout() {
  return (
    <div className="page">
      <section className="section">
        <div className="page__intro">
          <h1>Inventory</h1>
          <p>
            Every car on our floor right now, grouped the way our specialists
            group them on the lot.
          </p>
        </div>

        <nav className="tabs">
          <NavLink to="/cars" end className={({ isActive }) => `tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
            All cars
          </NavLink>
          {CATEGORIES.map((category) => (
            <NavLink
              key={category}
              to={`/cars/category/${category}`}
              className={({ isActive }) => `tabs__item ${isActive ? 'tabs__item--active' : ''}`}
            >
              {category}
            </NavLink>
          ))}
        </nav>
      </section>

      {/* Nested route content renders here: CarsList (index or by category) or CarDetail */}
      <Outlet />
    </div>
  )
}