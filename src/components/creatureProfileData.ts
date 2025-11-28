import type { CreatureData } from './CreatureProfile';

// Amur Leopard Data
export const amurLeopardData: CreatureData = {
  id: 1,
  name: "Amur Leopard",
  scientificName: "Panthera pardus orientalis",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "increasing",
  iucnListing: "CR A2cd+4cd; C1",
  physicalData: {
    height: "25-30 inches",
    length: "39-70 inches",
    weight: "60-120 lbs",
    wingspan: "",
    lifespan: "10-15 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Felidae",
    genus: "Panthera",
    species: "pardus"
  },
  ecology: {
    habitat: "Temperate forests",
    range: "Far East Russia, Northeast China",
    diet: "Carnivore"
  },
  story: {
    essence: "The Amur leopard is the world's rarest big cat, with fewer than 120 individuals remaining in the wild. Known for its thick, pale cream-colored fur with widely spaced black rosettes, this elusive feline is perfectly adapted to the snowy landscapes of the Russian Far East.",
    dailyLife: "These solitary cats are primarily nocturnal hunters, using their incredible agility and strength to catch prey such as roe deer, sika deer, and wild boar. They are exceptional climbers and often drag their kills up into trees to keep them safe from other predators.",
    superpowers: "The Amur leopard possesses extraordinary physical adaptations for survival in harsh climates. Its fur grows up to 7cm long in winter, providing exceptional insulation. Their powerful legs enable them to leap horizontally up to 19 feet and vertically up to 10 feet, making them incredibly agile hunters.",
    placeInWeb: "As apex predators, Amur leopards play a crucial role in maintaining the balance of their ecosystem by controlling herbivore populations. Their presence indicates a healthy forest ecosystem, as they require large territories with abundant prey and minimal human disturbance."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Stalking Technique",
      description: "Amur leopards use their spotted coat as camouflage while stalking prey, getting as close as 10 meters before launching a powerful attack.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Tree Climbing",
      description: "These cats are excellent climbers and often haul their kills up into trees to keep them safe from scavengers.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Mother and Cubs",
      description: "Female Amur leopards raise their cubs alone, teaching them to hunt and survive in their territory for up to two years.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[44.5, 135], [44.2, 135.5], [43.8, 135.2]],
    historicalRange: [[45, 134], [44, 136], [43, 135]],
    protectedAreas: [
      { name: "Land of the Leopard National Park", coordinates: [44.2, 135.2] },
      { name: "Hunchun National Nature Reserve", coordinates: [42.8, 130.3] }
    ]
  },
  conservation: {
    successStories: [
      "Population increased from 30 individuals in 2007 to over 120 today",
      "Establishment of Land of the Leopard National Park in 2012",
      "Successful anti-poaching initiatives reducing illegal hunting"
    ],
    currentEfforts: [
      "Camera trap monitoring programs",
      "Genetic studies to maintain diversity",
      "Community engagement and education programs",
      "Prey base restoration projects"
    ],
    howToHelp: [
      "Support WWF's Amur Leopard conservation program",
      "Choose sustainable wood and paper products",
      "Spread awareness about the species on social media",
      "Visit responsible eco-tourism sites in the region"
    ],
    partners: [
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "WildCats Conservation Alliance", logo: "https://via.placeholder.com/100x50?text=WCCA", url: "https://www.wildcatsconservation.org" },
      { name: "Phoenix Fund", logo: "https://via.placeholder.com/100x50?text=Phoenix", url: "https://www.phoenixfund.ru" }
    ]
  },
  relatedCreatures: [
    {
      id: 2,
      name: "Amur Tiger",
      relationType: "Habitat Sharing",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Endangered"
    },
    {
      id: 3,
      name: "Snow Leopard",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1613389459343-399836350356?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 4,
      name: "Clouded Leopard",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Vulnerable"
    }
  ],
  quickFacts: [
    "Only 120 left in wild",
    "Can run up to 37 mph",
    "Tail is 2.5-3 feet long",
    "Lives 10-15 years"
  ]
};



// Javan Rhinoceros Data
export const javanRhinocerosData: CreatureData = {
  id: 2,
  name: "Javan Rhinoceros",
  scientificName: "Rhinoceros sondaicus",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "increasing",
  iucnListing: "CR A3c; C1",
  physicalData: {
    height: "5-6 feet",
    length: "10-11 feet",
    weight: "2,000-5,500 lbs",
    wingspan: "",
    lifespan: "30-40 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Rhinocerotidae",
    genus: "Rhinoceros",
    species: "sondaicus"
  },
  ecology: {
    habitat: "Tropical rainforests",
    range: "Java, Indonesia",
    diet: "Herbivore"
  },
  story: {
    essence: "The Javan rhinoceros is one of the rarest large mammals on Earth, with only 75 individuals remaining in Ujung Kulon National Park on Java island. Once widespread across Southeast Asia, this species has been driven to near extinction by habitat loss and poaching.",
    dailyLife: "These solitary creatures spend most of their day wallowing in mud to protect their sensitive skin from insects and sunburn. They are most active during dawn and dusk, browsing on young shoots, twigs, and fallen fruit throughout their territory.",
    superpowers: "Despite their massive size, Javan rhinos are surprisingly agile and can move quickly through dense jungle vegetation. They have excellent hearing and a keen sense of smell, compensating for their poor eyesight. Their single horn, made of keratin, can grow up to 10 inches long.",
    placeInWeb: "As mega-herbivores, Javan rhinos play a crucial role in shaping their forest environment by consuming large quantities of vegetation and creating pathways through dense jungle. Their dung disperses seeds, contributing to forest regeneration."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Browsing Behavior",
      description: "Javan rhinos are selective browsers, using their prehensile upper lip to grasp vegetation and strip leaves from branches.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Mud Wallowing",
      description: "Rhinos spend hours each day in mud wallows to protect their skin and regulate body temperature.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Mother and Calf",
      description: "Female Javan rhinos give birth to a single calf after a gestation period of 16 months. The calf stays with its mother for up to three years, learning to feed and survive in the wild.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[-6.5, 106.5], [-6.7, 106.7], [-6.3, 106.3]],
    historicalRange: [[-7, 106], [-6, 107], [-5, 105]],
    protectedAreas: [
      { name: "Ujung Kulon National Park", coordinates: [-6.5, 106.5] }
    ]
  },
  conservation: {
    successStories: [
      "Establishment of Ujung Kulon National Park",
      "Anti-poaching patrols and monitoring",
      "Captive breeding programs"
    ],
    currentEfforts: [
      "Habitat protection and restoration",
      "Genetic studies to maintain diversity",
      "Community engagement and education",
      "Anti-poaching initiatives"
    ],
    howToHelp: [
      "Support WWF's Javan Rhino conservation program",
      "Choose sustainable wood and paper products",
      "Spread awareness about the species on social media",
      "Visit responsible eco-tourism sites in the region"
    ],
    partners: [
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "International Rhino Foundation", logo: "https://via.placeholder.com/100x50?text=IRF", url: "https://www.rhinos.org" },
      { name: "Phoenix Fund", logo: "https://via.placeholder.com/100x50?text=Phoenix", url: "https://www.phoenixfund.ru" }
    ]
  },
  relatedCreatures: [
    {
      id: 5,
      name: "Sumatran Rhinoceros",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 6,
      name: "Black Rhinoceros",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 7,
      name: "White Rhinoceros",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Near Threatened"
    }
  ],
  quickFacts: [
    "Only 75 left in wild",
    "Can run up to 25 mph",
    "Tail is 3-4 feet long",
    "Lives 30-40 years"
  ]
};

// Axolotl Data
export const axolotlData: CreatureData = {
  id: 11,
  name: "Axolotl",
  scientificName: "Ambystoma mexicanum",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "decreasing",
  iucnListing: "CR A4ace",
  physicalData: {
    height: "",
    length: "6-9 inches",
    weight: "0.2-0.6 lbs",
    wingspan: "",
    lifespan: "10-15 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Ambystomatidae",
    genus: "Ambystoma",
    species: "mexicanum"
  },
  ecology: {
    habitat: "Freshwater lakes",
    range: "Xochimilco, Mexico",
    diet: "Carnivore"
  },
  story: {
    essence: "The axolotl is a unique amphibian that retains its larval features throughout its life, a phenomenon called neoteny. Known as the \"Mexican walking fish,\" these creatures have the remarkable ability to regenerate lost body parts, including limbs, spinal cord, heart, and brain tissue.",
    dailyLife: "Axolotls spend their entire lives underwater in the freshwater lakes and canals of Xochimilco near Mexico City. They are ambush predators, feeding on worms, insects, mollusks, and small fish. Unlike most amphibians, they retain their external gills and never undergo metamorphosis to live on land.",
    superpowers: "Axolotls possess extraordinary regenerative abilities, capable of regenerating entire limbs, tail, jaws, spinal cord, and even parts of their brain and heart without scarring. They can also regenerate their lungs and other organs. Scientists are studying their genome to understand these regenerative powers, which could revolutionize medicine.",
    placeInWeb: "As both predator and prey in their aquatic ecosystem, axolotls help control populations of smaller organisms while serving as indicators of water quality. Their presence signals healthy aquatic environments, and their decline reflects the degradation of Mexico's unique lacustrine ecosystems."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Ambush Predation",
      description: "Axolotls use suction feeding to draw prey into their mouths with remarkable precision.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Underwater Navigation",
      description: "These creatures use their lateral line system to detect movement and navigate in murky waters.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Reproduction Behavior",
      description: "During breeding season, males deposit spermatophores for females to pick up and fertilize eggs internally.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[19.2, -99.1], [19.3, -99.0], [19.1, -99.2]],
    historicalRange: [[19, -99], [20, -98], [18, -100]],
    protectedAreas: [
      { name: "Xochimilco Ecological Reserve", coordinates: [19.2, -99.1] }
    ]
  },
  conservation: {
    successStories: [
      "Establishment of Xochimilco Ecological Reserve",
      "International captive breeding programs",
      "Scientific research on regeneration"
    ],
    currentEfforts: [
      "Habitat restoration projects",
      "Water quality improvement",
      "Captive breeding and reintroduction",
      "Genetic rescue programs"
    ],
    howToHelp: [
      "Support axolotl conservation organizations",
      "Avoid releasing pet axolotls into wild",
      "Donate to research institutions",
      "Spread awareness about urbanization impacts"
    ],
    partners: [
      { name: "UNAM Institute of Biology", logo: "https://via.placeholder.com/100x50?text=UNAM", url: "https://www.biologia.unam.mx" },
      { name: "Axolotl Conservation Fund", logo: "https://via.placeholder.com/100x50?text=ACF", url: "https://www.axolotl.org" },
      { name: "Zoological Society of London", logo: "https://via.placeholder.com/100x50?text=ZSL", url: "https://www.zsl.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 32,
      name: "Tiger Salamander",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 33,
      name: "Hellbender",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Near Threatened"
    },
    {
      id: 34,
      name: "Fire Salamander",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Least Concern"
    }
  ],
  quickFacts: [
    "Can regenerate lost body parts completely",
    "Retains larval features as adults",
    "Only found in Xochimilco lake complex",
    "Critically endangered in the wild"
  ]
};

// Kakapo Data
export const kakapoData: CreatureData = {
  id: 12,
  name: "Kakapo",
  scientificName: "Strigops habroptilus",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "increasing",
  iucnListing: "CR D",
  physicalData: {
    height: "14-16 inches",
    length: "23-25 inches",
    weight: "4-9 lbs",
    wingspan: "24-26 inches",
    lifespan: "60+ years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Strigopidae",
    genus: "Strigops",
    species: "habroptilus"
  },
  ecology: {
    habitat: "Temperate forests",
    range: "New Zealand",
    diet: "Herbivore"
  },
  story: {
    essence: "The kakapo is the world's only flightless, nocturnal parrot and one of the rarest birds on Earth. With fewer than 250 individuals remaining, these gentle giants are the subject of one of the world's most intensive conservation efforts. Known for their distinctive owl-like faces and booming mating calls, kakapos are living dinosaurs.",
    dailyLife: "Kakapos are solitary creatures that spend their nights foraging for a wide variety of plant foods including seeds, fruits, leaves, and bark. During the day, they rest in sheltered locations, often in hollow trees or dense vegetation. These birds are incredibly long-lived, with some individuals reaching over 60 years of age.",
    superpowers: "Kakapos possess extraordinary longevity and have evolved unique adaptations for their flightless lifestyle. Males produce deep, resonant booming calls that can travel up to 5 kilometers to attract mates. They have an exceptional sense of smell, unusual for birds, which helps them locate food sources in the dark forest. Their facial discs, similar to owls, help funnel sound to their ears.",
    placeInWeb: "As seed dispersers and herbivores, kakapos play a crucial role in maintaining forest ecosystem dynamics in New Zealand. Their feeding habits influence plant distribution and regeneration patterns. As a flagship species, their conservation has catalyzed broader ecosystem protection efforts in New Zealand."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Dietary Flexibility",
      description: "Kakapos consume over 200 plant species, adapting their diet seasonally based on availability.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Climbing Ability",
      description: "Despite being flightless, kakapos are excellent climbers and can scale tall trees with ease.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Lek Breeding System",
      description: "Males gather at traditional sites called leks to perform elaborate courtship displays to attract females.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[-44.5, 167.5], [-44.2, 167.8], [-44.8, 167.2]],
    historicalRange: [[-45, 167], [-44, 168], [-43, 166]],
    protectedAreas: [
      { name: "Codfish Island", coordinates: [-44.2, 167.8] },
      { name: "Anchor Island", coordinates: [-44.5, 167.5] },
      { name: "Little Barrier Island", coordinates: [-44.8, 167.2] }
    ]
  },
  conservation: {
    successStories: [
      "Population increased from 51 individuals in 1995 to over 200 today",
      "Successful translocation to predator-free islands",
      "World's most intensive individual-based conservation program"
    ],
    currentEfforts: [
      "24/7 monitoring with GPS tracking",
      "Supplementary feeding programs",
      "Genetic management and breeding",
      "Predator-proof island maintenance"
    ],
    howToHelp: [
      "Support Kakapo Recovery Programme",
      "Donate to New Zealand conservation organizations",
      "Purchase Kakapo merchandise to fund conservation",
      "Spread awareness about kakapo conservation"
    ],
    partners: [
      { name: "New Zealand Department of Conservation", logo: "https://via.placeholder.com/100x50?text=DOC", url: "https://www.doc.govt.nz" },
      { name: "Kakapo Recovery Programme", logo: "https://via.placeholder.com/100x50?text=KRP", url: "https://www.kakaporecovery.org.nz" },
      { name: "Forest and Bird", logo: "https://via.placeholder.com/100x50?text=F&B", url: "https://www.forestandbird.org.nz" }
    ]
  },
  relatedCreatures: [
    {
      id: 35,
      name: "Kea",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Endangered"
    },
    {
      id: 36,
      name: "New Zealand Kaka",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 37,
      name: "Takahē",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Endangered"
    }
  ],
  quickFacts: [
    "World's only flightless parrot",
    "Only nocturnal parrot species",
    "Can live over 60 years",
    "Males can weigh up to 9 pounds"
  ]
};

// Vaquita Data
export const vaquitaData: CreatureData = {
  id: 3,
  name: "Vaquita",
  scientificName: "Phocoena sinus",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "decreasing",
  iucnListing: "CR A4c; C1",
  physicalData: {
    height: "",
    length: "4-5 feet",
    weight: "90-120 lbs",
    wingspan: "",
    lifespan: "20-25 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Phocoenidae",
    genus: "Phocoena",
    species: "sinus"
  },
  ecology: {
    habitat: "Shallow coastal waters",
    range: "Northern Gulf of California, Mexico",
    diet: "Carnivore"
  },
  story: {
    essence: "The vaquita is the world's most endangered marine mammal, with fewer than 30 individuals remaining. These shy porpoises are endemic to the northern Gulf of California and were only discovered in 1958. Their small size and distinctive facial markings make them unique among cetaceans.",
    dailyLife: "Vaquitas are typically found in small groups of 1-3 individuals, though occasionally groups of up to 10 have been observed. They feed primarily on small fish, squid, and crustaceans in shallow waters less than 50 meters deep. Their diet consists mainly of croaker, grunion, and squid species native to the Gulf.",
    superpowers: "Vaquitas are exceptional echolocators, using high-frequency clicks to navigate and hunt in the murky waters of the Gulf. Their compact size allows them to maneuver easily through the complex underwater terrain of their habitat. They can dive to depths of 50 meters and hold their breath for up to 2-3 minutes.",
    placeInWeb: "As top predators in their ecosystem, vaquitas help control populations of small fish and invertebrates. Their presence indicates a healthy estuarine environment, as they require clean, productive waters with abundant prey. They are also culturally significant to the indigenous communities of the region."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Echolocation Hunting",
      description: "Vaquitas use echolocation to locate prey in turbid waters, producing up to 200 clicks per second.",
      mediaUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80",
      type: "video"
    },
    {
      category: "Movement & Locomotion",
      title: "Surface Behavior",
      description: "Vaquitas are typically seen briefly at the surface, rarely breaching or performing acrobatics.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "image"
    },
    {
      category: "Social & Family",
      title: "Small Group Dynamics",
      description: "Vaquitas form loose associations, with mothers caring for calves for approximately two years.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[30.5, -113.5], [31.2, -114.2], [30.8, -113.8]],
    historicalRange: [[30, -113], [32, -115], [31, -114]],
    protectedAreas: [
      { name: "Upper Gulf of California and Colorado River Delta Biosphere Reserve", coordinates: [31, -114] }
    ]
  },
  conservation: {
    successStories: [
      "International cooperation to ban gillnet fishing",
      "Development of vaquita-safe fishing gear",
      "Increased international awareness"
    ],
    currentEfforts: [
      "Permanent gillnet ban enforcement",
      "Vaquita refuge monitoring",
      "Alternative livelihood programs for fishermen",
      "International trade restrictions"
    ],
    howToHelp: [
      "Avoid seafood from the Gulf of California",
      "Support conservation organizations",
      "Spread awareness about vaquita crisis",
      "Advocate for stronger marine protection laws"
    ],
    partners: [
      { name: "Vaquita CPR", logo: "https://via.placeholder.com/100x50?text=CPR", url: "https://vaquitacpr.org" },
      { name: "WWF Marine Program", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "Comisión Nacional de Áreas Naturales Protegidas", logo: "https://via.placeholder.com/100x50?text=CONANP", url: "https://www.gob.mx/conanp" }
    ]
  },
  relatedCreatures: [
    {
      id: 8,
      name: "Harbor Porpoise",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 9,
      name: "Harbour Porpoise",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 10,
      name: "Burmeister's Porpoise",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Data Deficient"
    }
  ],
  quickFacts: [
    "Fewer than 30 individuals left",
    "Smallest cetacean in the world",
    "Only found in the Gulf of California",
    "Most endangered marine mammal"
  ]
};

// Additional Creature Profiles
// Cross River Gorilla Data
export const crossRiverGorillaData: CreatureData = {
  id: 4,
  name: "Cross River Gorilla",
  scientificName: "Gorilla gorilla diehli",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "stable",
  iucnListing: "CR A4acd; C1",
  physicalData: {
    height: "5.5-6 feet",
    length: "",
    weight: "300-440 lbs",
    wingspan: "",
    lifespan: "40-50 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Hominidae",
    genus: "Gorilla",
    species: "gorilla"
  },
  ecology: {
    habitat: "Mountain forests",
    range: "Nigeria and Cameroon",
    diet: "Herbivore"
  },
  story: {
    essence: "The Cross River gorilla is the rarest subspecies of gorilla, with fewer than 200-300 individuals remaining in the mountainous forests along the Nigeria-Cameroon border. These elusive primates were only recognized as a distinct subspecies in 1904 and remain one of the least studied great apes.",
    dailyLife: "Cross River gorillas live in groups of 5-15 individuals led by a dominant silverback male. They spend most of their day foraging for food, building nests for sleeping, and socializing. Their diet consists primarily of fruits, leaves, bark, and occasionally insects.",
    superpowers: "These gorillas have adapted to their mountainous habitat with thicker fur and shorter skulls than their western lowland cousins. They are excellent climbers and can move through steep terrain with remarkable agility. Their complex social structures and communication systems demonstrate high intelligence.",
    placeInWeb: "As seed dispersers and habitat modifiers, Cross River gorillas play a crucial role in maintaining forest biodiversity. Their presence indicates pristine forest ecosystems, and their protection benefits countless other species sharing their habitat."
  },
  behaviors: [
    {
      category: "Social & Family",
      title: "Group Dynamics",
      description: "Cross River gorillas live in cohesive family groups with complex social hierarchies and strong familial bonds.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Hunting & Feeding",
      title: "Foraging Behavior",
      description: "These gorillas consume over 100 plant species, playing a crucial role in seed dispersal throughout their habitat.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Movement & Locomotion",
      title: "Knuckle Walking",
      description: "Cross River gorillas are primarily terrestrial, moving on all fours using a distinctive knuckle-walking gait.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[6.5, 9.5], [6.8, 10.2], [5.8, 9.2]],
    historicalRange: [[7, 8], [5, 11], [10, 8]],
    protectedAreas: [
      { name: "Cross River National Park", coordinates: [6.5, 9.5] },
      { name: "Takamanda National Park", coordinates: [6.2, 9.8] }
    ]
  },
  conservation: {
    successStories: [
      "Establishment of Cross River National Park and Takamanda National Park",
      "Transboundary cooperation between Nigeria and Cameroon",
      "Community-based conservation initiatives"
    ],
    currentEfforts: [
      "Anti-poaching patrols",
      "Habitat corridor development",
      "Community education programs",
      "Genetic research and monitoring"
    ],
    howToHelp: [
      "Support Wildlife Conservation Society",
      "Choose sustainable palm oil products",
      "Donate to Cross River gorilla conservation",
      "Advocate for forest protection policies"
    ],
    partners: [
      { name: "Wildlife Conservation Society", logo: "https://via.placeholder.com/100x50?text=WCS", url: "https://www.wcs.org" },
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "Nigerian Conservation Foundation", logo: "https://via.placeholder.com/100x50?text=NCF", url: "https://www.ncfnigeria.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 11,
      name: "Western Lowland Gorilla",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 12,
      name: "Eastern Lowland Gorilla",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 13,
      name: "Mountain Gorilla",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Endangered"
    }
  ],
  quickFacts: [
    "Fewer than 300 individuals left",
    "Only recognized as subspecies in 1904",
    "Live in groups of 5-15",
    "Can consume 40 lbs of vegetation daily"
  ]
};

// Hawksbill Sea Turtle Data
export const hawksbillTurtleData: CreatureData = {
  id: 5,
  name: "Hawksbill Sea Turtle",
  scientificName: "Eretmochelys imbricata",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "decreasing",
  iucnListing: "CR A1bd+2bd; C1",
  physicalData: {
    height: "",
    length: "2-3 feet",
    weight: "100-150 lbs",
    wingspan: "",
    lifespan: "30-50 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Cheloniidae",
    genus: "Eretmochelys",
    species: "imbricata"
  },
  ecology: {
    habitat: "Tropical coral reefs",
    range: "Tropical oceans worldwide",
    diet: "Carnivore"
  },
  story: {
    essence: "The hawksbill sea turtle is one of the most critically endangered marine turtles, with population declines of over 80% in the last century. Named for their distinctive hawk-like beak and beautifully patterned shell, these ancient mariners have been navigating the world's oceans for over 100 million years.",
    dailyLife: "Hawksbills spend most of their lives in the open ocean but return to coastal areas to feed on sponges, their primary food source. They are most commonly found in coral reefs, rocky areas, and shallow coastal waters where sponges are abundant. These turtles are known for their incredible ability to navigate using Earth's magnetic field.",
    superpowers: "Hawksbills possess a unique beak that allows them to reach into crevices in coral reefs to extract sponges, many of which are toxic to other animals. Their shells, made of overlapping scutes, create the distinctive amber-colored pattern that has unfortunately made them targets for illegal trade. They can hold their breath for up to 45 minutes and dive to depths of 65 feet.",
    placeInWeb: "As primary sponge predators, hawksbills play a crucial role in maintaining healthy coral reef ecosystems by preventing sponge overgrowth that could smother corals. Their presence indicates thriving reef systems, and their protection benefits entire marine communities."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Sponge Feeding",
      description: "Hawksbills specialize in eating sponges, using their sharp beaks to extract them from coral crevices.",
      mediaUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Ocean Navigation",
      description: "These turtles use Earth's magnetic field to navigate thousands of miles during their migrations.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Nesting Behavior",
      description: "Females return to the same beaches where they were born to lay their eggs, often traveling thousands of miles.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[0, 0], [0, 0], [0, 0]],
    historicalRange: [[30, -80], [-30, 80], [20, 120]],
    protectedAreas: [
      { name: "Great Barrier Reef Marine Park", coordinates: [-18, 147] },
      { name: "Caribbean Marine Protected Areas", coordinates: [15, -75] }
    ]
  },
  conservation: {
    successStories: [
      "International ban on tortoiseshell trade",
      "Establishment of marine protected areas",
      "Community-based beach protection programs"
    ],
    currentEfforts: [
      "Nest protection and monitoring",
      "Bycatch reduction initiatives",
      "Coral reef restoration projects",
      "International trade enforcement"
    ],
    howToHelp: [
      "Avoid tortoiseshell products",
      "Support sustainable seafood choices",
      "Reduce plastic use and ocean pollution",
      "Donate to sea turtle conservation organizations"
    ],
    partners: [
      { name: "Sea Turtle Conservancy", logo: "https://via.placeholder.com/100x50?text=STC", url: "https://www.conserveturtles.org" },
      { name: "WWF Marine Program", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "NOAA Fisheries", logo: "https://via.placeholder.com/100x50?text=NOAA", url: "https://www.fisheries.noaa.gov" }
    ]
  },
  relatedCreatures: [
    {
      id: 14,
      name: "Green Sea Turtle",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80",
      conservationStatus: "Endangered"
    },
    {
      id: 15,
      name: "Loggerhead Sea Turtle",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 16,
      name: "Leatherback Sea Turtle",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Vulnerable"
    }
  ],
  quickFacts: [
    "Can live over 50 years",
    "Shell pattern is unique like human fingerprints",
    "Eat jellyfish and sponges primarily",
    "Travel thousands of miles during migrations"
  ]
};

// Saola Data
export const saolaData: CreatureData = {
  id: 6,
  name: "Saola",
  scientificName: "Pseudoryx nghetinhensis",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "decreasing",
  iucnListing: "CR A3c+4c; C1",
  physicalData: {
    height: "30-35 inches",
    length: "4.5-5 feet",
    weight: "180-220 lbs",
    wingspan: "",
    lifespan: "Unknown"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Bovidae",
    genus: "Pseudoryx",
    species: "nghetinhensis"
  },
  ecology: {
    habitat: "Annamite Mountains",
    range: "Vietnam and Laos",
    diet: "Herbivore"
  },
  story: {
    essence: "Known as the \"Asian unicorn,\" the saola is one of the rarest large mammals discovered in recent decades. Found only in the remote Annamite Mountains between Vietnam and Laos, this mysterious bovine was unknown to science until 1992. With fewer than 100 individuals remaining, it's among the world's most endangered species.",
    dailyLife: "Saolas are solitary or found in small family groups, spending their days browsing on leaves, shoots, and fruits in the dense mountain forests. They are most active during dawn and dusk, using their keen senses to detect danger. These elusive creatures are rarely seen by humans, contributing to their mystique and making research extremely challenging.",
    superpowers: "The saola's most distinctive feature is its pair of long, straight horns that can grow up to 20 inches long, which they use for defense and during mating rituals. They have excellent hearing and a keen sense of smell, allowing them to detect predators and humans from great distances. Their compact size and agility enable them to navigate steep, rocky terrain with ease.",
    placeInWeb: "As selective browsers, saolas help maintain the balance of forest vegetation by consuming a variety of plant species. Their presence indicates pristine montane forest ecosystems, and their protection benefits numerous other endemic species in the Annamite Mountains, one of the world's most biodiverse regions."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Selective Browsing",
      description: "Saolas are selective feeders, consuming over 60 plant species including leaves, shoots, and fruits.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Mountain Navigation",
      description: "These agile animals navigate steep, rocky terrain with remarkable ease and speed.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Solitary Lifestyle",
      description: "Saolas are typically solitary or found in small family groups of 2-3 individuals.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[18.5, 106.5], [18.8, 107.2], [17.8, 106.2]],
    historicalRange: [[19, 106], [17, 108], [20, 105]],
    protectedAreas: [
      { name: "Vu Quang National Park", coordinates: [18.5, 106.5] },
      { name: "Nakai-Nam Theun National Protected Area", coordinates: [18, 107] }
    ]
  },
  conservation: {
    successStories: [
      "Establishment of protected areas in saola habitat",
      "Community-based conservation initiatives",
      "International awareness campaigns"
    ],
    currentEfforts: [
      "Anti-poaching patrols",
      "Community education programs",
      "Habitat corridor development",
      "Research and monitoring efforts"
    ],
    howToHelp: [
      "Support Saola Working Group",
      "Donate to WWF's saola conservation",
      "Advocate for forest protection",
      "Spread awareness about the species"
    ],
    partners: [
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "IUCN Species Survival Commission", logo: "https://via.placeholder.com/100x50?text=IUCN", url: "https://www.iucn.org" },
      { name: "Vietnam Forest Protection Department", logo: "https://via.placeholder.com/100x50?text=FPD", url: "https://www.forest.gov.vn" }
    ]
  },
  relatedCreatures: [
    {
      id: 17,
      name: "Mountain Goat",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 18,
      name: "Takin",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 19,
      name: "Banteng",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Endangered"
    }
  ],
  quickFacts: [
    "Discovered in 1992",
    "Called \"Asian unicorn\"",
    "Fewer than 100 individuals left",
    "Only found in Annamite Mountains"
  ]
};

// Additional Creature Profiles - Part 2
// Sumatran Orangutan Data
export const sumatranOrangutanData: CreatureData = {
  id: 7,
  name: "Sumatran Orangutan",
  scientificName: "Pongo abelii",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "decreasing",
  iucnListing: "CR A2cd+3cd+4cd",
  physicalData: {
    height: "4-5 feet",
    length: "",
    weight: "110-220 lbs",
    wingspan: "6-7 feet",
    lifespan: "30-40 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Hominidae",
    genus: "Pongo",
    species: "abelii"
  },
  ecology: {
    habitat: "Tropical rainforests",
    range: "Sumatra, Indonesia",
    diet: "Omnivore"
  },
  story: {
    essence: "The Sumatran orangutan is one of humanity's closest relatives, sharing 96.4% of our DNA. With fewer than 14,000 individuals remaining, these critically endangered primates are found only on the island of Sumatra. Known for their distinctive red hair and incredible intelligence, they are among the most solitary of the great apes.",
    dailyLife: "Sumatran orangutans spend nearly their entire lives in trees, building new nests each night from branches and leaves. They are primarily frugivorous, consuming over 400 different plant species, but also eat bark, leaves, insects, and occasionally bird eggs. Males are largely solitary, while females with offspring form the strongest social bonds.",
    superpowers: "These remarkable apes demonstrate exceptional problem-solving abilities and use tools in the wild, including leaves as umbrellas and sticks to extract insects from tree holes. They have incredibly strong arms, seven times stronger than humans, allowing them to swing effortlessly through the forest canopy. Their long, powerful arms can span up to 7 feet.",
    placeInWeb: "As seed dispersers and forest architects, Sumatran orangutans play a crucial role in maintaining forest biodiversity. Each individual can disperse thousands of seeds daily through their extensive travels. Their protection is essential for preserving the complex ecosystems of Sumatra's rainforests."
  },
  behaviors: [
    {
      category: "Social & Family",
      title: "Mother-Infant Bond",
      description: "Orangutan mothers stay with their young for 6-8 years, the longest maternal bond among non-human animals.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Hunting & Feeding",
      title: "Tool Use",
      description: "Sumatran orangutans use sticks to extract insects and honey, and leaves as tools for various purposes.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Movement & Locomotion",
      title: "Brachiation",
      description: "These apes move through trees using arm-over-arm swinging, covering large distances efficiently.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[2.5, 98.5], [3.2, 99.2], [1.8, 98.2]],
    historicalRange: [[4, 97], [1, 100], [5, 96]],
    protectedAreas: [
      { name: "Gunung Leuser National Park", coordinates: [3.5, 98.5] },
      { name: "Bukit Barisan Selatan National Park", coordinates: [2.2, 99.2] }
    ]
  },
  conservation: {
    successStories: [
      "Population stabilization in protected areas",
      "Community-based forest protection programs",
      "International collaboration for conservation"
    ],
    currentEfforts: [
      "Anti-deforestation initiatives",
      "Human-wildlife conflict mitigation",
      "Research and monitoring programs",
      "Ecotourism development"
    ],
    howToHelp: [
      "Support Sumatran Orangutan Conservation Programme",
      "Choose sustainable palm oil products",
      "Donate to orangutan sanctuaries",
      "Spread awareness about deforestation impacts"
    ],
    partners: [
      { name: "Sumatran Orangutan Conservation Programme", logo: "https://via.placeholder.com/100x50?text=SOCP", url: "https://www.sumatranorangutan.org" },
      { name: "WWF Indonesia", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.wwf.or.id" },
      { name: "Orangutan Information Centre", logo: "https://via.placeholder.com/100x50?text=OIC", url: "https://orangutaninformationcentre.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 20,
      name: "Bornean Orangutan",
      relationType: "Close Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 21,
      name: "Tapanuli Orangutan",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 22,
      name: "Gibbon",
      relationType: "Primate Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Endangered"
    }
  ],
  quickFacts: [
    "Share 96.4% of human DNA",
    "Build new nests every night",
    "Only found on Sumatra island",
    "Can live up to 40 years"
  ]
};

// Mountain Gorilla Data
export const mountainGorillaData: CreatureData = {
  id: 8,
  name: "Mountain Gorilla",
  scientificName: "Gorilla beringei beringei",
  conservationStatus: "Endangered",
  conservationCode: "EN",
  populationTrend: "increasing",
  iucnListing: "EN A4acd",
  physicalData: {
    height: "5-6 feet",
    length: "",
    weight: "300-485 lbs",
    wingspan: "",
    lifespan: "40-50 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Hominidae",
    genus: "Gorilla",
    species: "beringei"
  },
  ecology: {
    habitat: "Montane forests",
    range: "Rwanda, Uganda, Democratic Republic of Congo",
    diet: "Herbivore"
  },
  story: {
    essence: "The mountain gorilla is one of the world's most iconic and beloved primates, with fewer than 1,000 individuals remaining. These gentle giants inhabit the volcanic mountains of Central Africa and are renowned for their intelligence, complex social structures, and striking appearance.",
    dailyLife: "Mountain gorillas live in stable family groups of 5-30 individuals led by a dominant silverback male. They spend their days foraging for food, resting, and socializing. Their diet consists primarily of leaves, stems, bark, and fruits, consuming up to 40 pounds of vegetation daily.",
    superpowers: "These remarkable primates display exceptional emotional intelligence, forming strong family bonds and displaying empathy and grief. They are incredibly strong, with adult males weighing up to 485 pounds. Their hands are remarkably dexterous, allowing them to manipulate objects with precision.",
    placeInWeb: "As keystone species, mountain gorillas play a crucial role in maintaining forest ecosystem health through seed dispersal. Their protection has catalyzed conservation efforts that benefit countless other species and support local communities through ecotourism."
  },
  behaviors: [
    {
      category: "Social & Family",
      title: "Family Groups",
      description: "Mountain gorillas live in cohesive family groups with complex social hierarchies and strong familial bonds.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Hunting & Feeding",
      title: "Foraging Behavior",
      description: "These gorillas consume over 142 plant species, playing a crucial role in seed dispersal.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Movement & Locomotion",
      title: "Knuckle Walking",
      description: "Mountain gorillas move on all fours using a distinctive knuckle-walking gait.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[-1.5, 29.5], [-0.8, 30.2], [-2.2, 28.8]],
    historicalRange: [[-2, 28], [0, 31], [-3, 27]],
    protectedAreas: [
      { name: "Virunga National Park", coordinates: [-0.8, 29.5] },
      { name: "Volcanoes National Park", coordinates: [-1.2, 29.8] },
      { name: "Bwindi Impenetrable National Park", coordinates: [-0.8, 30.2] }
    ]
  },
  conservation: {
    successStories: [
      "Population increase from 620 to over 1,000 individuals",
      "Community-based conservation initiatives",
      "Successful anti-poaching programs"
    ],
    currentEfforts: [
      "Daily monitoring and protection",
      "Community engagement programs",
      "Research and health monitoring",
      "Ecotourism development"
    ],
    howToHelp: [
      "Support mountain gorilla tourism",
      "Donate to conservation organizations",
      "Choose sustainable products",
      "Spread awareness about gorilla conservation"
    ],
    partners: [
      { name: "Dian Fossey Gorilla Fund", logo: "https://via.placeholder.com/100x50?text=DFF", url: "https://gorillafund.org" },
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "Wildlife Conservation Society", logo: "https://via.placeholder.com/100x50?text=WCS", url: "https://www.wcs.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 23,
      name: "Eastern Lowland Gorilla",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 24,
      name: "Western Lowland Gorilla",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 25,
      name: "Cross River Gorilla",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    }
  ],
  quickFacts: [
    "Live in groups of 5-30 individuals",
    "Silverbacks can weigh up to 485 lbs",
    "Share 98% of human DNA",
    "Only found in Virunga Mountains and Bwindi"
  ]
};

// Snow Leopard Data
export const snowLeopardData: CreatureData = {
  id: 9,
  name: "Snow Leopard",
  scientificName: "Panthera uncia",
  conservationStatus: "Vulnerable",
  conservationCode: "VU",
  populationTrend: "stable",
  iucnListing: "VU A2cde; C1",
  physicalData: {
    height: "24-30 inches",
    length: "39-51 inches",
    weight: "60-120 lbs",
    wingspan: "",
    lifespan: "15-18 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Felidae",
    genus: "Panthera",
    species: "uncia"
  },
  ecology: {
    habitat: "Alpine and subalpine zones",
    range: "Central and South Asia",
    diet: "Carnivore"
  },
  story: {
    essence: "The elusive snow leopard, known as the 'ghost of the mountains,' inhabits the harsh alpine regions of Central and South Asia. With fewer than 7,000 individuals remaining, these magnificent cats are perfectly adapted to life in some of the world's most extreme environments.",
    dailyLife: "Snow leopards are solitary creatures that patrol vast territories of up to 40 square kilometers. They are most active during dawn and dusk, hunting prey such as blue sheep, ibex, and marmots. These cats can travel up to 25 miles in a single night in search of food.",
    superpowers: "Snow leopards possess incredible physical adaptations for survival in harsh mountain climates. Their thick, smoky-gray fur with dark rosettes provides perfect camouflage against rocky terrain. Their long, muscular tails help with balance during leaps of up to 50 feet. They can sprint at speeds of up to 40 mph.",
    placeInWeb: "As apex predators, snow leopards play a crucial role in maintaining the balance of their high-altitude ecosystems by controlling herbivore populations. Their presence indicates healthy mountain ecosystems, and their protection benefits entire watersheds that supply water to millions of people."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Ambush Predation",
      description: "Snow leopards use their camouflage to stalk prey before launching powerful attacks.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Rock Climbing",
      description: "These cats are exceptional climbers and often rest on rocky outcrops.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Mother and Cubs",
      description: "Female snow leopards raise their cubs alone for 18-22 months.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[35.5, 75.5], [34.8, 76.2], [36.2, 74.8]],
    historicalRange: [[30, 70], [40, 80], [35, 75]],
    protectedAreas: [
      { name: "Hemis National Park", coordinates: [34.2, 77.5] },
      { name: "Khunjerab National Park", coordinates: [36.8, 75.5] },
      { name: "Sagarmatha National Park", coordinates: [27.8, 86.8] }
    ]
  },
  conservation: {
    successStories: [
      "Improved monitoring techniques",
      "Community-based conservation programs",
      "International cooperation agreements"
    ],
    currentEfforts: [
      "Camera trap surveys",
      "Anti-poaching initiatives",
      "Community education programs",
      "Livestock insurance schemes"
    ],
    howToHelp: [
      "Support Snow Leopard Trust",
      "Choose sustainably sourced cashmere",
      "Donate to conservation organizations",
      "Spread awareness about snow leopard conservation"
    ],
    partners: [
      { name: "Snow Leopard Trust", logo: "https://via.placeholder.com/100x50?text=SLT", url: "https://www.snowleopard.org" },
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "Panthera", logo: "https://via.placeholder.com/100x50?text=PANTHERA", url: "https://www.panthera.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 26,
      name: "Clouded Leopard",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 27,
      name: "Amur Leopard",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 28,
      name: "Tiger",
      relationType: "Taxonomic Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Endangered"
    }
  ],
  quickFacts: [
    "Can leap up to 50 feet",
    "Live at elevations up to 18,000 feet",
    "Have the longest tail of any cat",
    "Nearly impossible to study in the wild"
  ]
};

// Pangolin Data
export const pangolinData: CreatureData = {
  id: 10,
  name: "Sunda Pangolin",
  scientificName: "Manis javanica",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR",
  populationTrend: "decreasing",
  iucnListing: "CR A1d+2d",
  physicalData: {
    height: "12-16 inches",
    length: "24-35 inches",
    weight: "11-22 lbs",
    wingspan: "",
    lifespan: "15-20 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Manidae",
    genus: "Manis",
    species: "javanica"
  },
  ecology: {
    habitat: "Tropical forests",
    range: "Southeast Asia",
    diet: "Insectivore"
  },
  story: {
    essence: "The Sunda pangolin is the world's most trafficked mammal, with over a million individuals poached in the last decade. These unique creatures are covered in protective scales and are the only truly scaled mammals in the world. With fewer than 10,000 individuals remaining, they're on the brink of extinction.",
    dailyLife: "Sunda pangolins are solitary, nocturnal creatures that spend their nights foraging for ants and termites. They use their powerful claws to dig into ant hills and termite mounds, then extract their prey with incredibly long, sticky tongues that can extend up to 16 inches. During the day, they curl into a tight ball for protection.",
    superpowers: "Pangolins are equipped with incredible defense mechanisms - when threatened, they roll into an impenetrable ball with their sharp scales facing outward. Their tongues can extend longer than their body length and are coated with sticky saliva to capture insects. They can consume up to 70 million insects per year, making them crucial for pest control.",
    placeInWeb: "As specialized insectivores, pangolins play a vital role in controlling ant and termite populations, which helps maintain ecosystem balance. Their burrowing activities aerate soil, promoting plant growth. Their presence indicates healthy forest ecosystems with diverse insect populations."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Ant and Termite Feeding",
      description: "Pangolins use their long tongues to extract ants and termites from colonies.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Digging Ability",
      description: "These animals can dig burrows up to 13 feet deep in just one night.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Maternal Care",
      description: "Mother pangolins carry their young on their tails for the first few months.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[1.5, 103.5], [2.2, 104.2], [0.8, 103.2]],
    historicalRange: [[5, 100], [0, 110], [10, 95]],
    protectedAreas: [
      { name: "Taman Negara National Park", coordinates: [4.5, 102.5] },
      { name: "Gunung Palung National Park", coordinates: [-0.8, 112.3] },
      { name: "Way Kambas National Park", coordinates: [-4.8, 105.3] }
    ]
  },
  conservation: {
    successStories: [
      "International trade ban implementation",
      "Rescue centers establishment",
      "Community education programs"
    ],
    currentEfforts: [
      "Law enforcement strengthening",
      "Breeding programs development",
      "Demand reduction campaigns",
      "Rehabilitation and release programs"
    ],
    howToHelp: [
      "Avoid pangolin product consumption",
      "Support anti-trafficking organizations",
      "Report wildlife crime",
      "Spread awareness about pangolin plight"
    ],
    partners: [
      { name: "Pangolin Specialist Group", logo: "https://via.placeholder.com/100x50?text=PSG", url: "https://pangolinsg.org" },
      { name: "TRAFFIC", logo: "https://via.placeholder.com/100x50?text=TRAFFIC", url: "https://www.traffic.org" },
      { name: "Save Vietnam's Wildlife", logo: "https://via.placeholder.com/100x50?text=SVW", url: "https://www.savevnswildlife.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 29,
      name: "Chinese Pangolin",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 30,
      name: "Giant Pangolin",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Critically Endangered"
    },
    {
      id: 31,
      name: "Treeshrew",
      relationType: "Forest Ecosystem Partner",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Least Concern"
    }
  ],
  quickFacts: [
    "Covered in 1,000+ scales",
    "Can consume 70 million insects/year",
    "Roll into impenetrable balls when threatened",
    "World's most trafficked mammal"
  ]
};

// Red Panda Data
export const redPandaData: CreatureData = {
  id: 13,
  name: "Red Panda",
  scientificName: "Ailurus fulgens",
  conservationStatus: "Endangered",
  conservationCode: "EN",
  populationTrend: "decreasing",
  iucnListing: "EN A2cde+3cde; C1",
  heroImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
  physicalData: {
    height: "12-16 inches",
    length: "20-25 inches",
    weight: "7-14 lbs",
    wingspan: "",
    lifespan: "8-12 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Ailuridae",
    genus: "Ailurus",
    species: "fulgens"
  },
  ecology: {
    habitat: "Temperate forests",
    range: "Himalayas, China, Nepal, India, Bhutan, Myanmar",
    diet: "Omnivore"
  },
  story: {
    essence: "The red panda, often called the \"firefox,\" is a charismatic mammal native to the temperate forests of the Himalayas. Despite their name, they're not closely related to giant pandas but are instead the only living member of their family. With fewer than 10,000 individuals remaining, these arboreal creatures face threats from habitat loss and fragmentation.",
    dailyLife: "Red pandas are primarily crepuscular, most active during dawn and dusk. They spend much of their time in trees, using their semi-retractable claws and modified wrist bones that function like thumbs to grip bamboo and climb with agility. Their diet consists mainly of bamboo leaves and shoots, but they also eat fruits, insects, and small animals.",
    superpowers: "Red pandas possess several remarkable adaptations for their arboreal lifestyle. Their thick, russet fur provides insulation in cold mountain climates, while their bushy tails serve as both a blanket and a balancing tool when navigating branches. Their modified wrist bones act like opposable thumbs, allowing them to grasp bamboo stalks with precision. They can rotate their ankles 180 degrees to descend trees head-first.",
    placeInWeb: "As bamboo specialists, red pandas play a role in seed dispersal and help maintain bamboo forest dynamics. Their presence indicates healthy temperate forest ecosystems in the Himalayas. As an umbrella species, protecting red pandas also conserves countless other species sharing their habitat."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Bamboo Specialist",
      description: "Red pandas consume up to 20-30% of their body weight in bamboo daily, primarily leaves and shoots.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Arboreal Acrobatics",
      description: "These animals are exceptional climbers, spending most of their time in trees and descending head-first.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Solitary Lifestyle",
      description: "Red pandas are generally solitary except during mating season, communicating through scent marking.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[28.5, 84.5], [28.2, 85.2], [27.8, 84.2]],
    historicalRange: [[30, 83], [27, 86], [31, 82]],
    protectedAreas: [
      { name: "Langtang National Park", coordinates: [28.2, 85.2] },
      { name: "Sagarmatha National Park", coordinates: [27.8, 84.2] },
      { name: "Qinling Mountains", coordinates: [33.5, 107.5] }
    ]
  },
  conservation: {
    successStories: [
      "Establishment of protected areas across range countries",
      "Captive breeding programs showing positive results",
      "Community-based conservation initiatives"
    ],
    currentEfforts: [
      "Habitat corridor development",
      "Anti-poaching patrols",
      "Research and monitoring programs",
      "Education and awareness campaigns"
    ],
    howToHelp: [
      "Support Red Panda Network",
      "Choose sustainable forest products",
      "Donate to conservation organizations",
      "Spread awareness about red panda conservation"
    ],
    partners: [
      { name: "Red Panda Network", logo: "https://via.placeholder.com/100x50?text=RPN", url: "https://www.redpandanetwork.org" },
      { name: "WWF", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.worldwildlife.org" },
      { name: "National Trust for Nature Conservation", logo: "https://via.placeholder.com/100x50?text=NTNC", url: "https://www.ntnc.org.np" }
    ]
  },
  relatedCreatures: [
    {
      id: 38,
      name: "Giant Panda",
      relationType: "Namesake Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 39,
      name: "Raccoon",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 40,
      name: "Common Ringtail Possum",
      relationType: "Ecological Relative",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Least Concern"
    }
  ],
  quickFacts: [
    "Not closely related to giant pandas",
    "Have a false thumb for gripping bamboo",
    "Can rotate ankles 180 degrees",
    "Named \"firefox\" in Firefox browser logo"
  ]
};

// Iberian Lynx Data
export const iberianLynxData: CreatureData = {
  id: 14,
  name: "Iberian Lynx",
  scientificName: "Lynx pardinus",
  conservationStatus: "Endangered",
  conservationCode: "EN",
  populationTrend: "increasing",
  iucnListing: "EN A2ce; C1",
  heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
  physicalData: {
    height: "24-28 inches",
    length: "35-40 inches",
    weight: "20-30 lbs",
    wingspan: "",
    lifespan: "13-15 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Felidae",
    genus: "Lynx",
    species: "pardinus"
  },
  ecology: {
    habitat: "Mediterranean forests and scrublands",
    range: "Spain and Portugal",
    diet: "Carnivore"
  },
  story: {
    essence: "The Iberian lynx is the world's most endangered feline species, with fewer than 2,000 individuals remaining in the wild. Once widespread across the Iberian Peninsula, this elusive wild cat was reduced to just 84 individuals in 2002. Through intensive conservation efforts, populations have slowly recovered, making it one of conservation's greatest success stories.",
    dailyLife: "Iberian lynxes are solitary hunters that primarily prey on European rabbits, which make up 80-90% of their diet. They are most active during dawn and dusk, using their exceptional hearing and vision to locate prey. These cats require large territories of 10-20 square kilometers and are highly territorial, marking their ranges with scent.",
    superpowers: "Iberian lynxes possess incredible hunting abilities, with hearing so acute they can detect a mouse squeak from 75 meters away. Their distinctive facial ruff helps funnel sound to their ears, while their powerful legs enable them to leap up to 4 meters horizontally. Their long, black-tipped tail provides balance during high-speed chases through dense vegetation.",
    placeInWeb: "As specialist rabbit predators, Iberian lynxes play a crucial role in maintaining ecosystem balance in Mediterranean habitats. Their presence indicates healthy rabbit populations and intact scrubland ecosystems. As an umbrella species, their protection benefits numerous other species sharing their habitat, including the endangered Spanish imperial eagle."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Rabbit Specialist",
      description: "These lynxes are highly specialized rabbit hunters, requiring 1-2 rabbits per day to meet their nutritional needs.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Stealth Stalking",
      description: "Iberian lynxes use their spotted coat as camouflage while stalking prey with incredible patience.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Territorial Behavior",
      description: "These cats are highly territorial and use scent marking to communicate with other lynxes.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[38.5, -2.5], [38.2, -2.2], [37.8, -2.8]],
    historicalRange: [[40, -1], [37, -3], [41, -4]],
    protectedAreas: [
      { name: "Doñana National Park", coordinates: [37.8, -6.8] },
      { name: "Sierra Morena", coordinates: [38.2, -4.2] },
      { name: "Andújar-Cardeña", coordinates: [38.5, -2.5] }
    ]
  },
  conservation: {
    successStories: [
      "Population increased from 84 individuals in 2002 to over 1,000 today",
      "Successful captive breeding and reintroduction programs",
      "Habitat restoration and rabbit population recovery"
    ],
    currentEfforts: [
      "Continued captive breeding programs",
      "Habitat connectivity projects",
      "Road mortality reduction measures",
      "Genetic diversity management"
    ],
    howToHelp: [
      "Support Iberian Lynx conservation organizations",
      "Drive carefully in lynx habitat areas",
      "Donate to breeding and reintroduction programs",
      "Spread awareness about lynx conservation"
    ],
    partners: [
      { name: "WWF Spain", logo: "https://via.placeholder.com/100x50?text=WWF", url: "https://www.wwf.es" },
      { name: "Iberian Lynx Ex-situ Programme", logo: "https://via.placeholder.com/100x50?text=ILP", url: "https://www.lifeiberlince.eu" },
      { name: "European Wilderness Society", logo: "https://via.placeholder.com/100x50?text=EWS", url: "https://wilderness-society.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 41,
      name: "Eurasian Lynx",
      relationType: "Evolutionary Cousin",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 42,
      name: "Bobcat",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 43,
      name: "Spanish Imperial Eagle",
      relationType: "Habitat Sharing",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Endangered"
    }
  ],
  quickFacts: [
    "Most endangered feline species in the world",
    "Require 1-2 rabbits per day",
    "Can leap up to 4 meters horizontally",
    "Population increased from 84 to over 1,000 individuals"
  ]
};

// Black-footed Ferret Data
export const blackFootedFerretData: CreatureData = {
  id: 15,
  name: "Black-footed Ferret",
  scientificName: "Mustela nigripes",
  conservationStatus: "Endangered",
  conservationCode: "EN",
  populationTrend: "increasing",
  iucnListing: "EN A2ce; C1",
  physicalData: {
    height: "8-12 inches",
    length: "18-24 inches",
    weight: "1.5-2.5 lbs",
    wingspan: "",
    lifespan: "3-5 years"
  },
  taxonomy: {
    kingdom: "Animalia",
    family: "Mustelidae",
    genus: "Mustela",
    species: "nigripes"
  },
  ecology: {
    habitat: "Prairie grasslands",
    range: "North America",
    diet: "Carnivore"
  },
  story: {
    essence: "The black-footed ferret is North America's most endangered mammal, with fewer than 300 individuals remaining in the wild. Once thought extinct, this secretive creature was rediscovered in 1981, leading to one of the most intensive conservation efforts in history. These fascinating animals are entirely dependent on prairie dogs for survival.",
    dailyLife: "Black-footed ferrets are nocturnal hunters that spend their days sleeping in underground prairie dog burrows. They emerge at night to hunt prairie dogs, which make up 90% of their diet. These agile predators can chase prairie dogs through their complex tunnel systems and kill prey much larger than themselves. They are excellent climbers and swimmers despite their preference for underground living.",
    superpowers: "Black-footed ferrets possess incredible hunting skills, able to navigate complex underground prairie dog towns with ease. Their long, slender bodies allow them to pursue prey through narrow tunnels. They have exceptional night vision and hearing, enabling them to locate prairie dogs in complete darkness. Their powerful jaws can deliver a killing bite to the back of a prairie dog's neck, instantly dispatching prey much larger than themselves.",
    placeInWeb: "As specialist prairie dog predators, black-footed ferrets play a crucial role in maintaining prairie ecosystem balance. Their presence indicates healthy prairie dog colonies and intact grassland ecosystems. As an umbrella species, their conservation protects vast areas of prairie habitat that support numerous other species including burrowing owls, swift foxes, and mountain plovers."
  },
  behaviors: [
    {
      category: "Hunting & Feeding",
      title: "Prairie Dog Specialist",
      description: "These ferrets are entirely dependent on prairie dogs, requiring colonies with at least 50 acres to survive.",
      mediaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      type: "image"
    },
    {
      category: "Movement & Locomotion",
      title: "Burrow Navigation",
      description: "Black-footed ferrets can navigate complex underground tunnel systems with remarkable agility.",
      mediaUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      type: "video"
    },
    {
      category: "Social & Family",
      title: "Family Structure",
      description: "Females raise their kits alone, teaching them to hunt before they disperse at 3-4 months old.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "image"
    }
  ],
  habitatMap: {
    currentRange: [[42.5, -105.5], [42.2, -105.2], [41.8, -105.8]],
    historicalRange: [[45, -100], [35, -110], [50, -95]],
    protectedAreas: [
      { name: "Conata Basin", coordinates: [42.2, -105.2] },
      { name: "UL Bend National Wildlife Refuge", coordinates: [48.5, -108.5] },
      { name: "Arizona Strip", coordinates: [36.8, -112.5] }
    ]
  },
  conservation: {
    successStories: [
      "Species recovery from 18 individuals in 1986 to over 300 in the wild today",
      "Successful captive breeding and reintroduction programs",
      "Vaccination programs protecting against sylvatic plague"
    ],
    currentEfforts: [
      "Continued captive breeding programs",
      "Habitat restoration and prairie dog colony management",
      "Genetic diversity management",
      "Plague vaccination and monitoring"
    ],
    howToHelp: [
      "Support black-footed ferret conservation organizations",
      "Donate to breeding and reintroduction programs",
      "Spread awareness about grassland conservation",
      "Advocate for prairie dog protection"
    ],
    partners: [
      { name: "U.S. Fish and Wildlife Service", logo: "https://via.placeholder.com/100x50?text=FWS", url: "https://www.fws.gov" },
      { name: "National Black-Footed Ferret Conservation Center", logo: "https://via.placeholder.com/100x50?text=NBFCC", url: "https://www.blackfootedferret.org" },
      { name: "Cheyenne River Sioux Tribe", logo: "https://via.placeholder.com/100x50?text=CRST", url: "https://www.cheyenneriversiouxtribe.org" }
    ]
  },
  relatedCreatures: [
    {
      id: 44,
      name: "Domestic Ferret",
      relationType: "Domestic Relative",
      imageUrl: "https://images.unsplash.com/photo-1598755257130-c2aaca1f08c1?w=1920&q=80",
      conservationStatus: "Domesticated"
    },
    {
      id: 45,
      name: "Prairie Dog",
      relationType: "Primary Prey",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
      conservationStatus: "Least Concern"
    },
    {
      id: 46,
      name: "Swift Fox",
      relationType: "Habitat Sharing",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      conservationStatus: "Least Concern"
    }
  ],
  quickFacts: [
    "Most endangered mammal in North America",
    "Entirely dependent on prairie dogs for survival",
    "Can kill prairie dogs 3x their size",
    "Population recovered from 18 individuals to over 300"
  ]
};
