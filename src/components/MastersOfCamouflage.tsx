import React from 'react';
import './MastersOfCamouflage.css';

const MastersOfCamouflage = () => {
  const camouflagedBirds = [
    {
      id: 'ptarmigan',
      name: 'Willow Ptarmigan',
      scientificName: 'Lagopus lagopus',
      description: 'Seasonal shape-shifter that molts from brown summer plumage to pure white winter coat for perfect snow camouflage.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '35-45cm',
      habitat: 'Arctic and subarctic tundra, willow thickets',
      diet: 'Buds, leaves, berries, seeds, insects',
      funFact: 'The only bird that changes its feather color completely with seasons - even its feet grow feathered boots in winter to blend with snow'
    },
    {
      id: 'nightjar',
      name: 'Common Nightjar',
      scientificName: 'Caprimulgus europaeus',
      description: 'Perfectly mimics tree bark with mottled plumage, becoming virtually invisible when roosting during daylight.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '24-28cm',
      habitat: 'Heathlands, forest clearings, scrublands across Europe and Asia',
      diet: 'Flying insects caught in flight',
      funFact: 'When threatened, they remain motionless with eyes closed, relying on their cryptic plumage - even their eggs mimic bark patterns'
    },
    {
      id: 'potoo',
      name: 'Great Potoo',
      scientificName: 'Nyctibius grandis',
      description: 'Masters the art of disguise by perching motionless on dead branches, perfectly resembling a broken stub.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '48-60cm',
      habitat: 'Tropical forests of Central and South America',
      diet: 'Large insects, small birds, bats caught in flight',
      funFact: 'Their eyes are positioned to look forward when perched, giving them binocular vision to spot prey while maintaining perfect camouflage'
    },
    {
      id: 'owlet-nightjar',
      name: 'Spotted Owlet-nightjar',
      scientificName: 'Eurostopodus argus',
      description: 'Combines owl-like features with exceptional camouflage, sporting spots that perfectly mimic dappled sunlight.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '23-26cm',
      habitat: 'Forests and woodlands of New Guinea and nearby islands',
      diet: 'Insects caught in flight at dusk and dawn',
      funFact: 'Their spotted plumage creates an optical illusion that makes them appear as filtered sunlight dappling through leaves'
    },
    {
      id: 'frogmouth',
      name: 'Tawny Frogmouth',
      scientificName: 'Podargus strigoides',
      description: 'Often mistaken for an owl, this bird\'s mottled gray plumage perfectly mimics tree bark when roosting upright.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '35-50cm',
      habitat: 'Woodlands and forests across Australia',
      diet: 'Insects, spiders, worms, small mammals, reptiles',
      funFact: 'When threatened, they stiffen and tilt their heads upward to resemble a broken branch, even adjusting their breathing to avoid detection'
    },
    {
      id: 'scops-owl',
      name: 'Eurasian Scops Owl',
      scientificName: 'Otus scops',
      description: 'Tiny owl whose feather patterns and ear tufts perfectly mimic tree bark, making it nearly invisible during the day.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '16-21cm',
      habitat: 'Woodlands, parks, and gardens across Europe, Asia, and North Africa',
      diet: 'Insects, spiders, small rodents',
      funFact: 'Their ear tufts aren\'t ears at all but feathered structures that break up their head shape, enhancing their stick-like appearance'
    }
  ];

  return (
    <div className="camouflage-container">
      <header className="camouflage-header">
        <h1>Masters of Camouflage</h1>
        <p>Birds with Exceptional Concealment Abilities</p>
      </header>

      <section className="camouflage-intro">
        <div className="intro-content">
          <h2>Nature's Invisible Artists</h2>
          <p>These extraordinary birds have perfected the art of invisibility, developing plumage and behaviors that render them nearly undetectable in their natural habitats. Their camouflage techniques range from seasonal color changes to intricate pattern mimicry, making them some of nature's most skilled illusionists.</p>
        </div>
      </section>

      <section className="camouflage-grid">
        {camouflagedBirds.map((bird) => (
          <div key={bird.id} className="camouflage-card">
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

      <section className="camouflage-science">
        <h2>The Science Behind Perfect Camouflage</h2>
        <p>Bird camouflage involves complex evolutionary adaptations combining coloration, patterning, and behavior. Scientists study these techniques for applications in military technology, fashion design, and robotics. The most advanced camouflagers use disruptive coloration, countershading, and behavioral mimicry to achieve near-perfect concealment.</p>
        <div className="science-insights">
          <h3>Camouflage Techniques:</h3>
          <ul>
            <li><strong>Disruptive Coloration:</strong> Bold patterns that break up body outline</li>
            <li><strong>Countershading:</strong> Darker upperparts and lighter underparts to counter light effects</li>
            <li><strong>Mimicry:</strong> Imitating specific environmental elements like bark, leaves, or shadows</li>
            <li><strong>Behavioral Adaptation:</strong> Postures and movements that enhance concealment</li>
            <li><strong>Seasonal Molting:</strong> Changing plumage color with environmental conditions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MastersOfCamouflage;