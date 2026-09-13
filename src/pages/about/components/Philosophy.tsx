import Container from '../../../components/ui/Container'
import { PHILOSOPHY } from '../constants'
import { useReveal } from './useReveal'
import './Philosophy.css'

function Philosophy() {
  const { sectionRef, isVisible } = useReveal<HTMLElement>(0.2)

  return (
    <section
      ref={sectionRef}
      className={`about-philosophy about-philosophy--reveal ${
        isVisible ? 'about-philosophy--visible' : ''
      }`}
    >
      <Container>
        <figure className="about-philosophy__figure">
          <p className="about-philosophy__eyebrow">
            {PHILOSOPHY.eyebrow}
          </p>

          <span
            className="about-philosophy__mark"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="about-philosophy__quote">
            {PHILOSOPHY.quote}
          </blockquote>

          <figcaption className="about-philosophy__attribution">
            {PHILOSOPHY.attribution}
          </figcaption>

          <p className="about-philosophy__supporting">
            {PHILOSOPHY.supporting}
          </p>
        </figure>
      </Container>
    </section>
  )
}

export default Philosophy