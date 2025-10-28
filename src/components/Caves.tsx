import { motion } from 'framer-motion'
import './ContentPage.css'

const caves = [
  { name: 'Son Doong Cave', location: 'Vietnam', description: 'The world\'s largest cave passage. So vast it has its own weather system, jungle, and river.', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80', facts: ['200m high, 150m wide', 'Own jungle ecosystem', 'Discovered in 1991'] },
  { name: 'Waitomo Glowworm Caves', location: 'New Zealand', description: 'Underground galaxies of bioluminescent glowworms illuminate limestone caverns like living stars.', image: 'https://images.unsplash.com/photo-1454023989775-79520f04322c?w=1920&q=80', facts: ['Millions of glowworms', 'Larvae create light', '30 million years old'] },
  { name: 'Crystal Cave', location: 'Mexico', description: 'Giant selenite crystals up to 12 meters long fill this cave of wonders beneath the Chihuahuan Desert.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80', facts: ['Crystals up to 12m long', '50°C temperature', 'Flooded to preserve'] }
]

const Caves = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Mysterious Caves</h1>
        <p className="page-description">Subterranean wonders carved by water and time, holding secrets in perpetual darkness.</p>
      </motion.div>
      <div className="content-grid">
        {caves.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /></div>
            <div className="card-content"><h2>{place.name}</h2><p className="card-location">{place.location}</p><p className="card-description">{place.description}</p><ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Caves
