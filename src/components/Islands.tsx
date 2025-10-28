import { motion } from 'framer-motion'
import './ContentPage.css'

const islands = [
  { name: 'Bora Bora', location: 'French Polynesia', description: 'A jewel in turquoise waters. Overwater bungalows overlook coral reefs and a lagoon of impossible blue.', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80', facts: ['Surrounded by barrier reef', 'Remnant of extinct volcano', 'Polynesian paradise'] },
  { name: 'Santorini', location: 'Greece', description: 'Whitewashed villages cling to volcanic cliffs above the deepest blue Aegean waters. A caldera frozen in time.', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80', facts: ['Formed by volcanic eruption', 'Famous sunset views', 'Ancient Minoan civilization'] },
  { name: 'Galápagos', location: 'Ecuador', description: 'Darwin\'s living laboratory. Volcanic islands where evolution continues its grand experiment in isolation.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80', facts: ['Inspired Darwin\'s theory', 'Unique species on each island', 'Marine iguana only here'] }
]

const Islands = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Paradise Islands</h1>
        <p className="page-description">Isolated gems surrounded by endless ocean, each a world unto itself.</p>
      </motion.div>
      <div className="content-grid">
        {islands.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /></div>
            <div className="card-content"><h2>{place.name}</h2><p className="card-location">{place.location}</p><p className="card-description">{place.description}</p><ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Islands
