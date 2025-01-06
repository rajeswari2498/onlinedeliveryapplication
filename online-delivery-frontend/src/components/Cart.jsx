import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart }) => {
  const [shipping, setShipping] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(getTotalPrice() * 0.1); // 10% discount
    } else {
      alert('Invalid coupon code!');
    }
  };

  const handleCheckout = () => {
    navigate('/payment'); // Redirects to the payment page
  };

  return (
    <div className="cart-container">
      {/* Shopping Bag Section */}
      <div className="shopping-bag">
        <h2>Shopping Bag</h2>
        <p>{cart.length} item(s) in your bag</p>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-total">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="shipping-calculation">
          <h3>Calculated Shipping</h3>
          <select onChange={(e) => setShipping(Number(e.target.value))}>
            <option value="0">Select Country</option>
            <option value="50">India - ₹50</option>
            <option value="100">USA - ₹100</option>
            <option value="150">Canada - ₹150</option>
          </select>
          <input type="text" placeholder="ZIP Code" />
          <button>Update</button>
        </div>

        <div className="coupon-section">
          <h3>Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={handleApplyCoupon}>Apply</button>
        </div>

        <div className="cart-summary">
          <h3>Cart Total</h3>
          <p>
            <span>Cart Subtotal:</span> ₹{getTotalPrice().toFixed(2)}
          </p>
          <p>
            <span>Shipping:</span> ₹{shipping.toFixed(2)}
          </p>
          <p>
            <span>Discount:</span> -₹{discount.toFixed(2)}
          </p>
          <p>
            <strong>Total:</strong> ₹
            {(getTotalPrice() + shipping - discount).toFixed(2)}
          </p>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
