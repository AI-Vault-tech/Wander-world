import { motion } from 'framer-motion'
import './ContentPage.css'

const waterfalls = [
  {
    name: 'Victoria Falls',
    location: 'Zambia/Zimbabwe',
    height: '108 meters (354 feet)',
    description: 'The largest waterfall in the world by volume of water. Known as "The Smoke That Thunders," it creates a mist visible from miles away and is considered one of the Seven Natural Wonders of the World.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
    facts: [
      'Larger than Niagara Falls',
      'Width of 1,708 meters (5,604 feet)',
      'UNESCO World Heritage Site'
    ]
  },
  {
    name: 'Niagara Falls',
    location: 'Canada/USA',
    height: '51 meters (167 feet)',
    description: 'One of the most famous waterfalls in the world, straddling the border between Canada and the United States. Millions visit each year to witness its thundering cascade.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80',
    facts: [
      'Flow rate of 6 million cubic feet per minute',
      'Formed at the end of the last ice age',
      'Horseshoe-shaped falls on the Canadian side'
    ]
  },
  {
    name: 'Iguazu Falls',
    location: 'Argentina/Brazil',
    height: '82 meters (269 feet)',
    description: 'A system of 275 individual waterfalls along the Iguazu River. Surrounded by subtropical rainforest, it\'s both a natural wonder and a biodiversity hotspot.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    facts: [
      'Twice the width of Niagara Falls',
      'UNESCO World Heritage Site',
      'Home to over 2,000 species of plants and animals'
    ]
  },
  {
    name: 'Kaieteur Falls',
    location: 'Guyana',
    height: '226 meters (741 feet)',
    description: 'A single-drop waterfall that is among the world\'s largest by volume. Located in the pristine rainforests of Guyana, it\'s one of the most powerful waterfalls on Earth.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    facts: [
      'Five times higher than Niagara Falls',
      'Flows through untouched rainforest',
      'Rarely visited by tourists'
    ]
  },
  {
    name: 'Gullfoss',
    location: 'Iceland',
    height: '32 meters (105 feet)',
    description: 'The "Golden Falls" of Iceland, where the Hvítá river plunges in two stages into a rugged canyon. A dramatic display of Iceland\'s raw natural power.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    facts: [
      'Part of the Golden Circle tourist route',
      'Freezes over in winter, creating ice formations',
      'Saved from hydroelectric development in early 1900s'
    ]
  },
  {
    name: 'Plitvice Waterfalls',
    location: 'Croatia',
    height: '78 meters (256 feet)',
    description: 'A series of cascading lakes and waterfalls in a national park known for its turquoise waters and limestone formations. A UNESCO World Heritage Site of exceptional beauty.',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1920&q=80',
    facts: [
      '16 terraced lakes connected by waterfalls',
      'Color changes with minerals and organisms in water',
      'Protected since 1949'
    ]
  }
]

const Waterfalls = () => {
  return (
    <div className="content-page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>World's Most Spectacular Waterfalls</h1>
        <p className="page-description">
          Where water meets gravity in a dance of natural beauty. From single-drop giants to cascading
          systems, these are Earth's most magnificent liquid displays.
        </p>
      </motion.div>

      <div className="content-grid">
        {waterfalls.map((place, index) => (
          <motion.article
            key={place.name}
            className="content-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            tabIndex={0}
            aria-label={`Learn about ${place.name} located in ${place.location}`}
          >
            <div className="card-image-container">
              <div
                className="card-image"
                style={{ backgroundImage: `url('${place.image}')` }}
                role="img"
                aria-label={`Image of ${place.name} waterfall in ${place.location}`}
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

export default Waterfalls