import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductListingPage from './pages/ProductListingPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id)
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...plant, quantity: 1 }])
    }
  }

  const updateQuantity = (plantId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(plantId)
    } else {
      setCart(cart.map(item =>
        item.id === plantId
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const removeFromCart = (plantId) => {
    setCart(cart.filter(item => item.id !== plantId))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/products" 
            element={
              <ProductListingPage 
                cart={cart}
                totalItems={getTotalItems()}
                onAddToCart={addToCart}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <ShoppingCartPage 
                cart={cart}
                totalItems={getTotalItems()}
                totalPrice={getTotalPrice()}
                onUpdateQuantity={updateQuantity}
                onRemoveFromCart={removeFromCart}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
