import { useState } from 'react';
import "./addForm.css"
import axios from 'axios'
import { useUserContext } from '../../context/UserContext';

const AddForm = ({ setShowForm, showForm }) => {
  const { user } = useUserContext();



  const [formData, setFormData] = useState({
    name: '',
    
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
    // setShowForm(false)
    console.log(formData);
    try {

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      
      const { data } = axios.post("http://localhost:8000/api/v1/inventory/add", formData, config);
      console.log(data?.success);
    } catch (error) {
      console.log(error);
    }


  };

  const handleClick = () => {
    console.log("clicked");

    setShowForm(false)

  }


  return (
    <div className='box'>
      <form onSubmit={handleSubmit} className='formContainer'>
        <button className='closebtn' onClick={handleClick}>X</button>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          // required
          />
        </label>

       
        <label>
          Images
          <input
            type="file"
            name="file"
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          // required
          />
        </label>

        <label>
          Rental Price:
          <input
            type="text"
            name="rentalPrice"
            value={formData.rentalPrice}
            onChange={handleChange}
          // required
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
          // required
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

export default AddForm;


