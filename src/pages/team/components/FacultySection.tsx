import { useState } from 'react'
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa'
import Container from '../../../components/ui/Container'
import type { TeamMember } from '../constants'
import './FacultySection.css'

function initialsFor(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

type FacultySectionProps = {
  faculty: readonly TeamMember[]
}

function FacultySection({ faculty }: FacultySectionProps) {
  return (
    <section className="faculty-section">
      <Container>
        <div className="faculty-section__header">
          <p className="faculty-section__eyebrow">Mentorship</p>

          <h1>Faculty Coordinator</h1>

          <p className="faculty-section__description">
            The guiding force behind the community, mentoring
            initiatives and inspiring students to think beyond.
          </p>
        </div>

        <div className="faculty-section__grid">
          {faculty.map((member) => (
            <FacultyCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FacultyCard({ member }: { member: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showPhoto = member.image && !imageFailed

  return (
    <article className="faculty-card">
      <div className="faculty-card__media">
        {showPhoto ? (
          <img
            src={member.image}
            alt={member.name}
            className="faculty-card__image"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="faculty-card__initials" aria-hidden="true">
            {initialsFor(member.name)}
          </span>
        )}
      </div>

      <h2>{member.name}</h2>

      <p className="faculty-card__role">{member.role}</p>

      {member.affiliation && (
        <p className="faculty-card__affiliation">
          {member.affiliation}
        </p>
      )}

      <div className="faculty-card__socials">
        {member.socials.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on Instagram`}
          >
            <FaInstagram />
          </a>
        )}

        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
          >
            <FaLinkedinIn />
          </a>
        )}

        {member.socials.email && (
          <a
            href={
              member.socials.email.startsWith('http')
                ? member.socials.email
                : `mailto:${member.socials.email}`
            }
            aria-label={`Email ${member.name}`}
          >
            <FaEnvelope />
          </a>
        )}
      </div>
    </article>
  )
}

export default FacultySection