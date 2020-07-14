import React from "react";
import PropTypes from "prop-types";

import Pagination from "react-bootstrap/Pagination";

const ListingPagination = ({
  numberOfPages = 0,
  activePage,
  onPageSelect,
  activePageSiblingsVisible = 2,
}) => {
  const allPagesArray = new Array(numberOfPages)
    .fill(null)
    .map((_, index) => index + 1);

  const activePageIndex = allPagesArray.findIndex(
    (number) => number === activePage
  );

  const showLeftEllipsis = activePage > activePageSiblingsVisible + 2;

  const showRightEllipsis =
    activePage <= numberOfPages - activePageSiblingsVisible - 2;

  const startingIndex = showLeftEllipsis
    ? activePageIndex - activePageSiblingsVisible
    : 0;

  const endingIndex = showRightEllipsis
    ? activePageIndex + activePageSiblingsVisible + 1
    : numberOfPages;

  const visiblePageNumbers = allPagesArray.slice(startingIndex, endingIndex);

  return (
    <Pagination size="sm">
      {showLeftEllipsis && (
        <>
          <Pagination.Item onClick={() => onPageSelect(1)}>1</Pagination.Item>
          <Pagination.Ellipsis disabled />
        </>
      )}
      {visiblePageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={activePage === pageNumber}
          onClick={() => onPageSelect(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
      {showRightEllipsis && (
        <>
          <Pagination.Ellipsis disabled />
          <Pagination.Item onClick={() => onPageSelect(numberOfPages)}>
            {numberOfPages}
          </Pagination.Item>
        </>
      )}
    </Pagination>
  );
};

ListingPagination.propTypes = {
  numberOfPages: PropTypes.number,
  activePage: PropTypes.number,
  onPageSelect: PropTypes.func,
  activePageSiblingsVisible: PropTypes.number,
};

export default ListingPagination;
