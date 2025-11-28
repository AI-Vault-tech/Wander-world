import { Link } from 'react-router-dom';
import './Biology.css';

const Biology = () => {
  const topics = [
    {
      id: 'genetics',
      title: '🧬 Genetics & DNA',
      description: 'The study of genes, genetic variation, and heredity in organisms. DNA contains the instructions for building and maintaining living beings.',
      facts: [
        'Human genome contains approximately 3 billion base pairs',
        'Less than 2% of DNA codes for proteins',
        'CRISPR gene editing allows precise DNA modifications',
        'Identical twins have nearly identical DNA sequences'
      ],
      image: '🧬'
    },
    {
      id: 'evolution',
      title: '🐒 Evolution & Natural Selection',
      description: 'The process by which populations of organisms change over generations through mechanisms such as mutation, selection, and genetic drift.',
      facts: [
        'Charles Darwin published "On the Origin of Species" in 1859',
        'Humans share 98.8% of DNA with chimpanzees',
        'Antibiotic resistance is a modern example of evolution in action',
        'Whales evolved from land-dwelling ancestors'
      ],
      image: '🦴'
    },
    {
      id: 'microbiology',
      title: '🦠 Microbiology',
      description: 'The study of microscopic organisms, including bacteria, viruses, archaea, fungi, and protozoa.',
      facts: [
        'There are more bacterial cells in your body than human cells',
        'Viruses are not technically alive but can replicate inside host cells',
        'Some bacteria can survive in extreme environments like deep-sea vents',
        'Penicillin, the first antibiotic, was discovered accidentally in 1928'
      ],
      image: '🔬'
    },
    {
      id: 'biotechnology',
      title: '🧬 Biotechnology',
      description: 'Using biological systems to develop or make products, including genetic engineering, pharmaceuticals, and biofuels.',
      facts: [
        'Insulin for diabetics is now produced by genetically modified bacteria',
        'Golden rice is engineered to produce vitamin A to combat malnutrition',
        'Synthetic biology aims to design and construct new biological parts',
        'Lab-grown meat could revolutionize food production'
      ],
      image: '🧪'
    },
    {
      id: 'ecosystems',
      title: '🌍 Ecosystems & Biodiversity',
      description: 'Communities of living organisms interacting with their physical environment, forming complex webs of relationships.',
      facts: [
        'The Amazon rainforest produces 20% of Earth\'s oxygen',
        'Coral reefs support 25% of marine species despite covering less than 1% of ocean floor',
        'Bees pollinate one-third of the food we eat',
        'Extinction rates are currently 100-1000 times higher than natural background rates'
      ],
      image: '🐝'
    },
    {
      id: 'neuroscience',
      title: '🧠 Neuroscience',
      description: 'The scientific study of the nervous system, including the brain, spinal cord, and neural networks.',
      facts: [
        'The human brain contains approximately 86 billion neurons',
        'The brain uses about 20% of the body\'s total energy',
        'Neuroplasticity allows the brain to rewire itself throughout life',
        'Dreams primarily occur during REM sleep cycles'
      ],
      image: '💡'
    }
  ];

  return (
    <div className="biology">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Biology & Genetics</h1>
          <p>Exploring the science of life and heredity</p>
          <div className="hero-subtext">
            <p>From the molecular machinery of cells to the complexity of ecosystems, discover the principles that govern all living things</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Science of Life</h2>
          <p>
            Biology encompasses the study of all living organisms, from the smallest molecules to entire ecosystems. 
            Through genetics, we understand how traits are passed from generation to generation. Through ecology, 
            we learn how organisms interact with each other and their environment.
          </p>
          <p>
            Modern biological research continues to unlock secrets of life, leading to medical breakthroughs, 
            sustainable technologies, and a deeper appreciation for the interconnectedness of all living things.
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
          <h2>🧬 Did You Know?</h2>
          <p>
            Every human being starts as a single cell containing all the genetic information needed to develop into a complex organism 
            with trillions of specialized cells working together. The journey from fertilized egg to adult involves precise coordination 
            of gene expression, cellular differentiation, and organ formation.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Biology;