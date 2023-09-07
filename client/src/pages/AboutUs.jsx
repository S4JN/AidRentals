// import React, { useState, useEffect, useMemo } from 'react';

// import axios from 'axios';

// const AboutUs = () => {
//   const [inventories, setInventories] = useState([]);

//   const config = useMemo(() => ({
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   }), []); // Empty dependency array means it won't change during component's lifecycle

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/v1/inventory/get', config)
//       .then(res => {
//         setInventories(res.data.inventories);
//         console.log(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [config]);

//   return (
//     <div>
//       <Navbar />
//       <Header type="list" />
//       <div className="team-card">
//         {/* Rest of the About Us content */}
//       </div>
//       <div>
//         <h2>All Inventories</h2>
//         <ul>
//           {inventories.map(inventory => (
//             <li key={inventory.id}>
//               {/* Display inventory information here */}
//               {/* For example: */}
//               <p>{inventory.name}</p>
//               <p>{inventory.description}</p>
//               {inventory.image.map((im, index) => (
//                 <img key={index} src={im} alt={`Inventory ${index}`} />
//               ))}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// AboutUs.jsx
// AboutUs.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import "./css/aboutus.css";
import { Pagination } from '@mui/material';

const AboutUs = () => {
  const [inventories, setInventories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getInventory = async (page) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.get(`http://localhost:8000/api/v1/inventory/get?page=${page}`, config);
      setInventories(response.data.inventories);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching inventories:', error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    const page = pageParam ? parseInt(pageParam) : 1;

    getInventory(page);
    setCurrentPage(page);
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    window.history.pushState({ page }, '', url);
    getInventory(page);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <h1>Inventory List</h1>
      <ul>
        {inventories.map((item) => (
          <li key={item._id}>
            <p>Name: {item.name}, life: {item.life} </p>
            <p>Owner: {item.owner} , Price: {item.rentalPrice} </p>
            <p>{item.description}</p>
            {item.image.map((im, index) => (
              <img key={index} src={im} alt={`Inventory ${index}`} />
            ))}

          </li>
        ))}
      </ul>
      <Pagination
        color="primary"
        size="large"
        showFirstButton 
        showLastButton
        boundaryCount={1}
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default AboutUs;


