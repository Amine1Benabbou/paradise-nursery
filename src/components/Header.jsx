import { Link } from 'react-router-dom'
import './Header.css'

function Header({ cartCount, currentPage }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">🌿 Paradise Nursery</h1>
        </div>
        <nav className="nav">
          {currentPage !== 'products' && (
            <Link to="/products" className="nav-link">
              Shop Plants
            </Link>
          )}
          {currentPage !== 'cart' && (
            <Link to="/cart" className="cart-link">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartCount}</span>
            </Link>
          )}
          {currentPage === 'cart' && (
            <Link to="/products" className="nav-link">
              Continue Shopping
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
