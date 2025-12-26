import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './ShoppingCartPage.css'

function ShoppingCartPage({ cart, totalItems, totalPrice, onUpdateQuantity, onRemoveFromCart }) {
  const handleCheckout = () => {
    alert('Thank you for your purchase! This is a demo, so no actual checkout will occur.')
  }

  return (
    <>
      <Header cartCount={totalItems} currentPage="cart" />
      <div className="shopping-cart-page">
        <div className="cart-container">
          <h1 className="page-title">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-cart-message">Your cart is empty</p>
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-summary">
                <div className="summary-item">
                  <span className="summary-label">Total Items:</span>
                  <span className="summary-value">{totalItems}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Total Cost:</span>
                  <span className="summary-value total-price">${totalPrice}</span>
                </div>
              </div>

              <div className="cart-items-section">
                <h2 className="section-title">Items in Your Cart</h2>
                <div className="cart-items-list">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-image-container">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="item-image"
                        />
                      </div>
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                        <p className="item-total-price">
                          Subtotal: ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="item-controls">
                        <div className="quantity-control">
                          <button
                            className="qty-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            title="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="qty-display">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            title="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="delete-btn"
                          onClick={() => onRemoveFromCart(item.id)}
                          title="Remove from cart"
                        >
                          🗑 Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cart-actions">
                <Link to="/products" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ShoppingCartPage
