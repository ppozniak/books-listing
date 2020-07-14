import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-bootstrap/Fade";

import PageHeader from "../../components/PageHeader";
import Filter from "../../components/Filter";
import BooksListing from "../../components/BooksListing";
import ListingPagination from "../../components/ListingPagination";

import { getBooks } from "../../api";

const AppContainer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /** Fetches books immediately on mounting */
    async function getBooksOnMount() {
      try {
        setLoading(true);
        const { data } = await getBooks();
        console.log(data);
        setBooks(data.books);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getBooksOnMount();
  }, []);

  return (
    <>
      <PageHeader title="Books 📚">
        <Filter />
      </PageHeader>
      <Container as="main" className="pt-6">
        {loading && (
          <Row>
            <Spinner animation="border" role="status" className="mx-auto my-5">
              <span className="sr-only">Loading books. Please wait</span>
            </Spinner>
          </Row>
        )}
        <Fade in={!loading}>
          <Row xs={1} sm={2} md={3} lg={4} className="mt-3">
            <BooksListing books={books} />
          </Row>
        </Fade>
        <ListingPagination />
      </Container>
    </>
  );
};

export default AppContainer;
