import { Link } from 'react-router-dom';
import './Neuroscience.css';

const Neuroscience = () => {
  const topics = [
    {
      id: 'brain-structure',
      title: '🧠 Brain Structure & Function',
      description: 'Anatomy and physiology of the nervous system, including neurons, brain regions, and their functions.',
      facts: [
        'The human brain contains approximately 86 billion neurons',
        'The cerebral cortex is responsible for higher-order thinking',
        'The cerebellum coordinates movement and balance',
        'The brainstem controls vital functions like breathing and heart rate'
      ],
      image: '🔍'
    },
    {
      id: 'cognitive-processes',
      title: '💭 Cognitive Processes',
      description: 'Mental processes involved in acquiring knowledge and understanding through thought, experience, and the senses.',
      facts: [
        'Working memory can hold 5-9 items simultaneously',
        'Attention acts as a filter for sensory information',
        'Decision-making involves both rational and emotional processes',
        'Creativity emerges from connections between different brain networks'
      ],
      image: '💡'
    },
    {
      id: 'neuroplasticity',
      title: '🔄 Neuroplasticity',
      description: 'The brain\'s ability to reorganize itself by forming new neural connections throughout life.',
      facts: [
        'The brain can rewire itself after injury or stroke',
        'Learning new skills physically changes brain structure',
        'Meditation can increase gray matter density',
        'Neuroplasticity declines with age but remains throughout life'
      ],
      image: '🧬'
    },
    {
      id: 'consciousness',
      title: '👁️ Consciousness & Awareness',
      description: 'The state of being awake and aware of one\'s surroundings, thoughts, and feelings.',
      facts: [
        'Consciousness emerges from complex neural networks',
        'Different levels of consciousness exist (alert, drowsy, asleep)',
        'Anesthesia temporarily disrupts conscious awareness',
        'The "hard problem" of consciousness puzzles philosophers and scientists'
      ],
      image: '🌀'
    },
    {
      id: 'mental-health',
      title: '💙 Mental Health & Disorders',
      description: 'Conditions that affect mood, thinking, and behavior, including depression, anxiety, and schizophrenia.',
      facts: [
        '1 in 5 adults experience mental illness each year',
        'Depression is the leading cause of disability worldwide',
        'Anxiety disorders are the most common mental health conditions',
        'Psychotherapy and medication can be equally effective'
      ],
      image: '❤️'
    },
    {
      id: 'behavioral-psychology',
      title: '👥 Behavioral Psychology',
      description: 'Study of how environmental factors influence human behavior and decision-making.',
      facts: [
        'Classical conditioning creates associations between stimuli',
        'Operant conditioning shapes behavior through rewards and punishments',
        'Social psychology examines how groups influence individuals',
        'Cognitive biases affect judgment and decision-making'
      ],
      image: '👥'
    }
  ];

  return (
    <div className="neuroscience">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Neuroscience & Psychology</h1>
          <p>Unlocking the mysteries of the mind and behavior</p>
          <div className="hero-subtext">
            <p>From neurons to consciousness, explore what makes us think, feel, and act</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>The Mind-Body Connection</h2>
          <p>
            Neuroscience and psychology bridge the gap between the physical brain and the immaterial mind. 
            These disciplines explore how neural activity gives rise to thoughts, emotions, memories, and behaviors. 
            Understanding these processes offers insights into human nature, mental health, and the potential for 
            enhancing cognitive abilities.
          </p>
          <p>
            Modern neuroimaging techniques allow scientists to observe the living brain in action, 
            revealing the biological basis of everything from creativity to morality.
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
          <h2>🧠 Did You Know?</h2>
          <p>
            Your brain consumes about 20% of your body's energy despite weighing only 2% of your total weight. 
            Neurons communicate through electrical impulses and chemical neurotransmitters, creating trillions of 
            connections called synapses. The complexity of these neural networks gives rise to consciousness, 
            personality, and all human experiences. Despite centuries of study, we've only scratched the surface 
            of understanding how the brain creates the mind.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Neuroscience;