// ProductList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import restaurants from './restaurants'; // Import the restaurant data
import './ProductList.css'

const ProductList = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleRestaurantSelect = (restaurant) => {
    // Navigate to the Items page to show products of the selected restaurant
    navigate('/items', { state: { restaurant: restaurant } });
  };

  return (
    <div className="product-list">
      <h2>Restaurants</h2>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.resturant_name}
            className="restaurant-card"
            onClick={() => handleRestaurantSelect(restaurant)}
          >
            <img
              src={restaurant.products[0].subcategories[0].items[0].image}
              alt={restaurant.resturant_name}
            />
            <h3>{restaurant.resturant_name}</h3>
            <p>Rating: 4.5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
