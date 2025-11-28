import { Link } from 'react-router-dom';
import './Technology.css';

const Technology = () => {
  const topics = [
    {
      id: 'ai',
      title: '🤖 Artificial Intelligence',
      description: 'Systems that perform tasks requiring human-like intelligence, including learning, reasoning, and problem-solving.',
      facts: [
        'Machine learning algorithms can recognize images better than humans in some cases',
        'AI is used in medical diagnosis, autonomous vehicles, and language translation',
        'Deep learning neural networks are inspired by the human brain\'s structure',
        'Generative AI can create realistic text, images, and music'
      ],
      image: '🧠'
    },
    {
      id: 'robotics',
      title: '🦾 Robotics',
      description: 'The design, construction, and operation of robots to perform tasks in manufacturing, medicine, and exploration.',
      facts: [
        'Robots are used in over 50% of automotive manufacturing',
        'Surgical robots enable minimally invasive procedures with precision',
        'Robotic rovers explore Mars and other planets',
        'Soft robotics uses flexible materials to mimic biological systems'
      ],
      image: '🔧'
    },
    {
      id: 'renewable-energy',
      title: '☀️ Renewable Energy',
      description: 'Technologies that harness natural processes to generate clean, sustainable power for human needs.',
      facts: [
        'Solar power is now cheaper than coal in many countries',
        'Wind turbines can generate electricity for 20-25 years',
        'Hydrogen fuel cells produce only water as a byproduct',
        'Geothermal energy taps into Earth\'s internal heat'
      ],
      image: '⚡'
    },
    {
      id: 'nanotechnology',
      title: '🔬 Nanotechnology',
      description: 'The manipulation of matter at the atomic and molecular scale to create new materials and devices.',
      facts: [
        'Nanomaterials can be 100 times stronger than steel while being lighter',
        'Quantum dots are used in high-definition displays',
        'Nanomedicine targets drug delivery to specific cells',
        'Self-healing materials can repair damage automatically'
      ],
      image: '🔬'
    },
    {
      id: 'biotechnology',
      title: '🧬 Biotechnology',
      description: 'Using biological systems and organisms to develop or make products for various applications.',
      facts: [
        'CRISPR gene editing can correct genetic disorders',
        'Lab-grown meat reduces environmental impact of livestock farming',
        'Synthetic biology creates new biological systems',
        'Bioplastics decompose naturally unlike traditional plastics'
      ],
      image: '🧬'
    },
    {
      id: 'space-tech',
      title: '🚀 Space Technology',
      description: 'Advances in spacecraft, satellites, and propulsion systems enabling space exploration and utilization.',
      facts: [
        'Reusable rockets dramatically reduce space mission costs',
        'Satellite constellations provide global internet coverage',
        '3D printing in space reduces need for Earth supplies',
        'Private companies now compete in space exploration'
      ],
      image: '🛰️'
    }
  ];

  return (
    <div className="technology">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Technology & Innovation</h1>
          <p>Revolutionary advances shaping our future</p>
          <div className="hero-subtext">
            <p>From artificial intelligence to renewable energy, explore technologies transforming our world</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Innovation Driving Progress</h2>
          <p>
            Technological innovation accelerates at an unprecedented pace, reshaping industries, societies, and our daily lives. 
            From quantum computing to biotechnology, emerging technologies promise solutions to humanity\'s greatest challenges 
            while opening new frontiers for exploration and discovery.
          </p>
          <p>
            The convergence of multiple disciplines—artificial intelligence, nanotechnology, biotechnology, and materials science—
            creates synergistic possibilities that were science fiction just decades ago.
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
          <h2>🚀 Did You Know?</h2>
          <p>
            The smartphone in your pocket has more computing power than all of NASA had when it landed astronauts on the Moon in 1969. 
            Today\'s technology advances so rapidly that the phone you buy today will be considered obsolete in just a few years, 
            yet it contains capabilities that seemed impossible in previous generations.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Technology;