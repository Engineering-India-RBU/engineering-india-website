import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { FEATURED_INITIATIVE } from '../constants'
import './FeaturedInitiative.css'

function FeaturedInitiative() {
  return (
    <section className="featured-initiative">
      <Container>
        <div className="featured-initiative__grid">
          <div className="featured-initiative__content">
            <p className="featured-initiative__eyebrow">
              {FEATURED_INITIATIVE.eyebrow}
            </p>

            <h2>{FEATURED_INITIATIVE.title}</h2>

            <p className="featured-initiative__description">
              {FEATURED_INITIATIVE.description}
            </p>

            <Button variant="secondary">
              {FEATURED_INITIATIVE.action}
            </Button>
          </div>

          <div className="featured-initiative__media">
            <img
              src={FEATURED_INITIATIVE.image}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedInitiative