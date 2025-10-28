import { motion } from 'framer-motion'
import './ContentPage.css'

const waterfalls = [
  { name: 'Angel Falls', location: 'Venezuela', height: '979m', description: 'Earth\'s highest uninterrupted waterfall plunges from Auyán-tepui, turning to mist before reaching the jungle floor.', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80', facts: ['15x higher than Niagara', 'Named after aviator Jimmie Angel', 'Water evaporates before landing'] },
  { name: 'Iguazu Falls', location: 'Argentina/Brazil', height: '82m', description: 'A thundering curtain of 275 individual waterfalls spanning nearly 2 miles of subtropical rainforest.', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80', facts: ['275 separate waterfalls', 'Eleanor Roosevelt said "Poor Niagara"', 'Devil\'s Throat is most dramatic'] },
  { name: 'Niagara Falls', location: 'USA/Canada', height: '51m', description: 'The most powerful waterfall in North America, with 750,000 gallons per second crashing over the precipice.', image: 'https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1920&q=80', facts: ['6 million cubic feet per minute', 'Three waterfalls combined', 'Generates hydroelectric power'] }
]

const Waterfalls = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Majestic Waterfalls</h1>
        <p className="page-description">Where gravity choreographs water's most spectacular dance.</p>
      </motion.div>
      <div className="content-grid">
        {waterfalls.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /><div className="card-overlay"><span className="card-height">{place.height}</span></div></div>
            <div className="card-content"><h2>{place.name}</h2><p className="card-location">{place.location}</p><p className="card-description">{place.description}</p><ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Waterfalls
