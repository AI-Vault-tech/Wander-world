import './DesertDwellers.css';

const DesertDwellers = () => {
  const desertDwellers = [
    {
      id: 'roadrunner',
      name: 'Greater Roadrunner',
      scientificName: 'Geococcyx californianus',
      description: 'Fast-running cuckoo that sprints across desert floors at speeds up to 25 mph, hunting snakes, lizards, and insects in arid environments.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '52-62cm',
      wingspan: '43-46cm',
      habitat: 'Deserts and scrublands of southwestern United States and Mexico',
      diet: 'Snakes, lizards, insects, small mammals, birds, eggs, fruits',
      funFact: 'Can survive without drinking water by obtaining moisture from prey - they\'re fast enough to catch rattlesnakes and kill them by bashing their heads against rocks'
    },
    {
      id: 'kangaroo-rat',
      name: 'Kangaroo Rat',
      scientificName: 'Dipodomys spectabilis',
      description: 'Pocket-sized desert rodent that never drinks water, obtaining all moisture needed from seeds and capable of jumping 9 feet horizontally.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '10-15cm',
      weight: '45-120g',
      habitat: 'Deserts of western United States and Mexico',
      diet: 'Seeds, nuts, plant matter',
      funFact: 'Can survive without drinking water for its entire life - it concentrates urine to conserve water and produces metabolic water from digesting seeds'
    },
    {
      id: 'fennec-fox',
      name: 'Fennec Fox',
      scientificName: 'Vulpes zerda',
      description: 'World\'s smallest fox with enormous ears that radiate heat and help locate prey underground in the Sahara Desert.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '24-41cm',
      weight: '0.6-1.5kg',
      habitat: 'Sahara Desert and other North African deserts',
      diet: 'Insects, small mammals, birds, eggs, fruits, roots',
      funFact: 'Has the largest ears relative to body size of any mammal - they help dissipate heat and can hear prey moving underground from great distances'
    },
    {
      id: 'gila-monster',
      name: 'Gila Monster',
      scientificName: 'Heloderma suspectum',
      description: 'One of only two venomous lizards in the world, storing fat in its tail to survive months without food in desert environments.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '30-50cm',
      weight: '350-700g',
      habitat: 'Deserts of southwestern United States and northwestern Mexico',
      diet: 'Eggs, young birds, small mammals, frogs, lizards, insects',
      funFact: 'Stores up to 30% of its body weight as fat in its tail - it can live for months without eating by metabolizing this fat reserve'
    },
    {
      id: 'desert-tortoise',
      name: 'Desert Tortoise',
      scientificName: 'Gopherus agassizii',
      description: 'Long-lived reptile that digs burrows up to 30 feet deep to escape extreme heat and can store water in its bladder for months.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '25-35cm',
      weight: '2-5kg',
      habitat: 'Mojave and Sonoran Deserts of southwestern United States and northwestern Mexico',
      diet: 'Grasses, herbs, annual wildflowers, cactus pads and fruits',
      funFact: 'Can store up to 40% of its body weight in water in its bladder - it can go a year without drinking by reabsorbing this stored water'
    },
    {
      id: 'camel-spider',
      name: 'Camel Spider',
      scientificName: 'Solifugae sp.',
      description: 'Misunderstood arachnid that can run at speeds up to 10 mph and survives in extreme desert heat by burrowing during daytime.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '10-15cm',
      weight: '20-70g',
      habitat: 'Deserts worldwide, particularly Middle East and North Africa',
      diet: 'Insects, spiders, small reptiles, birds, rodents',
      funFact: 'Despite myths, they don\'t chase people or scream - they\'re actually shy creatures that run to escape danger and can move sideways as well as forward'
    }
  ];

  return (
    <div className="desert-dwellers-container">
      <header className="desert-dwellers-header">
        <h1>Desert Dwellers</h1>
        <p>Birds and Animals Thriving in Arid Environments</p>
      </header>

      <section className="desert-dwellers-intro">
        <div className="intro-content">
          <h2>Masters of the Arid Realm</h2>
          <p>These extraordinary creatures have evolved remarkable adaptations to survive in Earth's most water-scarce environments. From conserving every drop of moisture to tolerating extreme temperatures, they demonstrate unparalleled resilience and specialized physiological traits that allow them to not just survive but flourish in conditions that would be lethal to most other animals.</p>
        </div>
      </section>

      <section className="desert-dwellers-grid">
        {desertDwellers.map((animal) => (
          <div key={animal.id} className="desert-dwellers-card">
            <div className="card-image">
              <img src={animal.image} alt={animal.name} />
            </div>
            <div className="card-content">
              <h3>{animal.name}</h3>
              <p className="scientific-name">{animal.scientificName}</p>
              <p className="description">{animal.description}</p>
              <div className="animal-stats">
                <div className="stat">
                  <span className="stat-label">Length:</span>
                  <span className="stat-value">{animal.length}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Weight:</span>
                  <span className="stat-value">{animal.weight}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Habitat:</span>
                  <span className="stat-value">{animal.habitat}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Diet:</span>
                  <span className="stat-value">{animal.diet}</span>
                </div>
              </div>
              <div className="fun-fact">
                <strong>Fun Fact:</strong> {animal.funFact}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="desert-dwellers-survival">
        <h2>Survival Strategies in Extreme Aridity</h2>
        <p>Desert dwellers employ diverse strategies to cope with water scarcity and temperature extremes. These include physiological adaptations like efficient kidneys, behavioral patterns such as nocturnal activity, and anatomical features like heat-radiating ears. Their survival techniques offer insights into how life adapts to harsh environments and inform biomimetic technologies for sustainable living.</p>
        <div className="survival-strategies">
          <h3>Key Survival Mechanisms:</h3>
          <ul>
            <li><strong>Water Conservation:</strong> Highly efficient kidneys and moisture extraction from food</li>
            <li><strong>Temperature Regulation:</strong> Burrowing, nocturnal activity, heat-dissipating anatomy</li>
            <li><strong>Energy Efficiency:</strong> Low metabolic rates and fat storage for fasting periods</li>
            <li><strong>Food Storage:</strong> Hoarding seeds and other resources for lean times</li>
            <li><strong>Camouflage:</strong> Coloration that blends with sandy and rocky desert environments</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DesertDwellers;