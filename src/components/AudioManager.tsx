import { useState } from 'react'
import { motion } from 'framer-motion'
import './AudioManager.css'

const AudioManager = () => {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <motion.div
      className="audio-manager"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <button
        className="audio-toggle"
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M11 5L6 9H2v6h4l5 4V5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="23" y1="9" x2="17" y2="15" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M11 5L6 9H2v6h4l5 4V5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <span className="audio-label">
        {isMuted ? 'Soundscape Off' : 'Soundscape On'}
      </span>
    </motion.div>
  )
}

export default AudioManager
