import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Atlas.css'

const atlasData = {
  horizons: {
    title: 'Horizons',
    description: 'Where earth meets sky, vast and endless',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        location: 'Patagonia, Chile',
        fact: 'The Torres del Paine, granite peaks sculpted by 12 million years of glacial ice'
      },
      {
        url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
        location: 'Namib Desert, Namibia',
        fact: 'Ancient sand dunes, some over 55 million years old'
      }
    ]
  },
  microcosms: {
    title: 'Microcosms',
    description: 'The intricate beauty hidden in the small',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
        location: 'Macro World',
        fact: 'A single dewdrop refracts an entire universe'
      }
    ]
  },
  elements: {
    title: 'Elements',
    description: 'Water, fire, air, and earth in their raw form',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
        location: 'Iceland',
        fact: 'Where fire and ice dance in geological harmony'
      }
    ]
  },
  echoes: {
    title: 'Echoes',
    description: 'The sounds and memories of wild places',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
        location: 'Ancient Forest',
        fact: 'Trees communicate through vast underground networks'
      }
    ]
  }
}

const Atlas = () => {
  const { category } = useParams<{ category: string }>()
  const data = atlasData[category as keyof typeof atlasData] || atlasData.horizons

  return (
    <div className="atlas">
      <motion.div
        className="atlas-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>{data.title}</h1>
        <p className="atlas-description">{data.description}</p>
      </motion.div>

      <div className="atlas-gallery">
        {data.images.map((image, index) => (
          <motion.div
            key={index}
            className="atlas-item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: index * 0.2 }}
          >
            <div className="atlas-image-container">
              <div
                className="atlas-image"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="atlas-info">
                <p className="atlas-location">{image.location}</p>
                <p className="atlas-fact">{image.fact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Atlas
