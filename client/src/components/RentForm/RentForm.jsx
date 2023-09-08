import React from 'react'
import "./rentForm.css" 
const RentForm = ({toggleForm,state}) => {

    
  return (
    <div className="overlay">
                        <div>
                        <form className="confirmation-form">
                        <button onClick={toggleForm} className='close'>X</button>
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
                                <span className="confirmation-key">Location:</span> {state.address}, {state.owner}
                            </li>
                            <li>
                                <span className="confirmation-key">City:</span> {state.city}
                            </li>
                            
                        </ul>
                        
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                    </div>
  )
}

export default RentForm