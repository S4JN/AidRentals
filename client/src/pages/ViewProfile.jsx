import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useUserContext } from '../context/UserContext';
import Profile from '../components/Profile';
import Footer from '../components/Footer'
import Mail from '../components/MailList/Mail';


const ViewProfile = () => {
    const { user } = useUserContext();

    const address = user?.address;
    const name = user?.name;
    const phone = user?.phoneNumber;
    const city = user?.city;
    const role = user?.role;
    const email = user?.email;
    const zip = user?.zip;



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
           
            <Mail />
            <Footer />


        </div>
    )
}

export default ViewProfile