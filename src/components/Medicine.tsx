import { Link } from 'react-router-dom';
import './Medicine.css';

const Medicine = () => {
  const topics = [
    {
      id: 'gene-therapy',
      title: '🧬 Gene Therapy',
      description: 'Treatment techniques that use genes to prevent or treat disease by replacing faulty genes or introducing new ones.',
      facts: [
        'First gene therapy approved in 2017 for inherited blindness',
        'CAR-T cell therapy modifies immune cells to fight cancer',
        'Gene editing can potentially cure genetic disorders like sickle cell disease',
        'In vivo gene therapy delivers genes directly to patient tissues'
      ],
      image: '🧬'
    },
    {
      id: 'vaccines',
      title: '💉 Vaccines',
      description: 'Biological preparations that provide immunity to specific infectious diseases through antigen exposure.',
      facts: [
        'Vaccines have eradicated smallpox and nearly eliminated polio',
        'mRNA vaccines developed for COVID-19 in record time',
        'Over 20 vaccines exist for different diseases',
        'Vaccines prevent 2-3 million deaths annually worldwide'
      ],
      image: '🛡️'
    },
    {
      id: 'medical-devices',
      title: '🏥 Medical Devices',
      description: 'Instruments, apparatus, or machines used for diagnosing, monitoring, treating, or preventing disease.',
      facts: [
        'Pacemakers regulate heart rhythm in millions of patients',
        'MRI machines create detailed images of soft tissues without radiation',
        'Robotic surgical systems enable precise minimally invasive procedures',
        'Continuous glucose monitors help diabetics manage blood sugar'
      ],
      image: '⚙️'
    },
    {
      id: 'precision-medicine',
      title: '🎯 Precision Medicine',
      description: 'Medical treatment tailored to individual characteristics, including genetics, environment, and lifestyle.',
      facts: [
        'Pharmacogenomics studies how genes affect drug response',
        'Cancer treatment increasingly targets specific genetic mutations',
        'Liquid biopsies detect cancer DNA in blood samples',
        'Personalized medicine reduces adverse drug reactions'
      ],
      image: '🧬'
    },
    {
      id: 'regenerative-medicine',
      title: '🔄 Regenerative Medicine',
      description: 'Field focused on replacing or regenerating human cells, tissues, or organs to restore normal function.',
      facts: [
        'Stem cell therapies treat blood cancers and immune disorders',
        '3D bioprinting creates tissue scaffolds for organ replacement',
        'Tissue engineering grows skin grafts for burn victims',
        'Organoids model human organs for drug testing'
      ],
      image: '🌱'
    },
    {
      id: 'telemedicine',
      title: '📱 Telemedicine',
      description: 'Remote healthcare delivery using telecommunications technology to connect patients and providers.',
      facts: [
        'Telehealth visits increased 38x during the pandemic',
        'Remote monitoring helps manage chronic conditions',
        'AI-powered diagnostic tools assist healthcare providers',
        'Global health initiatives use telemedicine to reach underserved areas'
      ],
      image: '💻'
    }
  ];

  return (
    <div className="medicine">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Medical Breakthroughs</h1>
          <p>Revolutionary advances transforming healthcare and saving lives</p>
          <div className="hero-subtext">
            <p>From gene therapy to telemedicine, explore innovations extending and improving human life</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Healing Through Innovation</h2>
          <p>
            Medical science continues to push boundaries, turning previously incurable conditions into manageable ones 
            and transforming the practice of medicine itself. Through genomics, biotechnology, artificial intelligence, 
            and engineering, researchers develop treatments that target diseases at their root causes rather than just symptoms.
          </p>
          <p>
            These breakthroughs not only extend human lifespan but also improve quality of life, 
            offering hope to patients with previously untreatable conditions and reshaping healthcare delivery worldwide.
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
          <h2>💊 Did You Know?</h2>
          <p>
            The human body contains approximately 37 trillion cells, each containing the complete genetic blueprint 
            for building and maintaining a human being. Modern medicine now has tools to read, understand, 
            and even rewrite parts of this blueprint to treat diseases at their most fundamental level. 
            We are entering an era where personalized genetic medicine will become routine healthcare.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Medicine;