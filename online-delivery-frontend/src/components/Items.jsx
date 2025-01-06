import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Items.css';

const Items = ({ setCartCount, cart, setCart }) => {
  const { state } = useLocation();
  const { restaurant } = state;
  const navigate = useNavigate();

  // Local state for item quantities
  const [quantities, setQuantities] = useState({});

  // Handle "+" and "-" button clicks to update local quantity state
  const handleQuantityChange = (item, action) => {
    if (item.availability === "Out of Stock") return;

    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item.title] || 0;
      const newQuantity =
        action === 'add' ? currentQuantity + 1 : Math.max(0, currentQuantity - 1);
      return { ...prevQuantities, [item.title]: newQuantity };
    });
  };

  // Add the current quantity to the cart
  const handleAddToCart = (item) => {
    const quantityToAdd = quantities[item.title] || 0;

    if (quantityToAdd > 0) {
      setCart((prevCart) => {
        const itemInCart = prevCart.find((cartItem) => cartItem.title === item.title);

        let updatedCart;
        if (itemInCart) {
          updatedCart = prevCart.map((cartItem) =>
            cartItem.title === item.title
              ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
              : cartItem
          );
        } else {
          updatedCart = [...prevCart, { ...item, quantity: quantityToAdd }];
        }

        // Update the cart count to reflect the number of unique items in the cart
        setCartCount(updatedCart.length);

        // Reset local quantity for the item
        setQuantities((prevQuantities) => ({ ...prevQuantities, [item.title]: 0 }));

        return updatedCart;
      });
    }
  };

  // Handle "Buy Now"
  const handleBuyNow = (item) => {
    if (item.availability === "Out of Stock") return;

    // Pass item to the payment page
    navigate('/payment', {
      state: { item: { ...item, quantity: quantities[item.title] || 1 } }
    });
  };

  return (
    <div className="items">
      <h2>{restaurant.resturant_name} - Products</h2>
      <div className="products">
        {restaurant.products.map((category) =>
          category.subcategories.map((subcategory) =>
            subcategory.items.map((item) => (
              <div key={item.title} className="product-card">
                <img src={item.image} alt={item.title} className="product-image" />
                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Rating: 4.5</p>
                  <p>{item.description}</p>
                  <p style={{ color: item.availability === "Available" ? "green" : "red" }}>
                    {item.availability}
                  </p>
                  <div className="quantity">
                    <button
                      onClick={() => handleQuantityChange(item, 'subtract')}
                      disabled={quantities[item.title] <= 0 || item.availability === "Out of Stock"}
                    >
                      -
                    </button>
                    <span>{quantities[item.title] || 0}</span>
                    <button
                      onClick={() => handleQuantityChange(item, 'add')}
                      disabled={item.availability === "Out of Stock"}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={item.availability === "Out of Stock"}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(item)}
                    disabled={item.availability === "Out of Stock"}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Items;
