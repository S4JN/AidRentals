import React, { useState } from 'react'
import "./showDetails.css"
import axios from "axios"

const ShowDetails = ({ state, visibility, toggleShow }) => {
  const ownerId = state.owner;

  // console.log(ownerId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleShow();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      // const ownerDetails=await axios.post('http://localhost:8000/getOwner',ownerId,config);
      // console.log("ownerDetails=" + ownerDetails)
      const { data } = await axios.post(
        'http://localhost:8000/sendMail',
        "adityasugandhi1203@gmail.com",
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='overlay'>
      {visibility && (
        <div>
          <button onClick={handleSubmit}>Close</button>
        </div>
      )}
    </div>
  )
}

export default ShowDetails