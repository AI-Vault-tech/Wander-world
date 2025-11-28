import { Link } from 'react-router-dom';
import './Biotechnology.css';

const Biotechnology = () => {
  const topics = [
    {
      id: 'genetic-engineering',
      title: '🧬 Genetic Engineering',
      description: 'The direct manipulation of an organism\'s genes using biotechnology to create desired traits.',
      facts: [
        'CRISPR-Cas9 allows precise editing of DNA sequences',
        'Genetically modified crops can resist pests and herbicides',
        'Gene therapy treats genetic disorders by replacing faulty genes',
        'Synthetic biology creates artificial biological systems'
      ],
      image: '🧪'
    },
    {
      id: 'biopharma',
      title: '💊 Biopharmaceuticals',
      description: 'Medicines created using living organisms or their components, including vaccines and therapeutic proteins.',
      facts: [
        'Monoclonal antibodies target specific disease markers',
        'Recombinant DNA technology produces insulin and growth hormones',
        'mRNA vaccines instruct cells to produce antigens',
        'Biosimilars are highly similar to approved biologic medicines'
      ],
      image: '💉'
    },
    {
      id: 'synthetic-biology',
      title: '🧫 Synthetic Biology',
      description: 'The design and construction of new biological parts, devices, and systems not found in nature.',
      facts: [
        'Engineered bacteria can produce biofuels and pharmaceuticals',
        'Artificial chromosomes can carry multiple genes',
        'Bioengineered organs may eliminate transplant waiting lists',
        'Living materials can self-heal and respond to environmental changes'
      ],
      image: '🔬'
    },
    {
      id: 'bioinformatics',
      title: '💻 Bioinformatics',
      description: 'The application of computational tools to understand and organize biological data.',
      facts: [
        'DNA sequencing generates terabytes of genetic data',
        'Machine learning predicts protein structures',
        'Genomic databases store information from thousands of species',
        'Personalized medicine uses genetic profiles to tailor treatments'
      ],
      image: '📊'
    }
  ];

  return (
    <div className="biotechnology">
      <div className="hero-section">
        <div className="hero-content">
          <h1>🧬 Biotechnology</h1>
          <p>Redefining Life Through Scientific Innovation</p>
          <p className="hero-subtext">Where biology meets technology to solve humanity's greatest challenges</p>
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

export default Biotechnology;