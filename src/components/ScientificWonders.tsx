import { Link } from 'react-router-dom';
import './ScientificWonders.css';

const ScientificWonders = () => {
  const wonderCategories = [
    {
      id: 'astronomy',
      title: '🔭 Astronomy & Space',
      description: 'Journey through the cosmos and discover celestial phenomena that challenge our understanding of the universe.',
      image: '🌌',
      path: '/scientific-wonders/astronomy',
      highlights: ['Black Holes', 'Nebulas', 'Galaxies', 'Exoplanets']
    },
    {
      id: 'biology',
      title: '🧬 Biology & Genetics',
      description: 'Dive into the microscopic world of life, from DNA structures to evolutionary marvels.',
      image: ' 생명',
      path: '/scientific-wonders/biology',
      highlights: ['Genetics', 'Evolution', 'Microbiology', 'Biotechnology']
    },
    {
      id: 'physics',
      title: '⚡ Physics & Chemistry',
      description: 'Uncover the fundamental forces and reactions that govern our reality.',
      image: '⚛️',
      path: '/scientific-wonders/physics',
      highlights: ['Quantum Mechanics', 'Relativity', 'Chemical Reactions', 'Particle Physics']
    },
    {
      id: 'earth-sciences',
      title: '🌍 Earth Sciences',
      description: 'Investigate geological formations, atmospheric phenomena, and oceanographic discoveries.',
      image: '🌋',
      path: '/scientific-wonders/earth-sciences',
      highlights: ['Geology', 'Meteorology', 'Oceanography', 'Seismology']
    },
    {
      id: 'technology',
      title: '🤖 Technology & Innovation',
      description: 'Witness groundbreaking technological advances shaping our future.',
      image: '💻',
      path: '/scientific-wonders/technology',
      highlights: ['AI & Machine Learning', 'Robotics', 'Renewable Energy', 'Nanotechnology']
    },
    {
      id: 'medicine',
      title: '🧪 Medical Breakthroughs',
      description: 'Learn about revolutionary medical discoveries and healthcare innovations.',
      image: '💊',
      path: '/scientific-wonders/medicine',
      highlights: ['Gene Therapy', 'Vaccines', 'Medical Devices', 'Precision Medicine']
    },
    {
      id: 'mathematics',
      title: '🔢 Mathematics & Logic',
      description: 'Explore the elegant structures and logical foundations that underlie all sciences.',
      image: '📐',
      path: '/scientific-wonders/mathematics',
      highlights: ['Calculus', 'Abstract Algebra', 'Geometry', 'Mathematical Logic']
    },
    {
      id: 'environmental-science',
      title: '🌱 Environmental Science',
      description: 'Understand our planet\'s systems and humanity\'s impact on Earth\'s ecosystems.',
      image: '🌿',
      path: '/scientific-wonders/environmental-science',
      highlights: ['Climate Change', 'Biodiversity', 'Pollution', 'Sustainability']
    },
    {
      id: 'computer-science',
      title: '💻 Computer Science & AI',
      description: 'Discover the digital technologies transforming our world.',
      image: '🤖',
      path: '/scientific-wonders/computer-science',
      highlights: ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Quantum Computing']
    },
    {
      id: 'neuroscience',
      title: '🧠 Neuroscience & Psychology',
      description: 'Unlock the mysteries of the mind, brain, and behavior.',
      image: '💭',
      path: '/scientific-wonders/neuroscience',
      highlights: ['Brain Structure', 'Cognitive Processes', 'Neuroplasticity', 'Consciousness']
    },
    {
      id: 'materials-science',
      title: '🧵 Materials Science',
      description: 'Explore the innovative materials driving technological advancement.',
      image: '🔬',
      path: '/scientific-wonders/materials-science',
      highlights: ['Nanomaterials', 'Smart Materials', 'Superconductors', 'Composites']
    },
    {
      id: 'quantum-physics',
      title: '🔬 Quantum Physics',
      description: 'Explore the mysteries of the subatomic realm where reality bends to probability.',
      image: '⚛️',
      path: '/scientific-wonders/quantum-physics',
      highlights: ['Quantum Mechanics', 'Quantum Computing', 'Entanglement', 'Quantum Field Theory']
    },
    {
      id: 'biotechnology',
      title: '🧬 Biotechnology',
      description: 'Redefining life through scientific innovation at the intersection of biology and technology.',
      image: '🧪',
      path: '/scientific-wonders/biotechnology',
      highlights: ['Genetic Engineering', 'Biopharmaceuticals', 'Synthetic Biology', 'Bioinformatics']
    },
    {
      id: 'oceanography',
      title: '🌊 Oceanography',
      description: 'Exploring the depths of our planet\'s last frontier and discovering mysteries beneath the waves.',
      image: '🐋',
      path: '/scientific-wonders/oceanography',
      highlights: ['Marine Biology', 'Physical Oceanography', 'Marine Geology', 'Ocean Conservation']
    },
    {
      id: 'renewable-energy',
      title: '⚡ Renewable Energy',
      description: 'Powering the future with clean, sustainable sources transforming how we consume energy.',
      image: '☀️',
      path: '/scientific-wonders/renewable-energy',
      highlights: ['Solar Power', 'Wind Energy', 'Hydroelectric', 'Energy Storage']
    }
  ];

  return (
    <div className="scientific-wonders">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Scientific Wonders</h1>
          <p>Explore the fascinating world of science and discovery</p>
          <div className="hero-subtext">
            <p>From the smallest particles to the vastness of space, discover the marvels that shape our understanding of reality</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Frontiers of Human Knowledge</h2>
          <p>
            Science continues to push the boundaries of what we know about our universe. From quantum mechanics to cosmology, 
            from genetic engineering to artificial intelligence, each discovery opens new doors to understanding our world 
            and our place within it.
          </p>
          <p>
            Explore the wonders that have shaped human civilization and continue to drive innovation forward.
          </p>
        </div>
      </section>

      <section className="content-grid">
        {wonderCategories.map((category) => (
          <div key={category.id} className="content-card">
            <div className="card-header">
              <span className="category-emoji">{category.image}</span>
              <h2>{category.title}</h2>
            </div>
            <p className="category-description">{category.description}</p>
            <div className="highlights">
              <h3>Key Areas:</h3>
              <ul>
                {category.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <Link to={category.path} className="card-link">Explore {category.title.split(' ')[0]}</Link>
          </div>
        ))}
      </section>

      <section className="quote-section">
        <div className="quote-content">
          <p>"The important thing is not to stop questioning. Curiosity has its own reason for existing."</p>
          <p className="author">— Albert Einstein</p>
        </div>
      </section>
    </div>
  );
};

export default ScientificWonders;