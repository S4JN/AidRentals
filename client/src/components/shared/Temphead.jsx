import React, { useState } from 'react'
import "./temphead.css"
import { useNavigate } from 'react-router-dom';


const Temphead = () => {
    const [activeButton, setActiveButton] = useState('headerButton1');
    const navigate = useNavigate();
    const handleOption = (name, operation) => {

    };



    const handleButtonClick = (headerButtonId) => {
        setActiveButton(headerButtonId);
    };


    return (
        <div className="headerList">
            <div className={`headerListItem ${activeButton === 'headerButton1' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton1')}>
                <HomeIcon /> <span>  Compunder</span>
            </div>
            {/* Additional headerList items go here */}
            <div className={`headerListItem ${activeButton === 'headerButton3' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton3')}>
                <span>  Compunder</span>
            </div>
            <div className={`headerListItem ${activeButton === 'headerButton4' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton4')}>
                <span>  Compunder</span>
            </div>
            <div className={`headerListItem ${activeButton === 'headerButton5' ? 'active' : ''}`} onClick={() => handleButtonClick('headerButton5')}>
                <span>  Compunder</span>
            </div>
        </div>
    )
}

export default Temphead