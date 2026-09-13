import Container from '../../../components/ui/Container'
import { VISION_MISSION } from '../constants'
import { useReveal } from './useReveal'
import './VisionMission.css'

function VisionMission() {
  const { sectionRef, isVisible } = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className={`about-vision-mission about-vision-mission--reveal ${
        isVisible ? 'about-vision-mission--visible' : ''
      }`}
    >
      <Container>
        <div className="about-vision-mission__header">
          <p className="about-vision-mission__eyebrow">
            {VISION_MISSION.eyebrow}
          </p>

          <h2>{VISION_MISSION.heading}</h2>
        </div>

        <div className="about-vision-mission__grid">
          <article className="about-vision-mission__block">
            <span className="about-vision-mission__index" aria-hidden="true">
              01
            </span>

            <h3>{VISION_MISSION.vision.label}</h3>

            <span
              className="about-vision-mission__rule"
              aria-hidden="true"
            />

            <p>{VISION_MISSION.vision.text}</p>
          </article>

          <article className="about-vision-mission__block">
            <span className="about-vision-mission__index" aria-hidden="true">
              02
            </span>

            <h3>{VISION_MISSION.mission.label}</h3>

            <span
              className="about-vision-mission__rule"
              aria-hidden="true"
            />

            <p>{VISION_MISSION.mission.text}</p>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default VisionMission