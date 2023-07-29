import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonSearchSharpIcon from '@mui/icons-material/PersonSearchSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';

const Header = ({ type }) => {

    const [activeButton, setActiveButton] = useState('headerButton1');
    const [searchItem, setSearchItem]= useState("");

    const navigate = useNavigate();
    const handleOption = (name, operation) => {
      
    };

    const handleSearch = () => {
        // console.log(searchItem);
        navigate("/list",{state: {searchItem}});
    };
    
  const handleButtonClick = (headerButtonId) => {
    setActiveButton(headerButtonId);
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className={`headerListItem ${activeButton === 'headerButton1' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton1')}>
          <div className="adjust"><HomeIcon /> <span className="lmarg">Home</span></div>  
          </div>
          {/* Additional headerList items go here */}
          <div className={`headerListItem ${activeButton === 'headerButton3' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton3')}>
          <div className="adjust"><TravelExploreIcon/> <span className="lmarg">Explore</span></div>
          </div>
          <div className={`headerListItem ${activeButton === 'headerButton4' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton4')}>
          <div className="adjust"><InfoSharpIcon /> <span className="lmarg">About US</span></div>
          </div>
          <div className={`headerListItem ${activeButton === 'headerButton5' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton5')}>
          <div className="adjust"><PersonSearchSharpIcon/> <span className="lmarg">View Profile</span></div>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Help because pata nhi kis roop m akr naryan mil jyega.
            </h1>
            <p className="headerDesc">
              Rent your medical instruments for the needy, keep prices low.
              db ki ma ka bhosda
            </p>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <input
                  type="text"
                  placeholder="Whats your need?"
                  className="headerSearchInput"
                  onChange={(e) => setSearchItem(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                {/* Using a regular HTML button instead of an undefined headerButton */}
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
