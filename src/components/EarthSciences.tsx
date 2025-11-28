import { Link } from 'react-router-dom';
import './EarthSciences.css';

const EarthSciences = () => {
  const topics = [
    {
      id: 'geology',
      title: '🌋 Geology',
      description: 'The study of Earth\'s physical structure, composition, and the processes that shape our planet.',
      facts: [
        'Earth is about 4.5 billion years old',
        'Plate tectonics cause earthquakes, volcanoes, and mountain formation',
        'The deepest drill hole reached only 12 kilometers into Earth\'s crust',
        'Earth\'s magnetic field protects us from harmful solar radiation'
      ],
      image: '🪨'
    },
    {
      id: 'meteorology',
      title: '🌪️ Meteorology',
      description: 'The study of atmospheric phenomena and weather patterns that affect our daily lives.',
      facts: [
        'Lightning strikes Earth 100 times per second',
        'Hurricane winds can exceed 300 km/h (186 mph)',
        'The highest recorded temperature was 56.7°C (134°F) in Death Valley',
        'Weather balloons are launched twice daily worldwide to collect atmospheric data'
      ],
      image: '🌦️'
    },
    {
      id: 'oceanography',
      title: '🌊 Oceanography',
      description: 'The interdisciplinary study of Earth\'s oceans, including their physical, chemical, and biological properties.',
      facts: [
        'Oceans cover 71% of Earth\'s surface',
        'The Mariana Trench reaches a depth of nearly 11 kilometers',
        'More than 80% of ocean remains unmapped and unexplored',
        'Ocean currents regulate global climate patterns'
      ],
      image: '🐙'
    },
    {
      id: 'climatology',
      title: '🌍 Climatology',
      description: 'The study of climate patterns and long-term atmospheric conditions across Earth.',
      facts: [
        'Earth\'s climate has changed naturally throughout its history',
        'Ice cores contain climate records spanning hundreds of thousands of years',
        'El Niño and La Niña cycles affect global weather patterns',
        'Current climate change is occurring at an unprecedented rate'
      ],
      image: '🌡️'
    },
    {
      id: 'hydrology',
      title: '💧 Hydrology',
      description: 'The study of water movement, distribution, and quality on Earth\'s surface and underground.',
      facts: [
        'Only 2.5% of Earth\'s water is freshwater',
        'The Amazon River carries more water than any other river',
        'Groundwater accounts for 30% of freshwater resources',
        'Water continuously cycles between oceans, atmosphere, and land'
      ],
      image: '🚰'
    },
    {
      id: 'seismology',
      title: ' earthquаke Seismology',
      description: 'The study of earthquakes and seismic waves to understand Earth\'s interior structure.',
      facts: [
        'Approximately 500,000 earthquakes occur annually, with 100,000 felt by humans',
        'Seismic waves helped discover Earth\'s core structure',
        'The Richter scale measures earthquake magnitude logarithmically',
        'Early warning systems can provide seconds to minutes of advance notice'
      ],
      image: '📡'
    }
  ];

  return (
    <div className="earth-sciences">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Earth Sciences</h1>
          <p>Investigating our dynamic planet and its interconnected systems</p>
          <div className="hero-subtext">
            <p>From the depths of the oceans to the heights of the atmosphere, explore the forces that shape our world</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Our Living Planet</h2>
          <p>
            Earth sciences encompass the study of our planet\'s physical and chemical processes, from the molten core to the outer atmosphere. 
            These disciplines help us understand natural hazards, locate resources, and predict environmental changes that affect all life.
          </p>
          <p>
            Through geology, meteorology, oceanography, and related fields, scientists piece together Earth\'s history 
            while monitoring current changes that will shape our planet\'s future.
          </p>
        </div>
      </section>

      <section className="content-section">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <div className="card-header">
              <span className="topic-emoji">{topic.image}</span>
              <h2>{topic.title}</h2>
            </div>
            <p className="topic-description">{topic.description}</p>
            <div className="facts">
              <ul>
                {topic.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="did-you-know">
        <div className="did-you-know-content">
          <h2>🌍 Did You Know?</h2>
          <p>
            Earth is the only known planet with life, liquid water on its surface, and plate tectonics. 
            Our planet\'s magnetic field, generated by the motion of molten iron in its outer core, 
            extends thousands of kilometers into space and deflects charged particles from the Sun 
            that would otherwise strip away our atmosphere and make life impossible.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default EarthSciences;