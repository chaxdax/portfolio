import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CinematicTextSection from './components/CinematicTextSection'
import MetricsSection from './components/MetricsSection'
import TechnologySection from './components/TechnologySection'
import AiSocSection from './components/AiSocSection'
import ArchitectureSection from './components/ArchitectureSection'
import Footer from './components/Footer'

export default function App() {
  const [entranceComplete, setEntranceComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="relative bg-black text-white w-full overflow-x-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      <Navbar entranceComplete={entranceComplete} />
      <div id="hero"><HeroSection entranceComplete={entranceComplete} /></div>
      <div id="about"><CinematicTextSection /></div>
      <div id="skills"><MetricsSection /></div>
      <div id="work"><TechnologySection /></div>
      <AiSocSection />
      <ArchitectureSection />
      <Footer />
    </div>
  )
}
