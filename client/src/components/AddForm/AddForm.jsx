import React, { useState } from 'react';

const AddForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      </form>
    </div>
  );
};

export default AddForm;