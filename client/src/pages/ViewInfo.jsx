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


const ViewInfo = () => {
    const { user } = useUserContext();
    const [edit, setEdit] = useState(false);

    const address = user?.address;
    const name = user?.name;
    const phone = user?.phoneNumber;
    const city = user?.city;
    const role = user?.role;
    const email = user?.email;
    const zip = user?.zip;
    const id = user?._id;

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <Profile
                name={name}
                address={address}
                phone={phone}
                email={email}
                role={role}
                city={city}
                zip={zip}
            />
            <div className='edit-div'>
                <button className='edit-btn' onClick={(()=>{setEdit(true);})}>Edit Profile</button>
            </div>
            {edit&&(
                
            <form action="" className='overlay'>
                <div>
                    <label>Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>PhoneNo.:</label>
                    <input type="number" />
                </div>
                <div>
                    <label>city:</label>
                    <input type="text" />
                </div>
                <div className='update'>
                <label >zipcode:</label>
                    <input type="number" />
                </div>
            
            </form>
            )
            }
            <Mail />
            <Footer />


        </div>
    )
}

export default ViewInfo