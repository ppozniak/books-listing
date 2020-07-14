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
export function getBooks() {
  return post(URLS.books);
}