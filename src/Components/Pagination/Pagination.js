import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination({ pageCount, setCurrentPage, currentPage }) {
  const handleOnPageChange = (page) => {
    if (page) {
      setCurrentPage(page);
    }
  };
  console.log("rendering");

  return (
    <div className="pagination-container">
      <ReactPaginate
        pageCount={pageCount}
        forcePage={currentPage === 1 ? 0 : currentPage - 1}
        previousLabel="prev"
        nextLabel="next"
        onPageChange={(e) => handleOnPageChange(e.selected + 1)}
        containerClassName="container"
        previousClassName="btn"
        nextClassName="btn"
        pageClassName="page"
        activeClassName="page active-page"
      />
    </div>
  );
}

export default Pagination;
