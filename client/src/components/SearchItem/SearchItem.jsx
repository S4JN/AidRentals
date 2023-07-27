import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/9/BB/QC/NL/5038493/neonatal-pulse-oximeter.png"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Oxymeter</h1>
                <span className="siDistance">5 yrs old</span>
                <span className="siTaxiOp">In best Condition</span>
                <span className="siSubtitle">
                    Pulse Oxymeter in best Condition(desp)
                </span>
                <span className="siFeatures">
                    Cell vala • Chargable • Small Size
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    Prices are per day!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹10 </span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;