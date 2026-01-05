import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = [
  {
    id: '1',
    slug: 'last-unexplored-places-on-earth',
    title: 'The Last Unexplored Places on Earth',
    category: 'Exploration',
    author: 'Dr. Sarah Chen',
    date: 'October 25, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'In an age of satellites and drones, there are still places on our planet that remain untouched by human footsteps. From the depths of the Amazon to uncharted cave systems...',
    tags: ['Adventure', 'Discovery', 'Nature']
  },
  {
    id: '2',
    slug: 'climate-change-reshaping-natural-wonders',
    title: 'How Climate Change is Reshaping Our Natural Wonders',
    category: 'Environment',
    author: 'Prof. Michael Torres',
    date: 'October 22, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Glaciers retreating at unprecedented rates, coral reefs bleaching, and ecosystems transforming before our eyes. The climate crisis is rewriting the geography of beauty...',
    tags: ['Climate', 'Conservation', 'Future']
  },
  {
    id: '3',
    slug: 'future-cities-architecture-meets-nature',
    title: 'Future Cities: Where Architecture Meets Nature',
    category: 'Innovation',
    author: 'Emma Rodriguez',
    date: 'October 20, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
    excerpt: 'Vertical forests, floating gardens, and buildings that breathe. The future of urban design is green, sustainable, and breathtakingly beautiful...',
    tags: ['Architecture', 'Sustainability', 'Urban']
  },
  {
    id: '4',
    slug: 'deep-ocean-mysteries',
    title: 'Deep Ocean Mysteries: What Lies Beneath',
    category: 'Discovery',
    author: 'Dr. James Liu',
    date: 'October 18, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'We know more about the surface of Mars than the bottom of our oceans. Join us as we dive into the mysterious depths where strange creatures and geological wonders await...',
    tags: ['Ocean', 'Science', 'Exploration']
  },
  {
    id: '5',
    slug: 'science-behind-natural-patterns',
    title: 'The Science Behind Natural Patterns and Fractals',
    category: 'Science',
    author: 'Dr. Aisha Patel',
    date: 'October 15, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'From the spiral of a seashell to the branching of trees, nature speaks in the language of mathematics. Discover the hidden geometry that creates Earth\'s most stunning forms...',
    tags: ['Mathematics', 'Nature', 'Patterns']
  },
  {
    id: '6',
    slug: 'bioluminescence-natures-light-show',
    title: 'Bioluminescence: Nature\'s Light Show',
    category: 'Wildlife',
    author: 'Marina Santos',
    date: 'October 12, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Glowing waves, illuminated forests, and living lanterns beneath the sea. Explore the magical world of organisms that create their own light...',
    tags: ['Wildlife', 'Ocean', 'Wonder']
  },
  // Additional blog posts
  {
    id: '7',
    slug: 'hidden-waterfalls-paradise',
    title: 'Hidden Waterfalls: Earth\'s Secret Paradise',
    category: 'Exploration',
    author: 'Dr. Sarah Chen',
    date: 'November 5, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Journey to the world\'s most secluded waterfalls, where cascading waters create pristine pools in locations so remote they remain untouched by human presence...',
    tags: ['Adventure', 'Nature', 'Water']
  },
  {
    id: '8',
    slug: 'migration-miracle-animal-journeys',
    title: 'The Migration Miracle: Animal Journeys That Defy Belief',
    category: 'Wildlife',
    author: 'Dr. Marina Santos',
    date: 'November 3, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'From Arctic terns that fly 44,000 miles annually to wildebeest traversing the Serengeti, witness the incredible journeys animals undertake across impossible distances...',
    tags: ['Migration', 'Animals', 'Journey']
  },
  {
    id: '9',
    slug: 'desert-blooms-temporary-paradises',
    title: 'Desert Blooms: When Temporary Paradises Bloom',
    category: 'Nature',
    author: 'Dr. Fatima Al-Rashid',
    date: 'November 1, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Experience the magical transformation of arid landscapes when rare rainfall triggers spectacular wildflower explosions that paint the desert in vibrant colors...',
    tags: ['Deserts', 'Flowers', 'Seasons']
  },
  {
    id: '10',
    slug: 'underground-wonders-cave-systems',
    title: 'Underground Wonders: The Spectacular Cave Systems of the World',
    category: 'Discovery',
    author: 'Dr. James Liu',
    date: 'October 30, 2025',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Descend into the Earth\'s hidden cathedrals where stalactites and stalagmites create otherworldly landscapes, underground rivers flow in eternal darkness, and unique ecosystems thrive...',
    tags: ['Geology', 'Caves', 'Exploration']
  },
  {
    id: '11',
    slug: 'northern-lights-celestial-dance',
    title: 'Northern Lights: The Celestial Dance of Aurora Borealis',
    category: 'Nature',
    author: 'Prof. David Kim',
    date: 'October 28, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Witness the ethereal glow of auroras as charged particles from the sun collide with Earth\'s atmosphere, creating curtains of green, purple, and pink light that dance across polar skies...',
    tags: ['Aurora', 'Space', 'Phenomena']
  },
  {
    id: '12',
    slug: 'coral-reefs-underwater-rainforests',
    title: 'Coral Reefs: The Underwater Rainforests of the Sea',
    category: 'Environment',
    author: 'Dr. Marina Santos',
    date: 'October 27, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Dive into the kaleidoscopic world of coral reefs, where thousands of species create the most biodiverse ecosystems on Earth in shallow tropical waters...',
    tags: ['Ocean', 'Biodiversity', 'Conservation']
  },
  {
    id: '13',
    slug: 'volcanic-wonders-fire-and-ice',
    title: 'Volcanic Wonders: Where Fire Meets Ice',
    category: 'Discovery',
    author: 'Dr. Elena Vasquez',
    date: 'November 20, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Explore the dramatic landscapes where volcanic activity shapes the Earth\'s surface, from explosive geysers to lava tubes and volcanic islands that emerge from the sea...',
    tags: ['Geology', 'Volcanoes', 'Landscapes']
  },
  {
    id: '14',
    slug: 'ancient-forests-timeless-giants',
    title: 'Ancient Forests: The Timeless Giants',
    category: 'Nature',
    author: 'Dr. Aisha Patel',
    date: 'November 18, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Walk among the Earth\'s oldest living organisms in ancient forests where thousand-year-old trees tower over cathedral-like canopies, supporting ecosystems that have remained unchanged for millennia...',
    tags: ['Forests', 'Ancient', 'Trees']
  },
  {
    id: '15',
    slug: 'sands-time-desert-landscapes',
    title: 'Sands of Time: The Ever-Changing Desert Landscapes',
    category: 'Nature',
    author: 'Dr. Fatima Al-Rashid',
    date: 'November 15, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Experience the dynamic beauty of desert landscapes where wind and water sculpt ever-changing dunes, rocky formations, and salt flats that create some of Earth\'s most starkly beautiful environments...',
    tags: ['Deserts', 'Geology', 'Erosion']
  },
  {
    id: '16',
    slug: 'ice-worlds-frozen-beauty',
    title: 'Ice Worlds: The Frozen Beauty of Polar Regions',
    category: 'Discovery',
    author: 'Prof. Ahmed Hassan',
    date: 'November 13, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Journey to the Earth\'s polar regions where ice creates landscapes of incomparable beauty, from massive ice shelves to intricate snowflake formations that exist only in the coldest climates...',
    tags: ['Ice', 'Polar', 'Climate']
  },
  {
    id: '17',
    slug: 'symphony-seasons-natures-rhythm',
    title: 'Symphony of Seasons: Nature\'s Eternal Rhythm',
    category: 'Nature',
    author: 'Dr. Elena Vasquez',
    date: 'November 12, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Observe how Earth\'s axial tilt creates the annual cycle of seasons that transforms landscapes, triggers migrations, and orchestrates the planet\'s biological rhythms...',
    tags: ['Seasons', 'Cycles', 'Nature']
  },
  {
    id: '18',
    slug: 'living-bridges-natures-engineering',
    title: 'Living Bridges: Nature\'s Incredible Engineering Feats',
    category: 'Science',
    author: 'Dr. Aisha Patel',
    date: 'November 10, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Discover how living organisms create functional structures, from trees that grow into bridges to coral reefs that build protective barriers against ocean waves...',
    tags: ['Biology', 'Engineering', 'Adaptation']
  },
  {
    id: '19',
    slug: 'floating-mountains-sky-islands',
    title: 'Floating Mountains: The Sky Islands of the Cloud Forests',
    category: 'Nature',
    author: 'Dr. Elena Vasquez',
    date: 'November 8, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Explore the unique ecosystems that exist on isolated mountain peaks where clouds create perpetual mist, supporting plant and animal species found nowhere else on Earth...',
    tags: ['Mountains', 'Cloud Forests', 'Biodiversity']
  },
  {
    id: '20',
    slug: 'gravity-defying-trees-natures-engineering',
    title: 'Gravity-Defying Trees: Nature\'s Incredible Engineering Feats',
    category: 'Science',
    author: 'Dr. Aisha Patel',
    date: 'November 6, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'From the dancing trees of Madagascar to the leaning giants of California, discover trees that bend, twist, and grow in impossible directions while maintaining their structural integrity...',
    tags: ['Trees', 'Engineering', 'Adaptation']
  },
  {
    id: '21',
    slug: 'rainbow-mountains-earths-palette',
    title: 'Rainbow Mountains: When Earth Shows Its True Colors',
    category: 'Nature',
    author: 'Dr. Elena Vasquez',
    date: 'November 17, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Journey to the stunning striped mountains where layers of mineral deposits create spectacular displays of color across entire hillsides...',
    tags: ['Geology', 'Landscapes', 'Minerals']
  },
  {
    id: '22',
    slug: 'underwater-rivers-sea-meets-land',
    title: 'Underwater Rivers: Where the Sea Meets the Land',
    category: 'Discovery',
    author: 'Dr. James Mitchell',
    date: 'November 16, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Dive into the fascinating world of underwater rivers and lakes that exist beneath the ocean surface, defying our expectations of marine environments...',
    tags: ['Ocean', 'Geology', 'Hydrology']
  },
  {
    id: '23',
    slug: 'biological-immortality-natures-secret',
    title: 'Biological Immortality: Nature\'s Secret to Eternal Life',
    category: 'Science',
    author: 'Dr. Elena Richardson',
    date: 'November 25, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Explore the fascinating world of organisms that seemingly defy death, from immortal jellyfish to ancient trees that have witnessed centuries of human history...',
    tags: ['Biology', 'Longevity', 'Evolution']
  },
  {
    id: '24',
    slug: 'magnetic-mountains-earths-force-fields',
    title: 'Magnetic Mountains: Earth\'s Natural Force Fields',
    category: 'Discovery',
    author: 'Prof. Ahmed Hassan',
    date: 'November 23, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Discover the mysterious mountains that possess incredible magnetic properties, influencing compasses, affecting technology, and creating unique ecosystems...',
    tags: ['Geology', 'Magnetism', 'Physics']
  },
  {
    id: '25',
    slug: 'underground-oceans-hidden-seas',
    title: 'Underground Oceans: The Hidden Seas Beneath Our Feet',
    category: 'Nature',
    author: 'Dr. Maria Petrova',
    date: 'November 22, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Journey to the vast underground water systems that rival surface oceans in size, hosting unique life forms and holding clues to Earth\'s geological history...',
    tags: ['Hydrology', 'Caves', 'Geology']
  },
  {
    id: '26',
    slug: 'singing-sands-earths-musical-dunes',
    title: 'Singing Sands: When Earth Makes Music',
    category: 'Nature',
    author: 'Dr. Fatima Al-Rashid',
    date: 'November 20, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Listen to the haunting melodies produced by desert dunes when wind passes over their perfectly graded sand grains, creating natural orchestras in the wilderness...',
    tags: ['Deserts', 'Sound', 'Geology']
  },
  {
    id: '27',
    slug: 'glowing-forests-bioluminescent-wonders',
    title: 'Glowing Forests: The Bioluminescent Wonders of the Night',
    category: 'Nature',
    author: 'Dr. Marina Santos',
    date: 'November 18, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Step into forests where fungi, insects, and marine organisms create natural light shows, illuminating the darkness with ethereal blue and green glows...',
    tags: ['Bioluminescence', 'Forests', 'Night']
  },
  {
    id: '28',
    slug: 'deep-time-understanding-earths-history',
    title: 'Deep Time: Understanding Earth\'s Geological History',
    category: 'Discovery',
    author: 'Dr. James Liu',
    date: 'November 16, 2025',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Travel through Earth\'s 4.6-billion-year history, from molten beginnings to the complex biosphere we inhabit today, understanding how geological processes shaped our world...',
    tags: ['Geology', 'History', 'Evolution']
  },
  {
    id: '29',
    slug: 'gravity-defying-trees-natures-engineering',
    title: 'Gravity-Defying Trees: Nature\'s Incredible Engineering Feats',
    category: 'Science',
    author: 'Dr. Aisha Patel',
    date: 'November 14, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'From the dancing trees of Madagascar to the leaning giants of California, discover trees that bend, twist, and grow in impossible directions while maintaining their structural integrity...',
    tags: ['Trees', 'Engineering', 'Adaptation']
  },
  {
    id: '30',
    slug: 'sonic-geography-soundscapes-world',
    title: 'Sonic Geography: The Soundscapes of Our World',
    category: 'Nature',
    author: 'Prof. David Kim',
    date: 'November 12, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Explore how Earth\'s diverse environments create unique acoustic signatures, from the thunderous roar of Niagara Falls to the whisper-soft sounds of desert winds...',
    tags: ['Sound', 'Environment', 'Acoustics']
  },
  {
    id: '31',
    slug: 'color-science-natures-palette',
    title: 'Color Science: Decoding Nature\'s Palette',
    category: 'Science',
    author: 'Dr. Sofia Ramirez',
    date: 'November 10, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Uncover the physics and biology behind nature\'s most stunning displays of color, from butterfly wings to flower petals, understanding how structure creates hue...',
    tags: ['Color', 'Physics', 'Biology']
  },
  {
    id: '32',
    slug: 'ice-caves-crystal-cathedrals',
    title: 'Ice Caves: Crystal Cathedrals of the Frozen World',
    category: 'Discovery',
    author: 'Prof. Ahmed Hassan',
    date: 'November 8, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Enter the breathtaking ice caves where frozen water creates translucent sculptures, blue grottos, and crystal formations that rival any human architectural achievement...',
    tags: ['Ice', 'Caves', 'Geology']
  },
  {
    id: '33',
    slug: 'extreme-weather-climate-chaos',
    title: 'Extreme Weather: Understanding Our Planet\'s Climate Chaos',
    category: 'Environment',
    author: 'Prof. Michael Torres',
    date: 'November 6, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Examine the increasing frequency of extreme weather events, from superstorms to heat domes, understanding how climate change amplifies Earth\'s natural weather patterns...',
    tags: ['Weather', 'Climate', 'Disasters']
  },
  {
    id: '34',
    slug: 'geomagnetic-navigation-earths-compass',
    title: 'Geomagnetic Navigation: How Earth\'s Magnetic Field Guides Life',
    category: 'Science',
    author: 'Dr. Elena Richardson',
    date: 'November 4, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Discover how animals use Earth\'s magnetic field for navigation, from sea turtles crossing oceans to birds flying thousands of miles, unlocking the secrets of natural GPS systems...',
    tags: ['Magnetism', 'Navigation', 'Biology']
  },
  {
    id: '35',
    slug: 'urban-wildlife-coexisting-species',
    title: 'Urban Wildlife: How Animals Are Coexisting with Humans in Cities',
    category: 'Wildlife',
    author: 'Dr. Elena Rivera',
    date: 'December 10, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'From peregrine falcons nesting on skyscrapers to coyotes roaming city parks, discover how wildlife is adapting to urban environments and finding new ways to thrive alongside humans...',
    tags: ['Urban', 'Adaptation', 'Biodiversity']
  },
  {
    id: '36',
    slug: 'underwater-caves-diving-into-the-deep',
    title: 'Underwater Caves: Diving into the Earth\'s Hidden Blue Holes',
    category: 'Discovery',
    author: 'Dr. James Liu',
    date: 'December 8, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Explore the mysterious underwater cave systems that connect vast underground rivers and house unique ecosystems found nowhere else on Earth...',
    tags: ['Caves', 'Diving', 'Geology']
  },
  {
    id: '37',
    slug: 'living-stone-remarkable-mineral-organisms',
    title: 'Living Stone: The Remarkable World of Mineral-Encrusted Organisms',
    category: 'Science',
    author: 'Dr. Aisha Patel',
    date: 'December 6, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Discover extraordinary organisms that incorporate minerals into their bodies, creating living sculptures that blur the line between biology and geology...',
    tags: ['Minerals', 'Biology', 'Evolution']
  },
  {
    id: '38',
    slug: 'sky-rivers-floating-waterways-clouds',
    title: 'Sky Rivers: The Floating Waterways in Cloud Formations',
    category: 'Nature',
    author: 'Prof. David Kim',
    date: 'December 3, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Journey into the atmospheric rivers that transport vast quantities of water vapor around the globe, shaping weather patterns and creating spectacular cloud formations...',
    tags: ['Meteorology', 'Clouds', 'Water Cycle']
  },
  {
    id: '39',
    slug: 'microbial-metropolises-invisible-cities',
    title: 'Microbial Metropolises: The Invisible Cities of Microorganisms',
    category: 'Science',
    author: 'Dr. Sofia Ramirez',
    date: 'December 1, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Explore the complex societies of microorganisms that form intricate communities, from biofilms on teeth to massive microbial mats that shaped Earth\'s early atmosphere...',
    tags: ['Microbiology', 'Communities', 'Evolution']
  },
  {
    id: '40',
    slug: 'biomimicry-natures-blueprint-for-innovation',
    title: 'Biomimicry: Nature\'s Blueprint for Human Innovation',
    category: 'Innovation',
    author: 'Emma Rodriguez',
    date: 'November 30, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
    excerpt: 'Discover how engineers and designers are copying nature\'s solutions to create revolutionary technologies, from shark-skin swimsuits to termite-inspired buildings...',
    tags: ['Biomimicry', 'Innovation', 'Design']
  },
  {
    id: '41',
    slug: 'crystal-cathedrals-ice-formations',
    title: 'Crystal Cathedrals: The Breathtaking Ice Formations of Winter',
    category: 'Nature',
    author: 'Dr. Erik Nordahl',
    date: 'December 20, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Journey into the frozen world where ice crystals form intricate structures that rival the most elaborate human architecture in their beauty and complexity...',
    tags: ['Ice', 'Winter', 'Geology']
  },
  {
    id: '42',
    slug: 'chromatic-chorus-color-changing-animals',
    title: 'Chromatic Chorus: The Color-Changing Marvels of the Animal Kingdom',
    category: 'Wildlife',
    author: 'Dr. Sofia Ramirez',
    date: 'December 18, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Discover the fascinating world of animals that can change their colors for camouflage, communication, and temperature regulation, from chameleons to cuttlefish...',
    tags: ['Color', 'Camouflage', 'Marine Life']
  },
  {
    id: '43',
    slug: 'echoes-canyon-acoustic-wonders',
    title: 'Echoes of the Canyon: The Acoustic Wonders of Natural Amphitheaters',
    category: 'Science',
    author: 'Dr. Elena Richardson',
    date: 'December 15, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Explore the fascinating physics of sound in natural amphitheaters where geological formations create incredible acoustic effects that have amazed humans for millennia...',
    tags: ['Acoustics', 'Geology', 'Physics']
  },
  {
    id: '44',
    slug: 'migration-mysteries-animal-navigation',
    title: 'Migration Mysteries: How Animals Navigate Across Continents',
    category: 'Wildlife',
    author: 'Dr. Marina Santos',
    date: 'December 12, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Uncover the remarkable mechanisms animals use to navigate thousands of miles during migration, from magnetic sensors to celestial navigation and inherited maps...',
    tags: ['Migration', 'Navigation', 'Animals']
  },
  {
    id: '45',
    slug: 'crystalline-cathedrals-ice-formations',
    title: 'Crystalline Cathedrals: The Breathtaking Ice Formations of Winter',
    category: 'Nature',
    author: 'Dr. Erik Nordahl',
    date: 'January 5, 2026',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Explore the fascinating physics of sound in natural amphitheaters where geological formations create incredible acoustic effects that have amazed humans for millennia...',
    tags: ['Acoustics', 'Geology', 'Physics']
  },
  {
    id: '46',
    slug: 'migration-mysteries-animal-navigation',
    title: 'Migration Mysteries: How Animals Navigate Across Continents',
    category: 'Wildlife',
    author: 'Dr. Marina Santos',
    date: 'January 8, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Uncover the remarkable mechanisms animals use to navigate thousands of miles during migration, from magnetic sensors to celestial navigation and inherited maps...',
    tags: ['Migration', 'Navigation', 'Animals']
  },
  {
    id: '47',
    slug: 'crystalline-cathedrals-ice-formations',
    title: 'Crystalline Cathedrals: The Breathtaking Ice Formations of Winter',
    category: 'Nature',
    author: 'Dr. Erik Nordahl',
    date: 'January 12, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Journey into the frozen world where ice crystals form intricate structures that rival the most elaborate human architecture in their beauty and complexity...',
    tags: ['Ice', 'Winter', 'Geology']
  },
  {
    id: '48',
    slug: 'chromatic-chorus-color-changing-animals',
    title: 'Chromatic Chorus: The Color-Changing Marvels of the Animal Kingdom',
    category: 'Wildlife',
    author: 'Dr. Sofia Ramirez',
    date: 'January 15, 2026',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Discover the fascinating world of animals that can change their colors for camouflage, communication, and temperature regulation, from chameleons to cuttlefish...',
    tags: ['Color', 'Camouflage', 'Marine Life']
  },
  // Additional new blog posts
  {
    id: '49',
    slug: 'aurora-secrets-northern-lights-science',
    title: 'Aurora Secrets: The Science Behind the Northern Lights',
    category: 'Science',
    author: 'Dr. Astrid Olsen',
    date: 'January 20, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    excerpt: 'Unlock the mysteries of the aurora borealis and aurora australis, exploring how solar particles interact with Earth\'s magnetic field to create these spectacular light shows...',
    tags: ['Aurora', 'Space', 'Physics']
  },
  {
    id: '50',
    slug: 'underground-rivers-hidden-waterways',
    title: 'Underground Rivers: The Hidden Waterways Beneath Our Feet',
    category: 'Discovery',
    author: 'Dr. Maria Petrova',
    date: 'January 22, 2026',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    excerpt: 'Explore the mysterious subterranean rivers that flow through cave systems around the world, supporting unique ecosystems and shaping landscapes from below...',
    tags: ['Geology', 'Hydrology', 'Caves']
  },
  {
    id: '51',
    slug: 'desert-bloom-flowering-after-rain',
    title: 'Desert Bloom: When Arid Landscapes Burst into Color',
    category: 'Nature',
    author: 'Dr. Fatima Al-Rashid',
    date: 'January 25, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    excerpt: 'Witness the miraculous transformation of desert landscapes after rare rainfall events, when dormant seeds burst into spectacular wildflower displays...',
    tags: ['Deserts', 'Botany', 'Seasons']
  },
  {
    id: '52',
    slug: 'urban-wildlife-adapting-to-cities',
    title: 'Urban Wildlife: How Animals Adapt to City Life',
    category: 'Wildlife',
    author: 'Dr. Elena Rivera',
    date: 'January 28, 2026',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
    excerpt: 'Discover how wildlife is thriving in unexpected urban environments, from peregrine falcons nesting on skyscrapers to raccoons mastering city survival...',
    tags: ['Urban', 'Adaptation', 'Biodiversity']
  }
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Exploration', 'Environment', 'Innovation', 'Discovery', 'Science', 'Wildlife', 'Nature']

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="blog-page">
      <div className="blog-particles"></div>
      
      <motion.div
        className="blog-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          <motion.h1
            className="holographic-text"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Stories of Wonder
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Exploring the extraordinary, revealing the unseen, celebrating the beauty that shapes our world
          </motion.p>
        </div>
        <div className="hero-glow"></div>
      </motion.div>

      <div className="blog-container">
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-image-wrapper">
                <div 
                  className="card-image"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="image-overlay"></div>
                <span className="category-badge">{post.category}</span>
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="author">{post.author}</span>
                  <span className="divider">•</span>
                  <span className="date">{post.date}</span>
                  <span className="divider">•</span>
                  <span className="read-time">{post.readTime}</span>
                </div>

                <h2 className="card-title">{post.title}</h2>
                <p className="card-excerpt">{post.excerpt}</p>

                <div className="card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <Link to={`/blog/${post.slug}`} className="read-more">
                  <span>Read Article</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Link>
              </div>

              <div className="card-shine"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog