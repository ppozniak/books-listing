import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Filter = () => {
  return (
    <Form inline className="ml-md-auto">
      <Form.Control
        type="text"
        placeholder="Filter books"
        className="w-auto mr-2"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filter;
