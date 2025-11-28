import { Link } from 'react-router-dom';
import './Oceanography.css';

const Oceanography = () => {
  const topics = [
    {
      id: 'marine-biology',
      title: '🐠 Marine Biology',
      description: 'The study of organisms living in oceans, from microscopic plankton to massive whales.',
      facts: [
        'The ocean contains over 99% of the world\'s living space',
        'Deep-sea creatures survive in extreme pressure and darkness',
        'Coral reefs support 25% of marine species despite covering less than 1% of the ocean floor',
        'Bioluminescent organisms create natural light shows in the deep ocean'
      ],
      image: '🐋'
    },
    {
      id: 'ocean-physics',
      title: '🌊 Physical Oceanography',
      description: 'The study of ocean currents, waves, tides, and the physical properties of seawater.',
      facts: [
        'The Gulf Stream carries warm water from the Gulf of Mexico to Northern Europe',
        'Tsunamis can travel at speeds over 500 mph across the ocean',
        'Thermohaline circulation drives global ocean conveyor belts',
        'El Niño and La Niña affect weather patterns worldwide'
      ],
      image: '🌀'
    },
    {
      id: 'marine-geology',
      title: '🌋 Marine Geology',
      description: 'The study of the geologic features and processes of the ocean floor.',
      facts: [
        'The Mid-Atlantic Ridge creates new oceanic crust continuously',
        'Underwater volcanoes form new islands like Surtsey in Iceland',
        'Submarine canyons carve deep channels in continental shelves',
        'Hydrothermal vents support unique ecosystems without sunlight'
      ],
      image: '🌋'
    },
    {
      id: 'ocean-conservation',
      title: '♻️ Ocean Conservation',
      description: 'Efforts to protect marine ecosystems and biodiversity from human impact.',
      facts: [
        'Over 8 million tons of plastic enter oceans annually',
        'Marine protected areas cover only 7% of the world\'s oceans',
        'Ocean acidification threatens coral reefs and shellfish',
        'Sea level rise affects coastal communities worldwide'
      ],
      image: '🌍'
    }
  ];

  return (
    <div className="oceanography">
      <div className="hero-section">
        <div className="hero-content">
          <h1>🌊 Oceanography</h1>
          <p>Exploring the Depths of Our Planet's Last Frontier</p>
          <p className="hero-subtext">Discovering mysteries hidden beneath the waves</p>
        </div>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <div className="topic-icon">{topic.image}</div>
            <h3>{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>
            <div className="facts-container">
              <h4>Fascinating Facts:</h4>
              <ul>
                {topic.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-hub">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </div>
    </div>
  );
};

export default Oceanography;