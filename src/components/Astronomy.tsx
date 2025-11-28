import { Link } from 'react-router-dom';
import './Astronomy.css';

const Astronomy = () => {
  const phenomena = [
    {
      id: 'nebulas',
      title: '🌠 Nebulas',
      description: 'Stellar nurseries where stars are born from clouds of gas and dust. These cosmic clouds create some of the most beautiful structures in the universe.',
      facts: [
        'Orion Nebula - The nearest stellar nursery to Earth, visible to the naked eye',
        'Crab Nebula - Remnant of a supernova observed in 1054 AD',
        'Helix Nebula - A planetary nebula resembling an eye, located 700 light-years away',
        'Eagle Nebula - Home to the famous "Pillars of Creation" photographed by Hubble'
      ],
      image: '🌌'
    },
    {
      id: 'galaxies',
      title: '🌌 Galaxies',
      description: 'Massive collections of stars, gas, dust, and dark matter bound together by gravity. Our Milky Way is just one of billions in the observable universe.',
      facts: [
        'Milky Way - Our home galaxy with over 100 billion stars',
        'Andromeda Galaxy - The nearest major galaxy to ours, on a collision course with Milky Way',
        'Whirlpool Galaxy - A stunning example of a spiral galaxy with prominent arms',
        'Sombrero Galaxy - Known for its bright nucleus and large central bulge'
      ],
      image: '🌀'
    },
    {
      id: 'black-holes',
      title: '⭐ Black Holes',
      description: 'Regions of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.',
      facts: [
        'Sagittarius A* - Supermassive black hole at the center of our galaxy',
        'Stellar Black Holes - Formed from collapsed massive stars, typically 5-20 times the mass of our Sun',
        'Primordial Black Holes - Hypothetical black holes from the early universe',
        'Intermediate Black Holes - Rare class with masses between stellar and supermassive black holes'
      ],
      image: '🕳️'
    },
    {
      id: 'cosmic-events',
      title: '🌠 Cosmic Events',
      description: 'Rare and spectacular events that occur in the cosmos, often visible from Earth.',
      facts: [
        'Solar Eclipses - When the Moon blocks the Sun\'s light, creating a brief period of darkness',
        'Meteor Showers - Debris from comets burning up in Earth\'s atmosphere',
        'Supernovas - Explosive deaths of massive stars, briefly outshining entire galaxies',
        'Gamma-Ray Bursts - The most energetic explosions in the universe, lasting from milliseconds to hours'
      ],
      image: '⚡'
    },
    {
      id: 'exoplanets',
      title: '🪐 Exoplanets',
      description: 'Planets that orbit stars outside our solar system, expanding our understanding of planetary systems.',
      facts: [
        'Proxima Centauri b - Closest exoplanet to Earth, located in the habitable zone',
        'TRAPPIST-1 System - Contains seven Earth-sized planets, three in habitable zones',
        'Hot Jupiters - Gas giants that orbit very close to their host stars',
        'Super-Earths - Planets larger than Earth but smaller than Neptune'
      ],
      image: '🌍'
    },
    {
      id: 'dark-matter',
      title: '🌑 Dark Matter & Energy',
      description: 'Mysterious components that make up most of the universe, yet remain largely undetectable except through their gravitational effects.',
      facts: [
        'Dark Matter - Makes up about 27% of the universe, invisible but detectable through gravity',
        'Dark Energy - Comprises about 68% of the universe, causing accelerated expansion',
        'Ordinary Matter - Everything we can see makes up only about 5% of the universe',
        'Cosmic Web - Large-scale structure formed by dark matter filaments connecting galaxies'
      ],
      image: '🕸️'
    }
  ];

  return (
    <div className="astronomy">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Astronomical Phenomena</h1>
          <p>Discover the wonders of our universe and beyond</p>
          <div className="hero-subtext">
            <p>From the birth of stars to the mysteries of dark matter, explore the cosmos in all its magnificent complexity</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Final Frontier</h2>
          <p>
            Astronomy reveals the grandeur and mystery of the cosmos. With each observation, we uncover new phenomena that 
            challenge our understanding and expand our perception of reality. From our own solar system to distant galaxies, 
            the universe presents endless wonders waiting to be explored.
          </p>
          <p>
            Modern telescopes and space missions continue to reveal breathtaking images and surprising discoveries that 
            reshape our understanding of the universe and our place within it.
          </p>
        </div>
      </section>

      <section className="content-section">
        {phenomena.map((phenomenon) => (
          <div key={phenomenon.id} className="phenomenon-card">
            <div className="card-header">
              <span className="phenomenon-emoji">{phenomenon.image}</span>
              <h2>{phenomenon.title}</h2>
            </div>
            <p className="phenomenon-description">{phenomenon.description}</p>
            <div className="facts">
              <ul>
                {phenomenon.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="did-you-know">
        <div className="did-you-know-content">
          <h2>🔭 Did You Know?</h2>
          <p>
            The light from distant stars and galaxies has been traveling for millions or even billions of years to reach us. 
            When we observe the night sky, we're essentially looking back in time, witnessing the universe as it existed 
            in the distant past.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Astronomy;