import { useState } from 'react';
import "./css/addForm.css"
import axios from 'axios'

const AddForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    file:'',
    description: '',
    rentalPrice: '',
    life: '',
    isRented: false,
    tags: '',
    rating: '3',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    sendDataToServer();
  };

  const sendDataToServer = () => {
    // Replace 'your_endpoint_url' with the actual URL to your server's endpoint
    axios.post('/add', formData)
      .then((response) => {
        // Handle the response from the server (if needed)
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors (if any)
        console.error('Error:', error);
      });
  };


  return (
    <div>
        <form onSubmit={handleSubmit} className='formContainer'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Owner:
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Images
        <input
          type="file"
          name="files"
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Rental Price:
        <input
          type="text"
          name="rentalPrice"
          value={formData.rentalPrice}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Life:
        <input
          type="text"
          name="life"
          value={formData.life}
          onChange={handleChange}
        />
      </label>

      <label>
        Is Rented:
        <input
          type="checkbox"
          name="isRented"
          checked={formData.isRented}
          onChange={handleChange}
        />
      </label>

      <label>
        Tags (comma-separated):
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Rating:
        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default AddForm ;