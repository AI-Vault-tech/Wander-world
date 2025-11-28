import { Link } from 'react-router-dom';
import './RenewableEnergy.css';

const RenewableEnergy = () => {
  const topics = [
    {
      id: 'solar-power',
      title: '☀️ Solar Power',
      description: 'Harnessing energy from the sun using photovoltaic cells and thermal collectors.',
      facts: [
        'Solar energy is the fastest-growing source of electricity worldwide',
        'Perovskite solar cells may revolutionize solar panel efficiency',
        'Floating solar farms reduce water evaporation while generating electricity',
        'Solar-powered desalination can provide clean water to arid regions'
      ],
      image: '☀️'
    },
    {
      id: 'wind-energy',
      title: '🌬️ Wind Energy',
      description: 'Converting wind kinetic energy into electrical power using turbines.',
      facts: [
        'Modern wind turbines can generate enough electricity for 1,500 homes',
        'Offshore wind farms harness stronger and more consistent winds',
        'Vertical axis turbines work in any wind direction',
        'Wind energy could supply more than 20 times global electricity demand'
      ],
      image: '💨'
    },
    {
      id: 'hydroelectric',
      title: '💧 Hydroelectric Power',
      description: 'Generating electricity from flowing or falling water.',
      facts: [
        'Hydroelectricity provides 16% of global electricity',
        'Pumped storage systems store energy by moving water between reservoirs',
        'Micro-hydro systems can power remote communities',
        'Tidal and wave energy capture ocean movement for electricity'
      ],
      image: '🌊'
    },
    {
      id: 'energy-storage',
      title: '🔋 Energy Storage',
      description: 'Technologies that store energy for later use, enabling renewable energy reliability.',
      facts: [
        'Lithium-sulfur batteries could store 5 times more energy than current lithium-ion',
        'Gravity-based storage uses excess energy to lift heavy weights',
        'Liquid air energy storage freezes air when energy is abundant',
        'Green hydrogen stores renewable energy as chemical bonds'
      ],
      image: '⚡'
    }
  ];

  return (
    <div className="renewable-energy">
      <div className="hero-section">
        <div className="hero-content">
          <h1>⚡ Renewable Energy</h1>
          <p>Powering the Future with Clean, Sustainable Sources</p>
          <p className="hero-subtext">Transforming how we generate and consume energy for a sustainable planet</p>
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

export default RenewableEnergy;