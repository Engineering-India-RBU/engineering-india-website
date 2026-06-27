import PageLayout from "../components/layout/PageLayout";
import ProfileCard from "../components/team/ProfileCard";

import {
  facultyCoordinator,
  coreTeam,
} from "../data/team";

import "../styles/team.css";

export default function Team() {
  return (
    <PageLayout>
      <section className="team-section">
        <h1 className="team-title">Our Leadership</h1>

        <p className="team-description">
          Engineering India RBU is guided by experienced faculty and driven by
          passionate student leaders committed to innovation, collaboration and
          technical excellence.
        </p>

        <h2 className="team-heading">Faculty Coordinator</h2>

        <ProfileCard
          member={facultyCoordinator}
          variant="faculty"
        />

        <h2 className="team-heading">Core Team</h2>

        <div className="team-grid">
          {coreTeam.map((member) => (
            <ProfileCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}