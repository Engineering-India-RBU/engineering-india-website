import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { FINAL_CTA } from '../constants'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta">
      <Container>
        <div className="final-cta__box">
          <div className="final-cta__content">
            <p className="final-cta__eyebrow">
              {FINAL_CTA.eyebrow}
            </p>

            <h2>{FINAL_CTA.title}</h2>

            <p className="final-cta__description">
              {FINAL_CTA.description}
            </p>

            <Button variant="primary">
              {FINAL_CTA.action}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA