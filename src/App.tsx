import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import CompassNav from './components/CompassNav'
import MomentOfSilence from './components/MomentOfSilence'
import ParticleBackground from './components/ParticleBackground'
import FloatingActions from './components/FloatingActions'
import TallestPlaces from './components/TallestPlaces'
import DeepestPlaces from './components/DeepestPlaces'
import MostBeautiful from './components/MostBeautiful'
import NaturalWonders from './components/NaturalWonders'
import Waterfalls from './components/Waterfalls'
import Deserts from './components/Deserts'
import Forests from './components/Forests'
import Islands from './components/Islands'
import Caves from './components/Caves'
import Glaciers from './components/Glaciers'
import FuturisticCities from './components/FuturisticCities'
import Blog from './components/Blog'
import Atlas from './components/Atlas'
import Serendipity from './components/Serendipity'
import AudioManager from './components/AudioManager'

function App() {
  const [showSilence, setShowSilence] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState<Array<{x: number, y: number, id: number}>>([])
  const trailCountRef = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSilence(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      
      // Add cursor trail
      const newTrail = { x: e.clientX, y: e.clientY, id: trailCountRef.current++ }
      setTrails(prev => [...prev.slice(-8), newTrail])
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Router>
      <div className="app">
        {/* Custom Arrow Cursor with Trails */}
        {trails.map((trail, index) => (
          <div
            key={trail.id}
            className="custom-cursor-trail"
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
              opacity: (index + 1) / trails.length * 0.5,
              transform: `translate(-50%, -50%) scale(${(index + 1) / trails.length})`,
            }}
          />
        ))}
        <div 
          className="custom-cursor" 
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5 3L19 12L12 13L9 21L5 3Z" 
              fill="url(#arrowGradient)" 
              stroke="var(--neon-cyan)" 
              strokeWidth="0.8"
            />
            <defs>
              <linearGradient id="arrowGradient" x1="5" y1="3" x2="19" y2="21">
                <stop offset="0%" stopColor="var(--neon-cyan)" />
                <stop offset="50%" stopColor="var(--sky-light)" />
                <stop offset="100%" stopColor="var(--neon-magenta)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <AudioManager />
        
        {/* Particle Network Background */}
        {!showSilence && <ParticleBackground />}
        
        <AnimatePresence mode="wait">
          {showSilence && <MomentOfSilence key="silence" />}
        </AnimatePresence>

        {!showSilence && (
          <>
            <Header />
            <CompassNav />
            <FloatingActions />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tallest-places" element={<TallestPlaces />} />
              <Route path="/deepest-places" element={<DeepestPlaces />} />
              <Route path="/most-beautiful" element={<MostBeautiful />} />
              <Route path="/natural-wonders" element={<NaturalWonders />} />
              <Route path="/futuristic-cities" element={<FuturisticCities />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/waterfalls" element={<Waterfalls />} />
              <Route path="/deserts" element={<Deserts />} />
              <Route path="/forests" element={<Forests />} />
              <Route path="/islands" element={<Islands />} />
              <Route path="/caves" element={<Caves />} />
              <Route path="/glaciers" element={<Glaciers />} />
              <Route path="/atlas/:category" element={<Atlas />} />
              <Route path="/serendipity" element={<Serendipity />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}

export default App
