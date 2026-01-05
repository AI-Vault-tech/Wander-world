import { Link } from 'react-router-dom';
import './Robotics.css';

const Robotics = () => {
  const topics = [
    {
      id: 'industrial-robots',
      title: '🏭 Industrial Robots',
      description: 'Automated machines used in manufacturing and production environments.',
      facts: [
        'Over 50% of industrial robots are used in automotive manufacturing',
        'Collaborative robots (cobots) work safely alongside humans',
        'Robotic assembly lines increase precision and productivity',
        'Industrial robots can operate 24/7 without breaks'
      ],
      image: '🤖'
    },
    {
      id: 'service-robots',
      title: '🏨 Service Robots',
      description: 'Robots designed to perform useful services for humans in non-industrial settings.',
      facts: [
        'Domestic robots like Roomba clean homes autonomously',
        'Hospital robots deliver medications and assist in surgeries',
        'Customer service robots greet visitors in hotels and malls',
        'Telepresence robots enable remote participation in meetings'
      ],
      image: '🧹'
    },
    {
      id: 'autonomous-vehicles',
      title: '🚗 Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones that navigate without human input.',
      facts: [
        'Autonomous vehicles use sensors, cameras, and AI to perceive their environment',
        'Tesla Autopilot and Waymo are leaders in self-driving technology',
        'Delivery drones are revolutionizing logistics and e-commerce',
        'Autonomous ships navigate oceans without crew'
      ],
      image: '🚙'
    },
    {
      id: 'robotic-exploration',
      title: 'rovers Space Exploration',
      description: 'Robotic probes and rovers that explore space and other planets.',
      facts: [
        'Mars rovers have operated on the Red Planet for over a decade',
        'Voyager probes have entered interstellar space',
        'Robotic arms on the ISS assist astronauts with experiments',
        'Swarm robotics enables coordinated exploration missions'
      ],
      image: '🛸'
    },
    {
      id: 'bio-inspired-robots',
      title: '🦾 Bio-inspired Robotics',
      description: 'Robots designed based on biological systems and natural principles.',
      facts: [
        'Soft robots mimic the flexibility of octopus arms',
        'Bird-inspired drones achieve efficient flight patterns',
        'Snake-like robots navigate tight spaces for rescue operations',
        'Insect-inspired microbots can swarm and collaborate'
      ],
      image: '🦋'
    },
    {
      id: 'ai-integration',
      title: '🧠 AI & Machine Learning in Robotics',
      description: 'Intelligent algorithms that enable robots to learn, adapt, and make decisions.',
      facts: [
        'Computer vision allows robots to recognize objects and people',
        'Reinforcement learning helps robots master complex tasks',
        'Natural language processing enables voice-controlled robots',
        'Edge computing brings AI processing closer to robotic sensors'
      ],
      image: '💻'
    }
  ];

  return (
    <div className="robotics">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Robotics & Automation</h1>
          <p>The age of intelligent machines</p>
          <div className="hero-subtext">
            <p>From factory floors to outer space, explore how robots are transforming our world</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Machines That Think and Act</h2>
          <p>
            Robotics represents the convergence of mechanical engineering, electronics, computer science, and artificial intelligence. 
            As robots become more sophisticated, they're taking on roles once thought to be exclusively human. 
            From performing delicate surgeries to exploring distant planets, robots are extending human capabilities 
            and venturing into environments too dangerous or inaccessible for people.
          </p>
          <p>
            The integration of AI and machine learning is creating robots that can learn from experience, 
            adapt to new situations, and collaborate with humans in unprecedented ways.
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
          <h2>🤖 Did You Know?</h2>
          <p>
            The term "robot" was first coined in 1921 by Czech writer Karel Čapek in his play "R.U.R." (Rossum's Universal Robots). 
            Today's robots are far more sophisticated than early science fiction imagined. 
            Some robots can learn new tasks by observing humans, while others can repair themselves when damaged. 
            As robotics technology advances, we're moving toward a future where intelligent machines 
            work alongside humans in harmony, amplifying our capabilities rather than replacing us.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/scientific-wonders" className="back-link">← Back to Scientific Wonders</Link>
      </section>
    </div>
  );
};

export default Robotics;