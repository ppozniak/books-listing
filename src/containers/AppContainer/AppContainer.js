import React, { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

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
const FILTER_DEBOUNCE_MS = 300;

const AppContainer = () => {
  const params = new URLSearchParams(history.location.search);
  const queryPage = params.get("page");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(Number(queryPage) || 1);
  const [filter, setFilter] = useState();
  const [numberOfPages, setNumberOfPages] = useState();

  useEffect(() => {
    /** Fetches list of  books */
    async function getBooks() {
      try {
        setLoading(true);
        const { data } = await fetchBooks({
          itemsPerPage: BOOKS_PER_PAGE,
          page: currentPage,
          filter,
        });

        const newNumberOfPages = Math.ceil(data.count / BOOKS_PER_PAGE);
        setNumberOfPages(newNumberOfPages);

        // Handling of query param being bigger than max number of pages
        if (currentPage > newNumberOfPages) {
          setCurrentPage(newNumberOfPages);
          history.push(`?page=${newNumberOfPages}`);
        }

        setBooks(data.books);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getBooks();
  }, [currentPage, BOOKS_PER_PAGE, filter]);

  const handlePageSelect = (pageNumber) => {
    history.push(`?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = useMemo(() => {
    const debounced = debounce((event) => {
      setFilter(event.target.value);
      setCurrentPage(1);
      history.push(`?page=1`);
    }, FILTER_DEBOUNCE_MS);

    return (event) => {
      event.persist();
      return debounced(event);
    };
  });

  return (
    <>
      <PageHeader title="Books 📚">
        <Filter onChange={handleFilterChange} />
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

        {!loading &&
          filter &&
          !books.length &&
          "No items found for given search."}

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
