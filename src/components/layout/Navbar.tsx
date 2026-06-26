import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Engineering India</div>

      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/team">Team</Link></li>
  <li><Link to="/events">Events</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="/highlights">Highlights</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
    </nav>
  );
}