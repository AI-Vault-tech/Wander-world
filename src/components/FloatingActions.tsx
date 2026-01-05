import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FloatingActions.css'

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="floating-actions">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              className="fab-action"
              onClick={scrollToTop}
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: -70 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              title="Scroll to Top"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button
              className="fab-action"
              onClick={() => window.print()}
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: -140 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              title="Share"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 7C16.66 7 18 5.66 18 4C18 2.34 16.66 1 15 1C13.34 1 12 2.34 12 4C12 4.23 12.02 12.45 12.06 4.65L5.87 8.06C5.38 7.63 4.75 7.37 4.06 7.37C2.4 7.37 1.06 8.71 1.06 10.37C1.06 12.03 2.4 13.37 4.06 13.37C4.75 13.37 5.38 13.11 5.87 12.68L12.06 16.09C12.02 16.29 12 16.49 12 16.7C12 18.36 13.34 19.7 15 19.7C16.66 19.7 18 18.36 18 16.7C18 15.04 16.66 13.7 15 13.7C14.31 13.7 13.68 13.96 13.19 14.39L6.99 10.98C7.03 10.78 7.05 10.58 7.05 10.37C7.05 10.16 7.03 9.96 6.99 9.76L13.19 6.35C13.68 6.78 14.31 7.04 15 7.04V7Z" fill="currentColor"/>
              </svg>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <motion.button
        className="fab-main"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </motion.button>
    </div>
  )
}

export default FloatingActions
