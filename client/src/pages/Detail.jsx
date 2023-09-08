import  { useState } from 'react'
import Navbar from '../components/Navbar';
import Mail from "../components/MailList/Mail"
import Footer from "../components/Footer"
import Header from '../components/Header';
import "./css/detail.css"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map/Map';
import RentForm from '../components/RentForm/RentForm'
const Detail = () => {

    const { state } = useLocation();
    console.log(state);


    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1678310819897-edfe9b9def64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1678448763284-5d8b56a95313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1630531210843-d6f343ad1f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];
    
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };



    return (
        <div>
            <Navbar />
            <Header type={"list"} />
            <div className="hotelContainer">
                {open && (
                    <div className="slider">

                        <CloseIcon

                            className="close"
                            onClick={() => setOpen(false)}
                        />


                        <ArrowBackIcon

                            className="arrow"
                            onClick={() => handleMove("l")}
                        />


                        <div className="sliderWrapper">
                            <img src={state.image[slideNumber]} alt="" className="sliderImg" />
                        </div>
                        <ArrowForwardIcon

                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                
                <div className="hotelWrapper">
                    <button className="bookNow" onClick={toggleForm} >Rent</button>
                    <h1 className="hotelTitle">{state.name}</h1>
                    <div className="hotelAddress">
                        {state.tags.map((tag) => {
                            return <span key={tag}> {tag} </span>;
                        })}
                    </div>
                    {isFormVisible && (
                        <RentForm state={state} toggleForm={toggleForm} />
                     )}
                    <span className="hotelDistance">
                        Excellent location – {state.address}, {state.city}
                    </span>
                    <span className="hotelPriceHighlight">
                        Rent these items at the cheapest price.
                    </span>
                    <div className="hotelImages">
                        {state.image.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            {/* <h1 className="hotelTitle">{state.name}</h1> */}
                            <p className="hotelDesc">
                                {state.description}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Rent Now!</h1>
                            <span>
                                By Renting we will provide you with the details of the owner contact him directly,
                                we will also provide your details to him.
                            </span>
                            <h2>
                                <b>₹{state.rentalPrice}</b> (per day)
                            </h2>
                            <button onClick={toggleForm}>Rent</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: "100%",width:"100%", maxWidth: "1024px", padding: "20px"}}>
                    <Map city={state.city} address={state.address} zip={state.zip} />
                </div>

                <Mail />
                <Footer />
            </div>
        </div>
    )
}

export default Detail