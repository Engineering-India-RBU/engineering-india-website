import Container from '../../../components/ui/Container'
import { WHO_WE_ARE } from '../constants'
import { useReveal } from './useReveal'
import './WhoWeAre.css'

function WhoWeAre() {
  const { sectionRef, isVisible } = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className={`about-who about-who--reveal ${
        isVisible ? 'about-who--visible' : ''
      }`}
    >
      <Container>
        <div className="about-who__grid">
          <header className="about-who__heading">
            <p className="about-who__eyebrow">{WHO_WE_ARE.eyebrow}</p>

            <h2>{WHO_WE_ARE.heading}</h2>
          </header>

          <div className="about-who__body">
            {WHO_WE_ARE.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                style={
                  {
                    '--reveal-delay': `${index * 130}ms`,
                  } as React.CSSProperties
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhoWeAre