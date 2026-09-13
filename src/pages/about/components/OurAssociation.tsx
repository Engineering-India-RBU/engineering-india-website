import Container from '../../../components/ui/Container'
import { OUR_ASSOCIATION } from '../constants'
import { useReveal } from './useReveal'
import './OurAssociation.css'

function OurAssociation() {
  const { sectionRef, isVisible } = useReveal<HTMLElement>(0.2)

  return (
    <section
      ref={sectionRef}
      className={`about-association about-association--reveal ${
        isVisible ? 'about-association--visible' : ''
      }`}
    >
      <Container>
        <div className="about-association__grid">
          <div className="about-association__emblem">
            <span className="about-association__logo-frame">
              <img
                className="about-association__logo"
                src={OUR_ASSOCIATION.logo}
                alt={OUR_ASSOCIATION.logoAlt}
              />
            </span>

            <span className="about-association__brand">
              {OUR_ASSOCIATION.name}
            </span>
          </div>

          <div className="about-association__content">
            <p className="about-association__eyebrow">
              {OUR_ASSOCIATION.eyebrow}
            </p>

            <h2>{OUR_ASSOCIATION.heading}</h2>

            <p className="about-association__lead">
              {OUR_ASSOCIATION.lead}
            </p>

            {OUR_ASSOCIATION.paragraphs.map((paragraph) => (
              <p className="about-association__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}

            <div className="about-association__relation">
              <span className="about-association__relation-name">
                {OUR_ASSOCIATION.name}
              </span>

              <span
                className="about-association__relation-link"
                aria-hidden="true"
              />

              <span className="about-association__relation-name about-association__relation-name--club">
                {OUR_ASSOCIATION.partner}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurAssociation