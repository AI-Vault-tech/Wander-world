import { motion } from 'framer-motion'
import './ContentPage.css'

const wonders = [
  { name: 'Grand Canyon', location: 'Arizona, USA', description: 'A mile-deep chasm carved by the Colorado River over 6 million years, revealing 2 billion years of Earth\'s geological history.', image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1920&q=80', facts: ['277 miles long', '18 miles wide', 'Up to 1 mile deep'] },
  { name: 'Great Barrier Reef', location: 'Australia', description: 'The world\'s largest living structure, visible from space. A vast underwater ecosystem of coral gardens and marine life.', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920&q=80', facts: ['2,300 kilometers long', '900 islands', 'Home to 1,500 fish species'] },
  { name: 'Mount Kilimanjaro', location: 'Tanzania', description: 'Africa\'s highest peak, a dormant volcano crowned with glaciers near the equator, rising from tropical plains.', image: 'https://images.unsplash.com/photo-1589553416260-f586c6f1d906?w=1920&q=80', facts: ['5,895 meters tall', 'Three volcanic cones', 'Glaciers shrinking rapidly'] },
  { name: 'Victoria Falls', location: 'Zambia/Zimbabwe', description: 'The largest sheet of falling water on Earth. Known locally as "The Smoke That Thunders" for its deafening roar and perpetual mist.', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80', facts: ['1,708 meters wide', '108 meters high', 'Twice height of Niagara Falls'] }
]

const NaturalWonders = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Natural Wonders of the World</h1>
        <p className="page-description">Earth's greatest spectacles. Monuments of nature that inspire awe and humility.</p>
      </motion.div>
      <div className="content-grid">
        {wonders.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container"><div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} /></div>
            <div className="card-content">
              <h2>{place.name}</h2>
              <p className="card-location">{place.location}</p>
              <p className="card-description">{place.description}</p>
              <ul className="card-facts">{place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default NaturalWonders
