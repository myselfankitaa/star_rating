"use client";

import { useState } from "react";
import "./rating.css";

export default function StarRating() {
  const [selectedStarRating, setSelectedStarRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stars = [1, 2, 3, 4, 5];

  const handleStarRating = (star) => {
    setSelectedStarRating(star);
  };

  const handleSubmit = () => {
    if (selectedStarRating) {
      setIsSubmitted(() => true);
    }
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <div className="card">
          <div className="star">
            <img
              src="/images/icon-star.svg"
              alt="star icon"
              width={30}
              height={30}
            />
          </div>
          <h2>How did we do?</h2>
          <p>
            Please let us know how did we do with your support request. All
            feedback appreciated to help us improve our offerings!
          </p>
          <div className="starNumber-buttons">
            {stars.map((star, index) => {
              return (
                <button
                  key={index}
                  className={`starRating-button ${
                    selectedStarRating === star ? "selected" : ""
                  }`}
                  onClick={() => handleStarRating(star)}
                >
                  {star}
                </button>
              );
            })}
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="response">
          <div className="thankyou-image">
            <img
              src="/images/illustration-thank-you.svg"
              alt="thank-you"
              width={150}
              height={100}
            />
          </div>
          <p className="rating_result">
            You rated us {selectedStarRating} out of 5!
          </p>
          <h2>Thank You!</h2>
          <p>
            We appreciate you taking time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
