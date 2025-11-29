import React from 'react';
import './NightOwls.css';

const NightOwls = () => {
  const nightOwls = [
    {
      id: 'barn-owl',
      name: 'Barn Owl',
      scientificName: 'Tyto alba',
      description: 'Silent hunter with specialized feathers that eliminate sound during flight, allowing it to locate prey by sound alone in complete darkness.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '33-35cm',
      wingspan: '80-95cm',
      habitat: 'Farmlands, grasslands, open woodlands worldwide',
      diet: 'Small mammals (mice, voles, rats), birds, insects',
      funFact: 'Can hunt in near-total darkness using sound alone - they can locate a mouse by hearing it squeak from 75 feet away, even under snow'
    },
    {
      id: 'tawny-owl',
      name: 'Tawny Owl',
      scientificName: 'Strix aluco',
      description: 'Nocturnal predator with exceptional night vision and asymmetrically placed ears for pinpoint sound triangulation.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '37-43cm',
      wingspan: '94-104cm',
      habitat: 'Woodlands and parks across Europe and Asia',
      diet: 'Small mammals, birds, insects, earthworms',
      funFact: 'Has tubular eyes that are fixed in their sockets - they can\'t move their eyes but can rotate their heads 270 degrees to compensate'
    },
    {
      id: 'spectacled-owl',
      name: 'Spectacled Owl',
      scientificName: 'Pulsatrix perspicillata',
      description: 'Large tropical owl with facial discs that funnel sound to ears positioned at different heights for 3D sound mapping.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '40-50cm',
      wingspan: '90-110cm',
      habitat: 'Tropical rainforests of Central and South America',
      diet: 'Large insects, small mammals, birds, reptiles',
      funFact: 'Named for the distinctive white markings around their eyes that resemble spectacles - these markings help direct sound waves to their ears'
    },
    {
      id: 'grass-owl',
      name: 'Australian Grass Owl',
      scientificName: 'Tyto capensis',
      description: 'Ground-hunting specialist with long legs and heart-shaped facial disc for detecting rodent movements in tall grass at night.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '35-45cm',
      wingspan: '100-120cm',
      habitat: 'Grasslands, wetlands, and agricultural areas of Australia and Southeast Asia',
      diet: 'Rodents, small mammals, birds, large insects',
      funFact: 'Hunts by quartering back and forth over grasslands like a harrier, using its long legs to reach through tall grass to catch prey'
    },
    {
      id: 'long-eared-owl',
      name: 'Long-eared Owl',
      scientificName: 'Asio otus',
      description: 'Cryptically colored owl with prominent ear tufts and exceptional hearing sensitivity for locating prey in dense vegetation.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '31-40cm',
      wingspan: '86-102cm',
      habitat: 'Dense woodlands, coniferous forests, and shelterbelts across Northern Hemisphere',
      diet: 'Small mammals (voles, mice), birds, insects',
      funFact: 'Forms communal roosts in winter with up to 100 individuals - they huddle together for warmth and protection from predators'
    },
    {
      id: 'elf-owl',
      name: 'Elf Owl',
      scientificName: 'Micrathene whitneyi',
      description: 'World\'s smallest owl that hunts insects at night with remarkable agility, catching moths and beetles in mid-air.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '13-15cm',
      wingspan: '27cm',
      habitat: 'Desert riparian areas and mesquite woodlands of southwestern United States and Mexico',
      diet: 'Insects (moths, crickets, scorpions, beetles), spiders, centipedes',
      funFact: 'Weighs less than a golf ball but can catch insects in complete darkness while flying - they\'re so lightweight they sometimes get blown off course by strong winds'
    }
  ];

  return (
    <div className="night-owls-container">
      <header className="night-owls-header">
        <h1>Night Owls</h1>
        <p>Nocturnal Birds with Specialized Adaptations</p>
      </header>

      <section className="night-owls-intro">
        <div className="intro-content">
          <h2>Masters of the Nocturnal Realm</h2>
          <p>These extraordinary birds have evolved specialized adaptations to thrive in darkness, possessing exceptional night vision, acute hearing, and silent flight capabilities. They dominate the night skies as efficient hunters, exploiting temporal niches unavailable to diurnal predators and playing crucial roles in controlling nocturnal pest populations.</p>
        </div>
      </section>

      <section className="night-owls-grid">
        {nightOwls.map((bird) => (
          <div key={bird.id} className="night-owls-card">
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

      <section className="night-owls-adaptations">
        <h2>Nocturnal Adaptations</h2>
        <p>Nocturnal birds have developed remarkable physiological and behavioral adaptations for nighttime hunting. These include specialized eye structures for enhanced night vision, asymmetrically positioned ears for precise sound localization, and modified feather structures for silent flight. Their adaptations represent some of evolution's most sophisticated sensory engineering.</p>
        <div className="adaptation-details">
          <h3>Key Adaptations:</h3>
          <ul>
            <li><strong>Exceptional Night Vision:</strong> Large eyes with high rod density for light amplification</li>
            <li><strong>Sound Localization:</strong> Asymmetrically placed ears for 3D auditory mapping</li>
            <li><strong>Silent Flight:</strong> Specially fringed feathers that eliminate noise during flight</li>
            <li><strong>Cryptic Coloration:</strong> Camouflage patterns that blend with nighttime environments</li>
            <li><strong>Enhanced Hearing:</strong> Facial discs that funnel sound to ears like satellite dishes</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NightOwls;