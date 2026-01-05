import { Link } from 'react-router-dom';
import './QuantumPhysics.css';

const QuantumPhysics = () => {
  const topics = [
    {
      id: 'quantum-mechanics',
      title: '⚛️ Quantum Mechanics',
      description: 'The branch of physics that deals with the behavior of matter and light on atomic and subatomic scales.',
      facts: [
        'Particles can exist in multiple states simultaneously (superposition)',
        'Observing a quantum system changes its state (observer effect)',
        'Quantum tunneling allows particles to pass through barriers',
        'Entangled particles instantly affect each other regardless of distance'
      ],
      image: '🔬'
    },
    {
      id: 'quantum-computing',
      title: '💻 Quantum Computing',
      description: 'Computing systems that use quantum bits (qubits) to process information in fundamentally new ways.',
      facts: [
        'Quantum computers can solve certain problems exponentially faster than classical computers',
        'Qubits can represent 0, 1, or both simultaneously',
        'Quantum supremacy was achieved when Google\'s quantum computer solved a problem in minutes that would take classical supercomputers thousands of years',
        'Quantum algorithms like Shor\'s algorithm threaten current encryption methods'
      ],
      image: '⚡'
    },
    {
      id: 'quantum-entanglement',
      title: '🔗 Quantum Entanglement',
      description: 'A phenomenon where particles become interconnected and the state of one instantly influences the state of another.',
      facts: [
        'Einstein called entanglement "spooky action at a distance"',
        'Entangled particles maintain their connection regardless of distance',
        'Quantum teleportation transfers quantum states between locations',
        'Entanglement is essential for quantum cryptography and communication'
      ],
      image: '🔗'
    },
    {
      id: 'quantum-field-theory',
      title: '🌌 Quantum Field Theory',
      description: 'The theoretical framework that combines quantum mechanics with special relativity to describe particle interactions.',
      facts: [
        'All particles are excitations in underlying quantum fields',
        'Virtual particles mediate forces between real particles',
        'The Standard Model describes three of the four fundamental forces',
        'Quantum field theory predicts particle-antiparticle pairs appearing from vacuum'
      ],
      image: '🌠'
    }
  ];

  return (
    <div className="quantum-physics">
      <div className="hero-section">
        <div className="hero-content">
          <h1>🔬 Quantum Physics</h1>
          <p>Exploring the Mysteries of the Subatomic Realm</p>
          <p className="hero-subtext">Where the impossible becomes inevitable and reality bends to probability</p>
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

export default QuantumPhysics;