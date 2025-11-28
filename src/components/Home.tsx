import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  // Removed unused state variables currentTime and userLocation

  // Simulate real-time updates
  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited')
    if (hasVisited) {
      setIsFirstVisit(false)
    } else {
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  // Daily Wonder Data
  const dailyWonder = {
    title: "Aurora Borealis",
    location: "Norwegian Lapland",
    description: "Nature's most spectacular light show dances across the Arctic sky in brilliant greens, purples, and pinks.",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80",
    facts: [
      "Caused by solar particles colliding with Earth's atmosphere",
      "Visible between September and April in the Northern Hemisphere",
      "Can extend up to 620 miles above Earth's surface"
    ],
    sound: "aurora-ambient.mp3"
  }

  // Quick Journeys
  const quickJourneys = [
    {
      id: 1,
      mood: "Serene & Peaceful",
      description: "Calming landscapes, gentle creatures, tranquil art",
      cta: "Find Your Moment of Peace",
      icon: "🌅",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      mood: "Awe & Wonder",
      description: "Epic scale, dramatic phenomena, architectural marvels",
      cta: "Experience Heart-Stopping Beauty",
      icon: "⚡",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      mood: "Curious & Unique",
      description: "Strange creatures, hidden places, unusual art",
      cta: "Discover Earth's Best Kept Secrets",
      icon: "🔍",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      mood: "Personal & Intimate",
      description: "Daily wonders, local beauty, human stories",
      cta: "Find Beauty in Your World",
      icon: "❤️",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ]

  // Featured Sections
  const featuredSections = [
    {
      id: 1,
      title: 'Beautiful Places',
      description: 'Discover Earth\'s most breathtaking landscapes, from towering mountains to hidden valleys.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      link: '/beautiful-places'
    },
    {
      id: 2,
      title: 'Wonderful Creatures',
      description: 'Explore the incredible diversity of life on Earth, from majestic beasts to tiny marvels.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      link: '/creatures'
    },
    {
      id: 3,
      title: 'Human Marvels',
      description: 'Celebrate the pinnacle of human creativity and achievement across cultures and time.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      link: '/human-marvels'
    },
    {
      id: 4,
      title: 'Natural Phenomena',
      description: 'Witness the extraordinary forces that shape our world in spectacular ways.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      link: '/blog'
    }
  ]

  // Live Planet Data
  const livePlanetData = {
    explorers: Math.floor(Math.random() * 1000) + 2000,
    photos: Math.floor(Math.random() * 200) + 100,
    events: Math.floor(Math.random() * 10) + 5,
    newWonders: Math.floor(Math.random() * 5) + 1
  }

  // Time-based suggestions
  const timeSuggestions = [
    { time: "Sunrise", location: "Bali", active: true },
    { time: "Noon", location: "Patagonia", active: false },
    { time: "Sunset", location: "Sahara", active: false },
    { time: "Midnight", location: "Tokyo", active: false }
  ]

  return (
    <div className="home">
      {/* Hero Section with Dynamic Background */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        aria-labelledby="hero-title"
      >
        <div className="parallax-layer" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80")',
          transform: 'scale(1.1)'
        }} />
        <div className="parallax-layer" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80")',
          opacity: 0.7,
          animation: 'float 20s ease-in-out infinite'
        }} />
        <div className="gradient-overlay" />
        
        <div className="hero-content">
          <motion.h1
            id="hero-title"
            className="title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {isFirstVisit ? "Welcome to Earth's Greatest Treasures" : "Welcome Back, Explorer"}
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {isFirstVisit ? "65 Million Years of Beauty" : `${Math.floor(Math.random() * 20) + 5} New Wonders Await Discovery`}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Link to="/beautiful-places" className="explore-button" aria-label="Begin exploring Earth's wonders">
              {isFirstVisit ? "Begin Your Journey" : "Continue Exploring"}
            </Link>
          </motion.div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span className="scroll-text">Explore</span>
          <div className="scroll-line"></div>
        </div>
      </motion.section>

      {/* Daily Wonder Feature */}
      <section className="daily-wonder-section" aria-labelledby="daily-wonder-heading">
        <div className="content-section">
          <motion.div
            className="daily-wonder-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="daily-wonder-heading">Wonder of the Day</h2>
            <p>Experience the extraordinary beauty that awaits you today</p>
          </motion.div>

          <div className="daily-wonder-content">
            <motion.div
              className="daily-wonder-media"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="daily-wonder-image"
                style={{ backgroundImage: `url('${dailyWonder.image}')` }}
                role="img"
                aria-label={`Image of ${dailyWonder.title} in ${dailyWonder.location}`}
              >
                <div className="daily-wonder-overlay">
                  <span className="play-button" role="button" tabIndex={0} aria-label="Play ambient sound">▶</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="daily-wonder-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>{dailyWonder.title}</h3>
              <p className="location">{dailyWonder.location}</p>
              <p className="description">{dailyWonder.description}</p>
              
              <div className="wonder-facts">
                <h4>Wonder Facts</h4>
                <ul>
                  {dailyWonder.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                  ))}
                </ul>
              </div>

              <div className="daily-wonder-actions">
                <button className="action-button" aria-label={`Explore deeper information about ${dailyWonder.title}`}>Explore Deeper</button>
                <button className="action-button" aria-label={`Share information about ${dailyWonder.title}`}>Share Wonder</button>
                <button className="action-button" aria-label={`Download wallpaper of ${dailyWonder.title}`}>Set Wallpaper</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Journeys Gateway */}
      <section className="quick-journeys-section" aria-labelledby="quick-journeys-heading">
        <div className="content-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="quick-journeys-heading">Quick Journeys</h2>
            <p>Discover beauty based on your mood and interests</p>
          </motion.div>

          <div className="journeys-grid">
            {quickJourneys.map((journey, index) => (
              <motion.div
                key={journey.id}
                className="journey-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ background: journey.color }}
                role="button"
                tabIndex={0}
                aria-label={`Explore ${journey.mood} journeys`}
              >
                <div className="journey-icon" aria-hidden="true">{journey.icon}</div>
                <h3>{journey.mood}</h3>
                <p>{journey.description}</p>
                <button className="journey-cta">{journey.cta}</button>
              </motion.div>
            ))}
          </div>

          {/* Time-Based Suggestions */}
          <motion.div
            className="time-suggestions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Right Now on Earth</h3>
            <div className="time-grid">
              {timeSuggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className={`time-item ${suggestion.active ? 'active' : ''}`}
                  aria-label={`${suggestion.time} in ${suggestion.location}`}
                >
                  <span className="time">{suggestion.time}</span>
                  <span className="location">{suggestion.location}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Planet Dashboard */}
      <section className="live-planet-section" aria-labelledby="live-planet-heading">
        <div className="content-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="live-planet-heading">Live Planet Dashboard</h2>
            <p>Real-time activity across our beautiful world</p>
          </motion.div>

          <div className="dashboard-stats">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="stat-icon" aria-hidden="true">🌍</div>
              <div className="stat-value">{livePlanetData.explorers.toLocaleString()}</div>
              <div className="stat-label">People Exploring Wonders</div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="stat-icon" aria-hidden="true">📸</div>
              <div className="stat-value">{livePlanetData.photos}</div>
              <div className="stat-label">Photos Uploaded This Hour</div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="stat-icon" aria-hidden="true">🎥</div>
              <div className="stat-value">{livePlanetData.events}</div>
              <div className="stat-label">Live Events Happening</div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="stat-icon" aria-hidden="true">🆕</div>
              <div className="stat-value">{livePlanetData.newWonders}</div>
              <div className="stat-label">Wonders Added Today</div>
            </motion.div>
          </div>

          {/* Seasonal Spotlight */}
          <motion.div
            className="seasonal-spotlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Seasonal Spotlight</h3>
            <div className="spotlight-content">
              <div 
                className="spotlight-image" 
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80")' 
                }}
                role="img"
                aria-label="Cherry blossom season in Japan"
              ></div>
              <div className="spotlight-info">
                <h4>Cherry Blossom Season</h4>
                <p>Experience the ephemeral beauty of sakura blooms across Japan, with peak viewing times in Tokyo, Kyoto, and Osaka.</p>
                <button className="spotlight-button">Plan Your Visit</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="featured-sections" aria-labelledby="featured-sections-heading">
        <div className="content-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="featured-sections-heading">Discover Our Collections</h2>
            <p>Explore the beauty of our planet through different lenses</p>
          </motion.div>
          <div className="sections-grid">
            {featuredSections.map((section, index) => (
              <motion.div
                key={section.id}
                className="section-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={section.link} className="section-link" aria-label={`Explore ${section.title}`}>
                  <div 
                    className="section-image"
                    style={{ backgroundImage: `url('${section.image}')` }}
                    role="img"
                    aria-label={`Image representing ${section.title}`}
                  >
                    <div className="section-overlay">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <span className="explore-link">Explore →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="personalization-section" aria-labelledby="personalization-heading">
        <div className="content-section">
          <motion.div
            className="personalization-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="personalization-text">
              <h2 id="personalization-heading">Your Beauty Journey</h2>
              <p>Personalized recommendations based on your interests and location</p>
              <div className="progress-info">
                <p>You've explored 4% of Earth's wonders</p>
                <div className="progress-bar" role="progressbar" aria-valuenow={4} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-fill" style={{ width: '4%' }}></div>
                </div>
              </div>
              <div className="recommendations">
                <h4>Because You Loved...</h4>
                <div className="recommendation-item">
                  <span>Mount Fuji →</span>
                  <span>Recommended: Mount Kilimanjaro</span>
                </div>
              </div>
            </div>
            <div 
              className="personalization-image" 
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80")' 
              }}
              role="img"
              aria-label="Personalized recommendation image"
            ></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home