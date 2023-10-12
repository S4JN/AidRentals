import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Mail from "../components/MailList/Mail";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from 'axios'
import "./css/serviceDetail.css"
import { useLocation } from "react-router-dom";

const ServiceDetail = () => {
  const { state } = useLocation();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewForm, setReviewForm] = useState(false);
  const [review, setReview] = useState({ id: state._id, data: "" });
  const [reviews, setReviews] = useState([...state.reviews]);

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const { data } = await axios.post(
        'http://localhost:8000/api/v1/review',
        review,
        config
      );
      setReviews([...data.reviews]);
      setReview({ id: state._id, data: "" }); // Clear the review input
      setReviewForm(false);
    } catch (error) {
      console.log(error);
    }
  }

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ id: state._id, data: value });
  }

  useEffect(() => {
    state.reviews=[...reviews];
  }, [reviews]);



  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      
      {reviewForm &&
      <div className="overlay" >
                  <form className="reviewForm" onSubmit={submitReview} onChange={handleInputChange}>
                    <div>
                    <label htmlFor="" style={{display:" block",fontWeight: "bold",marginBottom: "10px"}}>Enter your Review</label>
                    <br />
                    <textarea
                    name="review"
                    required
                    style={{ width: '100%',height:'80px', margin:'auto',padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    </div>
                    <div className="btn-cont">
                      <button onClick={()=>{setReviewForm(false);}} style={{backgroundColor:'#007bff',color:'#fff',padding:'10px 20px',borderRadius: '4px',border:'none',cursor: 'pointer',margin:'0px 5px'
  }}>Close</button>
                    <button  type="submit" style={{backgroundColor:'#007bff',color:'#fff',padding:'10px 20px',borderRadius: '4px',border:'none',cursor: 'pointer'
  }}>Send</button>
                    </div>
                    
                  </form>
        </div>
        }
     
      <div className="hotelContainer">
      
        <div className="hotelWrapper">
          <div className="hotelImages">
            <div className="hotelImgWrapper">
              <img
                src={state.pic}
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelServiceDetails">
              <div className="hotelServiceDetailsTexts">
                <div className="hotelAddress">
                  {state.specialty.map((tag) => {
                    return (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: "#febb02",
                          fontSize: "0.8rem",
                          padding: "5px",
                          color: "#003580",
                          borderRadius: "9px",
                        }}
                      >
                        {tag}{" "}
                      </span>
                    );
                  })}
                </div>

                <h1 className="hotelTitle">{state.name}</h1>
                <span className="hotelDistance">
                  Excellent location – {state.city}
                </span>
                <br />
                <span>
                  {state.gender} - {state.age} yrs old
                </span>
                <br />
                <span className="hotelPriceHighlight">
                  Bio - {state.bio}
                </span>
                <br />
                <span>
                  Years of Experience - {state.yoe} years
                </span>
                <br />

                <span>

                  Working Hours - {state.workingHours} hrs /day
                </span>
                {/* <h4 className="h4chng">
                  Email - {state.email}
                  <br />
                  Contact No. - {state.phoneNumber}
                  <br />
                  <span className="dispArea">
                    Preferred Areas to work -
                    <div className="hotelAddress">
                      {state.preferredAreas.map((tag) => {
                        return (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: " #30D5C8",
                              fontSize: "0.8rem",
                              padding: "5px",
                              color: "#003580",
                              borderRadius: "9px",
                            }}
                          >
                            {tag}{" "}
                          </span>
                        );
                      })}
                    </div>
                  </span>


                </h4> */}
                
                <br />
              </div>
            </div>
          </div>

          <div className="diba">
            <span className="reviewshead">Reviews</span>
            <button className="addReview" onClick={()=>{setReviewForm(true)}}>+ Add Review</button>
          </div>

          <div className="review">
            <div className="reviewContainer">
              {displayedReviews.map((comment, index) => (
                <div key={index} className="comment">
                  <span className="user">Anonymous User:</span>
                  <br />
                  <span>{comment}</span>
                </div>
              ))}
            </div>
            {reviews.length > 3 && (
              <div>
                {!showAllReviews ? (
                  <button
                    className="seeMoreButton"
                    onClick={() => setShowAllReviews(true)}
                  >
                    See More
                  </button>
                ) : (
                  <button
                    className="seeMoreButton"
                    onClick={() =>{
                      setShowAllReviews(false)
                      window.scrollTo({ top: 500, behavior: 'smooth' });

                    }}
                  >
                    See Less
                  </button>
                )}
              </div>
            )}
          </div>

        </div>
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default ServiceDetail;
