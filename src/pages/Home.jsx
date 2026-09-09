// import React from "react";

// function Home() {
//   return (
//     <div className="page home">
//       <h1>Welcome to TechWorld</h1>

//       <p>
//         We provide modern technology solutions
//         for businesses and individuals.
//       </p>

//       <button>Explore Services</button>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard.jsx'
import { Loader } from '../components/Loader.jsx'
import { CARS } from '../data/carsData.js'
import { useFetch } from '../hooks/useFetch.js'

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'They let me drive three cars back to back before I decided anything.',
    name: 'Ananya R.',
    role: 'Bought a Current EV Liftback',
  },
  {
    id: 2,
    quote: 'No pressure, straight numbers, and the paperwork took twenty minutes.',
    name: 'Devansh K.',
    role: 'Bought a Harbor Continental',
  },
  {
    id: 3,
    quote: 'The team knew the Overlander\u2019s off-road specs better than the brochure did.',
    name: 'Meera S.',
    role: 'Bought a Ridge Overlander',
  },
]

export default function Home() {
  const [testimonials, setTestimonials] = useState([])
  const [loadingTestimonials, setLoadingTestimonials] = useState(true)

  // Simulated API integration: an async load with a loading state.
  useEffect(() => {
    let active = true
    setLoadingTestimonials(true)
    const timer = setTimeout(() => {
      if (active) {
        setTestimonials(TESTIMONIALS)
        setLoadingTestimonials(false)
      }
    }, 700)
    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [])

  // Real API integration via the custom useFetch hook (NHTSA public vehicle API).
  const { data: makesData, loading: makesLoading, error: makesError } = useFetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  )

  const featured = CARS.slice(0, 3)
  const sampleMakes = makesData?.Results?.slice(0, 10) ?? []

  return (
    <div>
      <section className="hero">
        <div className="hero__text">
          <p className="hero__eyebrow">Showroom &amp; test-drive booking</p>
          <h1>
            Drive something
            <br />
            remarkable.
          </h1>
          <p className="hero__lead">
            AutoVault curates sedans, SUVs, sports cars and EVs from workshops
            that still hand-finish every panel. Browse the floor, book a test
            drive, and keep track of it all in your own garage.
          </p>
          <div className="hero__actions">
            <Link to="/cars" className="btn btn--primary">
              Browse inventory
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Talk to a specialist
            </Link>
          </div>
        </div>
        <div className="hero__panel">
          <p className="hero__panel-label">On the floor today</p>
          <p className="hero__panel-number">{CARS.length}</p>
          <p className="hero__panel-caption">cars across 4 categories</p>
          <ul className="hero__panel-list">
            <li>
              <span>Sports</span>
              <span>{CARS.filter((c) => c.category === 'Sports').length}</span>
            </li>
            <li>
              <span>SUV</span>
              <span>{CARS.filter((c) => c.category === 'SUV').length}</span>
            </li>
            <li>
              <span>Sedan</span>
              <span>{CARS.filter((c) => c.category === 'Sedan').length}</span>
            </li>
            <li>
              <span>Electric</span>
              <span>{CARS.filter((c) => c.category === 'Electric').length}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <h2>On the floor this week</h2>
          <Link to="/cars" className="section__link">
            See full inventory →
          </Link>
        </div>
        <div className="grid grid--cars">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__heading">
          <h2>What buyers say</h2>
        </div>
        {loadingTestimonials ? (
          <Loader label="Fetching testimonials…" />
        ) : (
          <div className="grid grid--testimonials">
            {testimonials.map((item) => (
              <blockquote key={item.id} className="testimonial">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <div className="section__heading">
          <h2>Brands in our network</h2>
          <span className="section__link section__link--muted">
            Live data from the NHTSA vehicle API
          </span>
        </div>
        {makesLoading && <Loader label="Loading brand directory…" />}
        {makesError && (
          <p className="form__error">
            Could not load live brand data right now ({makesError}).
          </p>
        )}
        {!makesLoading && !makesError && (
          <ul className="tag-list">
            {sampleMakes.map((make) => (
              <li key={make.MakeId}>{make.MakeName}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}