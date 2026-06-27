import "../../styles/team.css";
import { FaLinkedin } from "react-icons/fa";
import type { TeamMember } from "../../data/team";

interface ProfileCardProps {
  member: TeamMember;
  variant?: "faculty" | "core";
}

export default function ProfileCard({
  member,
  variant = "core",
}: ProfileCardProps) {
  return (
    <article className={`profile-card profile-card--${variant}`}>
      <img
        src={member.image}
        alt={`${member.name} - ${member.role}`}
        className="profile-card__image"
      />

      <div className="profile-card__content">
        <h3 className="profile-card__name">{member.name}</h3>

        <p className="profile-card__role">{member.role}</p>

        {member.introduction && (
          <p className="profile-card__introduction">
            {member.introduction}
          </p>
        )}

        {member.linkedin && (
            <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card__linkedin"
                aria-label={`${member.name} LinkedIn`}
            >
                <FaLinkedin />
            </a>
        )}
      </div>
    </article>
  );
}