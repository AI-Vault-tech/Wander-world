import './IceSpecialists.css';

const IceSpecialists = () => {
  const iceSpecialists = [
    {
      id: 'emperor-penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'Largest penguin species that breeds during the Antarctic winter, enduring temperatures as low as -40°C while incubating eggs on feet.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '1.2m',
      weight: '22-45kg',
      habitat: 'Antarctic pack ice and ocean',
      diet: 'Fish, krill, squid',
      funFact: 'Males fast for up to 120 days during incubation, losing nearly half their body weight while balancing eggs on their feet in brutal winter conditions'
    },
    {
      id: 'polar-bear',
      name: 'Polar Bear',
      scientificName: 'Ursus maritimus',
      description: 'Apex predator of the Arctic with specialized adaptations for hunting seals on sea ice, including black skin under white fur for heat absorption.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '2.4-3m',
      weight: '350-700kg',
      habitat: 'Arctic sea ice, coastal areas',
      diet: 'Seals, fish, walruses, whale carcasses',
      funFact: 'Has transparent fur that appears white - their skin is actually black to absorb more heat, and they can swim at speeds up to 25km/h'
    },
    {
      id: 'snowy-owl',
      name: 'Snowy Owl',
      scientificName: 'Bubo scandiacus',
      description: 'Arctic specialist with thick feathered feet and dense plumage for insulation, hunting lemmings and other prey across the tundra.',
      image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=1920&q=80',
      length: '53-65cm',
      wingspan: '1.3-1.5m',
      habitat: 'Arctic tundra of North America and Eurasia',
      diet: 'Lemmings, Arctic hares, birds, fish',
      funFact: 'Males are almost pure white while females have dark barring - both have heavily feathered feet that act like snowshoes and provide insulation'
    },
    {
      id: 'arctic-fox',
      name: 'Arctic Fox',
      scientificName: 'Vulpes lagopus',
      description: 'Smallest Arctic carnivore with the warmest fur of any mammal, changing from brown in summer to pure white in winter for camouflage.',
      image: 'https://images.unsplash.com/photo-1551632436-7a8f0c8e8a4a?w=1920&q=80',
      length: '46-68cm',
      weight: '3-8kg',
      habitat: 'Arctic tundra and sea ice regions',
      diet: 'Lemmings, birds, eggs, carrion, berries',
      funFact: 'Has the warmest fur of any animal - so effective that they can survive in temperatures as low as -50°C and remain active year-round'
    },
    {
      id: 'walrus',
      name: 'Walrus',
      scientificName: 'Odobenus rosmarus',
      description: 'Massive Arctic pinniped with long tusks for hauling itself onto ice floes and sensitive whiskers for detecting prey in murky waters.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e307?w=1920&q=80',
      length: '2.2-3.6m',
      weight: '800-1700kg',
      habitat: 'Arctic and subarctic seas',
      diet: 'Bivalves, snails, sea cucumbers, fish',
      funFact: 'Can dive to depths of 90 meters and stay submerged for up to 30 minutes - their whiskers can detect prey buried under 15cm of sediment'
    },
    {
      id: 'beluga-whale',
      name: 'Beluga Whale',
      scientificName: 'Delphinapterus leucas',
      description: 'Highly social Arctic cetacean with a flexible neck and echolocation abilities, able to navigate through ice-covered waters with remarkable precision.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e308?w=1920&q=80',
      length: '3-5.5m',
      weight: '1000-1600kg',
      habitat: 'Arctic and subarctic waters',
      diet: 'Fish, squid, crustaceans, worms',
      funFact: 'Called the \"canary of the sea\" for their extensive vocal repertoire - they can produce clicks, whistles, and chirps at volumes up to 200 decibels'
    }
  ];

  return (
    <div className="ice-specialists-container">
      <header className="ice-specialists-header">
        <h1>Ice Specialists</h1>
        <p>Birds and Animals Adapted to Icy Environments</p>
      </header>

      <section className="ice-specialists-intro">
        <div className="intro-content">
          <h2>Survivors of the Frozen Frontier</h2>
          <p>These extraordinary creatures have evolved remarkable adaptations to thrive in Earth's most extreme cold environments. From the frozen tundra to the pack ice of polar regions, they demonstrate unparalleled resilience and specialized physiological traits that allow them to not just survive but flourish in conditions that would be lethal to most other animals.</p>
        </div>
      </section>

      <section className="ice-specialists-grid">
        {iceSpecialists.map((animal) => (
          <div key={animal.id} className="ice-specialists-card">
            <div className="card-image">
              <img src={animal.image} alt={animal.name} />
            </div>
            <div className="card-content">
              <h3>{animal.name}</h3>
              <p className="scientific-name">{animal.scientificName}</p>
              <p className="description">{animal.description}</p>
              <div className="animal-stats">
                <div className="stat">
                  <span className="stat-label">Height/Length:</span>
                  <span className="stat-value">{animal.height || animal.length}</span>
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

      <section className="ice-specialists-conservation">
        <h2>Climate Change Threats</h2>
        <p>Ice specialists face unprecedented challenges from global warming, with rapidly disappearing sea ice and changing weather patterns threatening their survival. Many species are experiencing habitat loss, altered food chains, and disrupted breeding cycles. Conservation efforts focus on protecting critical habitats, reducing greenhouse gas emissions, and supporting research into adaptation strategies.</p>
        <div className="conservation-actions">
          <h3>Conservation Strategies:</h3>
          <ul>
            <li><strong>Habitat Protection:</strong> Establishing protected areas in critical ice environments</li>
            <li><strong>Climate Research:</strong> Studying impacts of warming temperatures on ice-dependent species</li>
            <li><strong>International Cooperation:</strong> Coordinated conservation efforts across Arctic nations</li>
            <li><strong>Reducing Emissions:</strong> Global initiatives to combat climate change effects</li>
            <li><strong>Community Involvement:</strong> Engaging indigenous communities in conservation programs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IceSpecialists;