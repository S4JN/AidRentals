import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';

import axios from "axios";


const AddForm = ({ setShowForm }) => {

  const { user } = useUserContext();
  const _id = user._id;

  const [formData, setFormData] = useState({
    name: '',
    owner: _id,
    description: '',
    rentalPrice: '',
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

  const handleImageChange = (base64) => {
    setFormData((prevData) => ({
      ...prevData,
      image: base64,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log(formData.image);

    // Here you can implement the logic to send the form data to the server or perform any other actions.

    try {

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const { data } = axios.post("http://localhost:8000/api/v1/inventory/add", formData, config);
      console.log(data);

    } catch (error) {
      console.log(error);
    }


  };

  return (
    <div style={{ backgroundColor: "white", padding: "30px" }}>
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
          <label>Image:</label>
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          /> */}

          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => handleImageChange(base64)}
            />
          </div>


        </div>



        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
