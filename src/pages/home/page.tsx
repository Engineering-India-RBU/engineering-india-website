import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import FeaturedInitiative from './components/FeaturedInitiative'
import OurEvents from './components/OurEvents'
import FinalCTA from './components/FinalCTA'

function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <FeaturedInitiative />
      <OurEvents />
      <FinalCTA />
    </main>
  )
}

export default HomePage