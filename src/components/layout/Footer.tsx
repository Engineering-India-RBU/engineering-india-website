import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Engineering India</div>
          <p className="footer-tagline">
            Empowering students through innovation & social impact.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/about" className="footer-link">Privacy Policy</Link>
          <Link to="/about" className="footer-link">Terms of Service</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/events" className="footer-link">Events</Link>
        </div>

        <p className="footer-copy">
          &copy; 2026 Engineering India RBU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
