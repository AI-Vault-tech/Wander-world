import { Link } from 'react-router-dom';
import './ComputerScience.css';

const ComputerScience = () => {
  const topics = [
    {
      id: 'artificial-intelligence',
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
      id: 'machine-learning',
      title: '📈 Machine Learning',
      description: 'Algorithms that enable computers to learn and improve from experience without explicit programming.',
      facts: [
        'Supervised learning uses labeled data to train models',
        'Unsupervised learning finds patterns in unlabeled data',
        'Reinforcement learning trains agents through rewards and penalties',
        'Neural networks can have billions of parameters'
      ],
      image: '📊'
    },
    {
      id: 'cybersecurity',
      title: '🔒 Cybersecurity',
      description: 'Practice of protecting systems, networks, and programs from digital attacks.',
      facts: [
        'Zero-day exploits target unknown vulnerabilities',
        'Multi-factor authentication adds layers of security',
        'Encryption protects data from unauthorized access',
        'Ethical hackers help organizations find security weaknesses'
      ],
      image: '🛡️'
    },
    {
      id: 'data-science',
      title: '💾 Data Science',
      description: 'Interdisciplinary field that uses scientific methods to extract knowledge from structured and unstructured data.',
      facts: [
        'Big data involves datasets too large for traditional processing',
        'Data visualization helps communicate insights effectively',
        'Predictive analytics forecasts future trends',
        'Data scientists are among the most in-demand professionals'
      ],
      image: '📈'
    },
    {
      id: 'quantum-computing',
      title: '⚛️ Quantum Computing',
      description: 'Computing technology based on quantum mechanics principles for unprecedented processing power.',
      facts: [
        'Qubits can exist in multiple states simultaneously (superposition)',
        'Quantum entanglement links qubits instantaneously',
        'Quantum computers excel at optimization and simulation problems',
        'Major tech companies are racing to achieve quantum supremacy'
      ],
      image: '🔮'
    },
    {
      id: 'software-engineering',
      title: '💻 Software Engineering',
      description: 'Application of engineering principles to software design, development, and maintenance.',
      facts: [
        'Agile methodology emphasizes iterative development',
        'DevOps bridges development and operations teams',
        'Version control tracks code changes over time',
        'Software testing ensures quality and reliability'
      ],
      image: '⚙️'
    }
  ];

  return (
    <div className="computer-science">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Computer Science & AI</h1>
          <p>The digital frontier transforming our world</p>
          <div className="hero-subtext">
            <p>From artificial intelligence to quantum computing, explore the technologies reshaping tomorrow</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Digital Revolution</h2>
          <p>
            Computer science drives innovation across virtually every industry, from healthcare to entertainment. 
            As we enter the age of artificial intelligence, quantum computing, and ubiquitous connectivity, 
            these technologies are fundamentally changing how we live, work, and interact with the world.
          </p>
          <p>
            The convergence of computational power, big data, and algorithmic sophistication is enabling 
            breakthroughs that seemed like science fiction just decades ago.
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
          <h2>💻 Did You Know?</h2>
          <p>
            The code behind modern software systems can contain millions of lines of instructions. 
            A single smartphone today has more processing power than the computers that guided Apollo missions to the Moon. 
            As Moore's Law slows, researchers are exploring new paradigms like quantum computing and neuromorphic chips 
            to continue advancing computational capabilities.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default ComputerScience;