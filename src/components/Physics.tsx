import { Link } from 'react-router-dom';
import './Physics.css';

const Physics = () => {
  const topics = [
    {
      id: 'quantum',
      title: '⚛️ Quantum Mechanics',
      description: 'The branch of physics that deals with the behavior of matter and light on atomic and subatomic scales.',
      facts: [
        'Particles can exist in multiple states simultaneously (superposition)',
        'Observing a quantum system changes its state (observer effect)',
        'Entangled particles can instantly affect each other regardless of distance',
        'Quantum tunneling allows particles to pass through seemingly impenetrable barriers'
      ],
      image: '⚛️'
    },
    {
      id: 'relativity',
      title: '🌌 Relativity',
      description: 'Einstein\'s theories explaining the relationship between space, time, matter, and gravity.',
      facts: [
        'Time moves slower for objects traveling at high speeds (time dilation)',
        'Mass and energy are interchangeable (E=mc²)',
        'Gravity bends space and time (general relativity)',
        'Nothing can travel faster than light in a vacuum'
      ],
      image: '🌠'
    },
    {
      id: 'thermodynamics',
      title: '🔥 Thermodynamics',
      description: 'The study of heat, temperature, and their relationship to energy and work.',
      facts: [
        'Energy cannot be created or destroyed, only transformed',
        'Entropy (disorder) of a closed system always increases',
        'Absolute zero (-273.15°C) is theoretically impossible to reach',
        'Heat naturally flows from hot to cold objects'
      ],
      image: '🌡️'
    },
    {
      id: 'electromagnetism',
      title: '⚡ Electromagnetism',
      description: 'The study of electric and magnetic fields and their interactions with matter.',
      facts: [
        'Light is an electromagnetic wave traveling at 299,792,458 meters per second',
        'Electric and magnetic fields are two aspects of the same phenomenon',
        'Electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, UV, X-rays, and gamma rays',
        'All permanent magnets have a north and south pole that cannot be separated'
      ],
      image: '🧲'
    },
    {
      id: 'particle-physics',
      title: '🔬 Particle Physics',
      description: 'The study of fundamental particles and forces that make up matter and energy.',
      facts: [
        'Standard Model describes 17 fundamental particles including quarks and leptons',
        'Higgs boson gives other particles their mass',
        'Neutrinos are ghostly particles that rarely interact with matter',
        'Antimatter particles have opposite charges to their matter counterparts'
      ],
      image: ' Collider'
    },
    {
      id: 'chemical-reactions',
      title: '⚗️ Chemical Reactions',
      description: 'Processes that transform substances into different substances through rearrangement of atoms.',
      facts: [
        'Catalysts speed up reactions without being consumed',
        'Activation energy is the minimum energy needed to start a reaction',
        'Chemical equilibrium occurs when forward and reverse reactions proceed at equal rates',
        'Oxidation-reduction (redox) reactions involve transfer of electrons'
      ],
      image: '🧪'
    }
  ];

  return (
    <div className="physics">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Physics & Chemistry</h1>
          <p>Understanding the fundamental forces and reactions that govern reality</p>
          <div className="hero-subtext">
            <p>From quantum mechanics to classical physics, explore the laws that shape our universe</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Laws of Nature</h2>
          <p>
            Physics seeks to understand the fundamental principles that govern the behavior of matter and energy at all scales, 
            from the smallest subatomic particles to the largest structures in the cosmos. Chemistry builds upon these principles 
            to explain how atoms combine to form the vast array of substances we encounter in daily life.
          </p>
          <p>
            Together, these disciplines reveal the elegant mathematical relationships that underlie all natural phenomena, 
            enabling technological advances that transform society and deepen our understanding of existence itself.
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
          <h2>⚛️ Did You Know?</h2>
          <p>
            The atoms in your body were forged in the cores of ancient stars billions of years ago. 
            When stars die in spectacular supernova explosions, they scatter these elements throughout space, 
            eventually becoming part of new stars, planets, and ultimately, life itself. 
            You are literally made of star stuff.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Physics;