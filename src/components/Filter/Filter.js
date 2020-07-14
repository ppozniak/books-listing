import React from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Filter = ({ onChange = () => {} }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Label htmlFor="filter-input" srOnly>
        Filter books
      </Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>🔎</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          onChange={onChange}
          id="filter-input"
          placeholder="Search for books..."
        />
      </InputGroup>
    </Form>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
