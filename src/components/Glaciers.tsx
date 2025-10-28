import { motion } from 'framer-motion'
import './ContentPage.css'

const glaciers = [
  { name: 'Perito Moreno Glacier', location: 'Argentina', description: 'One of the few advancing glaciers on Earth. Massive ice walls periodically calve with thunderous roars.', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80', facts: ['97 km² ice field', 'Still advancing', 'Ice ruptures create spectacle'] },
  { name: 'Vatnajökull', location: 'Iceland', description: 'Europe\'s largest glacier conceals active volcanoes, creating a realm of ice caves and fire.', image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920&q=80', facts: ['8,100 km²', 'Contains several volcanoes', 'Ice up to 1000m thick'] },
  { name: 'Aletsch Glacier', location: 'Switzerland', description: 'The Alps\' greatest glacier, a 23km river of ice flowing through mountain valleys.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', facts: ['Largest glacier in Alps', '23 km long', 'UNESCO World Heritage'] }
]

const Glaciers = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Eternal Glaciers</h1>
        <p className="page-description">Rivers of ice flowing through time, ancient frozen sculptures shaped by millennia.</p>
      </motion.div>
      <div className="content-grid">
        {glaciers.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /></div>
            <div className="card-content"><h2>{place.name}</h2><p className="card-location">{place.location}</p><p className="card-description">{place.description}</p><ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Glaciers
