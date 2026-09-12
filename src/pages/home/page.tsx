import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import FeaturedInitiative from './components/FeaturedInitiative'
import OurEvents from './components/OurEvents'
import TeamPreview from './components/TeamPreview'
import FinalCTA from './components/FinalCTA'

function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <FeaturedInitiative />
      <OurEvents />
      <TeamPreview />
      <FinalCTA />
    </main>
  )
}

export default HomePage