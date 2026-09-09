import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">AutoVault</p>
          <p className="footer__muted">Curated cars. No pressure, no pushy sales pitch.</p>
        </div>
        <p className="footer__muted">
          Built for the React training final project · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}