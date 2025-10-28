import { motion } from 'framer-motion'
import './ContentPage.css'

const beautifulPlaces = [
  {
    name: 'Antelope Canyon',
    location: 'Arizona, USA',
    description: 'Sculpted by water over millennia, these slot canyons glow with otherworldly light beams that pierce through narrow openings above.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    facts: ['Light beams visible only during certain times', 'Carved by flash floods', 'Sacred Navajo land']
  },
  {
    name: 'Salar de Uyuni',
    location: 'Bolivia',
    description: 'The world\'s largest salt flat becomes a perfect mirror during rainy season, reflecting the sky in an infinite expanse.',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=1920&q=80',
    facts: ['10,582 square kilometers of salt', 'Contains 50-70% of world\'s lithium', 'Mirror effect creates surreal photography']
  },
  {
    name: 'Plitvice Lakes',
    location: 'Croatia',
    description: 'Sixteen crystalline lakes cascade into each other through travertine barriers, creating an aquatic paradise of turquoise water.',
    image: 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1920&q=80',
    facts: ['UNESCO World Heritage Site', '90 waterfalls', 'Water changes color from azure to green']
  },
  {
    name: 'Zhangjiajie',
    location: 'China',
    description: 'Towering sandstone pillars rise from misty forests, inspiring the floating mountains in Avatar.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80',
    facts: ['Over 3,000 sandstone pillars', 'Inspiration for Avatar\'s Pandora', 'World\'s longest glass bridge']
  },
  {
    name: 'Northern Lights',
    location: 'Arctic Circle',
    description: 'Aurora Borealis dances across polar skies in ribbons of green, purple, and red—a celestial ballet of solar particles.',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    facts: ['Caused by solar wind particles', 'Best seen near magnetic poles', 'Can occur on other planets too']
  }
]

const MostBeautiful = () => {
  return (
    <div className="content-page">
      <motion.div className="page-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Most Beautiful Places</h1>
        <p className="page-description">
          Nature's masterpieces. From ethereal light shows to mirror-like salt flats,
          these are the places that redefine beauty itself.
        </p>
      </motion.div>

      <div className="content-grid">
        {beautifulPlaces.map((place, index) => (
          <motion.article key={place.name} className="content-card" initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <div className="card-image-container">
              <div className="card-image" style={{ backgroundImage: `url('${place.image}')` }} />
            </div>
            <div className="card-content">
              <h2>{place.name}</h2>
              <p className="card-location">{place.location}</p>
              <p className="card-description">{place.description}</p>
              <ul className="card-facts">
                {place.facts.map((fact, i) => (<li key={i}>{fact}</li>))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default MostBeautiful
