import { Link } from 'react-router-dom';
import './Mathematics.css';

const Mathematics = () => {
  const topics = [
    {
      id: 'calculus',
      title: '📊 Calculus & Analysis',
      description: 'The mathematical study of continuous change, including derivatives and integrals.',
      facts: [
        'Calculus was independently developed by Newton and Leibniz in the 17th century',
        'Derivatives measure instantaneous rates of change',
        'Integrals calculate areas under curves and accumulated quantities',
        'Calculus is essential for physics, engineering, and economics'
      ],
      image: '📈'
    },
    {
      id: 'algebra',
      title: '🔢 Abstract Algebra',
      description: 'Study of algebraic structures such as groups, rings, and fields.',
      facts: [
        'Group theory describes symmetries in mathematics and physics',
        'Abstract algebra generalizes arithmetic operations',
        'Galois theory connects field theory and group theory',
        'Linear algebra is fundamental to computer graphics and machine learning'
      ],
      image: '🧮'
    },
    {
      id: 'geometry',
      title: '📐 Geometry & Topology',
      description: 'Branches of mathematics dealing with shapes, sizes, and properties of space.',
      facts: [
        'Non-Euclidean geometry describes curved spaces',
        'Topology studies properties preserved under continuous deformations',
        'Fractal geometry describes natural patterns like coastlines and snowflakes',
        'Differential geometry is essential for Einstein\'s theory of relativity'
      ],
      image: '🌀'
    },
    {
      id: 'number-theory',
      title: '🔢 Number Theory',
      description: 'Study of integers and their properties, including prime numbers and Diophantine equations.',
      facts: [
        'Prime numbers are the building blocks of all integers',
        'The Riemann Hypothesis is one of mathematics\' most famous unsolved problems',
        'Modular arithmetic is used in cryptography',
        'Fermat\'s Last Theorem was proven after 358 years'
      ],
      image: '🔢'
    },
    {
      id: 'logic',
      title: '🧠 Mathematical Logic',
      description: 'Study of formal logic within mathematics, including proof theory and model theory.',
      facts: [
        'Gödel\'s incompleteness theorems show limits of formal systems',
        'Boolean algebra is the foundation of digital circuit design',
        'Set theory provides the foundation for most of mathematics',
        'Proof assistants help verify complex mathematical proofs'
      ],
      image: '🔍'
    },
    {
      id: 'applied-math',
      title: '📉 Applied Mathematics',
      description: 'Mathematical methods used in science, engineering, business, and industry.',
      facts: [
        'Statistics helps make sense of data and uncertainty',
        'Game theory analyzes strategic decision-making',
        'Operations research optimizes complex systems',
        'Mathematical modeling predicts real-world phenomena'
      ],
      image: '📊'
    }
  ];

  return (
    <div className="mathematics">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Mathematics & Logic</h1>
          <p>The language of the universe and foundation of science</p>
          <div className="hero-subtext">
            <p>From ancient geometry to modern topology, explore the elegant structures that underlie reality</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Beauty of Abstract Thought</h2>
          <p>
            Mathematics reveals hidden patterns and relationships that govern everything from the spirals of galaxies 
            to the algorithms powering artificial intelligence. Through abstraction and logical reasoning, 
            mathematicians discover eternal truths that transcend cultural and temporal boundaries.
          </p>
          <p>
            From the practical calculations of engineering to the abstract beauty of pure mathematics, 
            this discipline provides both tools for understanding the world and a source of aesthetic pleasure 
            through its elegant proofs and surprising connections.
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
          <h2>📐 Did You Know?</h2>
          <p>
            The Fibonacci sequence appears throughout nature, from the arrangement of leaves on stems 
            to the spiral of nautilus shells. Mathematical constants like π and e appear in seemingly 
            unrelated areas, suggesting a deep underlying unity in the structure of reality. 
            Some mathematicians believe they discover eternal truths rather than invent them.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Mathematics;