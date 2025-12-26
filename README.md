# 🌿 Paradise Nursery - Shopping Application

A beautiful, fully functional e-commerce shopping application for houseplants built with React and Vite.

## Features

### 🏠 Landing Page
- Stunning hero section with background image
- Company description and branding
- "Get Started" button for easy navigation

### 🌱 Product Listing Page
- Browse 9 houseplants across 3 categories:
  - **Tropical Plants**: Monstera Deliciosa, Bird of Paradise, Philodendron Pink
  - **Succulents**: Echeveria, Aloe Vera, Jade Plant
  - **Low Light Plants**: Pothos, Snake Plant, ZZ Plant
- Each plant displays image, name, and price
- Quick "Add to Cart" functionality
- Dynamic shopping cart counter in header

### 🛒 Shopping Cart Page
- View all items in cart with thumbnails
- See unit prices and subtotals
- Adjust quantity with increase/decrease buttons
- Remove items with delete button
- Real-time total cost calculation
- "Continue Shopping" and "Checkout" buttons

### 📱 Responsive Design
- Fully responsive on mobile, tablet, and desktop
- Smooth animations and hover effects
- Professional UI with green nature-inspired color scheme

## Tech Stack

- **React** - UI library with hooks
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS3** - Responsive styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Amine1Benabbou/paradise-nursery.git
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173/`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   └── Header.jsx         # Navigation header with cart counter
├── pages/
│   ├── LandingPage.jsx    # Home page
│   ├── ProductListingPage.jsx  # Browse products
│   └── ShoppingCartPage.jsx    # Shopping cart
├── App.jsx                # Main app with routing and cart state
├── App.css                # Global styles
└── index.css              # Reset styles
```

## How to Use

1. **Browse Products**: Click "Get Started" on the landing page to view all plants
2. **Add to Cart**: Click "Add to Cart" on any plant you like
3. **View Cart**: Click the cart icon in the header to see your items
4. **Manage Cart**: Adjust quantities or remove items as needed
5. **Checkout**: Click "Proceed to Checkout" when ready

## Features Implemented

✅ Multi-page navigation with React Router  
✅ Shopping cart state management  
✅ Add/remove items from cart  
✅ Adjust item quantities  
✅ Dynamic cart counter  
✅ Real-time price calculations  
✅ Responsive design  
✅ Professional UI with animations  

## Author

**Amine Benabbou** - [GitHub Profile](https://github.com/Amine1Benabbou)

## License

This project is open source and available under the MIT License.
