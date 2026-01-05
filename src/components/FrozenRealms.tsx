import { motion } from 'framer-motion'
import './ContentPage.css'

const frozenRealms = [
  {
    name: 'Antarctica',
    location: 'South Pole',
    description: 'The coldest, windiest, and driest continent on Earth. A frozen wilderness that holds 90% of the world\'s fresh water and is home to unique wildlife adapted to extreme conditions.',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
    facts: [
      'Coldest temperature recorded: -128.6°F (-89.2°C)',
      'Contains 90% of Earth\'s fresh water',
      'No permanent human residents'
    ]
  },
  {
    name: 'Greenland Ice Sheet',
    location: 'Greenland',
    description: 'The second-largest ice body in the world, covering 80% of Greenland. If it melted completely, global sea levels would rise by 24 feet.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
    facts: [
      'Second-largest ice body after Antarctica',
      'Contains 10% of world\'s fresh water',
      'Melting at accelerating rate due to climate change'
    ]
  },
  {
    name: 'Patagonian Ice Fields',
    location: 'Chile/Argentina',
    description: 'The largest ice fields in the Southern Hemisphere outside Antarctica. These massive glaciers carve through the dramatic landscapes of the Andes Mountains.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    facts: [
      'Largest ice fields outside polar regions',
      'Feed 48 major glaciers',
      'Home to the famous Perito Moreno Glacier'
    ]
  },
  {
    name: 'Alaskan Glaciers',
    location: 'Alaska, USA',
    description: 'Thousands of glaciers cover Alaska, creating some of the most stunning ice formations on Earth. These rivers of ice are constantly moving and reshaping the landscape.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    facts: [
      'Home to 100,000 glaciers',
      'Glacier Bay National Park has over 1,000 glaciers',
      'Some glaciers move up to 200 feet per day'
    ]
  },
  {
    name: 'Ice Caves of Iceland',
    location: 'Iceland',
    description: 'Spectacular blue ice caves formed within glaciers. These natural cathedrals of ice are only accessible during winter months and offer otherworldly beauty.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    facts: [
      'Formed by geothermal activity melting glaciers',
      'Colors range from deep blue to crystal clear',
      'Constantly changing shape and structure'
    ]
  },
  {
    name: 'Frozen Lake Baikal',
    location: 'Siberia, Russia',
    description: 'The world\'s deepest lake becomes a frozen wonderland in winter. The ice is so clear that you can see down 40 meters, and the frozen surface creates mesmerizing patterns.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80',
    facts: [
      'World\'s largest freshwater lake by volume',
      'Ice thickness can reach 2 meters in winter',
      'Home to unique ice formations called "ice discs"'
    ]
  }
]

const FrozenRealms = () => {
  return (
    <div className="content-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Frozen Realms of Earth</h1>
        <p className="page-description">
          Where water transforms into crystal sculptures and ice becomes a canvas for nature\'s artistry.
          Explore the breathtaking beauty of Earth\'s coldest landscapes.
        </p>
      </motion.div>

      <div className="content-grid">
        {frozenRealms.map((place, index) => (
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

export default FrozenRealms