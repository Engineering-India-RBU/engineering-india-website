import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
import Container from '../ui/Container'
import { FOOTER_CONTENT } from '../../pages/home/constants'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              Engineering India
            </a>

            <p className="footer__description">
              {FOOTER_CONTENT.description}
            </p>

            <div className="footer__socials">
            <a
                href={FOOTER_CONTENT.socials.instagram || '#'}
                target={FOOTER_CONTENT.socials.instagram ? '_blank' : undefined}
                rel={
                FOOTER_CONTENT.socials.instagram
                    ? 'noopener noreferrer'
                    : undefined
                }
                aria-label="Engineering India on Instagram"
                onClick={(event) => {
                if (!FOOTER_CONTENT.socials.instagram) {
                    event.preventDefault()
                }
                }}
            >
                <FaInstagram aria-hidden="true" />
            </a>

            <a
                href={FOOTER_CONTENT.socials.linkedin || '#'}
                target={FOOTER_CONTENT.socials.linkedin ? '_blank' : undefined}
                rel={
                FOOTER_CONTENT.socials.linkedin
                    ? 'noopener noreferrer'
                    : undefined
                }
                aria-label="Engineering India on LinkedIn"
                onClick={(event) => {
                if (!FOOTER_CONTENT.socials.linkedin) {
                    event.preventDefault()
                }
                }}
            >
                <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
                href={FOOTER_CONTENT.socials.whatsapp || '#'}
                target={FOOTER_CONTENT.socials.whatsapp ? '_blank' : undefined}
                rel={
                FOOTER_CONTENT.socials.whatsapp
                    ? 'noopener noreferrer'
                    : undefined
                }
                aria-label="Engineering India on WhatsApp"
                onClick={(event) => {
                if (!FOOTER_CONTENT.socials.whatsapp) {
                    event.preventDefault()
                }
                }}
            >
                <FaWhatsapp aria-hidden="true" />
            </a>

            <a
                href={FOOTER_CONTENT.socials.youtube || '#'}
                target={FOOTER_CONTENT.socials.youtube ? '_blank' : undefined}
                rel={
                FOOTER_CONTENT.socials.youtube
                    ? 'noopener noreferrer'
                    : undefined
                }
                aria-label="Engineering India on YouTube"
                onClick={(event) => {
                if (!FOOTER_CONTENT.socials.youtube) {
                    event.preventDefault()
                }
                }}
            >
                <FaYoutube aria-hidden="true" />
            </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3>Quick Links</h3>

            <nav aria-label="Quick links">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Explore */}
          <div className="footer__column">
            <h3>Explore</h3>

            <nav aria-label="Explore links">
              {FOOTER_CONTENT.exploreLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="footer__column">
            <h3>Connect</h3>

            <div className="footer__connect">
              <a href="mailto:engineeringindia@rbu.ac.in">
                engineeringindia.rcoem@gmail.com
              </a>

              <span>
                Engineering India, RBU, Nagpur, Maharashtra, India
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{FOOTER_CONTENT.copyright}</p> 
        </div>
      </Container>
    </footer>
  )
}

export default Footer