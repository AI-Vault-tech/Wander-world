import { motion } from 'framer-motion'
import './ContentPage.css'

const deserts = [
  { name: 'Sahara Desert', location: 'North Africa', description: 'The world\'s largest hot desert, an ocean of sand dunes and rocky plateaus spanning 11 countries.', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80', facts: ['9 million km²', 'Temperature can reach 58°C', 'Only 25% is sand dunes'] },
  { name: 'Atacama Desert', location: 'Chile', description: 'Earth\'s driest non-polar desert. Some weather stations have never recorded rain.', image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80', facts: ['Driest place on Earth', 'NASA tests Mars rovers here', 'Best stargazing on planet'] },
  { name: 'Namib Desert', location: 'Namibia', description: 'Ancient red sand dunes meet the Atlantic, creating one of Earth\'s most photogenic deserts.', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80', facts: ['Oldest desert - 80 million years', 'Red dunes from iron oxide', 'Fog sustains unique wildlife'] }
]

const Deserts = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Endless Deserts</h1>
        <p className="page-description">Vast expanses of silence and solitude where life persists against all odds.</p>
      </motion.div>
      <div className="content-grid">
        {deserts.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /></div>
            <div className="card-content"><h2>{place.name}</h2><p className="card-location">{place.location}</p><p className="card-description">{place.description}</p><ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Deserts
