import { motion } from 'framer-motion'
import './ContentPage.css'

const deepestPlaces = [
  {
    name: 'Mariana Trench',
    location: 'Pacific Ocean',
    depth: '10,994 meters (36,070 feet)',
    description: 'The deepest point in Earth\'s oceans. A mysterious realm where pressure crushes and darkness reigns eternal. Only three people have ever descended to its deepest point, Challenger Deep.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    facts: [
      'Deeper than Mount Everest is tall',
      'Pressure is over 1000 times atmospheric pressure',
      'Temperature hovers just above freezing'
    ]
  },
  {
    name: 'Krubera Cave',
    location: 'Abkhazia, Georgia',
    depth: '2,197 meters (7,208 feet)',
    description: 'The deepest known cave on Earth. A vertical labyrinth descending into darkness, discovered to continue deeper with each expedition.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    facts: [
      'Also known as Voronya Cave',
      'Took decades of expeditions to map',
      'Contains underground rivers and waterfalls'
    ]
  },
  {
    name: 'Lake Baikal',
    location: 'Siberia, Russia',
    depth: '1,642 meters (5,387 feet)',
    description: 'The world\'s deepest and oldest lake. Contains 20% of the world\'s fresh surface water and is home to thousands of unique species found nowhere else.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    facts: [
      'Over 25 million years old',
      'Contains more water than all North American Great Lakes combined',
      'Frozen surface thick enough to drive on in winter'
    ]
  },
  {
    name: 'Dead Sea',
    location: 'Israel/Jordan',
    depth: '430 meters (1,410 feet) below sea level',
    description: 'The lowest point on Earth\'s land surface. So salty that humans float effortlessly, yet no fish can survive its hypersaline waters.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80',
    facts: [
      'Lowest elevation on Earth\'s surface',
      '34% salt content - 10x saltier than ocean',
      'Shrinking at about 1 meter per year'
    ]
  }
]

const DeepestPlaces = () => {
  return (
    <div className="content-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Deepest Places on Earth</h1>
        <p className="page-description">
          Descend into the abyss. From ocean trenches that plunge deeper than mountains rise,
          to caves that spiral into the earth's heart, these are the planet's most profound depths.
        </p>
      </motion.div>

      <div className="content-grid">
        {deepestPlaces.map((place, index) => (
          <motion.article
            key={place.name}
            className="content-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="card-image-container">
              <div
                className="card-image"
                style={{ backgroundImage: `url('${place.image}')` }}
              />
              <div className="card-overlay">
                <span className="card-height">{place.depth}</span>
              </div>
            </div>
            
            <div className="card-content">
              <h2>{place.name}</h2>
              <p className="card-location">{place.location}</p>
              <p className="card-description">{place.description}</p>
              
              <ul className="card-facts">
                {place.facts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default DeepestPlaces
