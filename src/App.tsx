import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HomePage from './pages/home/page'
import AboutPage from './pages/about/page'
import TeamPage from './pages/team/page'
import EventsPage from './pages/events/page'
import ComingSoonPage from './pages/coming-soon/page'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App