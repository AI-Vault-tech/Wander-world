import { motion } from 'framer-motion'
import './ContentPage.css'

const volcanicLands = [
  {
    name: 'Yellowstone Caldera',
    location: 'USA',
    type: 'Supervolcano',
    description: 'A massive volcanic system beneath Yellowstone National Park. Home to geysers, hot springs, and mud pots, this supervolcano has the potential for catastrophic eruptions.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    facts: [
      'Last erupted 640,000 years ago',
      'Contains more than 10,000 geothermal features',
      'Overlies a hotspot in Earth\'s mantle'
    ]
  },
  {
    name: 'Mount Vesuvius',
    location: 'Italy',
    type: 'Stratovolcano',
    description: 'The volcano that destroyed Pompeii and Herculaneum in 79 AD. Still active today, it looms over the Bay of Naples and millions of people live in its shadow.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    facts: [
      'Destroyed Pompeii and Herculaneum',
      'Only active volcano in mainland Europe',
      'Erupted 50+ times since 79 AD'
    ]
  },
  {
    name: 'Mount Fuji',
    location: 'Japan',
    type: 'Stratovolcano',
    description: 'Japan\'s highest peak and an iconic stratovolcano. A perfectly symmetrical cone that has been dormant since 1707, it\'s considered sacred and is a UNESCO World Heritage Site.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
    facts: [
      'Last erupted in 1707',
      'Sacred in Japanese culture',
      'Climbed by over 300,000 people annually'
    ]
  },
  {
    name: 'Kilauea',
    location: 'Hawaii, USA',
    type: 'Shield Volcano',
    description: 'One of the world\'s most active volcanoes, continuously erupting since 1983. Creates new land as lava flows into the ocean, expanding the Big Island of Hawaii.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    facts: [
      'Erupted continuously from 1983-2018',
      'Creates new land at 1.8 acres per year',
      'Home to the goddess Pele in Hawaiian mythology'
    ]
  },
  {
    name: 'Eyjafjallajökull',
    location: 'Iceland',
    type: 'Stratovolcano',
    description: 'A stratovolcano covered by an ice cap. Its 2010 eruption caused the largest air-traffic shutdown since World War II, disrupting travel for millions of people.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    facts: [
      'Caused massive air travel disruption in 2010',
      'Name is unpronounceable for most non-Icelanders',
      'Ice cap makes eruptions particularly explosive'
    ]
  },
  {
    name: 'Mount St. Helens',
    location: 'Washington, USA',
    type: 'Stratovolcano',
    description: 'The most destructive volcanic eruption in U.S. history occurred here in 1980. The blast removed the entire north face of the mountain, creating a massive crater.',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
    facts: [
      '1980 eruption was the deadliest in U.S. history',
      'Blast removed 1,300 feet from summit',
      'Recovery has created a unique ecosystem study site'
    ]
  }
]

const VolcanicLands = () => {
  return (
    <div className="content-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Earth\'s Volcanic Wonders</h1>
        <p className="page-description">
          Where the planet\'s inner fire breaks through to the surface. These powerful landscapes showcase
          the raw geological forces that shape our world.
        </p>
      </motion.div>

      <div className="content-grid">
        {volcanicLands.map((place, index) => (
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
                <span className="card-height">{place.type}</span>
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

export default VolcanicLands