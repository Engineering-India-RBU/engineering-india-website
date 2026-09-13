import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { INTRO_CONTENT } from '../constants'
import './IntroSection.css'

function IntroSection() {
  return (
    <section className="intro-section">
      <Container>
        <div className="intro-section__content">
          <h2>{INTRO_CONTENT.eyebrow}</h2>

          <p className="intro-section__subtitle">
            {INTRO_CONTENT.title}
          </p>

          <p className="intro-section__description">
            {INTRO_CONTENT.description}
          </p>

          <Button variant="secondary" href="/about">
            {INTRO_CONTENT.action}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default IntroSection