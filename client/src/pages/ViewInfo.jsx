import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useUserContext } from '../context/UserContext';
import Profile from '../components/Profile';
import Footer from '../components/Footer'
import Mail from '../components/MailList/Mail';
import "./css/viewInfo.css"
import axios from 'axios';
import SearchItem from '../components/SearchItem/SearchItem';
import { Typography } from '@mui/material';

const ViewInfo = () => {
    const { user } = useUserContext();
    const [items, setItems] = useState([]);
    const [myService, setMyService] = useState(null);
    const [aadharIp, setAadharIp] = useState(false);
    const [aadharValue, setAadharValue] = useState('213123123');
    const address = user?.address;
    const name = user?.name;
    const phone = user?.phoneNumber;
    const city = user?.city;
    const role = user?.role;
    const email = user?.email;
    const zip = user?.zip;
    const id = user?._id;

    const handleInputChange = (e) => {
        setAadharValue(e.target.value);
        console.log(aadharValue);
    }
    const getMyService = async (id) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };

            // Make a GET request to your API endpoint
            const { data } = await axios.get(`http://localhost:8000/api/v1/service/my-service?owner=${id}`, config);

            // Set the service data to state
            setMyService(data.data);
            console.log(data);
            console.log(myService);
        } catch (error) {
            console.log(error);
        }
    }

    const handleVerification = async (e) => {
        e.preventDefault();
        console.log('handleVerification called');
        try {
            console.log(aadharValue);
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };
            //http://localhost:8000/api/v1/service/verify
            const { data } = await axios.post(`http://localhost:8000/api/v1/service/verify`, {
                "aadhar": aadharValue,
                "id": myService._id
            }, config);

            console.log(data);
            alert("verification request sent")


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
            {myService && (
                <div>
                    <Typography>{myService.name}</Typography>
                    <Typography>{myService.bio}</Typography>
                    <Profile
                        name={myService.name}
                        bio={myService.bio}
                        city={myService.city}
                        email={myService.email}
                        phone={myService.phoneNumber}

                        zip={zip}
                    />
                </div>

            )}
            {/* {aadharIp && (
                <div>
                    <form ></form>
                        <label>Enter Aadhar Number:</label>
                        <input type="text" 
                        name='aadhar'
                        value={aadharValue}
                        onChange={handleInputChange}
                    />
                    <button onSubmit={handleVerification}>Verify</button>
                    </form>
                    
                </div>
            )}
            <div className='edit-div' >
                <button className='edit-btn'></button>
                <button className='edit-btn' onClick={() => { setAadharIp(true) }} >Verify Yourself</button>
            </div> */}
          
            {/* <div onSubmit={handleVerification}>Verify</div> */}
            <Mail />
            <Footer />
        </div>
    )

}

export default ViewInfo
