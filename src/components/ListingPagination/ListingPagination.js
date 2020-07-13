import React from "react";

import Pagination from "react-bootstrap/Pagination";

const ListingPagination = () => {
  return (
    <Pagination>
      {[1, 2, 3].map((number) => (
        <Pagination.Item key={number} active={number === 2}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default ListingPagination;
