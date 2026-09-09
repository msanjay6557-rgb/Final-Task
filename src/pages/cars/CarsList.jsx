import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import CarCard from '../../components/CarCard.jsx'
import { EmptyState } from '../../components/Loader.jsx'
import { getCarsByCategory } from '../../data/carsData.js'

export default function CarsList() {
  // useParams: present only on the /cars/category/:categoryName route.
  const { categoryName } = useParams()
  // useSearchParams: present on any /cars* route, e.g. /cars?sort=price
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort') || 'name'

  const cars = getCarsByCategory(categoryName)

  const sorted = [...cars].sort((a, b) => {
    if (sort === 'price') return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    return a.name.localeCompare(b.name)
  })

  return (
    <section className="section">
      <div className="section__heading">
        <h2>{categoryName ? `${categoryName}s` : 'All cars'} · {sorted.length}</h2>
        <label className="sort-control">
          Sort by
          <select
            value={sort}
            onChange={(event) =>
              setSearchParams((prev) => {
                const next = new URLSearchParams(prev)
                next.set('sort', event.target.value)
                return next
              })
            }
          >
            <option value="name">Name</option>
            <option value="price">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>

      {sorted.length === 0 ? (
        <EmptyState
          title="No cars in this category yet"
          message="Check back soon, or browse another category above."
        />
      ) : (
        <div className="grid grid--cars">
          {sorted.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  )
}