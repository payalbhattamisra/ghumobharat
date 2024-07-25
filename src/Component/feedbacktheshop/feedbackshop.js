import React, { useState } from 'react';
import './feedbackshop.css'
import axios from 'axios'
const ShopReviewForm = () => {
  const [ratings, setRatings] = useState({
    productQuality: 0,
    customerService: 0,
    cleanlinessAmbiance: 0,
    valueForMoney: 0,
    convenienceTimeliness: 0,
    overallExperience: 0,
    timeSpent: '',
  });

  const handleRatingChange = (e, category) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setRatings({
      ...ratings,
      [category]: value,
    });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(ratings); 
  //   resetForm();
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/review",
        ratings,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // const resetForm = () => {
  //   setRatings({
  //     productQuality: 0,
  //     customerService: 0,
  //     cleanlinessAmbiance: 0,
  //     valueForMoney: 0,
  //     overallExperience: 0,
  //     timeSpent: '',
  //   });
  // };

  return (
    <section className="review">
      <span id='reviewText'>Share Your Experience!</span>

      <form onSubmit={handleFormSubmit} className='reviewForm'>
        <div>
          <label><pre>Product Quality:         </pre></label>
          <input
            type="number"
            min="0"
            max="5"
            value={ratings.productQuality}
            onChange={(e) => handleRatingChange(e, 'productQuality')}
          />
        </div>
        <div>
          <label><pre>Customer Service:       </pre></label>
          <input
            type="number"
            min="0"
            max="5"
            value={ratings.customerService}
            onChange={(e) => handleRatingChange(e, 'customerService')}
          />
        </div>
        <div>
          <label><pre>cleanliness Ambiance: </pre></label>
          <input
            type="number"
            min="0"
            max="5"
            value={ratings.cleanlinessAmbiance}
            onChange={(e) => handleRatingChange(e, 'cleanlinessAmbiance')}
          />
        </div>
        <div>
          <label><pre>Value For Money:       </pre></label>
          <input
            type="number"
            min="0"
            max="5"
            value={ratings.valueForMoney}
            onChange={(e) => handleRatingChange(e, 'valueForMoney')}
          />
        </div>
        <div>
          <label><pre>overall Experience:     </pre></label>
          <input
            type="number"
            min="0"
            max="5"
            value={ratings.overallExperience}
            onChange={(e) => handleRatingChange(e, 'overallExperience')}
          />
        </div>


        <div>
          <label><pre>Time Spent:               </pre></label>
          <input
            type="text"
            value={ratings.timeSpent}
            onChange={(e) => handleRatingChange(e, 'timeSpent')}
            placeholder="E.g., 30 minutes"
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default ShopReviewForm;
