import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HumanMarvels.css'

const HumanMarvels = () => {
  // Define the hierarchical structure for Human Marvels
  const marvelCategories = [
    {
      id: 'architectural-wonders',
      name: 'Architectural Wonders',
      description: 'Where stone and steel touch the divine',
      subtitle: 'Ancient temples to space-age structures',
      path: '/human-marvels/architecture',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397114?w=1920&q=80'
    },
    {
      id: 'artistic-treasures',
      name: 'Artistic Treasures',
      description: 'The soul\'s language in color and form',
      subtitle: 'Masterpieces that defined civilizations',
      path: '/human-marvels/art',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=80'
    },
    {
      id: 'cultural-traditions',
      name: 'Cultural Traditions',
      description: 'Beauty woven through generations',
      subtitle: 'Living heritage and celebrations',
      path: '/human-marvels/culture',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'engineering-feats',
      name: 'Engineering Feats',
      description: 'The poetry of precision and scale',
      subtitle: 'Bridges, tunnels, and technological wonders',
      path: '/human-marvels/engineering',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1920&q=80'
    },
    {
      id: 'culinary-art',
      name: 'Culinary Art',
      description: 'Edible masterpieces that delight senses',
      subtitle: 'From traditional crafts to molecular gastronomy',
      path: '/human-marvels/culinary',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80'
    },
    {
      id: 'futuristic-visions',
      name: 'Futuristic Visions',
      description: 'Tomorrow\'s beauty taking form today',
      subtitle: 'Digital art, AI creations, and future concepts',
      path: '/human-marvels/future',
      image: 'https://images.unsplash.com/photo-1547632572-6924bf47a5b4?w=1920&q=80'
    }
  ]

  // Timeline eras
  const timelineEras = [
    'Prehistoric', 'Ancient', 'Classical', 'Medieval', 
    'Renaissance', 'Industrial', 'Modern', 'Digital', 'Future'
  ]

  // Creative Genius Network data
  const geniusNetwork = [
    { id: 1, name: 'Leonardo da Vinci', influence: 95, connections: 120 },
    { id: 2, name: 'Pablo Picasso', influence: 92, connections: 85 },
    { id: 3, name: 'Frank Lloyd Wright', influence: 88, connections: 76 },
    { id: 4, name: 'Marie Curie', influence: 90, connections: 92 },
    { id: 5, name: 'Steve Jobs', influence: 85, connections: 110 }
  ]

  // Master Class Series
  const masterClasses = [
    {
      id: 1,
      title: 'The Architecture of Emotion',
      instructor: 'Zaha Hadid',
      description: 'How to design spaces that move the human spirit',
      duration: '90 min',
      students: '12.4K'
    },
    {
      id: 2,
      title: 'Color Theory Masterclass',
      instructor: 'David Hockney',
      description: 'Understanding the emotional power of color palettes',
      duration: '75 min',
      students: '8.7K'
    },
    {
      id: 3,
      title: 'Culinary Storytelling',
      instructor: 'Ferran Adrià',
      description: 'Creating dishes that tell compelling stories',
      duration: '120 min',
      students: '15.2K'
    }
  ]

  // Future Predictions Engine data
  const futurePredictions = [
    { id: 1, trend: 'AI-Generated Art', adoption: 85, impact: 'Revolutionary' },
    { id: 2, trend: 'Virtual Architecture', adoption: 72, impact: 'Transformative' },
    { id: 3, trend: 'Sustainable Design', adoption: 91, impact: 'Essential' },
    { id: 4, trend: 'Neural Interfaces', adoption: 45, impact: 'Emerging' }
  ]

  return (
    <div className="human-marvels">
      {/* Hero Section */}
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
            Human Marvels
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Where human genius meets divine inspiration
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="subtext"
          >
            From ancient temples to digital dreams - celebrating humanity's most beautiful achievements
          </motion.p>
        </div>
      </motion.div>

      {/* Interactive Timeline Wall */}
      <section className="timeline-section">
        <div className="section-header">
          <h2>Human Achievement Timeline</h2>
          <p>Hover over each era to see iconic creations</p>
        </div>
        <div className="timeline-wall">
          {timelineEras.map((era, index) => (
            <motion.div
              key={era}
              className="timeline-era"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="era-content">
                <h3>{era}</h3>
                <div className="era-icon">
                  <span className="icon-symbol">
                    {era === 'Prehistoric' && '🗿'}
                    {era === 'Ancient' && '🏛️'}
                    {era === 'Classical' && '🏛️'}
                    {era === 'Medieval' && '🏰'}
                    {era === 'Renaissance' && '🎨'}
                    {era === 'Industrial' && '⚙️'}
                    {era === 'Modern' && '🏙️'}
                    {era === 'Digital' && '💻'}
                    {era === 'Future' && '🔮'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories of Genius Gateway */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Categories of Genius</h2>
          <p>Explore the diverse expressions of human creativity</p>
        </div>
        <div className="categories-grid">
          {marvelCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link to={category.path} className="category-link">
                <div 
                  className="category-image"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${category.image}')` 
                  }}
                >
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <p className="subtitle">{category.subtitle}</p>
                    <span className="explore-link">Explore →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Human Achievement Index */}
      <section className="achievement-index">
        <div className="section-header">
          <h2>Human Achievement Index</h2>
          <p>Real-time dashboard of human progress metrics</p>
        </div>
        <div className="metrics-grid">
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="metric-icon">🏆</div>
            <h3>Cultural Preservation</h3>
            <p className="metric-value">7,342 UNESCO sites</p>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="metric-icon">🚀</div>
            <h3>Innovation Rate</h3>
            <p className="metric-value">2.3M patents/year</p>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="metric-icon">🎨</div>
            <h3>Artistic Output</h3>
            <p className="metric-value">156,000 museums worldwide</p>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="metric-icon">🌐</div>
            <h3>Global Connection</h3>
            <p className="metric-value">4.9B creative minds online</p>
          </motion.div>
        </div>
      </section>

      {/* Creative Genius Network */}
      <section className="genius-network">
        <div className="section-header">
          <h2>Creative Genius Network</h2>
          <p>Interactive web showing connections between artists and their influences</p>
        </div>
        <div className="network-container">
          <div className="network-visualization">
            {/* This would be a complex interactive visualization in a real implementation */}
            <div className="network-placeholder">
              <h3>Genius Connection Map</h3>
              <p>Explore how creative minds influenced each other across centuries</p>
              <div className="network-nodes">
                {geniusNetwork.map((genius) => (
                  <div 
                    key={genius.id} 
                    className="network-node"
                    style={{
                      left: `${20 + (genius.id * 15)}%`,
                      top: `${30 + (genius.id * 10)}%`
                    }}
                  >
                    <div className="node-content">
                      <div className="node-name">{genius.name}</div>
                      <div className="node-stats">
                        <span>Influence: {genius.influence}%</span>
                        <span>Connections: {genius.connections}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Connection lines would be drawn here */}
              </div>
            </div>
          </div>
          <div className="network-controls">
            <h3>Explore the Network</h3>
            <div className="filter-options">
              <button className="filter-btn active">All Geniuses</button>
              <button className="filter-btn">Artists</button>
              <button className="filter-btn">Architects</button>
              <button className="filter-btn">Scientists</button>
              <button className="filter-btn">Inventors</button>
            </div>
            <button className="explore-btn">View Full Network</button>
          </div>
        </div>
      </section>

      {/* Master Class Series */}
      <section className="master-classes">
        <div className="section-header">
          <h2>Master Class Series</h2>
          <p>Video tutorials from world-renowned creators</p>
        </div>
        <div className="classes-grid">
          {masterClasses.map((course, index) => (
            <motion.div
              key={course.id}
              className="class-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="class-content">
                <h3>{course.title}</h3>
                <p className="instructor">by {course.instructor}</p>
                <p className="description">{course.description}</p>
                <div className="class-meta">
                  <span className="duration">⏱️ {course.duration}</span>
                  <span className="students">👥 {course.students} students</span>
                </div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Predictions Engine */}
      <section className="future-predictions">
        <div className="section-header">
          <h2>Future Predictions Engine</h2>
          <p>See how current trends might shape future beauty standards</p>
        </div>
        <div className="predictions-container">
          <div className="predictions-chart">
            <h3>Emerging Trends Impact Analysis</h3>
            <div className="chart-container">
              {futurePredictions.map((prediction) => (
                <div key={prediction.id} className="prediction-bar">
                  <div className="prediction-info">
                    <span className="trend-name">{prediction.trend}</span>
                    <span className="impact-badge">{prediction.impact}</span>
                  </div>
                  <div className="bar-container">
                    <div 
                      className="bar-fill"
                      style={{ width: `${prediction.adoption}%` }}
                    >
                      <span className="adoption-rate">{prediction.adoption}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="predictions-explanation">
            <h3>AI-Powered Trend Analysis</h3>
            <p>
              Our Future Predictions Engine uses machine learning algorithms to analyze 
              current creative trends, technological developments, and cultural shifts 
              to forecast how beauty and creativity will evolve in the coming decades.
            </p>
            <p>
              By examining patterns in art, architecture, design, and technology, 
              we can anticipate breakthrough innovations and emerging aesthetic movements 
              that will shape the future of human expression.
            </p>
            <button className="explore-predictions">Explore Predictions</button>
          </div>
        </div>
      </section>

      {/* Create Your Marvel Studio */}
      <section className="create-marvel">
        <div className="section-header">
          <h2>Create Your Marvel</h2>
          <p>Digital workshops to unleash your creative potential</p>
        </div>
        <div className="studio-container">
          <div className="studio-options">
            <div className="studio-option">
              <div className="option-icon">🏛️</div>
              <h3>Architecture Sandbox</h3>
              <p>Design your own structures</p>
            </div>
            <div className="studio-option">
              <div className="option-icon">🎨</div>
              <h3>Digital Canvas</h3>
              <p>Create art in famous styles</p>
            </div>
            <div className="studio-option">
              <div className="option-icon">🍽️</div>
              <h3>Recipe Builder</h3>
              <p>Compose beautiful dishes</p>
            </div>
            <div className="studio-option">
              <div className="option-icon">🔮</div>
              <h3>Future Vision Board</h3>
              <p>Imagine tomorrow's wonders</p>
            </div>
          </div>
          <div className="studio-preview">
            <h3>Unleash Your Creativity</h3>
            <p>
              Our interactive studios provide hands-on experiences with professional-grade 
              tools used by the world's leading creators. Whether you're designing buildings, 
              crafting art, or inventing the future, our platforms give you the power to 
              bring your visions to life.
            </p>
            <button className="launch-studio">Launch Creative Studio</button>
          </div>
        </div>
      </section>

      {/* Global Collaboration Map Preview */}
      <section className="collaboration-preview">
        <div className="section-header">
          <h2>Global Collaboration Map</h2>
          <p>Live feed of current creative projects worldwide</p>
        </div>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Worldwide Creative Activity</h3>
              <p>Connect with creators from 150+ countries</p>
              <div className="map-points">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="map-point"
                    style={{
                      left: `${Math.random() * 90}%`,
                      top: `${Math.random() * 90}%`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HumanMarvels