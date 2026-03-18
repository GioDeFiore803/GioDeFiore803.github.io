import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/portfolio', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-line h-[55px] flex items-center px-6 md:px-10">
      {/* Logo / Name */}
      <Link
        to="/"
        className="text-[11px] tracking-widest2 uppercase font-medium text-brand-black hover:opacity-60 transition-opacity duration-200"
        onClick={() => setMenuOpen(false)}
      >
        Gio DeFiore
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-7 ml-auto">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-[11px] tracking-widest uppercase transition-opacity duration-200 pb-px ${
                isActive
                  ? 'border-b border-brand-black opacity-100'
                  : 'opacity-60 hover:opacity-100'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden ml-auto flex flex-col justify-center gap-[5px] w-6 h-6"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-px bg-brand-black transition-all duration-200 ${
            menuOpen ? 'rotate-45 translate-y-[6px]' : ''
          }`}
        />
        <span
          className={`block h-px bg-brand-black transition-all duration-200 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-px bg-brand-black transition-all duration-200 ${
            menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
          }`}
        />
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-[55px] left-0 right-0 bg-white border-b border-brand-line px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-[13px] tracking-widest uppercase ${
                  isActive ? 'opacity-100' : 'opacity-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
