import React, { useState } from 'react';
<<<<<<< HEAD
=======
import FileBase from 'react-file-base64';
import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import "./addForm.css"

import axios from "axios";

const AddForm = ({ setShowForm }) => {
  const { user } = useUserContext();
  const _id = user._id;

  const [currentStep, setCurrentStep] = useState(1);
>>>>>>> 28b7301d234403e2de9bf43dbed178032541d589

const AddForm = () => {
  const [formData, setFormData] = useState({
    name: '',
<<<<<<< HEAD
=======
    owner: _id,
>>>>>>> 28b7301d234403e2de9bf43dbed178032541d589
    description: '',
    price: '',
    life: '',
    tags: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

<<<<<<< HEAD
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(imageFile),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Here you can implement the logic to send the form data to the server or perform any other actions.
  };

  return (
    <div style={{backgroundColor: "white", padding: "30px"}}>
      <h2>Add Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Life:</label>
          <input
            type="text"
            name="life"
            value={formData.life}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name='files'
            accept="image/*"
            onChange={handleImageChange}
            required
            multiple
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
=======
  const handleImageChange = (base64) => {
    setFormData((prevData) => ({
      ...prevData,
      image: base64,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const { data } = await axios.post("http://localhost:8000/api/v1/inventory/add", formData, config);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  const nextStep = () => {
    if (currentStep === 1 && !isStep1Valid()) {
      alert("fill all the fields first")
      console.log("fill fields");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isStep1Valid = () => {
    return (
      formData.name !== '' &&
      formData.description !== '' &&
      formData.rentalPrice !== '' &&
      formData.life !== '' &&
      formData.tags !== ''
    );
  };

 

  return (
    <div style={{ backgroundColor: "white", padding: "30px" }} className='mainBox'>
      <h2>Add Form - Step {currentStep}</h2>
      <form onSubmit={currentStep === 2 ? handleSubmit : (e) => e.preventDefault()}>
        {currentStep === 1 && (
          <>
            {/* Step 1 */}
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="rentalPrice"
                value={formData.rentalPrice}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Life:</label>
              <input
                type="text"
                name="life"
                value={formData.life}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Tags:</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            {/* Step 2 */}
            <div>
              <label>Image:</label>
              <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => handleImageChange(base64)}
                />
              </div>
            </div>
            <div>
              <button onClick={backStep}>Previous</button>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </>
        )}
>>>>>>> 28b7301d234403e2de9bf43dbed178032541d589
      </form>
      <div>
        <button onClick={() => setShowForm(false)}>Close</button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AddForm;
=======
export default AddForm;
>>>>>>> 28b7301d234403e2de9bf43dbed178032541d589
