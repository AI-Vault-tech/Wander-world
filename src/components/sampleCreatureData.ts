// Sample creature data for demonstration purposes
export const sampleCreature = {
  id: 1,
  name: "Amur Leopard",
  scientificName: "Panthera pardus orientalis",
  conservationStatus: "Critically Endangered",
  conservationCode: "CR" as const,
  populationTrend: "increasing" as const,
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
      mediaUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      type: "image" as const
    },
    {
      category: "Movement & Locomotion",
      title: "Tree Climbing",
      description: "These cats are excellent climbers and often haul their kills up into trees to keep them safe from scavengers.",
      mediaUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      type: "video" as const
    },
    {
      category: "Social & Family",
      title: "Mother and Cubs",
      description: "Female Amur leopards raise their cubs alone, teaching them to hunt and survive in their territory for up to two years.",
      mediaUrl: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80",
      type: "image" as const
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
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
      conservationStatus: "Vulnerable"
    },
    {
      id: 4,
      name: "Clouded Leopard",
      relationType: "Genetic Relative",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
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