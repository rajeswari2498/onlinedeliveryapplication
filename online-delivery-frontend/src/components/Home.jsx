import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Food Delivery Express</h1>
          <p>Delicious food delivered to your doorstep in minutes!</p>
          <Link to="/products" className="cta-button">
            Explore Menu
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/img5.jpg" alt="Delicious Food" />
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Featured Categories</h2>
        <div className="featured-categories">
          <div className="category-card">
            <img src="/images/pizza.jpg" alt="Pizza" />
            <h3>Pizza</h3>
          </div>

          <div className="category-card">
            <img src="/images/img7.jpg" alt="Biryani" />
            <h3>Biryani</h3>
          </div>

          <div className="category-card">
            <img src="/images/img8.jpg" alt="Desserts" />
            <h3>Desserts</h3>
          </div>
        </div>
      </div>

      {/* Top Deals Section */}
      <div className="top-deals-section">
        <h2>Offers</h2>
        <div className="top-deals">
          <div className="deal-card">
            <img src="/images/deal1.jpg" alt="Deal 1" />
            <h3>50% Off on All Pizzas</h3>
            <p>Enjoy your favorite pizzas at half the price!</p>
            <Link to="/deals/pizza" className="deal-button">
              Grab Deal
            </Link>
          </div>

          <div className="deal-card">
            <img src="/images/deal2.jpg" alt="Deal 2" />
            <h3>Buy 1 Get 1 Free Biryani</h3>
            <p>Double the flavor with this amazing offer.</p>
            <Link to="/deals/biryani" className="deal-button">
              Grab Deal
            </Link>
          </div>

          <div className="deal-card">
            <img src="/images/deal3.jpg" alt="Deal 3" />
            <h3>Free Dessert with Orders Above $30</h3>
            <p>Sweeten your meal with a complimentary dessert.</p>
            <Link to="/deals/desserts" className="deal-button">
              Grab Deal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
