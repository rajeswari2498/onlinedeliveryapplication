import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = ({ cart, setCart, clearCart, placeOrder }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
  });
  const [paymentStatus, setPaymentStatus] = useState(null);

  const navigate = useNavigate(); // To navigate to orders page after payment

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Simulating payment process
    if (
      (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') &&
      paymentInfo.cardNumber &&
      paymentInfo.expiryDate &&
      paymentInfo.cvv
    ) {
      const isPaymentSuccessful = Math.random() > 0.2; // Simulate 80% success rate
      if (isPaymentSuccessful) {
        setPaymentStatus('Payment Successful!');
        placeOrder(); // Place the order
        clearCart(); // Clear cart after placing order
        navigate('/orders'); // Redirect to orders page
      } else {
        setPaymentStatus('Payment Failed. Please try again.');
      }
    } else if (paymentMethod === 'upi' && paymentInfo.upiId) {
      const isPaymentSuccessful = Math.random() > 0.2; // Simulate 80% success rate
      if (isPaymentSuccessful) {
        setPaymentStatus('Payment Successful!');
        placeOrder(); // Place the order
        clearCart(); // Clear cart after placing order
        navigate('/orders'); // Redirect to orders page
      } else {
        setPaymentStatus('Payment Failed. Please try again.');
      }
    } else {
      setPaymentStatus('Please fill in all payment details.');
    }
  };

  return (
    <div className="payment">
      <h1>Payment Information</h1>

      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <div className="input-group">
          <label htmlFor="paymentMethod">Select Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* Fields for Credit/Debit Card */}
        {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
          <>
            <div className="input-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
                placeholder="Enter card number"
              />
            </div>

            <div className="input-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
              />
            </div>

            <div className="input-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                placeholder="Enter CVV"
              />
            </div>
          </>
        )}

        {/* Fields for UPI */}
        {paymentMethod === 'upi' && (
          <div className="input-group">
            <label htmlFor="upiId">UPI ID</label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              value={paymentInfo.upiId}
              onChange={handleInputChange}
              placeholder="Enter UPI ID (e.g., user@bank)"
            />
          </div>
        )}

        <button type="submit" className="submit-btn">Pay Now</button>
      </form>

      {paymentStatus && (
        <div className={`payment-status ${paymentStatus.includes('Failed') ? 'failed' : 'success'}`}>
          {paymentStatus}
        </div>
      )}
    </div>
  );
};

export default Payment;
