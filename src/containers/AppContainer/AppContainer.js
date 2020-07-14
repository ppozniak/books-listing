import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-bootstrap/Fade";

import PageHeader from "../../components/PageHeader";
import Filter from "../../components/Filter";
import BooksListing from "../../components/BooksListing";
import ListingPagination from "../../components/ListingPagination";

import { fetchBooks } from "../../api";

const BOOKS_PER_PAGE = 8;

const AppContainer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();

  useEffect(() => {
    /** Fetches books immediately on mounting */
    async function getBooksOnMount() {
      try {
        setLoading(true);
        const { data } = await fetchBooks({
          itemsPerPage: BOOKS_PER_PAGE,
          page: currentPage,
        });

        setNumberOfPages(Math.ceil(data.count / BOOKS_PER_PAGE));
        setBooks(data.books);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getBooksOnMount();
  }, [currentPage, BOOKS_PER_PAGE]);

  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PageHeader title="Books 📚">
        <Filter />
      </PageHeader>
      <Container as="main" className="pt-6">
        <Fade in={!loading}>
          <Row xs={1} sm={2} md={3} lg={4} className="mt-3">
            <BooksListing books={books} />
          </Row>
        </Fade>

        {loading && (
          <Row>
            <Spinner animation="border" role="status" className="mx-auto my-5">
              <span className="sr-only">Loading books. Please wait</span>
            </Spinner>
          </Row>
        )}

        <ListingPagination
          numberOfPages={numberOfPages}
          activePage={currentPage}
          onPageSelect={handlePageSelect}
          activePageSiblingsVisible={3}
        />
      </Container>
    </>
  );
};

export default AppContainer;
