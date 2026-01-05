import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CreatureProfiles.css'

const CreatureProfiles = () => {
  // Define creature profiles
  const creatureProfiles = [
    {
      id: 1,
      name: 'Amur Leopard',
      scientificName: 'Panthera pardus orientalis',
      description: 'The world\'s rarest big cat with fewer than 120 individuals remaining in the wild.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Temperate forests',
      profilePath: '/creature-profile/amur-leopard'
    },
    {
      id: 2,
      name: 'Javan Rhinoceros',
      scientificName: 'Rhinoceros sondaicus',
      description: 'One of the rarest large mammals on Earth with only 75 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Tropical rainforests',
      profilePath: '/creature-profile/javan-rhinoceros'
    },
    {
      id: 3,
      name: 'Vaquita',
      scientificName: 'Phocoena sinus',
      description: 'The world\'s most endangered marine mammal with fewer than 30 individuals left.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Shallow coastal waters',
      profilePath: '/creature-profile/vaquita'
    },
    {
      id: 4,
      name: 'Cross River Gorilla',
      scientificName: 'Gorilla gorilla diehli',
      description: 'The rarest subspecies of gorilla with fewer than 200-300 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Mountain forests',
      profilePath: '/creature-profile/cross-river-gorilla'
    },
    {
      id: 5,
      name: 'Hawksbill Sea Turtle',
      scientificName: 'Eretmochelys imbricata',
      description: 'Critically endangered turtle known for its beautiful shell pattern.',
      image: 'https://images.unsplash.com/photo-1559827290575-2e00d3a94d3c?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Tropical coral reefs',
      profilePath: '/creature-profile/hawksbill-turtle'
    },
    {
      id: 6,
      name: 'Saola',
      scientificName: 'Pseudoryx nghetinhensis',
      description: 'Known as the "Asian unicorn," one of the rarest large mammals discovered in recent decades.',
      image: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Annamite Mountains',
      profilePath: '/creature-profile/saola'
    },
    {
      id: 7,
      name: 'Sumatran Orangutan',
      scientificName: 'Pongo abelii',
      description: 'One of humanity\'s closest relatives with fewer than 14,000 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1613389459343-399836350356?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Tropical rainforests',
      profilePath: '/creature-profile/sumatran-orangutan'
    },
    {
      id: 8,
      name: 'Mountain Gorilla',
      scientificName: 'Gorilla beringei beringei',
      description: 'Iconic primate with fewer than 1,000 individuals remaining in the wild.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
      conservationStatus: 'Endangered',
      habitat: 'Montane forests',
      profilePath: '/creature-profile/mountain-gorilla'
    },
    {
      id: 9,
      name: 'Snow Leopard',
      scientificName: 'Panthera uncia',
      description: 'Elusive "ghost of the mountains" with fewer than 7,000 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      conservationStatus: 'Vulnerable',
      habitat: 'Alpine and subalpine zones',
      profilePath: '/creature-profile/snow-leopard'
    },
    {
      id: 10,
      name: 'Sunda Pangolin',
      scientificName: 'Manis javanica',
      description: 'The world\'s most trafficked mammal with fewer than 10,000 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Tropical forests',
      profilePath: '/creature-profile/pangolin'
    },
    {
      id: 11,
      name: 'Axolotl',
      scientificName: 'Ambystoma mexicanum',
      description: 'Unique amphibian with remarkable regenerative abilities found only in Xochimilco.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Freshwater lakes',
      profilePath: '/creature-profile/axolotl'
    },
    {
      id: 12,
      name: 'Kakapo',
      scientificName: 'Strigops habroptilus',
      description: 'The world\'s only flightless, nocturnal parrot with fewer than 250 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80',
      conservationStatus: 'Critically Endangered',
      habitat: 'Temperate forests',
      profilePath: '/creature-profile/kakapo'
    },
    {
      id: 13,
      name: 'Red Panda',
      scientificName: 'Ailurus fulgens',
      description: 'The "firefox" of the Himalayas with fewer than 10,000 individuals remaining.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
      conservationStatus: 'Endangered',
      habitat: 'Temperate forests',
      profilePath: '/creature-profile/red-panda'
    },
    {
      id: 14,
      name: 'Iberian Lynx',
      scientificName: 'Lynx pardinus',
      description: 'The world\'s most endangered feline with populations recovering from near-extinction.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      conservationStatus: 'Endangered',
      habitat: 'Mediterranean forests and scrublands',
      profilePath: '/creature-profile/iberian-lynx'
    },
    {
      id: 15,
      name: 'Black-footed Ferret',
      scientificName: 'Mustela nigripes',
      description: 'North America\'s most endangered mammal, recovered from near-extinction.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
      conservationStatus: 'Endangered',
      habitat: 'Prairie grasslands',
      profilePath: '/creature-profile/black-footed-ferret'
    }
  ]

  return (
    <div className="creature-profiles">
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
            Creature Profiles
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            In-depth explorations of Earth's most remarkable beings
          </motion.p>
        </div>
      </motion.div>

      <section className="profiles-section">
        <div className="profiles-grid">
          {creatureProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className="profile-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link to={profile.profilePath} className="profile-link">
                <div 
                  className="profile-image"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${profile.image}')` 
                  }}
                >
                  <div className="profile-overlay">
                    <h3>{profile.name}</h3>
                    <p className="scientific-name">{profile.scientificName}</p>
                    <p className="description">{profile.description}</p>
                    <div className="profile-meta">
                      <span className="conservation-status">{profile.conservationStatus}</span>
                      <span className="habitat">{profile.habitat}</span>
                    </div>
                    <span className="explore-link">View Profile →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="profiles-info">
        <div className="info-content">
          <h2>Deep Dives into Extraordinary Lives</h2>
          <p>
            Each Creature Profile is a comprehensive exploration of a single species, revealing not just 
            the facts about their biology and behavior, but the story of their existence in the natural 
            world. These detailed portraits showcase the intricate connections between each creature 
            and their environment.
          </p>
          <p>
            Through stunning visuals, scientific insights, and conservation perspectives, these profiles 
            aim to foster a deeper appreciation for the complexity and beauty of life on Earth, 
            inspiring action to protect these remarkable beings for future generations.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CreatureProfiles