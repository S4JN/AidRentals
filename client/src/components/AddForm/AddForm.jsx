import { useState } from 'react';
import "./addForm.css"
import axios from 'axios'
import { useUserContext } from '../../context/UserContext';

const AddForm = ({ setShowForm, showForm,handleFormClose }) => {
  const { user } = useUserContext();



  const [formData, setFormData] = useState({
    name: '',
    file: null,
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
    handleFormClose();
  };
  


  return (
    <div className='box'>
        <button className='closebtn' onClick={handleClick}>X</button>
      <form onSubmit={handleSubmit} className='formContainer'>
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

<<<<<<< HEAD
export default AddForm;
=======
export default AddForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const InventoryForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     owner: '',
//     description: '',
//     rentalPrice: '',
//     life: '',
//     isRented: false,
//     tags: '',
//     rating: '3',
//     images: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (event) => {
//     const imageFiles = event.target.files;
//     setFormData({ ...formData, images: imageFiles });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === 'images') {
//         for (let i = 0; i < value.length; i++) {
//           data.append('images', value[i]);
//         }
//       } else {
//         data.append(key, value);
//       }
//     });

    

//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       };
//       await axios.post('http://localhost:8000/api/v1/inventory/add', data,config, {
//         headers: { 'Content-Type': 'multipart/form-data' },
        
//       });
//       alert('Item added successfully!');
//       // Reset the form after successful submission
//       setFormData({
//         name: '',
//         owner: '',
//         description: '',
//         rentalPrice: '',
//         life: '',
//         isRented: false,
//         tags: '',
//         rating: '3',
//         images: [],
//       });
//     } catch (error) {
//       console.error(error);
//       alert('Error adding the item.');
//     }
//   };

//   return (
//     <div  className='srajan'>
//       <h2>Add Inventory Item</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Owner:</label>
//           <input
//             type="text"
//             name="owner"
//             value={formData.owner}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Rental Price:</label>
//           <input
//             type="text"
//             name="rentalPrice"
//             value={formData.rentalPrice}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Life:</label>
//           <input
//             type="text"
//             name="life"
//             value={formData.life}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Tags (comma-separated):</label>
//           <input
//             type="text"
//             name="tags"
//             value={formData.tags}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Rating:</label>
//           <select name="rating" value={formData.rating} onChange={handleInputChange}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </div>
//         <div>
//           <label>Images:</label>
//           <input
//             type="file"
//             name="images"
//             multiple
//             onChange={handleImageChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default InventoryForm;
>>>>>>> ad79c41ef07377f383954f774b5bd615409ca00f
