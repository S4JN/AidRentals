import React from 'react';
import './pagination.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item">
          <button className="page-link" onClick={() => paginate(currentPage - 1)}>
            {'<'}
          </button>
        
        </li>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${currentPage === number ? 'active' : ''}`}
        >
          <button className="page-link" onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
      {currentPage < pageNumbers.length && (
        <li className="page-item">
          <button className="page-link" onClick={() => paginate(currentPage + 1)}>
          {">"}
          </button>
         
        </li>
      )}
    </ul>
  );
};

export default Pagination;
