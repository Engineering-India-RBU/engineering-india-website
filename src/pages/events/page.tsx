import EventsHero from './components/EventsHero'
import FeaturedEvent from './components/FeaturedEvent'
import EventsGrid from './components/EventsGrid'
import EventsCTA from './components/EventsCTA'
import { EVENTS } from './constants'
import { eventTimestamp } from './utils'

function pickFeatured() {
  return [...EVENTS].sort(
    (a, b) => eventTimestamp(b.date) - eventTimestamp(a.date),
  )[0]
}

function EventsPage() {
  const featured = pickFeatured()
  const remaining = EVENTS.filter((event) => event !== featured)

  return (
    <main className="events-page">
      <EventsHero />
      <FeaturedEvent event={featured} />
      <EventsGrid events={remaining} />
      <EventsCTA />
    </main>
  )
}

export default EventsPage