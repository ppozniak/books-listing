import React from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";

const BookItem = ({ title }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookItem;
