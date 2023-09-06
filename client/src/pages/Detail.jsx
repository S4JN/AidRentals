import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Mail from "../components/MailList/Mail"
import Footer from "../components/Footer"
import Header from '../components/Header';
import "./css/detail.css"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Detail = () => {

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

        console.log(i);
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
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <ArrowForwardIcon

                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Tower Street Apartments</h1>
                    <div className="hotelAddress">

                        <span>Multi Equipment Set</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location – 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Rent these items at the cheapest price.
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Multi Functionality Items</h1>
                            <p className="hotelDesc">
                                Introducing our state-of-the-art oximeter, available for rent now! Our oximeter is a cutting-edge medical device designed to accurately measure your oxygen saturation levels and pulse rate, providing crucial insights into your overall health and well-being. With its user-friendly interface and compact design, it's perfect for monitoring your oxygen levels from the comfort of your home or on the go.

                                Renting our oximeter is a cost-effective and convenient solution, allowing you to keep track of your respiratory health without the need for a permanent purchase. Whether you're recovering from an illness, managing a chronic condition, or simply seeking peace of mind, our oximeter offers reliable and instant readings that you can trust.

                                Rest assured, our oximeter is meticulously maintained, thoroughly sanitized, and calibrated to ensure precise results every time. Our rental process is seamless, making it easy to get the oximeter you need when you need it most. Don't compromise on your health – experience the benefits of our advanced oximeter today by renting one for yourself or your loved ones. Stay informed, stay safe!






                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Rent Now!</h1>
                            <span>
                                By Renting we will provide you with the details of the owner contact him directly,
                                we will also provide your details to him.
                            </span>
                            <h2>
                                <b>₹100</b> (per day)
                            </h2>
                            <button>Rent</button>
                        </div>
                    </div>
                </div>

                <div style={{height: "300px", width: "80%" , padding: "20px" ,backgroundColor: "brown"}}>
                    Map
                </div>
                <Mail />
                <Footer />
            </div>
        </div>
    )
}

export default Detail