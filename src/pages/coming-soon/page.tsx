import { useLocation } from 'react-router-dom'
import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import { FOOTER_CONTENT } from '../home/constants'
import './ComingSoon.css'

function ComingSoonPage() {
  const { pathname } = useLocation()

  return (
    <section className="cs">
      <span className="cs__orb cs__orb--outer" aria-hidden="true" />
      <span className="cs__orb cs__orb--inner" aria-hidden="true" />

      <Container>
        <div className="cs__content">
          <p className="cs__badge">Coming Soon</p>

          <h1 className="cs__title">
            Something great is{' '}
            <span className="cs__accent">building.</span>
          </h1>

          <p className="cs__description">
            This page is on its way. We're crafting something
            special.
          </p>

          {pathname !== '/' && (
            <p className="cs__path" aria-hidden="true">
              {pathname}
            </p>
          )}

          <div className="cs__connect">
            <p className="cs__connect-label">Meanwhile, connect with us</p>

            <div className="cs__socials">
              <Button
                href={FOOTER_CONTENT.socials.instagram}
                target="_blank"
                variant="ghost"
              >
                Instagram
              </Button>

              <Button
                href={FOOTER_CONTENT.socials.linkedin}
                target="_blank"
                variant="ghost"
              >
                LinkedIn
              </Button>

              <Button
                href={FOOTER_CONTENT.socials.youtube}
                target="_blank"
                variant="ghost"
              >
                YouTube
              </Button>

              <Button
                href="mailto:engineeringindia.rcoem@gmail.com"
                variant="ghost"
              >
                Email Us
              </Button>
            </div>
          </div>

          <div className="cs__actions">
            <Button href="/" variant="light">
              Back to Home
            </Button>

            <Button href="/events" variant="ghost">
              Explore Events
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ComingSoonPage