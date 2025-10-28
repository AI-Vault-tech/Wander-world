import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    title: 'Bioluminescence: Nature\'s Light Show',
    category: 'Wildlife',
    author: 'Marina Santos',
    date: 'October 12, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    excerpt: 'Glowing waves, illuminated forests, and living lanterns beneath the sea. Explore the magical world of organisms that create their own light...',
    tags: ['Wildlife', 'Ocean', 'Wonder']
  }
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Exploration', 'Environment', 'Innovation', 'Discovery', 'Science', 'Wildlife']

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

                <Link to={`/blog/${post.id}`} className="read-more">
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
