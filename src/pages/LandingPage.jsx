import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <div 
        className="hero-section"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-tagline">Bring Nature Into Your Home</p>
          <p className="company-description">
            Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. 
            We carefully curate each plant to ensure quality and freshness. Whether you're a beginner 
            or an experienced plant parent, we have the perfect plant for your space. Transform your 
            home into a lush, vibrant oasis with our premium collection of houseplants.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
