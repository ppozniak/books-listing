import { post } from "axios";

/**
 * A handy function for creating API urls based on host, actual API part and port
 * @param {String} url
 * @return {String}
 */
function createAPIUrl(url) {
  return `${process.env.API_HOST}:${process.env.API_PORT}/api${url}`;
}

const URLS = {
  books: createAPIUrl("/books"),
};

/**
 * Fetches a list of books
 * @return {Promise} a list of books
 */
export function fetchBooks({ page, itemsPerPage, filter } = {}) {
  const body = {
    page,
    itemsPerPage,
  };

  if (filter) {
    body.filters = [{ type: "all", values: [filter] }];
  }

  return post(URLS.books, body);
}
