import React from 'react';
import './HighFlyers.css';

const HighFlyers = () => {
  const highFlyers = [
    {
      id: 'ruppell',
      name: 'Rüppell\'s Vulture',
      scientificName: 'Gyps rueppelli',
      description: 'The highest-flying bird recorded, reaching altitudes of over 11,000 meters where oxygen is scarce.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '95-105cm',
      wingspan: '2.5-3m',
      habitat: 'African savannas and semi-deserts',
      diet: 'Carrion (dead animals)',
      funFact: 'Collides with aircraft at extreme altitudes - one was found in an airplane engine at 11,300m, making it the world\'s highest bird collision'
    },
    {
      id: 'bar-headed',
      name: 'Bar-headed Goose',
      scientificName: 'Anser indicus',
      description: 'Flies over the Himalayas at altitudes exceeding 8,800 meters, navigating through mountain passes during migration.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '75-80cm',
      wingspan: '1.5-1.8m',
      habitat: 'High-altitude lakes and wetlands in Central Asia',
      diet: 'Grasses, seeds, grains, small aquatic plants',
      funFact: 'Has specialized hemoglobin that binds oxygen more efficiently, allowing them to fly over Mount Everest in 30 minutes'
    },
    {
      id: 'alpine-chough',
      name: 'Alpine Chough',
      scientificName: 'Pyrrhocorax graculus',
      description: 'Regularly flies at altitudes above 8,000 meters, often seen around Mount Everest base camps.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '37-40cm',
      wingspan: '75-85cm',
      habitat: 'High mountain ranges across Europe, Asia, and North Africa',
      diet: 'Insects, berries, seeds, small animals, human food scraps',
      funFact: 'Has been observed at the summit of Mount Everest (8,848m) and can fly in air with only 40% of sea-level oxygen'
    },
    {
      id: 'bearded-vulture',
      name: 'Bearded Vulture',
      scientificName: 'Gypaetus barbatus',
      description: 'Soars at extreme altitudes up to 8,000 meters while hunting for bones to drop and crack open.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '95-125cm',
      wingspan: '2.5-3m',
      habitat: 'High mountain ranges of Europe, Asia, and Africa',
      diet: 'Almost exclusively bones (70-90% of diet)',
      funFact: 'Drops bones from heights of up to 150m to crack them open, making them the only bird that feeds primarily on bones'
    },
    {
      id: 'lammergeier',
      name: 'Himalayan Lammergeier',
      scientificName: 'Gypaetus himalayensis',
      description: 'Majestic bird of prey that soars effortlessly at altitudes exceeding 7,000 meters in the Himalayas.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '100-115cm',
      wingspan: '2.6-3.2m',
      habitat: 'High mountain ranges of the Himalayas and Tibetan Plateau',
      diet: 'Primarily bones and bone marrow',
      funFact: 'Carries bones weighing up to 4kg to drop from great heights, requiring specialized neck muscles to withstand the impact'
    },
    {
      id: 'snow-partridge',
      name: 'Snow Partridge',
      scientificName: 'Lerwa lerwa',
      description: 'Lives permanently at altitudes between 3,000-5,000 meters and can fly at extreme heights when needed.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '30-35cm',
      wingspan: '45-50cm',
      habitat: 'High-altitude Himalayan slopes and alpine meadows',
      diet: 'Seeds, leaves, shoots, berries, insects',
      funFact: 'Has feathered legs and feet for insulation in extreme cold, allowing it to survive temperatures as low as -40°C'
    }
  ];

  return (
    <div className="high-flyers-container">
      <header className="high-flyers-header">
        <h1>High Flyers</h1>
        <p>Birds that Soar at Extreme Altitudes</p>
      </header>

      <section className="high-flyers-intro">
        <div className="intro-content">
          <h2>Masters of the Sky\'s Upper Reaches</h2>
          <p>These extraordinary birds have conquered the thin air of extreme altitudes, flying higher than commercial aircraft and thriving in conditions that would be deadly to most other creatures. Their specialized adaptations allow them to navigate the world\'s highest peaks and exploit aerial niches unavailable to other animals.</p>
        </div>
      </section>

      <section className="high-flyers-grid">
        {highFlyers.map((bird) => (
          <div key={bird.id} className="high-flyers-card">
            <div className="card-image">
              <img src={bird.image} alt={bird.name} />
            </div>
            <div className="card-content">
              <h3>{bird.name}</h3>
              <p className="scientific-name">{bird.scientificName}</p>
              <p className="description">{bird.description}</p>
              <div className="bird-stats">
                <div className="stat">
                  <span className="stat-label">Length:</span>
                  <span className="stat-value">{bird.length}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Wingspan:</span>
                  <span className="stat-value">{bird.wingspan}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Habitat:</span>
                  <span className="stat-value">{bird.habitat}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Diet:</span>
                  <span className="stat-value">{bird.diet}</span>
                </div>
              </div>
              <div className="fun-fact">
                <strong>Fun Fact:</strong> {bird.funFact}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="high-flyers-science">
        <h2>Physiological Adaptations for High Flight</h2>
        <p>High-altitude flyers possess remarkable physiological adaptations that enable them to thrive in oxygen-poor environments. These include specialized hemoglobin, enlarged lungs, efficient circulatory systems, and unique wing morphologies that maximize lift in thin air. Scientists study these birds to understand how life adapts to extreme conditions.</p>
        <div className="adaptation-insights">
          <h3>Key Adaptations:</h3>
          <ul>
            <li><strong>Enhanced Oxygen Transport:</strong> Specialized hemoglobin with higher oxygen affinity</li>
            <li><strong>Efficient Respiratory Systems:</strong> Larger lungs and air sacs for maximum oxygen extraction</li>
            <li><strong>Optimized Wing Design:</strong> Long, broad wings for efficient soaring in thin air</li>
            <li><strong>Reduced Body Mass:</strong> Lightweight bones and streamlined bodies</li>
            <li><strong>Enhanced Circulation:</strong> Powerful hearts and efficient blood flow systems</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HighFlyers;