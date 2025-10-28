import { motion } from 'framer-motion'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="hero-image">
          <div className="gradient-overlay" />
          <motion.div
            className="parallax-layer layer-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, var(--deep-ocean)), 
                url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
          />
        </div>

        <motion.div
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <h1 className="title">The Beauty of the World</h1>
          <p className="subtitle">
            A meditation on the profound, intricate, and overlooked wonders of Earth
          </p>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <p className="scroll-text">Scroll to Explore</p>
          <div className="scroll-line" />
        </motion.div>
      </motion.div>

      <section className="content-section">
        <motion.div
          className="content-block"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <h2>Symmetry & Patterns</h2>
          <p>
            In the spiral of a seashell and the sprawl of a galaxy, 
            in the hexagonal perfection of basalt columns and the fractals of ferns,
            nature repeats itself in infinite variation.
          </p>
        </motion.div>

        <motion.div
          className="image-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div 
            className="content-image"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')`,
            }}
          />
          <div className="image-caption">
            <p className="location">Iceland • Giants Causeway</p>
            <p className="fact">40,000 interlocking basalt columns formed 60 million years ago</p>
          </div>
        </motion.div>

        <motion.div
          className="content-block"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <h2>Light & Shadow</h2>
          <p>
            The golden hour paints mountains in amber. 
            The aurora dances in silence. 
            Deep forest canopies filter sunlight into emerald cathedrals.
          </p>
        </motion.div>

        <motion.div
          className="image-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div 
            className="content-image"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80')`,
            }}
          />
          <div className="image-caption">
            <p className="location">Norway • Lofoten Islands</p>
            <p className="fact">The aurora borealis, a celestial dance of solar wind and magnetosphere</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
