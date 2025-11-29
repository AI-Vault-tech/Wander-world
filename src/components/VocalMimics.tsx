import React from 'react';
import './VocalMimics.css';

const VocalMimics = () => {
  const vocalMimics = [
    {
      id: 'lyrebird',
      name: 'Superb Lyrebird',
      scientificName: 'Menura novaehollandiae',
      description: 'Master mimic that can reproduce chainsaws, camera shutters, and entire orchestras with perfect accuracy, learning new sounds throughout life.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '80-100cm',
      habitat: 'Rainforests and wet sclerophyll forests of southeastern Australia',
      diet: 'Insects, spiders, worms, seeds, fruits',
      funFact: 'Male lyrebirds can mimic up to 20 different bird species in a single song and have been recorded imitating chainsaws, car alarms, and even human conversations with perfect accuracy'
    },
    {
      id: 'mockingbird',
      name: 'Northern Mockingbird',
      scientificName: 'Mimus polyglottos',
      description: 'Songbird that learns over 150 songs from other species, repeating each phrase 3-6 times before switching to the next in complex sequences.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '20-25cm',
      wingspan: '33-36cm',
      habitat: 'Open areas, suburban neighborhoods, parks, and gardens across North America',
      diet: 'Insects, berries, fruits',
      funFact: 'Can learn up to 200 songs in its lifetime - each male has a repertoire that includes songs from dozens of other bird species, plus environmental sounds like car alarms'
    },
    {
      id: 'parrot',
      name: 'African Grey Parrot',
      scientificName: 'Psittacus erithacus',
      description: 'Highly intelligent parrot with cognitive abilities comparable to a 5-year-old child, capable of contextual language use and abstract concept understanding.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '33cm',
      wingspan: '46-52cm',
      habitat: 'Rainforests and savannas of central and western Africa',
      diet: 'Fruits, nuts, seeds, flowers, insects',
      funFact: 'Alex, a famous African Grey studied by scientists, could identify colors, shapes, materials, and even understood the concept of zero - he had a vocabulary of over 100 words'
    },
    {
      id: 'myna',
      name: 'Common Hill Myna',
      scientificName: 'Gracula religiosa',
      description: 'Asian starling with exceptional talking ability, producing clear human speech and environmental sounds with remarkable accuracy and clarity.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '25-28cm',
      wingspan: '35-40cm',
      habitat: 'Tropical forests, gardens, and cultivated areas of South and Southeast Asia',
      diet: 'Fruits, nectar, insects, small reptiles',
      funFact: 'Considered one of the best talking birds in the world - they can learn hundreds of words and phrases, often speaking more clearly than parrots due to their unique vocal anatomy'
    },
    {
      id: 'catbird',
      name: 'Gray Catbird',
      scientificName: 'Dumetella carolinensis',
      description: 'Songbird that perfectly mimics mewing cats and incorporates phrases from 100+ other bird species into its complex vocal performances.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '21-24cm',
      wingspan: '27-29cm',
      habitat: 'Dense shrubs, forest edges, gardens, parks across North America',
      diet: 'Insects, spiders, fruits, berries',
      funFact: 'Named for its distinctive cat-like mew call, but it can also mimic over 100 other bird species - they often string together imitations in creative sequences like a musical composition'
    },
    {
      id: 'cockatoo',
      name: 'Sulphur-crested Cockatoo',
      scientificName: 'Cacatua galerita',
      description: 'Intelligent parrot that learns human speech and household sounds, using vocal mimicry for social bonding and territorial communication.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '43-51cm',
      wingspan: '90-100cm',
      habitat: 'Forests, woodlands, farmlands of Australia and nearby islands',
      diet: 'Seeds, nuts, fruits, insects, larvae',
      funFact: 'Can solve complex puzzles and use tools - one famous cockatoo named Snowball became an internet sensation for dancing to music, showing the same rhythmic abilities as humans'
    }
  ];

  return (
    <div className="vocal-mimics-container">
      <header className="vocal-mimics-header">
        <h1>Vocal Mimics</h1>
        <p>Birds that Mimic Sounds and Human Speech</p>
      </header>

      <section className="vocal-mimics-intro">
        <div className="intro-content">
          <h2>Maestros of Sound Imitation</h2>
          <p>These extraordinary birds possess specialized vocal anatomy and neural pathways that enable them to replicate complex sounds with stunning accuracy. Their ability to learn and reproduce environmental sounds demonstrates remarkable cognitive flexibility and social intelligence, offering insights into the evolution of communication and language acquisition in the animal kingdom.</p>
        </div>
      </section>

      <section className="vocal-mimics-grid">
        {vocalMimics.map((bird) => (
          <div key={bird.id} className="vocal-mimics-card">
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
                  <span className="stat-value">{bird.wingspan || 'N/A'}</span>
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

      <section className="vocal-mimics-research">
        <h2>Insights into Animal Communication</h2>
        <p>Vocal mimicry in birds provides valuable insights into the neural mechanisms of sound learning and production. Research on these species has advanced our understanding of speech development, auditory processing, and the evolution of language. Their abilities challenge traditional views about animal cognition and highlight the sophisticated mental capacities of non-human species.</p>
        <div className="research-findings">
          <h3>Research Contributions:</h3>
          <ul>
            <li><strong>Neuroscience:</strong> Studies of vocal learning pathways inform human speech therapy and treatment</li>
            <li><strong>Evolutionary Biology:</strong> Insights into how complex communication systems evolve</li>
            <li><strong>Cognitive Science:</strong> Understanding of memory, learning, and social intelligence</li>
            <li><strong>Conservation:</strong> Vocal mimicry research aids in species identification and population monitoring</li>
            <li><strong>Technology:</strong> Bioacoustic research inspires speech recognition and synthesis systems</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VocalMimics;