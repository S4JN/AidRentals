import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchItem from '../components/SearchItem/SearchItem';
import Pagination from '../components/Pagination/Pagination';
import './css/list.css';

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

  // Sample data for searchItems (replace this with your actual data)
  const searchItems = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 100 },
    { id: 3, name: 'Item 3', price: 100 },
    { id: 4, name: 'Item 4', price: 100 },
    { id: 5, name: 'Item 5', price: 100 },
    { id: 6, name: 'Item 6', price: 100 },
    { id: 7, name: 'Item 7', price: 100 },
    { id: 8, name: 'Item 8', price: 100 },
    { id: 9, name: 'Item 9', price: 100 },
    { id: 10, name: 'Item 10', price: 100 },
    { id: 11, name: 'Item 11', price: 100 },
    { id: 12, name: 'Item 12', price: 100 },
    { id: 13, name: 'Item 13', price: 100 },
    { id: 14, name: 'Item 14', price: 100 },
    { id: 15, name: 'Item 15', price: 100 },
    { id: 16, name: 'Item 16', price: 100 },
    { id: 17, name: 'Item 17', price: 100 },
    { id: 18, name: 'Item 18', price: 100 },
    { id: 19, name: 'Item 19', price: 100 },
    { id: 20, name: 'Item 20', price: 100 },
    { id: 21, name: 'Item 21', price: 100 },
    { id: 22, name: 'Item 22', price: 100 },
    { id: 23, name: 'Item 23', price: 100 },
    { id: 24, name: 'Item 24', price: 100 },
    { id: 25, name: 'Item 25', price: 100 },
    { id: 26, name: 'Item 26', price: 100 },
    { id: 27, name: 'Item 27', price: 100 },
    { id: 28, name: 'Item 28', price: 100 },
    { id: 29, name: 'Item 29', price: 100 },
    { id: 30, name: 'Item 30', price: 100 },
    { id: 31, name: 'Item 31', price: 100 },
    { id: 32, name: 'Item 32', price: 100 },
    { id: 33, name: 'Item 33', price: 100 },
    { id: 34, name: 'Item 34', price: 100 },
    { id: 35, name: 'Item 35', price: 100 },
    { id: 36, name: 'Item 36', price: 100 },
    { id: 37, name: 'Item 37', price: 100 },
    { id: 38, name: 'Item 38', price: 100 },
    { id: 39, name: 'Item 39', price: 100 },
    { id: 40, name: 'Item 40', price: 100 },
    { id: 41, name: 'Item 41', price: 100 },
    { id: 42, name: 'Item 42', price: 100 },
    { id: 43, name: 'Item 43', price: 100 },
    { id: 44, name: 'Item 44', price: 100 },
    { id: 45, name: 'Item 45', price: 100 },
    { id: 46, name: 'Item 46', price: 100 },
    { id: 47, name: 'Item 47', price: 100 },
    { id: 48, name: 'Item 48', price: 100 },
    { id: 49, name: 'Item 49', price: 100 },
    { id: 50, name: 'Item 50', price: 100 },
  ];
  

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
    </div>
  );
};

export default List;
