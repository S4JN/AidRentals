import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./searchItem.css";
import { Typography } from "@mui/material";

const SearchItem = ({ name,_id, life, tags, description, image, price,rating }) => {
    const navigate = useNavigate();

    

    const handleItemsClick = (id) => {
        //idhr change krna h ab
        console.log(id);
        console.log("clicked");
        navigate(`/item-detail/${id}`)
    }

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    };




    return (
        <div className="searchItem">
            <img
                src={image[0]}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{name}</h1>
                <span className="siDistance">{life} yrs old</span>
                <span className="siTaxiOp">In best Condition</span>
                <span className="siSubtitle">
                    {truncateDescription(description, 100)}
                </span>


                <span className="siFeatures">
                    {tags.map((tag, index) => (
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
                    Prices are per day!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>{rating}.0⋆</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹{price} </span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={()=>handleItemsClick(_id)}>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;