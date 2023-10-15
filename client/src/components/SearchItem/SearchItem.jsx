import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./searchItem.css";
import { Typography } from "@mui/material";

const SearchItem = ({ item, type }) => {
    const navigate = useNavigate();

    console.log(item);

    const handleItemsClick = (item) => {
        //idhr change krna h ab
        // console.log(item);
        console.log("clicked");
        navigate(`/item-detail/${item._id}`, {state: item})
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
                src={item.image[0]}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.life} yrs old</span>
                <span className="siTaxiOp">In best Condition</span>
                <span className="siSubtitle">
                    {truncateDescription(item.description, 100)}
                </span>


                <span className="siFeatures">
                    {item.tags.map((tag, index) => (
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
                    <button>{item.rating}.0⋆</button>

                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹{item.rentalPrice} </span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    {item.isRented ? (
                    <button className="siCheckButton" style={{backgroundColor : "red"}} onClick={()=>handleItemsClick(item)}>Rented</button>

                    ) : (
                    <button className="siCheckButton" onClick={()=>handleItemsClick(item)}>See availability</button>

                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchItem;

