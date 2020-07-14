import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

const PageHeader = ({ children, title }) => {
  return (
    <Navbar as="header" bg="dark" variant="dark">
      <Container className="flex-wrap">
        <Navbar.Brand>{title}</Navbar.Brand>
        {children}
      </Container>
    </Navbar>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default PageHeader;
