import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { title } = useParams(); // Get the product title from the URL

  // Sample function to handle ordering
  const handleOrderNow = () => {
    alert(`Order placed for ${title}!`);
  };

  return (
    <div className="product-details">
      <h1>{title}</h1>
      <p>This is the details page for {title}.</p>
      <button onClick={handleOrderNow}>Order Now</button>
    </div>
  );
};

export default ProductDetails;
