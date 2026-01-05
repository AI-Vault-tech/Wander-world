import { motion } from 'framer-motion'
import './MomentOfSilence.css'

const MomentOfSilence = () => {
  return (
    <motion.div
      className="moment-of-silence"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="fractal-loader">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <g className="loading-fractal">
            <path
              d="M100,50 L120,80 L100,110 M100,50 L80,80 L100,110"
              stroke="var(--aurora-glow)"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M120,80 L140,90 L120,100 M80,80 L60,90 L80,100"
              stroke="var(--mineral-teal)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

export default MomentOfSilence
