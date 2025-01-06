import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Home from './components/Home';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Items from './components/Items';
import Search from './components/Search';  // Import Search component
import './App.css';

function App() {
  const [user, setUser] = useState(null);  // For managing logged-in user
  const [cart, setCart] = useState([]);    // For managing cart items
  const [cartCount, setCartCount] = useState(0);
  const [orders, setOrders] = useState([]); // To manage the orders after successful payment

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cartCount + 1);  // Increment the cart count
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    setCartCount(0);  // Reset the cart count
  };

  // Function to place the order after successful payment
  const placeOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      date: new Date().toLocaleDateString(),
      status: 'Processing',
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      items: cart.length,
    };
    setOrders([...orders, newOrder]);
    clearCart(); // Clear cart after placing order
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} cartCount={cartCount} />  {/* Pass setUser to Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} /> {/* Pass setUser to Login */}
          <Route path="/register" element={<Registration setUser={setUser} />} /> {/* Pass setUser to Registration */}
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/payment"
            element={
              <Payment
                cart={cart}
                setCart={setCart} // Pass setCart as a prop
                clearCart={clearCart}
                placeOrder={placeOrder} // Pass placeOrder as prop
              />
            }
          />
          <Route path="/orders" element={<Orders orders={orders} />} />
          <Route path="/items" element={<Items setCartCount={setCartCount} cart={cart} setCart={setCart} />} />
          <Route path="/dashboard" element={<Dashboard orders={orders} />} />
          
          {/* New Routes for Search and Product Details */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
