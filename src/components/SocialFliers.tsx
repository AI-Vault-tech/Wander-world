import React from 'react';
import './SocialFliers.css';

const SocialFliers = () => {
  const socialFliers = [
    {
      id: 'starling',
      name: 'European Starling',
      scientificName: 'Sturnus vulgaris',
      description: 'Master of aerial acrobatics that forms murmurations of thousands, creating mesmerizing synchronized flight patterns to evade predators.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '19-22cm',
      wingspan: '31-44cm',
      habitat: 'Farmlands, urban areas, woodlands across Europe, Asia, and North Africa',
      diet: 'Insects, spiders, fruits, seeds, nectar',
      funFact: 'Can form murmurations of over 1 million birds that create complex 3D shapes in the sky - they can react to neighbors\' movements in just 20 milliseconds'
    },
    {
      id: 'flamingo',
      name: 'Greater Flamingo',
      scientificName: 'Phoenicopterus roseus',
      description: 'Gregarious wader that forms massive pink flocks and synchronizes breeding cycles, creating spectacular displays in shallow alkaline lakes.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '110-150cm',
      wingspan: '140-170cm',
      habitat: 'Shallow alkaline and saline lakes, lagoons, estuaries',
      diet: 'Algae, small crustaceans, mollusks, insects',
      funFact: 'Gets its pink color from carotenoids in their food - the more carotenoid-rich their diet, the brighter their plumage becomes'
    },
    {
      id: 'pelican',
      name: 'Australian Pelican',
      scientificName: 'Pelecanus conspicillatus',
      description: 'Large waterbird that hunts cooperatively in groups, using coordinated tactics to herd fish into shallow waters for easy capture.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '75-85cm',
      wingspan: '2.3-2.5m',
      habitat: 'Coastal waters, lakes, rivers, wetlands across Australia and surrounding regions',
      diet: 'Fish, crustaceans, aquatic animals',
      funFact: 'Has the longest bill of any bird - up to 50cm - and can hold up to 13 liters of water in its throat pouch'
    },
    {
      id: 'crane',
      name: 'Sandhill Crane',
      scientificName: 'Antigone canadensis',
      description: 'Migratory crane that travels in family groups and performs elaborate synchronized dances involving leaps, bows, and wing flapping.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      height: '80-120cm',
      wingspan: '1.6-2.1m',
      habitat: 'Wetlands, grasslands, agricultural fields across North America',
      diet: 'Grains, seeds, berries, insects, small vertebrates',
      funFact: 'Performs elaborate courtship dances that include dancing, jumping, running, and tossing vegetation - these displays strengthen pair bonds and establish territory'
    },
    {
      id: 'budgerigar',
      name: 'Budgerigar',
      scientificName: 'Melopsittacus undulatus',
      description: 'Small parrot that forms flocks of hundreds and exhibits complex social hierarchies, communicating through varied vocalizations and body language.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '18cm',
      wingspan: '27-33cm',
      habitat: 'Open scrublands, woodlands, grasslands of Australia',
      diet: 'Seeds, grains, fruits, insects',
      funFact: 'Can learn vocabularies of over 100 words - males are typically better talkers than females and can mimic regional accents'
    },
    {
      id: 'swift',
      name: 'Common Swift',
      scientificName: 'Apus apus',
      description: 'Aerial specialist that spends almost its entire life airborne, even sleeping and mating in flight, forming large screaming parties during breeding season.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '16-17cm',
      wingspan: '42-45cm',
      habitat: 'Urban areas, towns, cliffs, buildings across Europe, Asia, and Africa',
      diet: 'Flying insects and spiders caught in flight',
      funFact: 'Spends up to 10 months per year in continuous flight - they even sleep while flying and can live for years without touching the ground'
    }
  ];

  return (
    <div className="social-fliers-container">
      <header className="social-fliers-header">
        <h1>Social Fliers</h1>
        <p>Highly Social Bird Species</p>
      </header>

      <section className="social-fliers-intro">
        <div className="intro-content">
          <h2>The Power of Flock Intelligence</h2>
          <p>These remarkable birds demonstrate the power of collective behavior, forming complex social structures and exhibiting coordinated group behaviors that enhance survival. From synchronized aerial displays to cooperative hunting strategies, they showcase how social cooperation can lead to extraordinary achievements that individual birds could never accomplish alone.</p>
        </div>
      </section>

      <section className="social-fliers-grid">
        {socialFliers.map((bird) => (
          <div key={bird.id} className="social-fliers-card">
            <div className="card-image">
              <img src={bird.image} alt={bird.name} />
            </div>
            <div className="card-content">
              <h3>{bird.name}</h3>
              <p className="scientific-name">{bird.scientificName}</p>
              <p className="description">{bird.description}</p>
              <div className="bird-stats">
                <div className="stat">
                  <span className="stat-label">Length/Height:</span>
                  <span className="stat-value">{bird.length || bird.height}</span>
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

      <section className="social-fliers-behavior">
        <h2>Collective Behavior Benefits</h2>
        <p>Social birds gain significant advantages through group living, including enhanced predator detection, improved foraging efficiency, and shared information about resources. Their collective behaviors have inspired research in swarm intelligence, robotics, and organizational dynamics, offering insights into how complex coordination emerges from simple individual rules.</p>
        <div className="behavior-insights">
          <h3>Social Advantages:</h3>
          <ul>
            <li><strong>Predator Detection:</strong> More eyes watching for threats increases survival rates</li>
            <li><strong>Information Sharing:</strong> Rapid communication about food sources and dangers</li>
            <li><strong>Cooperative Breeding:</strong> Shared care of offspring improves reproductive success</li>
            <li><strong>Thermoregulation:</strong> Huddling together conserves energy in cold conditions</li>
            <li><strong>Genetic Diversity:</strong> Larger gene pools reduce inbreeding depression</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SocialFliers;