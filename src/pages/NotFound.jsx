import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section not-found">
      <h1>404</h1>
      <p>This page drove off the lot. Let&apos;s get you back on the road.</p>
      <Link to="/" className="btn btn--primary">
        Back to home
      </Link>
    </section>
  )
}