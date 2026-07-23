import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import "./Navbar.css";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Team", path: "/team" },
  { title: "Events", path: "/events" },
  { title: "Gallery", path: "/gallery" },
  { title: "Highlights", path: "/highlights" },
  { title: "Alumni", path: "/alumni" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-inner">
        <Link to="/" className="navbar-logo">Engineering India</Link>

        <ul className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "nav-link-active" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="nav-join-mobile">
            <Link to="/contact" className="nav-join-btn">Join Us</Link>
          </li>
          <li className="nav-theme-mobile">
            <ThemeToggle />
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/contact" className="nav-join-btn nav-join-desktop">Join Us</Link>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </nav>
    </header>
  );
}
