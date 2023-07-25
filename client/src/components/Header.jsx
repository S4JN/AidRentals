
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [active, setIsactive]=useState("")

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
      
    };

    const handleSearch = () => {
        
    };

    return (
        <div className="header">
            <div
                className={
                    type === "list" ? "headerContainer listMode" : "headerContainer"
                }
            >
                <div className="headerList">
                    <div className="headerListItem active">
                        <span>Compunder</span>
                    </div>
                    <div className="headerListItem">
                        <span>Compunder</span>
                    </div>
                    <div className="headerListItem">
                        <span>Compunder</span>
                    </div>
                    <div className="headerListItem">
                        <span>Compunder</span>
                    </div>
                    <div className="headerListItem">
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