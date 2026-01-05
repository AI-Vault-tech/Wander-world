import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import './CreatureProfile.css'

export interface CreatureData {
  id: string | number
  name: string
  scientificName: string
  conservationCode: string
  conservationStatus: string
  populationTrend: string
  iucnListing: string
  physicalData: {
    height?: string
    length?: string
    weight?: string
    wingspan?: string
    lifespan?: string
  }
  taxonomy: {
    kingdom: string
    family: string
    genus?: string
    species?: string
  }
  ecology: {
    habitat: string
    range: string
    diet: string
  }
  story: {
    essence: string
    dailyLife: string
    superpowers: string
    placeInWeb: string
  }
  behaviors: {
    category: string
    title: string
    description: string
    mediaUrl: string
    type: string
  }[]
  habitatMap: {
    currentRange: number[][]
    historicalRange: number[][]
    protectedAreas: {
      name: string
      coordinates: number[]
    }[]
  }
  conservation: {
    successStories: string[]
    currentEfforts: string[]
    howToHelp: string[]
    partners: {
      name: string
      logo: string
      url: string
    }[]
  }
  relatedCreatures: {
    id: number
    name: string
    relationType: string
    imageUrl: string
    conservationStatus: string
  }[]
  quickFacts: string[]
  heroImage?: string
}

const CreatureProfile = ({ creature }: { creature: CreatureData }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  const getConservationColor = (status: string) => {
    switch (status) {
      case 'LC': return '#4CAF50' // Least Concern - Green
      case 'VU': return '#FFC107' // Vulnerable - Yellow
      case 'EN': return '#FF9800' // Endangered - Orange
      case 'CR': return '#F44336' // Critically Endangered - Red
      case 'EW': return '#212121' // Extinct in Wild - Black
      case 'EX': return '#000000' // Extinct - Black
      default: return '#9E9E9E' // Unknown - Gray
    }
  }

  const getConservationLabel = (status: string) => {
    switch (status) {
      case 'LC': return 'Least Concern'
      case 'VU': return 'Vulnerable'
      case 'EN': return 'Endangered'
      case 'CR': return 'Critically Endangered'
      case 'EW': return 'Extinct in Wild'
      case 'EX': return 'Extinct'
      default: return 'Unknown'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return '📈'
      case 'decreasing': return '📉'
      case 'stable': return '⏸️'
      default: return ''
    }
  }

  return (
    <div className="creature-profile">
      {/* I. HERO SECTION: The Grand Entrance */}
      <section className="hero-section">
        <div className="media-header">
          {/* Full-Screen Gallery */}
          <div className="hero-media">
            <img 
              src={creature.heroImage || `https://images.unsplash.com/photo-${creature.id}?w=1920&q=80`} 
              alt={`${creature.name} in its natural habitat`}
              className="hero-image"
            />
            <div className="media-overlay"></div>
          </div>
          
          {/* Contextual Overlay */}
          <div className="hero-content">
            <motion.div 
              className="creature-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="creature-name">{creature.name}</h1>
              <p className="scientific-name">{creature.scientificName}</p>
              <div 
                className="conservation-badge"
                style={{ backgroundColor: getConservationColor(creature.conservationCode) }}
              >
                {getConservationLabel(creature.conservationCode)}
              </div>
            </motion.div>
            
            <motion.button 
              className="gallery-toggle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Removed onClick handler since gallery component is not implemented
            >
              View Gallery
            </motion.button>
          </div>
        </div>
      </section>

      {/* II. VITAL STATISTICS: The Data Dashboard */}
      <section className="vital-statistics">
        <div className="stats-grid">
          {/* Column 1: Identity & Status */}
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>CONSERVATION STATUS</h3>
            <div className="stat-item">
              <span className="stat-label">● Status</span>
              <span className="stat-value">{getConservationLabel(creature.conservationCode)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">{getTrendIcon(creature.populationTrend)} Population Trend</span>
              <span className="stat-value">{creature.populationTrend.charAt(0).toUpperCase() + creature.populationTrend.slice(1)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">🏛️ IUCN Listing</span>
              <span className="stat-value">{creature.iucnListing}</span>
            </div>
          </motion.div>

          {/* Column 2: Physical Dimensions */}
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>📏 PHYSICAL DATA</h3>
            {creature.physicalData.height && (
              <div className="stat-item">
                <span className="stat-label">Height:</span>
                <span className="stat-value">{creature.physicalData.height}</span>
              </div>
            )}
            {creature.physicalData.length && (
              <div className="stat-item">
                <span className="stat-label">Length:</span>
                <span className="stat-value">{creature.physicalData.length}</span>
              </div>
            )}
            {creature.physicalData.weight && (
              <div className="stat-item">
                <span className="stat-label">Weight:</span>
                <span className="stat-value">{creature.physicalData.weight}</span>
              </div>
            )}
            {creature.physicalData.wingspan && (
              <div className="stat-item">
                <span className="stat-label">Wingspan:</span>
                <span className="stat-value">{creature.physicalData.wingspan}</span>
              </div>
            )}
            {creature.physicalData.lifespan && (
              <div className="stat-item">
                <span className="stat-label">Lifespan:</span>
                <span className="stat-value">{creature.physicalData.lifespan}</span>
              </div>
            )}
          </motion.div>

          {/* Column 3: Taxonomy & Habitat */}
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>🏠 ECOLOGY</h3>
            <div className="stat-item">
              <span className="stat-label">Kingdom:</span>
              <span className="stat-value">{creature.taxonomy.kingdom}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Family:</span>
              <span className="stat-value">{creature.taxonomy.family}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Habitat:</span>
              <span className="stat-value">{creature.ecology.habitat}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Range:</span>
              <span className="stat-value">{creature.ecology.range}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Diet:</span>
              <span className="stat-value">{creature.ecology.diet}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* III. "THE STORY" SECTION: Narrative Experience */}
      <section className="story-section">
        <div className="story-container">
          <motion.div 
            className="story-chapter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>The Essence</h2>
            <p>{creature.story.essence}</p>
          </motion.div>

          <motion.div 
            className="story-chapter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Daily Life</h2>
            <p>{creature.story.dailyLife}</p>
          </motion.div>

          <motion.div 
            className="story-chapter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Superpowers</h2>
            <p>{creature.story.superpowers}</p>
          </motion.div>

          <motion.div 
            className="story-chapter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Place in the Web</h2>
            <p>{creature.story.placeInWeb}</p>
          </motion.div>
        </div>
      </section>

      {/* IV. BEHAVIOR & MOTION GALLERY */}
      <section className="behavior-gallery">
        <h2>Behavioral Insights</h2>
        <div className="behavior-categories">
          {['Hunting & Feeding', 'Social & Family', 'Movement & Locomotion', 'Communication', 'Defense & Adaptation', 'Courtship & Mating'].map((category, index) => (
            <motion.button
              key={index}
              className="category-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="behavior-cards">
          {creature.behaviors.map((behavior, index) => (
            <motion.div
              key={index}
              className="behavior-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="behavior-media">
                <img src={behavior.mediaUrl} alt={behavior.title} />
                <div className="media-type-badge">{behavior.type}</div>
              </div>
              <div className="behavior-content">
                <h3>{behavior.title}</h3>
                <p>{behavior.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* V. HABITAT & RANGE MAP */}
      <section className="habitat-section">
        <h2>Habitat & Range</h2>
        <div className="habitat-content">
          <div className="habitat-map">
            <div className="map-placeholder">
              <p>Interactive Habitat Map</p>
              <p>(Current range in green, historical range in gray)</p>
            </div>
          </div>
          <div className="protected-areas">
            <h3>Protected Areas</h3>
            <ul>
              {creature.habitatMap.protectedAreas.map((area, index) => (
                <li key={index}>{area.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VI. CONSERVATION ACTION CENTER */}
      <section className="conservation-section">
        <h2>Conservation Action Center</h2>
        <div className="conservation-grid">
          <motion.div 
            className="conservation-card success-stories"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Success Stories</h3>
            <ul>
              {creature.conservation.successStories.map((story, index) => (
                <li key={index}>{story}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="conservation-card current-efforts"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Current Efforts</h3>
            <ul>
              {creature.conservation.currentEfforts.map((effort, index) => (
                <li key={index}>{effort}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="conservation-card how-to-help"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>How You Can Help</h3>
            <ul>
              {creature.conservation.howToHelp.map((help, index) => (
                <li key={index}>{help}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="partners-section">
          <h3>Conservation Partners</h3>
          <div className="partners-grid">
            {creature.conservation.partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={partner.logo} alt={partner.name} />
                <span>{partner.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* VII. RELATED CREATURES NETWORK */}
      <section className="related-creatures">
        <h2>Related Creatures</h2>
        <div className="related-grid">
          {creature.relatedCreatures.map((related, index) => (
            <motion.div
              key={index}
              className="related-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={related.imageUrl} alt={related.name} />
              <div className="related-content">
                <h3>{related.name}</h3>
                <p className="relation-type">{related.relationType}</p>
                <div 
                  className="related-conservation-badge"
                  style={{ backgroundColor: getConservationColor(related.conservationStatus) }}
                >
                  {getConservationLabel(related.conservationStatus)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIII. QUICK FACTS DASHBOARD */}
      <section className="quick-facts">
        <h2>Quick Facts</h2>
        <div className="facts-grid">
          {creature.quickFacts.map((fact, index) => (
            <motion.div
              key={index}
              className="fact-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {fact}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CreatureProfile