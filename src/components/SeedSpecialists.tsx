import React from 'react';
import './SeedSpecialists.css';

const SeedSpecialists = () => {
  const seedSpecialists = [
    {
      id: 'hyacinth-macaw',
      name: 'Hyacinth Macaw',
      scientificName: 'Anodorhynchus hyacinthinus',
      description: 'Possesses the most powerful beak of any parrot, capable of cracking palm nuts that require 150kg of pressure per square inch.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '95-100cm',
      wingspan: '1.3-1.5m',
      habitat: 'Tropical rainforests and palm swamps of South America',
      diet: 'Palm nuts, seeds, fruits',
      funFact: 'Their beak can crack open coconuts and Brazil nuts - one of the hardest seeds on Earth - and they can hold nuts with their feet while cracking them'
    },
    {
      id: 'crossbill',
      name: 'Red Crossbill',
      scientificName: 'Loxia curvirostra',
      description: 'Crossed beak bills perfectly adapted for prying open conifer cones to extract seeds, with different populations specializing in different tree species.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '14-17cm',
      wingspan: '25-28cm',
      habitat: 'Coniferous forests across North America, Europe, and Asia',
      diet: 'Conifer seeds, buds, berries',
      funFact: 'Different populations have evolved specialized beak sizes and shapes for specific conifer species - some have even been classified as separate species'
    },
    {
      id: 'waxbill',
      name: 'Orange-cheeked Waxbill',
      scientificName: 'Estrilda melpoda',
      description: 'Tiny seed specialist with a precision beak for extracting millet and grass seeds, processing up to 2,000 seeds per day.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '10-11cm',
      wingspan: '14-16cm',
      habitat: 'Grasslands and savannas of West and Central Africa',
      diet: 'Grass seeds, small seeds, insects during breeding season',
      funFact: 'Their digestive system can process seeds in as little as 15 minutes, allowing them to consume their body weight in seeds daily'
    },
    {
      id: 'finch',
      name: 'Lesser Goldfinch',
      scientificName: 'Spinus psaltria',
      description: 'Acrobatic seed specialist that hangs upside down to access seeds others can\'t reach, with specialized throat muscles for hull removal.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '9-12cm',
      wingspan: '18-22cm',
      habitat: 'Open woodlands, scrublands, and gardens across western Americas',
      diet: 'Seeds from sunflowers, thistles, dandelions, and other plants',
      funFact: 'Can hang upside down for extended periods while feeding, using specialized foot muscles and tail feathers for balance while accessing seeds'
    },
    {
      id: 'cardinal',
      name: 'Northern Cardinal',
      scientificName: 'Cardinalis cardinalis',
      description: 'Powerful beak designed for crushing seeds, capable of exerting 300-400 Newtons of force to open tough seed shells.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '21-23cm',
      wingspan: '25-31cm',
      habitat: 'Woodlands, gardens, and shrublands across eastern North America',
      diet: 'Seeds, fruits, insects',
      funFact: 'Their bright red coloration comes from carotenoids in their seed-rich diet - the more carotenoid-rich seeds they eat, the brighter their plumage'
    },
    {
      id: 'weaver-finch',
      name: 'Village Weaver',
      scientificName: 'Ploceus cucullatus',
      description: 'Expert seed processor that builds elaborate hanging nests while specializing in grass seeds and grains in agricultural areas.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '15cm',
      wingspan: '22-25cm',
      habitat: 'Savannas, farmlands, and villages across sub-Saharan Africa',
      diet: 'Seeds, grains, insects, nectar',
      funFact: 'Males can tie over 1,000 knots while building their intricate hanging nests, and they can open seeds while flying to save time'
    }
  ];

  return (
    <div className="seed-specialists-container">
      <header className="seed-specialists-header">
        <h1>Seed Specialists</h1>
        <p>Birds with Unique Seed-Processing Abilities</p>
      </header>

      <section className="seed-specialists-intro">
        <div className="intro-content">
          <h2>Nature's Seed Processors</h2>
          <p>These remarkable birds have evolved specialized beaks, digestive systems, and behaviors to exploit the world's vast array of seeds. From cracking the hardest nuts to extracting tiny grass seeds, they demonstrate incredible diversity in their seed-processing techniques, making them essential for plant reproduction and ecosystem health.</p>
        </div>
      </section>

      <section className="seed-specialists-grid">
        {seedSpecialists.map((bird) => (
          <div key={bird.id} className="seed-specialists-card">
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

      <section className="seed-specialists-ecology">
        <h2>Ecological Importance of Seed Specialists</h2>
        <p>Seed-specialist birds play crucial roles as seed dispersers and plant pollinators. Many plants depend entirely on specific bird species for seed dispersal, creating co-evolutionary relationships. These birds help maintain plant diversity, forest regeneration, and ecosystem stability. Their specialized feeding habits also make them important indicators of environmental health.</p>
        <div className="ecology-insights">
          <h3>Ecosystem Services:</h3>
          <ul>
            <li><strong>Seed Dispersal:</strong> Transport seeds to new locations, promoting genetic diversity</li>
            <li><strong>Plant Pollination:</strong> Some species pollinate flowers while feeding on nectar</li>
            <li><strong>Forest Regeneration:</strong> Essential for reforestation through seed distribution</li>
            <li><strong>Pest Control:</strong> Many consume insects that damage crops and plants</li>
            <li><strong>Biodiversity Support:</strong> Maintain plant species diversity through selective feeding</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SeedSpecialists;