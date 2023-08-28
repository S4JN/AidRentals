import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import "./css/aboutus.css";
import axios from 'axios';

const AboutUs = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    // Fetch inventories from your API

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };



    axios.get('http://localhost:8000/api/v1/inventory/get', config) // Replace with the appropriate API endpoint
      .then(res => {
        setInventories(res.data.inventories);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="team-card">
        {/* Rest of the About Us content */}
      </div>
      <div>
        <h2>All Inventories</h2>
        <ul>
          {inventories.map(inventory => (
            <li key={inventory.id}>
              {/* Display inventory information here */}
              {/* For example: */}
              <p>{inventory.name}</p>
              <p>{inventory.description}</p>
              <img src={inventory.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
// import React from 'react'

// const AboutUs = () => {
//   return (
//     <div>AboutUs</div>
//   )
// }

// export default AboutUs