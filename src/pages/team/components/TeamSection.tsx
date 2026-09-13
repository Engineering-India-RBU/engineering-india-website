import { useState } from 'react'
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa'

import Container from '../../../components/ui/Container'
import type { TeamMember } from '../constants'
import './TeamSection.css'

type TeamSectionProps = {
  heading: string
  members: readonly TeamMember[]
}

function initialsFor(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function TeamCard({
  member,
  index,
}: {
  member: TeamMember
  index: number
}) {
  const [imageFailed, setImageFailed] = useState(false)
  const showPhoto = member.image && !imageFailed

  return (
    <article
      className="team-member"
      style={
        {
          '--member-delay': `${index * 40}ms`,
        } as React.CSSProperties
      }
    >
      <div className="team-member__image-wrapper">
        {showPhoto ? (
          <img
            src={member.image}
            alt={member.name}
            className="team-member__image"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="team-member__initials" aria-hidden="true">
            {initialsFor(member.name)}
          </span>
        )}
      </div>

      <div className="team-member__content">
        <p className="team-member__role">{member.role}</p>

        <h3>{member.name}</h3>

        <p className="team-member__academic">
          {member.year}
          {member.year && member.branch ? ' · ' : ''}
          {member.branch}
        </p>

        <div className="team-member__socials">
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
      </div>
    </article>
  )
}

function TeamSection({
  heading,
  members,
}: TeamSectionProps) {
  return (
    <section className="team-section">
      <Container>
        <div className="team-section__header">
          <h2>{heading}</h2>
        </div>

        {members.length > 0 ? (
          <div className="team-section__grid">
            {members.map((member, index) => (
              <TeamCard
                key={`${member.role}-${member.name}`}
                member={member}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="team-section__empty">
            Team members will be added soon.
          </p>
        )}
      </Container>
    </section>
  )
}

export default TeamSection
