import Container from '../../../components/ui/Container'
import { FEATURED_INITIATIVE } from '../constants'
import './FeaturedInitiative.css'

function FeaturedInitiative() {
  return (
    <section className="featured-initiative">
      <Container>
        <div className="featured-initiative__grid">
          <div className="featured-initiative__content">
            <h2>{FEATURED_INITIATIVE.eyebrow}</h2>

            <p className="featured-initiative__subtitle">
              {FEATURED_INITIATIVE.title}
            </p>

            <p className="featured-initiative__description">
              {FEATURED_INITIATIVE.description}
            </p>
          </div>

          <div className="featured-initiative__media">
            <iframe
              src={FEATURED_INITIATIVE.videoUrl}
              title="Abhyudaya Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedInitiative