import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./serviceBox.css";
import { Typography } from "@mui/material";

const ServiceBox = ({ service }) => {
    const navigate = useNavigate();

    

    const handleItemsClick = (service) => {
        //idhr change krna h ab
        // console.log(item);
        console.log("clicked");
        // navigate(`/item-detail/${item._id}`, {state: item})
    }

    const truncateDescription = ( description, maxLength) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    };




    return (
        <div className="searchItem">
            <img
                src={service.pic}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{service.name}</h1>
                <span className="siDistance">{service.age} yrs old</span>
                <span className="siTaxiOp">{service.city}</span>
                <span className="siSubtitle">
                    {truncateDescription(service.bio, 100)}
                </span>


                <span className="siFeatures">
                    {service.specialty.map((tag, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && ' • '}
                            {tag}
                        </React.Fragment>
                    ))}
                </span>

                {/* <span className="siFeatures">
                    tag1 • tag2 • tag3
                </span> */}
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    Prices are per visit!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                <span style={{ opacity: "0" }}>{service.city}</span>

                    <button>{"3"}⋆</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹{service.price} </span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={()=>handleItemsClick(item)}>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBox;

