// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo">
//         TechWorld
//       </div>

//       <div className="nav-links">

//         <NavLink to="/">
//           Home
//         </NavLink>

//         <NavLink to="/about">
//           About
//         </NavLink>

//         <NavLink to="/services">
//           Services
//         </NavLink>

//         <NavLink to="/products">
//           Products
//         </NavLink>

//         <NavLink to="/contact">
//           Contact
//         </NavLink>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/cars', label: 'Inventory' },
  { to: '/contact', label: 'Contact' },
  { to: '/profile', label: 'My Garage' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const { mode, dispatch } = useTheme()

  // Close the mobile menu on outside click (useRef + useEffect demo).
  useEffect(() => {
    function handleClick(event) {
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__mark">AV</span>
          AutoVault
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          ref={menuRef}
          className={`navbar__links ${open ? 'navbar__links--open' : ''}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            className="navbar__theme-btn"
            onClick={() => dispatch({ type: 'TOGGLE' })}
            title="Toggle showroom lighting"
          >
            {mode === 'dusk' ? '☀ Daylight' : '☾ Dusk'}
          </button>
        </nav>
      </div>
    </header>
  )
}