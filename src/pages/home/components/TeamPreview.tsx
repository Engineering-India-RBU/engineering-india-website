import { useState } from 'react'
import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { TEAM_PREVIEW } from '../constants'
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa'
import './TeamPreview.css'

function TeamPreview() {
  return (
    <section className="team-preview">
      <Container>
        <div className="team-preview__header">
          <div>
            <p className="team-preview__eyebrow">Our Team</p>

            <h2>
              The people behind
              <br />
              Engineering India.
            </h2>
          </div>

          <Button variant="secondary">
            Meet the Team
          </Button>
        </div>

        <div className="team-preview__grid">
          {TEAM_PREVIEW.map((member) => (
            <TeamCard
              key={member.role}
              role={member.role}
              name={member.name}
              year={member.year}
              branch={member.branch}
              image={member.image}
              description={member.description}
              socials={member.socials}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

type TeamCardProps = {
  role: string
  name: string
  year: string
  branch: string
  image: string
  description: string
  socials: {
    instagram: string
    linkedin: string
    whatsapp: string
  }
}

function TeamCard({
  role,
  name,
  year,
  branch,
  image,
  description,
  socials,
}: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped((current) => !current)
  }

  return (
    <div
      className={`team-card ${
        isFlipped ? 'team-card--flipped' : ''
      }`}
      onClick={handleFlip}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleFlip()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={
        isFlipped
          ? `Show ${role} card`
          : `Show details about ${name}, ${role}`
      }
    >
      <div className="team-card__inner">
        {/* Front */}
        <div className="team-card__face team-card__front">
          <span className="team-card__brand">
            ENGINEERING INDIA
          </span>

          <span className="team-card__role">
            {role}
          </span>
        </div>

        {/* Back */}
        <div className="team-card__face team-card__back">
          <div className="team-card__image-wrapper">
            <img
              src={image}
              alt={`${name} - ${role}`}
              className="team-card__image"
            />
          </div>

          <div className="team-card__details">
            <h3 className="team-card__name">
              {name}
            </h3>

            <p className="team-card__position">
              {role}
            </p>

            <p className="team-card__academic">
              {year}
              <span aria-hidden="true">•</span>
              {branch}
            </p>

            <p className="team-card__description">
              {description}
            </p>

            <div
                className="team-card__socials"
                onClick={(event) => event.stopPropagation()}
                >
                <a
                    href={socials.instagram || '#'}
                    target={socials.instagram ? '_blank' : undefined}
                    rel={socials.instagram ? 'noopener noreferrer' : undefined}
                    aria-label={`${name}'s Instagram`}
                    onClick={(event) => {
                    if (!socials.instagram) {
                        event.preventDefault()
                    }
                    }}
                >
                    <FaInstagram aria-hidden="true" />
                </a>

                <a
                    href={socials.linkedin || '#'}
                    target={socials.linkedin ? '_blank' : undefined}
                    rel={socials.linkedin ? 'noopener noreferrer' : undefined}
                    aria-label={`${name}'s LinkedIn`}
                    onClick={(event) => {
                    if (!socials.linkedin) {
                        event.preventDefault()
                    }
                    }}
                >
                    <FaLinkedinIn aria-hidden="true" />
                </a>

                <a
                    href={socials.whatsapp || '#'}
                    target={socials.whatsapp ? '_blank' : undefined}
                    rel={socials.whatsapp ? 'noopener noreferrer' : undefined}
                    aria-label={`Contact ${name} on WhatsApp`}
                    onClick={(event) => {
                    if (!socials.whatsapp) {
                        event.preventDefault()
                    }
                    }}
                >
                    <FaWhatsapp aria-hidden="true" />
                </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPreview