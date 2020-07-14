import React from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const BookItem = ({ title, pagesCount, city, country, year, authors }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <OverlayTrigger placement="top" overlay={<Tooltip>{title}</Tooltip>}>
          <Card.Title title={title} className="text-truncate">
            {title}
          </Card.Title>
        </OverlayTrigger>

        <Card.Text>
          It has {pagesCount} pages, was written by {authors.join(" and ")} in{" "}
          {city}, {country} dated {year}.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  pagesCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  authors: PropTypes.array.isRequired,
};

export default BookItem;
