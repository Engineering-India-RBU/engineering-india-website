import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
] as const

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__inner" aria-label="Main navigation">
          <a className="navbar__brand" href="/">
            <img
              className="navbar__logo"
              src="/homepage/Engineering India logo.png"
              alt="Engineering India"
            />
          </a>

          <div className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} to={item.href} end={item.href === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar__desktop-action">
            <Button href="/join">Join Us</Button>
          </div>

          <button
            className="navbar__menu-button"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="navbar__mobile-menu">
            <button
                className="navbar__mobile-close"
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
            >
                ×
            </button>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <Button href="/join">Join Us</Button>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar