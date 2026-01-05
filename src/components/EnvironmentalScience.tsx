import { Link } from 'react-router-dom';
import './EnvironmentalScience.css';

const EnvironmentalScience = () => {
  const topics = [
    {
      id: 'climate-change',
      title: '🌡️ Climate Change',
      description: 'Long-term shifts in temperatures and weather patterns, primarily caused by human activities.',
      facts: [
        'Global temperatures have risen by about 1.1°C since the late 19th century',
        'The last decade included the warmest years on record',
        'Sea levels are rising at about 3.3 mm per year',
        'Arctic sea ice is declining at 13% per decade'
      ],
      image: '🔥'
    },
    {
      id: 'biodiversity',
      title: '🦋 Biodiversity & Conservation',
      description: 'The variety of life on Earth and efforts to protect it from extinction.',
      facts: [
        'Scientists estimate 8.7 million species exist on Earth',
        'Current extinction rates are 100-1000 times higher than natural background rates',
        'Protected areas cover about 15% of land and 7% of oceans',
        'Coral reefs support 25% of marine species despite covering less than 1% of ocean floor'
      ],
      image: '🦜'
    },
    {
      id: 'pollution',
      title: '🚯 Pollution & Toxins',
      description: 'Introduction of contaminants into the environment that cause adverse effects.',
      facts: [
        '91% of the world\'s population lives in areas with poor air quality',
        '8 million tons of plastic enter oceans annually',
        'Microplastics have been found in human blood and placenta',
        'Noise pollution affects wildlife behavior and human health'
      ],
      image: '🧨'
    },
    {
      id: 'sustainability',
      title: '♻️ Sustainability',
      description: 'Meeting present needs without compromising future generations\' ability to meet theirs.',
      facts: [
        'Circular economy aims to eliminate waste through reuse and recycling',
        'Renewable energy sources accounted for 29% of global electricity in 2021',
        'Sustainable Development Goals guide global efforts until 2030',
        'Carbon footprint calculators help individuals measure environmental impact'
      ],
      image: '🌱'
    },
    {
      id: 'ecosystems',
      title: '🌿 Ecosystem Services',
      description: 'Benefits humans freely gain from natural ecosystems.',
      facts: [
        'Forests absorb about 2.6 billion tons of CO2 annually',
        'Wetlands filter pollutants and prevent flooding',
        'Bees pollinate crops worth $200 billion globally each year',
        'Soil organisms recycle nutrients essential for plant growth'
      ],
      image: '🌳'
    },
    {
      id: 'restoration',
      title: '🌍 Restoration Ecology',
      description: 'Scientific study and practice of renewing degraded ecosystems.',
      facts: [
        'Rewilding projects reintroduce native species to restore ecological balance',
        'Urban forests reduce air pollution and urban heat islands',
        'Living walls and green roofs improve building energy efficiency',
        'Assisted migration helps species adapt to climate change'
      ],
      image: ' volunte'
    }
  ];

  return (
    <div className="environmental-science">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Environmental Science</h1>
          <p>Understanding our planet\'s systems and humanity\'s impact</p>
          <div className="hero-subtext">
            <p>From climate change to conservation, explore the science of our relationship with Earth</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Our Planet, Our Responsibility</h2>
          <p>
            Environmental science integrates physical, biological, and information sciences to study 
            the environment and find solutions to environmental problems. As human activities increasingly 
            impact Earth\'s systems, understanding these complex interactions becomes critical for 
            sustainable coexistence.
          </p>
          <p>
            Through interdisciplinary research, environmental scientists work to balance human needs 
            with ecosystem health, developing strategies for conservation, pollution control, 
            and sustainable resource management.
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
            Earth\'s atmosphere is incredibly thin—like the skin of an apple relative to its size. 
            This delicate layer protects all life from harmful radiation and maintains the temperatures 
            necessary for existence. The interconnected web of ecosystems means that changes in one area 
            can have cascading effects worldwide, highlighting the importance of global environmental stewardship.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default EnvironmentalScience;