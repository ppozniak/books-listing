import React from "react";
import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";

import BookItem from "./BookItem";

const BooksListing = ({ books = [] }) => {
  return books.map((book) => (
    <Col className="mb-3" key={book.id}>
      <BookItem title={book.title} />
    </Col>
  ));
};

BooksListing.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksListing;
