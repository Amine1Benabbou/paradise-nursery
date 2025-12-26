import Header from '../components/Header'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
      <Header cartCount={0} currentPage="about" />
      <div className="about-us-page">
        <div className="about-container">
          <h1 className="about-title">About Paradise Nursery</h1>
          
          <div className="about-content">
            <section className="about-section">
              <h2>Our Story</h2>
              <p>
                Paradise Nursery was founded with a simple mission: to bring the beauty and tranquility 
                of nature into every home. We believe that houseplants are more than just decorations—they're 
                living companions that improve our air quality, mental health, and overall well-being.
              </p>
            </section>

            <section className="about-section">
              <h2>Our Mission</h2>
              <p>
                We are committed to providing our customers with the highest quality houseplants, expert advice, 
                and exceptional customer service. Every plant in our collection is carefully selected and nurtured 
                to ensure it arrives at your home healthy and ready to thrive.
              </p>
            </section>

            <section className="about-section">
              <h2>Why Choose Us?</h2>
              <ul className="about-list">
                <li>✓ Carefully curated selection of healthy houseplants</li>
                <li>✓ Expert plant care guides and customer support</li>
                <li>✓ Competitive pricing and fast shipping</li>
                <li>✓ 30-day plant guarantee for peace of mind</li>
                <li>✓ Sustainable and eco-friendly practices</li>
                <li>✓ Passion for plants and customer satisfaction</li>
              </ul>
            </section>

            <section className="about-section">
              <h2>Our Values</h2>
              <p>
                At Paradise Nursery, we value quality, sustainability, and community. We work with local growers 
                to minimize our environmental impact, and we're dedicated to creating a community of plant lovers 
                who support and inspire each other.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
