import { motion } from 'framer-motion'
import './ContentPage.css'

const forests = [
  { name: 'Amazon Rainforest', location: 'South America', description: 'The lungs of Earth. A vast emerald cathedral housing 10% of all species on the planet.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', facts: ['5.5 million km²', 'Produces 20% of oxygen', '390 billion trees'] },
  { name: 'Redwood Forest', location: 'California, USA', description: 'Home to Earth\'s tallest trees. Ancient giants reaching toward the sky for over 2,000 years.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80', facts: ['Trees over 115m tall', 'Can live 2,200 years', 'Bark up to 30cm thick'] },
  { name: 'Aokigahara', location: 'Japan', description: 'The Sea of Trees. A mystical forest at Mount Fuji\'s base where compasses fail and silence reigns.', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=80', facts: ['Formed on lava rock', 'Magnetic anomalies', 'Extremely quiet'] }
]

const Forests = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Ancient Forests</h1>
        <p className="page-description">Cathedrals of green where time moves differently and life flourishes in countless forms.</p>
      </motion.div>
      <div className="content-grid">
        {forests.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /></div>
            <div className="card-content"><h2>{place.name}</h2><p className="card-location">{place.location}</p><p className="card-description">{place.description}</p><ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Forests
