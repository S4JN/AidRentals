import React, { useState } from 'react'
import "./rentForm.css" 
import axios from 'axios'
const RentForm = ({toggleForm,state,toggleShow}) => {

    const uploader=state.owner;

    const hitsOnRent=async()=>{
        axios.get('http://localhost:8000/api/v1/count')
        .then(response => {
            console.log(response.data.count);
        })
        .catch(error=> {
          console.error(error);
        });
    }
    
    
  return (
    <div className="overlay">
        <div>
            <div className="confirmation-form">
                    <h1>Final Confirmation</h1>
                    <h4>Here are the product details</h4>
                    <div className="confirmation-list">
                        <p>
                            <span className="confirmation-key">Product Name:</span> {state.name}
                        </p>
                        <p>
                            <span className="confirmation-key">Price per day:</span> {state.rentalPrice}
                        </p>
                        <p>
                            <span className="confirmation-key">Life:</span> {state.life}
                        </p>
                        <p>
                            <span className="confirmation-key">Location:</span> {state.address}, {state.city}
                        </p>
                        <p>
                            <span className="confirmation-key">City:</span> {state.city}
                        </p>
                
                    </div>
                    <div className='btn'></div>
                    <button type="submit" onClick={()=>{hitsOnRent(); toggleShow();toggleForm();}} >Submit</button>
                    <button onClick={toggleForm} >Close</button>
                    
            </div>
        </div>

    </div>
  )
}

export default RentForm