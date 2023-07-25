import "./featured.css";
import bedImg from "../../assets/bed.jpg"
import oxygen from "../../assets/oxygen.jpg"
import nurse from "../../assets/nurse.jpg"


const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={bedImg}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Beds</h1>
          
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={oxygen}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Oxygen Cylinders</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={nurse}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Services</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;