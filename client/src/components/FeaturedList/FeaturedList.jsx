import React from 'react'
import "./featuredList.css"


const FeaturedList = () => {

  const getRatingColor = (ratingValue) => {
    if (ratingValue >= 1 && ratingValue <= 2) {
      return 'red';
    } else if (ratingValue === 3) {
      return 'yellow';
    } else if (ratingValue >= 4 && ratingValue <= 5) {
      return 'green';
    } else {
      return 'blue'; 
    }
  };


  const rating = 4;
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Bed</span>
        <span className="fpCity">Indore</span>
        <span className="fpPrice">Avaiable ₹10</span>
        <div className="fpRating">
          <button style={{ backgroundColor: getRatingColor(rating) }}>{rating}</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1593086586362-d83c6bf009b3"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Wheel Chair</span>
        <span className="fpCity">Indore</span>
        <span className="fpPrice">Avaiable ₹10</span>
        <div className="fpRating">
          <button  style={{ backgroundColor: getRatingColor(rating) }}>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2021/9/BB/QC/NL/5038493/neonatal-pulse-oximeter.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pulse Oxymeter</span>
        <span className="fpCity">Indore</span>
        <span className="fpPrice">Avaiable ₹10</span>
        <div className="fpRating">
          <button  style={{ backgroundColor: getRatingColor(rating) }}>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1513224502586-d1e602410265"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Vital Monitor</span>
        <span className="fpCity">Ujjain</span>
        <span className="fpPrice">Avaiable ₹10</span>
        <div className="fpRating">
          <button  style={{ backgroundColor: getRatingColor(rating) }}>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;