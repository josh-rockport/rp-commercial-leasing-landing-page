import { useEffect } from 'react'
import Hero from './components/Hero'
import BuildingGrid from './components/BuildingGrid'
import WhyChoose from './components/WhyChoose'
// import Testimonials from './components/Testimonials'
import Benefits from './components/Benefits'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { initializeAnalytics } from './utils/analytics'

function App() {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return (
    <div className="app">
      <Hero />
      <BuildingGrid />
      <WhyChoose />
      {/* <Testimonials /> */}
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
