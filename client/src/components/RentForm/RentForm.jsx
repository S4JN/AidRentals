import React, { useState } from 'react'
import "./rentForm.css" 

const RentForm = ({toggleForm,state,toggleShow}) => {
    
    const uploader=state.owner;
    
    
  return (
    <div className="overlay">
        <div>
            <div className="confirmation-form">
                <button onClick={toggleForm} className='closeeee'>X</button>
                    <h1>Final Confirmation</h1>
                    <h4>Here are the product details</h4>
                    <ul className="confirmation-list">

                        <li>
                            <span className="confirmation-key">Product Name:</span> {state.name}
                        </li>
                        <li>
                            <span className="confirmation-key">Price per day:</span> {state.rentalPrice}
                        </li>
                        <li>
                            <span className="confirmation-key">Life:</span> {state.life}
                        </li>
                        <li>
                            <span className="confirmation-key">Location:</span> {state.address}, {state.city}
                        </li>
                        <li>
                            <span className="confirmation-key">City:</span> {state.city}
                        </li>
                
                    </ul>
                        
                <button type="submit" onClick={()=>{toggleShow();toggleForm();}} >Submit</button>
            </div>
        </div>

    </div>
  )
}

export default RentForm