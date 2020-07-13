import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PageHeader from "../../components/PageHeader";
import Filter from "../../components/Filter";
import BooksListing from "../../components/BooksListing";
import ListingPagination from "../../components/ListingPagination";

const BOOKS_MOCK = [
  {
    id: 1,
    title: "POTATOES 101",
  },
  {
    id: 3,
    title: "Henry Butter and a sparkling gems",
  },
  {
    id: 4,
    title: "Henry Butter and a sparkling gems",
  },
  {
    id: 5,
    title: "Henry Butter and a sparkling gems",
  },
  {
    id: 6,
    title: "Henry Butter and a sparkling gems",
  },
];

const AppContainer = () => {
  return (
    <>
      <PageHeader title="Books 📚">
        <Filter />
      </PageHeader>
      <Container as="main" className="pt-6">
        <Row xs={1} sm={2} md={3} lg={4} className="mt-3">
          <BooksListing books={BOOKS_MOCK} />
        </Row>
        <Row className="mt-5">
          <ListingPagination />
        </Row>
      </Container>
    </>
  );
};

export default AppContainer;
