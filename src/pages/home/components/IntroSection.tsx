import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { INTRO_CONTENT } from '../constants'
import './IntroSection.css'

function IntroSection() {
  return (
    <section className="intro-section">
      <Container>
        <div className="intro-section__content">
          <p className="intro-section__eyebrow">
            {INTRO_CONTENT.eyebrow}
          </p>

          <h2>{INTRO_CONTENT.title}</h2>

          <p className="intro-section__description">
            {INTRO_CONTENT.description}
          </p>

          <Button variant="secondary">
            {INTRO_CONTENT.action}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default IntroSection