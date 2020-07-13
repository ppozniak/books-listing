import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";

const AppContainer = () => {
  return (
    <>
      {/* Header */}
      <Navbar as="header" bg="dark" variant="dark">
        <Container className="flex-wrap">
          <Navbar.Brand>Books</Navbar.Brand>
          {/* Filter */}
          <Form inline className="ml-md-auto">
            <Form.Control
              type="text"
              placeholder="Filter books"
              className="w-auto mr-2"
            />
            <Button type="submit">Search</Button>
          </Form>
          {/* /Filter */}
        </Container>
      </Navbar>
      {/* /Header */}
      <Container as="main" className="pt-6">
        <Row>
          {/* BooksListing */}
          {[1, 2, 3].map((item) => (
            <Col key={item} sm={12} md={6} lg={4} className="mt-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {/* BooksListing */}
        </Row>
        <Pagination className="mt-3">
          {[1, 2, 3].map((number) => (
            <Pagination.Item key={number} active={number === 2}>
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
};

export default AppContainer;
