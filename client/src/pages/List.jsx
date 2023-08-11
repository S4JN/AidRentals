import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchItem from '../components/SearchItem/SearchItem';
import Pagination from '../components/Pagination/Pagination';
import './css/list.css';
import { searchItems } from '../constants/constant';
import Mail from '../components/MailList/Mail'
import Footer from '../components/Footer'


const List = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state?.searchItem);

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




  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the array of SearchItems to display only the items for the current page
  const currentItems = searchItems.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update the hash fragment in the URL with the current page number
    // navigate(`${location.pathname}#${pageNumber}`);
  };





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
            {currentItems.map((item) => (
              <SearchItem key={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={searchItems.length}
        currentPage={currentPage}
        paginate={paginate}
      />

      <Mail />
      <Footer />
      
    </div>
  );
};

export default List;
