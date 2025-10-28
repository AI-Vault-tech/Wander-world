import { motion } from 'framer-motion'
import './ContentPage.css'

const tallestPlaces = [
  {
    name: 'Mount Everest',
    location: 'Nepal/Tibet',
    height: '8,849 meters (29,032 feet)',
    description: 'The crown of the world, where earth touches the sky. The highest point on Earth, where climbers test their limits against nature\'s ultimate challenge.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    facts: [
      'First summited by Edmund Hillary and Tenzing Norgay in 1953',
      'Known as Sagarmatha in Nepali and Chomolungma in Tibetan',
      'Over 300 people have died attempting to climb it'
    ]
  },
  {
    name: 'K2',
    location: 'Pakistan/China',
    height: '8,611 meters (28,251 feet)',
    description: 'The Savage Mountain. More dangerous than Everest, with one in four climbers who reach the summit dying on the descent.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
    facts: [
      'Second highest mountain in the world',
      'Has never been climbed in winter until 2021',
      'Considered the most difficult 8000m peak to climb'
    ]
  },
  {
    name: 'Kangchenjunga',
    location: 'Nepal/India',
    height: '8,586 meters (28,169 feet)',
    description: 'The Five Treasures of Snow. Sacred to the local people, climbers traditionally stop short of the summit out of respect.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    facts: [
      'Third highest mountain in the world',
      'Name means "Five Treasures of Snow"',
      'Was thought to be the highest until 1849'
    ]
  },
  {
    name: 'Burj Khalifa',
    location: 'Dubai, UAE',
    height: '828 meters (2,717 feet)',
    description: 'A testament to human ambition, piercing the desert sky. The tallest man-made structure ever built.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
    facts: [
      'Tallest building in the world since 2010',
      '163 floors above ground',
      'Took 6 years to construct'
    ]
  },
  {
    name: 'Angel Falls',
    location: 'Venezuela',
    height: '979 meters (3,212 feet)',
    description: 'The world\'s highest uninterrupted waterfall, plunging from the edge of a tabletop mountain into the jungle below.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80',
    facts: [
      'Highest waterfall in the world',
      '15 times higher than Niagara Falls',
      'Water turns to mist before reaching the ground'
    ]
  },
  {
    name: 'Mauna Kea',
    location: 'Hawaii, USA',
    height: '10,210 meters (33,500 feet) from base',
    description: 'When measured from its base on the ocean floor, Mauna Kea is taller than Mount Everest. A sacred mountain home to world-class observatories.',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1920&q=80',
    facts: [
      'Tallest mountain when measured from base to peak',
      'Sacred site in Hawaiian culture',
      'Home to 13 astronomical observatories'
    ]
  }
]

const TallestPlaces = () => {
  return (
    <div className="content-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Tallest Places on Earth</h1>
        <p className="page-description">
          Where earth reaches for the heavens. From the highest peaks that pierce the clouds
          to monuments of human ambition, these are the places that touch the sky.
        </p>
      </motion.div>

      <div className="content-grid">
        {tallestPlaces.map((place, index) => (
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
                <span className="card-height">{place.height}</span>
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

export default TallestPlaces
