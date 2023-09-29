import { useState } from "react";
import Navbar from "../components/Navbar";
import Mail from "../components/MailList/Mail";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/serviceDetail.css"

import { useLocation } from "react-router-dom";

const ServiceDetail = () => {
  const { state } = useLocation();
  const [showAllReviews, setShowAllReviews] = useState(false);
  console.log(state);
  const reviews = [
    'Great product, exceeded my expectations!',
    'Excellent service and fast shipping!',
    'Good but could be improved in some areas.',
    'Satisfied with the purchase.',
    'Outstanding quality!',
    'Not what I expected, but it works.',
    'Decent value for the price.',
    'Impressive design and functionality.',
    'Good, but had some minor issues.',
    'Overall happy with the product.'
  ];
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);



  return (
    <div>
      <Navbar />
      <Header type={"list"} />
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
            <button className="addReview">+ Add Review</button>
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
