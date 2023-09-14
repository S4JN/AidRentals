import React, { useEffect, useState } from 'react'
import "./showDetails.css"
import axios from "axios"

const ShowDetails = ({ state, visibility, toggleShow }) => {
  const o = { owner: state.owner }
  const [ownerData, setOwnerData] = useState(null); 

  const find = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const { data } = await axios.post('http://localhost:8000/api/v1/getowner', o, config);
      console.log(data);
      setOwnerData(data); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    find();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const { data } = await axios.post(
        'http://localhost:8000/api/v1/sendMail',
        ownerData,
        config
      );
      console.log(data);
      toggleShow();
      alert("mail sent")

    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className='overlay'>
      {visibility && (
        <div style={{ backgroundColor: "white", height: "400px", width: "400px" }}>

          <div>
            <p>Owner Details are</p>
            {ownerData && (
              <div>
                <p>{ownerData?.data.role}</p>
                <p>Name: {ownerData.data.name}</p>
                <p>Email: {ownerData?.data.email}</p>
                <p>Email: {ownerData?.data.phoneNumber}</p>
                

                
              </div>
            )}
          </div>

          <button onClick={handleSubmit}>Send Mail</button>

        </div>
      )}
    </div>
  )
}

export default ShowDetails
