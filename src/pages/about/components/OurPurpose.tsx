import Container from '../../../components/ui/Container'
import { OUR_PURPOSE } from '../constants'
import { useReveal } from './useReveal'
import './OurPurpose.css'

function OurPurpose() {
  const { sectionRef, isVisible } = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className={`about-purpose about-purpose--reveal ${
        isVisible ? 'about-purpose--visible' : ''
      }`}
    >
      <Container>
        <div className="about-purpose__header">
          <p className="about-purpose__eyebrow">{OUR_PURPOSE.eyebrow}</p>

          <h2>{OUR_PURPOSE.heading}</h2>

          <p className="about-purpose__content">{OUR_PURPOSE.content}</p>
        </div>

        <div className="about-purpose__metrics">
          {OUR_PURPOSE.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="about-purpose__metric"
              style={
                { '--metric-delay': `${index * 150}ms` } as React.CSSProperties
              }
            >
              <span className="about-purpose__value">{metric.value}</span>

              <span className="about-purpose__rule" aria-hidden="true" />

              <span className="about-purpose__label">{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default OurPurpose