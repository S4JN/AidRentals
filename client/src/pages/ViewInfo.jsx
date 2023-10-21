import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useUserContext } from '../context/UserContext';
import Profile from '../components/Profile';
import Footer from '../components/Footer'
import Mail from '../components/MailList/Mail';
import "./css/viewProfile.css"
import axios from 'axios';
import SearchItem from '../components/SearchItem/SearchItem';
import { Typography } from '@mui/material';

const ViewInfo = () => {
    const { user } = useUserContext();
    const [items, setItems] = useState([]);
    const [myService, setMyService] = useState(null); // Added state for the service

    const address = user?.address;
    const name = user?.name;
    const phone = user?.phoneNumber;
    const city = user?.city;
    const role = user?.role;
    const email = user?.email;
    const zip = user?.zip;
    const id = user?._id;

    const getMyService = async (id) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };

            // Make a GET request to your API endpoint
            const response = await axios.get(`http://localhost:8000/api/v1/service/my-service?owner=${id}`, config);
            console.log(response.data);
            // Set the service data to state
            setMyService(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // Check if user id is available before making the request
        if (id) {
            getMyService(id);
        }
    }, [id]); // Trigger the effect whenever id changes

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <Profile
                name={id}
                address={address}
                phone={phone}
                email={email}
                role={role}
                city={city}
                zip={zip}
            />
            <Mail />
            <Footer />
        </div>
    )
}

export default ViewInfo
