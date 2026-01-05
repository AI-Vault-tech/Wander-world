import './SpeedDemons.css';

const SpeedDemons = () => {
  const speedDemons = [
    {
      id: 'peregrine-falcon',
      name: 'Peregrine Falcon',
      scientificName: 'Falco peregrinus',
      description: 'The fastest animal on Earth, diving at speeds over 390 km/h (240 mph) to strike prey with tremendous force.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '34-58cm',
      wingspan: '80-120cm',
      habitat: 'Cliffs, mountains, tall buildings worldwide',
      diet: 'Medium-sized birds (pigeons, ducks, shorebirds)',
      funFact: 'Reaches speeds of over 390 km/h (240 mph) during hunting dives - faster than a Formula 1 racing car! They can spot prey from over 3 kilometers away'
    },
    {
      id: 'gyrfalcon',
      name: 'Gyrfalcon',
      scientificName: 'Falco rusticolus',
      description: 'Largest falcon species that combines size and speed to hunt ptarmigans and waterfowl in Arctic environments at high velocities.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '48-61cm',
      wingspan: '110-130cm',
      habitat: 'Arctic tundra, mountain ranges, coastal areas of northern regions',
      diet: 'Ptarmigans, waterfowl, seabirds, rabbits',
      funFact: 'Can carry prey weighing up to 2 kg while flying - despite their large size, they can still achieve impressive speeds of up to 130 km/h in level flight'
    },
    {
      id: 'golden-eagle',
      name: 'Golden Eagle',
      scientificName: 'Aquila chrysaetos',
      description: 'Powerful raptor that combines speed with strength, diving at 240 km/h to capture prey weighing up to 4 kg.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '66-100cm',
      wingspan: '1.8-2.3m',
      habitat: 'Mountains, hills, cliffs, open country across Northern Hemisphere',
      diet: 'Rabbits, hares, ground squirrels, young deer, birds',
      funFact: 'Has exceptional eyesight - eight times sharper than human vision - allowing them to spot a rabbit from over 3 kilometers away while flying at high speeds'
    },
    {
      id: 'white-throated-needletail',
      name: 'White-throated Needletail',
      scientificName: 'Hirundapus caudacutus',
      description: 'Fastest level-flight bird, reaching speeds up to 170 km/h (105 mph) with its sickle-shaped wings designed for speed.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '16-21cm',
      wingspan: '45-50cm',
      habitat: 'Open country, grasslands, wetlands across Asia and Australia',
      diet: 'Flying insects caught in flight',
      funFact: 'Holds the record for fastest level-flight speed - up to 170 km/h - their crescent-shaped wings and streamlined body are perfectly designed for high-speed aerial pursuit'
    },
    {
      id: 'grey-headed-albatross',
      name: 'Grey-headed Albatross',
      scientificName: 'Thalassarche chrysostoma',
      description: 'Oceanic speed demon that glides at 127 km/h over waves, using dynamic soaring techniques to travel vast distances efficiently.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '80-90cm',
      wingspan: '2.1-2.3m',
      habitat: 'Southern Ocean, sub-Antarctic islands',
      diet: 'Squid, fish, krill, crustaceans',
      funFact: 'Can circumnavigate the globe in just 46 days by riding wind currents - they rarely flap their wings, instead using dynamic soaring to achieve incredible speeds with minimal energy'
    },
    {
      id: 'spur-winged-lapwing',
      name: 'Spur-winged Lapwing',
      scientificName: 'Vanellus spinosus',
      description: 'Large lapwing that reaches speeds up to 100 km/h in flight while defending territory and chasing intruders from wetland habitats.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '35-40cm',
      wingspan: '75-85cm',
      habitat: 'Wetlands, lakeshores, riverbanks across sub-Saharan Africa and Middle East',
      diet: 'Insects, worms, small mollusks, crustaceans',
      funFact: 'Has sharp spurs on its wings for defense - when threatened, it can become extremely aggressive and has been known to seriously injure dogs and even humans who get too close'
    }
  ];

  return (
    <div className="speed-demons-container">
      <header className="speed-demons-header">
        <h1>Speed Demons</h1>
        <p>Fastest Flying Bird Species</p>
      </header>

      <section className="speed-demons-intro">
        <div className="intro-content">
          <h2>Masters of Velocity</h2>
          <p>These extraordinary birds have evolved specialized anatomical features and flight techniques to achieve breathtaking speeds, whether in hunting dives, level flight, or dynamic soaring. Their aerodynamic perfection represents millions of years of evolutionary refinement, creating some of nature's most efficient flying machines capable of feats that surpass human-engineered aircraft in specific performance metrics.</p>
        </div>
      </section>

      <section className="speed-demons-grid">
        {speedDemons.map((bird) => (
          <div key={bird.id} className="speed-demons-card">
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

      <section className="speed-demons-aerodynamics">
        <h2>Flight Engineering Marvels</h2>
        <p>Birds achieve their remarkable speeds through specialized adaptations including streamlined body shapes, modified wing structures, and enhanced muscle arrangements. These evolutionary innovations have inspired aerospace engineering and continue to inform the development of more efficient aircraft designs. Understanding their flight mechanics offers insights into the physics of high-speed movement through fluid mediums.</p>
        <div className="aerodynamics-insights">
          <h3>Speed Adaptations:</h3>
          <ul>
            <li><strong>Streamlined Bodies:</strong> Reduced drag through tapered profiles and smooth contours</li>
            <li><strong>Specialized Wings:</strong> Pointed, swept-back wings for reduced air resistance</li>
            <li><strong>Enhanced Musculature:</strong> Powerful flight muscles for rapid acceleration</li>
            <li><strong>Advanced Vision:</strong> Exceptional eyesight for high-speed navigation and prey detection</li>
            <li><strong>Aerodynamic Feathers:</strong> Stiff, precisely arranged feathers that reduce turbulence</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SpeedDemons;