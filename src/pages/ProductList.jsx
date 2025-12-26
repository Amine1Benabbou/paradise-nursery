import { useState } from 'react'
import Header from '../components/Header'
import './ProductList.css'

function ProductList({ cart, totalItems, onAddToCart }) {
  const [products] = useState([
    // Tropical Plants
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 45.99,
      category: 'Tropical',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8d2c17?w=300&h=300&fit=crop',
      description: 'Large leafy tropical plant with distinctive split leaves'
    },
    {
      id: 2,
      name: 'Bird of Paradise',
      price: 55.99,
      category: 'Tropical',
      image: 'https://images.unsplash.com/photo-1596848212624-53c0ad9af923?w=300&h=300&fit=crop',
      description: 'Stunning tropical flower with bright orange and blue colors'
    },
    {
      id: 3,
      name: 'Philodendron Pink',
      price: 38.99,
      category: 'Tropical',
      image: 'https://images.unsplash.com/photo-1632202316019-e61c7ac21e6e?w=300&h=300&fit=crop',
      description: 'Beautiful climbing plant with pink and green variegated leaves'
    },
    
    // Succulents
    {
      id: 4,
      name: 'Echeveria Succulent',
      price: 22.99,
      category: 'Succulents',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: 'Drought-resistant succulent with beautiful rosette formation'
    },
    {
      id: 5,
      name: 'Aloe Vera',
      price: 24.99,
      category: 'Succulents',
      image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300&h=300&fit=crop',
      description: 'Medicinal succulent plant known for its healing properties'
    },
    {
      id: 6,
      name: 'Jade Plant',
      price: 28.99,
      category: 'Succulents',
      image: 'https://images.unsplash.com/photo-1579353977991-54d9d9aefcc1?w=300&h=300&fit=crop',
      description: 'Durable succulent with thick fleshy leaves and woody stems'
    },
    
    // Low Light Plants
    {
      id: 7,
      name: 'Pothos',
      price: 18.99,
      category: 'Low Light',
      image: 'https://images.unsplash.com/photo-1599599810694-2541d9c60dd9?w=300&h=300&fit=crop',
      description: 'Trailing vine perfect for hanging baskets and shelves'
    },
    {
      id: 8,
      name: 'Snake Plant',
      price: 32.99,
      category: 'Low Light',
      image: 'https://images.unsplash.com/photo-1595425707802-6b2626ef1c91?w=300&h=300&fit=crop',
      description: 'Hardy plant with striking striped leaves, needs minimal care'
    },
    {
      id: 9,
      name: 'ZZ Plant',
      price: 36.99,
      category: 'Low Light',
      image: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=300&h=300&fit=crop',
      description: 'Glossy leafed plant that thrives in low light conditions'
    }
  ])

  const categories = ['Tropical', 'Succulents', 'Low Light']

  const getCategoryProducts = (category) => {
    return products.filter(p => p.category === category)
  }

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId)
  }

  const getCartQuantity = (productId) => {
    const item = cart.find(item => item.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <>
      <Header cartCount={totalItems} currentPage="products" />
      <div className="product-list-page">
        <div className="products-container">
          <h1 className="page-title">Our Collection</h1>
          <p className="page-subtitle">Browse our beautiful selection of houseplants</p>

          {categories.map(category => (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="products-grid">
                {getCategoryProducts(category).map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                      />
                      {isInCart(product.id) && (
                        <div className="in-cart-badge">
                          In Cart ({getCartQuantity(product.id)})
                        </div>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                      <button
                        className={`add-to-cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
                        onClick={() => onAddToCart(product)}
                      >
                        {isInCart(product.id) ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
