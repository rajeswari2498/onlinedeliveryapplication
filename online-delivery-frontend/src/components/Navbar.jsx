import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import './Navbar.css';

function Navbar({ user, setUser, cartCount }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/">Online Delivery</Link>
      </div>

      {!user ? (
        // Show only "Login" and "Register" before login
        <div className="navbar-auth">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
      ) : (
        <>
          {/* Navigation Links after login */}
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="navbar-search">
            <Search />
          </div>

          {/* Cart and Notifications Icons */}
          <div className="navbar-icons">
            <Link to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
            <Link to="/notifications">
              <i className="fas fa-bell"></i>
            </Link>
          </div>

          {/* User Dropdown */}
          <div className="navbar-auth">
            <div className="user-profile">
              <div className="user-icon" onClick={toggleDropdown}>
                <img src="images/img9.png" alt="User Icon" className="user-img" />
              </div>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <span>Welcome, {user.firstName}</span>
                  <Link to="/settings">Settings</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
