import { useState } from "react";
import Navbar from "../components/Navbar";
import Mail from "../components/MailList/Mail";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/serviceDetail.css"

import { useLocation } from "react-router-dom";

const ServiceDetail = () => {
  const { state } = useLocation();
  console.log(state);

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
                <h3 className="">
                  Bio - {state.bio}
                  <br />
                  Years of Experience - {state.yoe} years
                  <br />
                  Working Hours - {state.workingHours} hrs /day
                </h3>
                <h4 className="h4chng">
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
                 
                
                </h4>
                <br />
                <span className="hotelPriceHighlight">
                  Rent these items at the cheapest price.
                </span>
              </div>
            </div>
          </div>
          <div className="review">
                  Rivews
          </div>

        </div>
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default ServiceDetail;
