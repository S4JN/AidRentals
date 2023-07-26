
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {

    const [activeButton, setActiveButton] = useState('headerButton1');
    const navigate = useNavigate();
    const handleOption = (name, operation) => {
      
    };
    const handleSearch = () => {
        
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
                    <div  className={`headerListItem ${activeButton === 'headerButton1' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton1')}>
                        <span>Compunder</span>
                    </div>
                    <div  className={`headerListItem ${activeButton === 'headerButton2' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton2')}>
                        <span>Compunder</span>
                    </div>
                    <div  className={`headerListItem ${activeButton === 'headerButton3' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton3')}>
                        <span>Compunder</span>
                    </div>
                    <div  className={`headerListItem ${activeButton === 'headerButton4' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton4')}>
                        <span>Compunder</span>
                    </div>
                    <div  className={`headerListItem ${activeButton === 'headerButton5' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton5')}>
                        <span>Compunder</span>
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
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>

                            <div className="headerSearchItem">
                                <headerButton className="headerBtn" onClick={handleSearch}>
                                    Search
                                </headerButton>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;