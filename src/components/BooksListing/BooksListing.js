import React from "react";
import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";

import BookItem from "./BookItem";

const BooksListing = ({ books = [] }) => {
  return books.map((book) => (
    <Col className="mb-3" key={book.id}>
      <BookItem
        title={book.book_title}
        pagesCount={book.book_pages}
        city={book.book_publication_city}
        country={book.book_publication_city}
        year={book.book_publication_year}
        authors={book.book_author}
      />
    </Col>
  ));
};

BooksListing.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksListing;
