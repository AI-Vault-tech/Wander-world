import { motion } from 'framer-motion'
import './ContentPage.css'

const deserts = [
  {
    name: 'Sahara Desert',
    location: 'North Africa',
    area: '9,200,000 km²',
    description: 'The largest hot desert in the world, covering most of North Africa. A vast expanse of sand dunes, rocky plateaus, and oases that has inspired countless myths and legends.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    facts: [
      'Almost as large as the United States or China',
      'Temperatures can reach 50°C (122°F)',
      'Home to the Tuareg people, known as "Blue People"'
    ]
  },
  {
    name: 'Antarctic Desert',
    location: 'Antarctica',
    area: '14,000,000 km²',
    description: 'The largest desert in the world by area. A frozen wasteland of ice and snow where temperatures plummet below -80°C (-112°F) and only the hardiest creatures survive.',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
    facts: [
      'Contains 90% of Earth\'s fresh water',
      'Coldest place on Earth',
      'Largest desert by area'
    ]
  },
  {
    name: 'Atacama Desert',
    location: 'Chile',
    area: '105,000 km²',
    description: 'The driest non-polar desert in the world. Some areas have never received rain, and its clear skies make it one of the best places on Earth for stargazing.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    facts: [
      'Some areas haven\'t seen rain in 500 years',
      'Home to ALMA, the world\'s largest radio telescope',
      'Mars-like landscape used for testing rovers'
    ]
  },
  {
    name: 'Gobi Desert',
    location: 'Mongolia/China',
    area: '1,295,000 km²',
    description: 'A cold desert that spans northern China and southern Mongolia. Known for its dinosaur fossils, this desert was once part of the Silk Road trading routes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    facts: [
      'One of the world\'s most significant dinosaur fossil sites',
      'Temperatures range from -40°C to 50°C',
      'Part of the ancient Silk Road'
    ]
  },
  {
    name: 'Namib Desert',
    location: 'Namibia',
    area: '81,000 km²',
    description: 'The oldest desert in the world, estimated to be 55 million years old. Known for its towering red sand dunes and the mysterious "fairy circles" that dot the landscape.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
    facts: [
      'Home to the world\'s tallest sand dunes',
      'Coastal desert with fog as main water source',
      'Ancient Welwitschia plants can live over 1,000 years'
    ]
  },
  {
    name: 'Sonoran Desert',
    location: 'USA/Mexico',
    area: '260,000 km²',
    description: 'One of the most biodiverse deserts in the world, home to the iconic saguaro cactus. This desert comes alive during brief rainy seasons with spectacular wildflower blooms.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    facts: [
      'Only place where saguaro cacti grow naturally',
      'Over 2,000 species of plants',
      'Home to the endangered Sonoran pronghorn'
    ]
  }
]

const Deserts = () => {
  return (
    <div className="content-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Earth\'s Most Extraordinary Deserts</h1>
        <p className="page-description">
          From scorching sand seas to frozen wastelands, these are the planet\'s most extreme landscapes.
          Discover the beauty hidden in Earth\'s driest places.
        </p>
      </motion.div>

      <div className="content-grid">
        {deserts.map((place, index) => (
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
                <span className="card-height">{place.area}</span>
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

export default Deserts