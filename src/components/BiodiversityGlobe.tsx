import { useState, useEffect } from 'react';
import './BiodiversityGlobe.css';

interface BiodiversityLayer {
  title: string;
  description: string;
  colorScheme: string;
}

interface Region {
  id: number;
  name: string;
  speciesCount: number;
  status: string;
  biodiversityIndex: number;
  endemicSpecies: number;
  discoveryRate: string;
  conservationStatus: string;
  iconicSpecies: string[];
  climateChangeImpact: string;
  restorationProjects: number;
  biodiversityTrend: string;
}

interface EducationalFact {
  id: number;
  title: string;
  content: string;
  source: string;
}

interface ConservationInitiative {
  id: number;
  name: string;
  organization: string;
  impact: string;
  funding: string;
  status: string;
}

interface BiodiversityTip {
  id: number;
  title: string;
  tip: string;
  action: string;
}

interface BiodiversityChallenge {
  id: number;
  title: string;
  description: string;
  impact: string;
  difficulty: string;
}

const BiodiversityGlobe = () => {
  const [activeLayer, setActiveLayer] = useState('species');
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);

  // Mock data for demonstration
  const biodiversityData: Record<string, BiodiversityLayer> = {
    species: {
      title: "Species Density",
      description: "Global distribution of biodiversity with particle density representing species count per region",
      colorScheme: "gold-emerald-violet"
    },
    endangerment: {
      title: "Endangerment Status",
      description: "Conservation status of species worldwide with crisis areas gently pulsating",
      colorScheme: "green-yellow-orange-red"
    },
    timeline: {
      title: "Discovery Timeline",
      description: "Species discovery rates by century showing historical vs. recent findings",
      colorScheme: "blue-to-purple"
    },
    climate: {
      title: "Climate Impact",
      description: "Effects of climate change on biodiversity hotspots with predictive modeling",
      colorScheme: "blue-white-red"
    }
  };

  const regions: Region[] = [
    { 
      id: 1, 
      name: "Amazon Basin", 
      speciesCount: 2350, 
      status: "Critical",
      biodiversityIndex: 98,
      endemicSpecies: 1050,
      discoveryRate: "⬆️ 12%",
      conservationStatus: "International Priority",
      iconicSpecies: ["Jaguar", "Pink Dolphin", "Poison Dart Frog"],
      climateChangeImpact: "High - Increased droughts and fires",
      restorationProjects: 24,
      biodiversityTrend: "Declining"
    },
    { 
      id: 2, 
      name: "Coral Triangle", 
      speciesCount: 1780, 
      status: "Endangered",
      biodiversityIndex: 92,
      endemicSpecies: 650,
      discoveryRate: "⬆️ 8%",
      conservationStatus: "High Priority",
      iconicSpecies: ["Clownfish", "Manta Ray", "Turtle"],
      climateChangeImpact: "Very High - Coral bleaching events",
      restorationProjects: 18,
      biodiversityTrend: "Declining"
    },
    { 
      id: 3, 
      name: "Congo Basin", 
      speciesCount: 1240, 
      status: "Vulnerable",
      biodiversityIndex: 78,
      endemicSpecies: 420,
      discoveryRate: "⬆️ 5%",
      conservationStatus: "Priority",
      iconicSpecies: ["Gorilla", "Forest Elephant", "Okapi"],
      climateChangeImpact: "Moderate - Altered rainfall patterns",
      restorationProjects: 15,
      biodiversityTrend: "Stable"
    },
    { 
      id: 4, 
      name: "Madagascar", 
      speciesCount: 980, 
      status: "Critical",
      biodiversityIndex: 85,
      endemicSpecies: 870,
      discoveryRate: "⬆️ 15%",
      conservationStatus: "International Priority",
      iconicSpecies: ["Lemur", "Chameleon", "Baobab"],
      climateChangeImpact: "High - Extended dry seasons",
      restorationProjects: 12,
      biodiversityTrend: "Declining"
    },
    { 
      id: 5, 
      name: "Great Barrier Reef", 
      speciesCount: 1620, 
      status: "Endangered",
      biodiversityIndex: 88,
      endemicSpecies: 380,
      discoveryRate: "⬆️ 3%",
      conservationStatus: "High Priority",
      iconicSpecies: ["Coral", "Whale", "Seahorse"],
      climateChangeImpact: "Very High - Ocean warming and acidification",
      restorationProjects: 22,
      biodiversityTrend: "Declining"
    },
    { 
      id: 6, 
      name: "Sundaland", 
      speciesCount: 1150, 
      status: "Critical",
      biodiversityIndex: 82,
      endemicSpecies: 780,
      discoveryRate: "⬆️ 7%",
      conservationStatus: "International Priority",
      iconicSpecies: ["Orangutan", "Tiger", "Rafflesia"],
      climateChangeImpact: "High - Deforestation and fires",
      restorationProjects: 19,
      biodiversityTrend: "Declining"
    }
  ];

  const educationalFacts: EducationalFact[] = [
    {
      id: 1,
      title: "Daily Discovery",
      content: "Today, 137 new species were discovered worldwide, highlighting the vast unknown biodiversity on Earth.",
      source: "Global Biodiversity Information Facility"
    },
    {
      id: 2,
      title: "Conservation Success",
      content: "The California Condor population has recovered from just 27 individuals in 1987 to over 500 today through dedicated conservation efforts.",
      source: "IUCN Red List"
    },
    {
      id: 3,
      title: "Microbial Universe",
      content: "A single gram of soil can contain up to 1 billion bacterial cells, making soil one of Earth's most biodiverse habitats.",
      source: "Soil Biology Research"
    },
    {
      id: 4,
      title: "Ocean Depths",
      content: "Over 80% of Earth's oceans remain unexplored, with scientists estimating millions of undiscovered marine species.",
      source: "Marine Biology Institute"
    }
  ];

  const conservationInitiatives: ConservationInitiative[] = [
    {
      id: 1,
      name: "Amazon Rainforest Protection Program",
      organization: "WWF & Local Partners",
      impact: "Protected 500,000 hectares from deforestation",
      funding: "$12M annually",
      status: "Active"
    },
    {
      id: 2,
      name: "Coral Restoration Initiative",
      organization: "The Nature Conservancy",
      impact: "Restored 50,000 coral fragments across reefs",
      funding: "$8M annually",
      status: "Scaling"
    },
    {
      id: 3,
      name: "Great Apes Conservation Fund",
      organization: "Wildlife Conservation Society",
      impact: "Secured habitats for 80% of remaining great apes",
      funding: "$15M annually",
      status: "Active"
    }
  ];

  const biodiversityTips: BiodiversityTip[] = [
    {
      id: 1,
      title: "Support Local Conservation",
      tip: "Donate to or volunteer with organizations protecting habitats in your area",
      action: "Find local groups"
    },
    {
      id: 2,
      title: "Reduce Your Carbon Footprint",
      tip: "Use public transport, eat less meat, and choose renewable energy options",
      action: "Calculate your footprint"
    },
    {
      id: 3,
      title: "Create Wildlife Habitats",
      tip: "Plant native species in your garden to support local biodiversity",
      action: "Native plant guide"
    },
    {
      id: 4,
      title: "Make Sustainable Choices",
      tip: "Buy sustainable products, reduce waste, and support eco-friendly businesses",
      action: "Eco-label guide"
    }
  ];

  const biodiversityChallenges: BiodiversityChallenge[] = [
    {
      id: 1,
      title: "Plastic-Free Week",
      description: "Eliminate single-use plastics from your daily routine for one week",
      impact: "Prevents ~500 plastic items from entering ecosystems",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Native Garden Project",
      description: "Plant a garden with native species to support local wildlife",
      impact: "Creates habitat for birds, butterflies, and beneficial insects",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Carbon Neutral Month",
      description: "Offset your carbon footprint through lifestyle changes and offsets",
      impact: "Reduces personal CO2 emissions by 200-500 kg",
      difficulty: "Hard"
    },
    {
      id: 4,
      title: "Citizen Science Survey",
      description: "Participate in a local biodiversity survey or monitoring program",
      impact: "Contributes valuable data for conservation research",
      difficulty: "Medium"
    }
  ];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const selectedRegionData = selectedRegion ? regions.find(region => region.id === selectedRegion) : null;

  // Simulate globe rotation
  useEffect(() => {
    if (!isFullscreen) return;
    
    const interval = setInterval(() => {
      // This would control the actual 3D globe rotation in a real implementation
    }, 5000 / rotationSpeed);
    
    return () => clearInterval(interval);
  }, [isFullscreen, rotationSpeed]);

  return (
    <div className={`biodiversity-globe ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="globe-header">
        <h1>Bio-Diversity Globe</h1>
        <p className="subtitle">Interactive visualization of Earth's living systems</p>
      </div>

      <div className="globe-container">
        {/* Globe visualization would go here */}
        <div className="globe-placeholder">
          <h2>Living Planet Interface</h2>
          <p>Interactive 3D visualization of global biodiversity</p>
          <div className="globe-visualization">
            {/* This would be replaced with Three.js implementation */}
            <div className="earth-model">
              <div className="atmosphere"></div>
              <div className="ocean"></div>
              <div className="continents"></div>
              <div className="biodiversity-particles"></div>
              <div className="climate-overlay"></div>
            </div>
          </div>
          <div className="globe-controls">
            <button className="control-btn">Rotate</button>
            <button className="control-btn">Zoom</button>
            <button className="control-btn">Explore</button>
            <button className="control-btn" onClick={() => setShowTimeline(!showTimeline)}>
              {showTimeline ? 'Hide Timeline' : 'Show Timeline'}
            </button>
            <button className="control-btn" onClick={() => setShowTips(!showTips)}>
              {showTips ? 'Hide Tips' : 'Show Tips'}
            </button>
            <button className="control-btn" onClick={() => setShowChallenges(!showChallenges)}>
              {showChallenges ? 'Hide Challenges' : 'Show Challenges'}
            </button>
          </div>
          
          {showTimeline && (
            <div className="timeline-view">
              <h3>Evolutionary Timeline</h3>
              <div className="timeline-slider">
                <input type="range" min="0" max="100" defaultValue="50" />
                <div className="timeline-labels">
                  <span>540 MYA</span>
                  <span>Present Day</span>
                </div>
              </div>
              <div className="timeline-events">
                <div className="event">Cambrian Explosion</div>
                <div className="event">Dinosaurs</div>
                <div className="event">Mammals</div>
                <div className="event">Humans</div>
              </div>
            </div>
          )}
          
          {showTips && (
            <div className="tips-view">
              <h3>How You Can Help</h3>
              <div className="tips-grid">
                {biodiversityTips.map(tip => (
                  <div key={tip.id} className="tip-card">
                    <h4>{tip.title}</h4>
                    <p>{tip.tip}</p>
                    <button className="tip-action">{tip.action}</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {showChallenges && (
            <div className="challenges-view">
              <h3>Biodiversity Challenges</h3>
              <p>Take action to protect our planet's biodiversity with these personalized challenges</p>
              <div className="challenges-grid">
                {biodiversityChallenges.map(challenge => (
                  <div key={challenge.id} className="challenge-card">
                    <div className="challenge-header">
                      <h4>{challenge.title}</h4>
                      <span className={`difficulty ${challenge.difficulty.toLowerCase()}`}>{challenge.difficulty}</span>
                    </div>
                    <p className="challenge-description">{challenge.description}</p>
                    <p className="challenge-impact">🌍 {challenge.impact}</p>
                    <button className="challenge-join">Join Challenge</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="control-panel">
          <h3>Data Layers</h3>
          <div className="layer-selector">
            {Object.entries(biodiversityData).map(([key, layer]) => (
              <button 
                key={key}
                className={`layer-btn ${activeLayer === key ? 'active' : ''}`}
                onClick={() => setActiveLayer(key)}
              >
                {layer.title}
              </button>
            ))}
          </div>
          
          <div className="layer-info">
            <h4>{biodiversityData[activeLayer].title}</h4>
            <p>{biodiversityData[activeLayer].description}</p>
          </div>
          
          {/* Rotation Controls */}
          <div className="rotation-controls">
            <h4>Globe Rotation</h4>
            <div className="speed-control">
              <label>Speed:</label>
              <input 
                type="range" 
                min="0" 
                max="5" 
                value={rotationSpeed}
                onChange={(e) => setRotationSpeed(Number(e.target.value))}
              />
              <span>{rotationSpeed}x</span>
            </div>
          </div>
          
          {/* Planetary Health Monitor */}
          <div className="health-monitor">
            <h3>🌍 Planetary Health Monitor</h3>
            <div className="health-metrics">
              <div className="metric">
                <span className="metric-label">🌱 Biodiversity Index</span>
                <span className="metric-value">7.8/10</span>
              </div>
              <div className="metric">
                <span className="metric-label">🔄 Species Discovery Rate</span>
                <span className="metric-value">15,000/year</span>
              </div>
              <div className="metric">
                <span className="metric-label">🛡️ Protected Areas</span>
                <span className="metric-value">16.6% of land</span>
              </div>
              <div className="metric">
                <span className="metric-label">🌡️ Climate Risk</span>
                <span className="metric-value">HIGH</span>
              </div>
              <div className="metric">
                <span className="metric-label">🎯 Conservation Priority</span>
                <span className="metric-value">HIGH</span>
              </div>
            </div>
          </div>
          
          <button className="fullscreen-toggle" onClick={toggleFullscreen}>
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>

      {/* Educational Content Section */}
      <div className="educational-section">
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`}
            onClick={() => setActiveTab('facts')}
          >
            Daily Facts
          </button>
          <button 
            className={`tab-btn ${activeTab === 'conservation' ? 'active' : ''}`}
            onClick={() => setActiveTab('conservation')}
          >
            Conservation
          </button>
          <button 
            className={`tab-btn ${activeTab === 'initiatives' ? 'active' : ''}`}
            onClick={() => setActiveTab('initiatives')}
          >
            Initiatives
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <h3>Understanding Biodiversity</h3>
              <p>
                Biodiversity refers to the variety of life on Earth at all levels, from genes to ecosystems. 
                It encompasses the evolutionary, ecological, and cultural processes that sustain life.
              </p>
              <div className="biodiversity-facts">
                <div className="fact-card">
                  <h4>8.7 Million Species</h4>
                  <p>Estimated total species on Earth, with only 1.2 million catalogued</p>
                </div>
                <div className="fact-card">
                  <h4>150 Species/Day</h4>
                  <p>Rate of extinction due to human activities</p>
                </div>
                <div className="fact-card">
                  <h4>50 Years</h4>
                  <p>Timeframe for 68% decline in vertebrate populations</p>
                </div>
                <div className="fact-card">
                  <h4>37%</h4>
                  <p>Of coral reefs have been lost in the last 30 years</p>
                </div>
              </div>
              
              <div className="hotspots-map">
                <h4>Biodiversity Hotspots</h4>
                <p>These 36 regions cover just 2.4% of Earth's land surface but support nearly half of all plant species and 30% of all vertebrates.</p>
                <div className="hotspot-indicator">
                  <div className="hotspot-dot"></div>
                  <span>Hotspot Areas</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'facts' && (
            <div className="facts-content">
              <h3>Today's Biodiversity Insights</h3>
              <div className="facts-grid">
                {educationalFacts.map(fact => (
                  <div key={fact.id} className="fact-item">
                    <h4>{fact.title}</h4>
                    <p>{fact.content}</p>
                    <span className="source">Source: {fact.source}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'conservation' && (
            <div className="conservation-content">
              <h3>Global Conservation Efforts</h3>
              <p>
                Conservation biology combines ecology, genetics, and evolutionary biology to protect biodiversity. 
                Current efforts focus on habitat protection, species recovery, and ecosystem restoration.
              </p>
              <div className="conservation-stats">
                <div className="stat-card">
                  <h4>16.6%</h4>
                  <p>of land area protected globally</p>
                </div>
                <div className="stat-card">
                  <h4>7.5%</h4>
                  <p>of marine area protected</p>
                </div>
                <div className="stat-card">
                  <h4>1,400+</h4>
                  <p>protected areas worldwide</p>
                </div>
                <div className="stat-card">
                  <h4>42%</h4>
                  <p>decline in wildlife populations since 1970</p>
                </div>
              </div>
              <button className="action-btn">Support Conservation</button>
            </div>
          )}
          
          {activeTab === 'initiatives' && (
            <div className="initiatives-content">
              <h3>Global Conservation Initiatives</h3>
              <p>Leading programs working to preserve biodiversity around the world</p>
              <div className="initiatives-grid">
                {conservationInitiatives.map(initiative => (
                  <div key={initiative.id} className="initiative-card">
                    <h4>{initiative.name}</h4>
                    <p className="organization">{initiative.organization}</p>
                    <p className="impact">Impact: {initiative.impact}</p>
                    <p className="funding">Funding: {initiative.funding}</p>
                    <span className={`status ${initiative.status.toLowerCase()}`}>{initiative.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Region Information Panel */}
      <div className="region-info-panel">
        <h3>Regional Biodiversity Data</h3>
        <div className="regions-list">
          {regions.map(region => (
            <div 
              key={region.id} 
              className={`region-card ${selectedRegion === region.id ? 'selected' : ''}`}
              onClick={() => setSelectedRegion(region.id)}
            >
              <h4>{region.name}</h4>
              <p>Species: {region.speciesCount}</p>
              <p>Status: <span className={`status-${region.status.toLowerCase()}`}>{region.status}</span></p>
              <p>Trend: <span className={`trend ${region.biodiversityTrend.toLowerCase()}`}>{region.biodiversityTrend}</span></p>
            </div>
          ))}
        </div>

        {selectedRegionData && (
          <div className="region-details">
            <h3>{selectedRegionData.name} Biodiversity Report</h3>
            <div className="region-stats">
              <div className="stat">
                <span className="label">Biodiversity Index:</span>
                <span className="value">{selectedRegionData.biodiversityIndex}/100</span>
              </div>
              <div className="stat">
                <span className="label">Endemic Species:</span>
                <span className="value">{selectedRegionData.endemicSpecies}</span>
              </div>
              <div className="stat">
                <span className="label">Discovery Rate:</span>
                <span className="value">{selectedRegionData.discoveryRate}</span>
              </div>
              <div className="stat">
                <span className="label">Threat Level:</span>
                <span className={`value status-${selectedRegionData.status.toLowerCase()}`}>{selectedRegionData.status}</span>
              </div>
              <div className="stat">
                <span className="label">Conservation Status:</span>
                <span className="value">{selectedRegionData.conservationStatus}</span>
              </div>
              <div className="stat">
                <span className="label">Climate Impact:</span>
                <span className="value">{selectedRegionData.climateChangeImpact}</span>
              </div>
              <div className="stat">
                <span className="label">Restoration Projects:</span>
                <span className="value">{selectedRegionData.restorationProjects}</span>
              </div>
              <div className="stat">
                <span className="label">Biodiversity Trend:</span>
                <span className={`value trend ${selectedRegionData.biodiversityTrend.toLowerCase()}`}>{selectedRegionData.biodiversityTrend}</span>
              </div>
            </div>
            <div className="iconic-species">
              <h4>Iconic Species:</h4>
              <ul>
                {selectedRegionData.iconicSpecies.map((species, index) => (
                  <li key={index}>{species}</li>
                ))}
              </ul>
            </div>
            <div className="action-buttons">
              <button className="explore-btn">Explore {selectedRegionData.name}</button>
              <button className="protect-btn">Protect This Region</button>
            </div>
          </div>
        )}
      </div>
      
      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h3>Join the Conservation Movement</h3>
          <p>Every action counts in preserving Earth's biodiversity for future generations.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Donate Now</button>
            <button className="cta-btn secondary">Learn More</button>
            <button className="cta-btn tertiary">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversityGlobe;