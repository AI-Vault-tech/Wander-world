import { Link } from 'react-router-dom';
import './MaterialsScience.css';

const MaterialsScience = () => {
  const topics = [
    {
      id: 'nanomaterials',
      title: '🔬 Nanomaterials',
      description: 'Materials with structural features sized between 1-100 nanometers, exhibiting unique properties.',
      facts: [
        'Carbon nanotubes are 100 times stronger than steel but six times lighter',
        'Graphene is the thinnest material known, yet strongest ever tested',
        'Quantum dots change color based on their size',
        'Nanomaterials enable targeted drug delivery in medicine'
      ],
      image: '⚛️'
    },
    {
      id: 'smart-materials',
      title: '🧠 Smart Materials',
      description: 'Materials that respond to environmental stimuli with changes in properties or shape.',
      facts: [
        'Shape-memory alloys "remember" their original shape',
        'Piezoelectric materials convert mechanical stress to electrical energy',
        'Self-healing materials can repair damage automatically',
        'Thermochromic materials change color with temperature'
      ],
      image: '🔄'
    },
    {
      id: 'biomaterials',
      title: '🧬 Biomaterials',
      description: 'Substances engineered to interact with biological systems for medical purposes.',
      facts: [
        'Biodegradable polymers dissolve safely in the body',
        'Titanium implants integrate with bone tissue',
        'Hydrogels mimic natural tissue properties',
        'Biosensors detect biological markers in real-time'
      ],
      image: '🧫'
    },
    {
      id: 'metamaterials',
      title: '🌀 Metamaterials',
      description: 'Engineered materials with properties not found in nature, achieved through structure.',
      facts: [
        'Negative refractive index bends light unnaturally',
        'Acoustic metamaterials can create sound barriers',
        'Metamaterials enable invisibility cloaks in theory',
        'Programmable matter can change properties on demand'
      ],
      image: '🎭'
    },
    {
      id: 'superconductors',
      title: '⚡ Superconductors',
      description: 'Materials that conduct electricity with zero resistance below a critical temperature.',
      facts: [
        'Superconductors expel magnetic fields (Meissner effect)',
        'High-temperature superconductors work above liquid nitrogen temperature',
        'Maglev trains use superconducting magnets for frictionless travel',
        'Quantum computers rely on superconducting circuits'
      ],
      image: '🚄'
    },
    {
      id: 'composite-materials',
      title: '🧵 Composite Materials',
      description: 'Materials made from two or more constituent materials with different properties.',
      facts: [
        'Carbon fiber composites are used in aerospace and sports equipment',
        'Fiber-reinforced plastics combine strength with lightweight',
        'Metal matrix composites enhance thermal and mechanical properties',
        'Natural composites like bone inspire synthetic versions'
      ],
      image: '🏗️'
    }
  ];

  return (
    <div className="materials-science">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Materials Science</h1>
          <p>The foundation of technological advancement</p>
          <div className="hero-subtext">
            <p>From nanomaterials to smart materials, explore the building blocks of innovation</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Engineering the Future</h2>
          <p>
            Materials science sits at the intersection of physics, chemistry, and engineering, 
            focusing on understanding and designing materials with specific properties for various applications. 
            From the silicon in your computer to the alloys in aircraft engines, materials science 
            enables virtually every technological advancement.
          </p>
          <p>
            As we push the boundaries of what materials can do, we're creating substances with 
            unprecedented properties that were once confined to science fiction.
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
          <h2>🧵 Did You Know?</h2>
          <p>
            The development of new materials has historically driven human progress: 
            Stone Age, Bronze Age, Iron Age - each named for its defining materials. 
            Today, we're in the Silicon Age, but emerging materials like graphene and metamaterials 
            may define the next era. A single sheet of graphene, just one atom thick, 
            would take 300,000 sheets stacked to equal the thickness of a newspaper, 
            yet it conducts electricity better than copper and is stronger than steel.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default MaterialsScience;