import React from 'react';
import './FeatheredArchitects.css';

const FeatheredArchitects = () => {
  const architects = [
    {
      id: 'bowerbird',
      name: 'Satin Bowerbird',
      scientificName: 'Ptilonorhynchus violaceus',
      description: 'Master decorator that builds elaborate bowers decorated with blue objects to attract mates.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '25-30cm',
      habitat: 'Eastern and southeastern Australia forests',
      diet: 'Fruits, leaves, insects, seeds',
      funFact: 'Males collect exclusively blue objects (flowers, berries, bottle caps) to decorate their bowers, demonstrating remarkable color preference'
    },
    {
      id: 'weaver',
      name: 'Sociable Weaver',
      scientificName: 'Philetairus socius',
      description: 'Creates massive communal nests that house entire colonies and can last for decades.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '14cm',
      habitat: 'Southern Africa savannas and grasslands',
      diet: 'Seeds, insects',
      funFact: 'Colonies can contain up to 500 birds living in temperature-regulated chambers, making their nest like a giant apartment complex'
    },
    {
      id: 'swiftlet',
      name: 'Edible-nest Swiftlet',
      scientificName: 'Aerodramus fuciphagus',
      description: 'Builds its nest entirely from solidified saliva, creating the prized bird\'s nest soup ingredient.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '12cm',
      habitat: 'Southeast Asian caves and cliff faces',
      diet: 'Flying insects caught mid-air',
      funFact: 'Nests are harvested for bird\'s nest soup, valued at thousands of dollars per kilogram, making them among the world\'s most expensive foods'
    },
    {
      id: 'hornero',
      name: 'Rufous Hornero',
      scientificName: 'Furnarius rufus',
      description: 'Known as the \'oven bird\' for its distinctive dome-shaped mud nest resembling a colonial oven.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '18cm',
      habitat: 'South American grasslands and scrublands',
      diet: 'Insects, spiders, small invertebrates',
      funFact: 'Both parents participate in constructing the clay nest, which can take up to two weeks to complete and provides excellent protection from predators'
    },
    {
      id: 'megapode',
      name: 'Malleefowl',
      scientificName: 'Leipoa ocellata',
      description: 'Excavates massive mounds up to 5 meters wide to incubate eggs using solar heat and decomposition.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '60cm',
      habitat: 'Australian mallee scrublands',
      diet: 'Seeds, fruits, flowers, insects',
      funFact: 'The male maintains the mound temperature at exactly 33°C by adding or removing material, acting as a living thermostat for his underground nursery'
    },
    {
      id: 'plover',
      name: 'Masked Plover',
      scientificName: 'Charadrius miles',
      description: 'Constructs a simple scrape nest with clever camouflage and employs elaborate distraction displays.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '19cm',
      habitat: 'Australian beaches, lakeshores, and grasslands',
      diet: 'Insects, worms, small crustaceans',
      funFact: 'When threatened, adults perform broken-wing displays, pretending to be injured to lure predators away from their well-hidden ground nests'
    }
  ];

  return (
    <div className="feathered-architects-container">
      <header className="feathered-architects-header">
        <h1>Feathered Architects</h1>
        <p>Birds that Build Elaborate Structures</p>
      </header>

      <section className="feathered-architects-intro">
        <div className="intro-content">
          <h2>Nature's Master Builders</h2>
          <p>These remarkable birds demonstrate unparalleled architectural prowess, constructing intricate structures that serve as nurseries, fortresses, and even works of art. Their building skills rival those of humans, showcasing the incredible diversity of avian intelligence and adaptation.</p>
        </div>
      </section>

      <section className="feathered-architects-grid">
        {architects.map((bird) => (
          <div key={bird.id} className="feathered-architect-card">
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

      <section className="feathered-architects-conservation">
        <h2>Preserving Architectural Heritage</h2>
        <p>Many of these master builders face threats from habitat destruction and climate change. Conservation efforts focus on protecting nesting sites and maintaining the ecosystems these incredible architects depend on for materials and survival.</p>
        <div className="conservation-tips">
          <h3>How You Can Help:</h3>
          <ul>
            <li>Support habitat conservation organizations</li>
            <li>Create bird-friendly spaces in your community</li>
            <li>Reduce plastic pollution that can harm nesting materials</li>
            <li>Participate in citizen science bird monitoring programs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FeatheredArchitects;