import FacultySection from './components/FacultySection'
import TeamSection from './components/TeamSection'
import { ALUMNI, FACULTY, PRESENT_TEAM } from './constants'

function TeamPage() {
  return (
    <main>
      <FacultySection faculty={FACULTY} />

      <TeamSection
        heading="Team 2026-27"
        members={PRESENT_TEAM}
      />

      <TeamSection
        heading="Alumni"
        members={ALUMNI}
      />
    </main>
  )
}

export default TeamPage