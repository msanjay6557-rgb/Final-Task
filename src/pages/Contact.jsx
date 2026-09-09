import React, { useState, useRef } from 'react'

const initialForm = { name: '', email: '', phone: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Tell us your name.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'That email address doesn\u2019t look right.'
  }
  if (form.phone && !/^[0-9+\-\s]{7,15}$/.test(form.phone)) {
    errors.phone = 'Use digits, spaces, + or - only.'
  }
  if (!form.message.trim()) {
    errors.message = 'Let us know what you need.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'A few more details would help (10+ characters).'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)
  const fieldRefs = { name: nameRef, email: emailRef, phone: phoneRef, message: messageRef }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field — useRef demo.
      const firstErrorField = Object.keys(validationErrors)[0]
      fieldRefs[firstErrorField]?.current?.focus()
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="page">
      <section className="section">
        <div className="page__intro">
          <h1>Ask us anything</h1>
          <p>
            Questions about a specific car, financing, or trade-ins go
            straight to a specialist — not a call centre.
          </p>
        </div>
      </section>

      <section className="section contact-grid">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__row">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              ref={nameRef}
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="form__error">{errors.name}</span>}
          </div>

          <div className="form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              ref={emailRef}
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="form__error">{errors.email}</span>}
          </div>

          <div className="form__row">
            <label htmlFor="phone">Phone (optional)</label>
            <input
              id="phone"
              name="phone"
              ref={phoneRef}
              value={form.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && <span className="form__error">{errors.phone}</span>}
          </div>

          <div className="form__row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              ref={messageRef}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="form__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn--primary">
            Send message
          </button>

          {submitted && (
            <p className="form__success">
              Message sent — a specialist will reply within one business day.
            </p>
          )}
        </form>

        <aside className="contact-info">
          <h3>Visit the showroom</h3>
          <p>221 Meridian Street, Salem, Tamil Nadu</p>
          <h3>Hours</h3>
          <p>Mon–Sat, 10:00 – 19:00</p>
          <h3>Sales line</h3>
          <p>+91 98765 43210</p>
        </aside>
      </section>
    </div>
  )
}