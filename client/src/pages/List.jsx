import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchItem from '../components/SearchItem/SearchItem';
// import Pagination from '../components/Pagination/Pagination';
import './css/list.css';
import { searchItems } from '../constants/constant';
import Mail from '../components/MailList/Mail'
import Footer from '../components/Footer'
import { Pagination } from '@mui/material';
import axios from 'axios';



const List = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state?.searchItem);

  const [searchItem, setSearchItem] = useState(location.state?.searchItem);
  const [date, setDate] = useState(
    location.state?.date || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ]
  );
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || {
    adult: '',
    children: '',
    room: '',
  });

  //
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };






  //
  return (
    <div>
      <Navbar />
      <Header type={'list'} />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Name</label>
              <input placeholder={searchItem} type="text" />
            </div>
            <div className="lsItem">
              <label>Renting Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </span>
              <div className="tttt">
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per day</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {inventories.map((item) => (
              
              <SearchItem
                key={item._id}
                item={item}
              />
            ))}

            {/* <ul>
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
            </ul> */}



          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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

      <Mail />
      <Footer />

    </div>
  );
};

export default List;
