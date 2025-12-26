/**
 * CartSlice.jsx
 * Redux Slice for managing shopping cart state
 * Implements three main reducer functions: addItem(), removeItem(), and updateQuantity()
 */

const initialState = {
  items: [],
}

// Reducer functions
export const addItem = (state, action) => {
  const existingItem = state.items.find(item => item.id === action.payload.id)
  
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    state.items.push({
      ...action.payload,
      quantity: 1
    })
  }
}

export const removeItem = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload)
}

export const updateQuantity = (state, action) => {
  const { id, quantity } = action.payload
  const item = state.items.find(item => item.id === id)
  
  if (item) {
    if (quantity <= 0) {
      removeItem(state, { payload: id })
    } else {
      item.quantity = quantity
    }
  }
}

// Selectors
export const selectCartItems = (state) => state.items

export const selectTotalItems = (state) => {
  return state.items.reduce((total, item) => total + item.quantity, 0)
}

export const selectTotalPrice = (state) => {
  return state.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
}

// Default export as a reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cart/addItem':
      return addItem(state, action)
    case 'cart/removeItem':
      return removeItem(state, action)
    case 'cart/updateQuantity':
      return updateQuantity(state, action)
    default:
      return state
  }
}

export default cartReducer
