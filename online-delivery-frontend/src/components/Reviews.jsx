import React, { useState, useEffect } from 'react';
import './Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    // Load reviews from local storage if available
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [averageRating, setAverageRating] = useState(0);

  // Calculate the average rating whenever reviews change
  useEffect(() => {
    calculateAverageRating(reviews);
  }, [reviews]);

  // Calculate the average rating
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    setAverageRating((totalRating / reviews.length).toFixed(1));
  };

  // Handle review submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      alert('Please provide a rating and a comment.');
      return;
    }

    const newReview = {
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    // Update the reviews list and reset the form
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Save reviews to local storage
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    setRating(0);
    setComment('');
  };

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>

      {/* Display Average Rating */}
      <div className="average-rating">
        <h3>Average Rating: {averageRating} / 5</h3>
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-item">
              <p>
                <strong>Rating:</strong> {review.rating} / 5
              </p>
              <p>{review.comment}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>

      {/* Review Form */}
      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
              <option value="0">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
            />
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
