import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CulturalTraditions.css'

const CulturalTraditions = () => {
  // Define the sub-categories for Cultural Traditions
  const subCategories = [
    {
      id: 'festivals-of-light',
      name: 'Festivals of Light',
      description: 'Diwali, Lantern Festivals',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'rhythmic-traditions',
      name: 'Rhythmic Traditions',
      description: 'Dance, music, performance arts',
      image: 'https://images.unsplash.com/photo-1551632436-7a879920dd8f?w=1920&q=80'
    },
    {
      id: 'textile-arts',
      name: 'Textile Arts',
      description: 'Weaving, embroidery, traditional costumes',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'ceremonial-beauty',
      name: 'Ceremonial Beauty',
      description: 'Weddings, rites of passage',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'living-heritage',
      name: 'Living Heritage',
      description: 'Indigenous knowledge, crafts',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    }
  ]

  // Sample cultural celebrations for the 360° experience
  const featuredCelebrations = [
    {
      id: 1,
      name: 'Holi Festival',
      location: 'India',
      description: 'Festival of Colors celebrating spring and love',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 2,
      name: 'Dia de los Muertos',
      location: 'Mexico',
      description: 'Day of the Dead honoring deceased loved ones',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 3,
      name: 'Chinese New Year',
      location: 'China',
      description: 'Lunar new year celebration with dragon dances',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    }
  ]

  return (
    <div className="cultural-traditions">
      {/* Hero Section with 360° Video Experience */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Cultural Traditions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Beauty woven through generations
          </motion.p>
        </div>
        
        {/* 360° Video Experience Placeholder */}
        <div className="video-experience-container">
          <div className="video-experience">
            <div className="video-placeholder">
              <h3>360° Cultural Festival Experience</h3>
              <p>Immerse yourself in global celebrations</p>
              <div className="video-controls">
                <button className="control-btn">Play</button>
                <button className="control-btn">Pause</button>
                <button className="control-btn">Fullscreen</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sub-Categories Gateway */}
      <section className="subcategories-section">
        <div className="section-header">
          <h2>Expressions of Culture</h2>
          <p>Discover the diverse ways humans celebrate life</p>
        </div>
        <div className="subcategories-grid">
          {subCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="subcategory-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link to={`/human-marvels/culture/${category.id}`} className="subcategory-link">
                <div 
                  className="subcategory-image"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${category.image}')` 
                  }}
                >
                  <div className="subcategory-overlay">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <span className="explore-link">Explore →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Celebrations */}
      <section className="featured-celebrations">
        <div className="section-header">
          <h2>Global Celebrations</h2>
          <p>Experience the world's most beautiful traditions</p>
        </div>
        <div className="celebrations-grid">
          {featuredCelebrations.map((celebration, index) => (
            <motion.div
              key={celebration.id}
              className="celebration-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="celebration-image"
                style={{ backgroundImage: `url('${celebration.image}')` }}
              />
              <div className="celebration-content">
                <h3>{celebration.name}</h3>
                <p className="location">{celebration.location}</p>
                <p className="description">{celebration.description}</p>
                <button className="view-details">Experience</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cultural Calendar Feature */}
      <section className="cultural-calendar">
        <div className="section-header">
          <h2>Cultural Calendar</h2>
          <p>Never miss a global celebration with live event streaming</p>
        </div>
        <div className="calendar-content">
          <div className="calendar-interface">
            <div className="calendar-header">
              <h3>Upcoming Celebrations</h3>
              <div className="calendar-nav">
                <button className="nav-btn">Previous</button>
                <span className="current-month">November 2025</span>
                <button className="nav-btn">Next</button>
              </div>
            </div>
            <div className="calendar-grid">
              {/* Simplified calendar representation */}
              <div className="calendar-day">
                <span className="day-number">15</span>
                <div className="event-marker">
                  <span className="event-name">Diwali</span>
                  <span className="event-location">India</span>
                </div>
              </div>
              <div className="calendar-day">
                <span className="day-number">22</span>
                <div className="event-marker">
                  <span className="event-name">Day of the Dead</span>
                  <span className="event-location">Mexico</span>
                </div>
              </div>
              <div className="calendar-day">
                <span className="day-number">28</span>
                <div className="event-marker">
                  <span className="event-name">Thanksgiving</span>
                  <span className="event-location">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-explanation">
            <h3>Live Cultural Events</h3>
            <p>
              Our Cultural Calendar connects you with celebrations happening 
              around the world in real-time. Experience the beauty of human 
              traditions through live streaming, virtual reality experiences, 
              and interactive cultural exchanges.
            </p>
            <p>
              Each event includes historical context, cultural significance, 
              and opportunities to participate remotely through virtual workshops, 
              cooking classes, and artistic collaborations.
            </p>
            <button className="view-calendar">View Full Calendar</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CulturalTraditions