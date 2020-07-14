import React from "react";
import ListingPagination from "./ListingPagination";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

/**
 * Test where you can specify what numbers should be visible and what not
 * @param {Object} - config
 */
function testVisiblePageNumbers({
  activePage,
  numberOfPages = 100,
  activePageSiblingsVisible = 2,
  expectedNumbers = [],
  unexpectedNumbers = [],
} = {}) {
  const { queryByText, getByText } = render(
    <ListingPagination
      activePage={activePage}
      activePageSiblingsVisible={activePageSiblingsVisible}
      numberOfPages={numberOfPages}
    />
  );

  expectedNumbers.forEach((number) => {
    expect(getByText(number.toString())).toBeInTheDocument();
  });

  unexpectedNumbers.forEach((number) => {
    expect(queryByText(number.toString())).not.toBeInTheDocument();
  });
}

describe("<ListingPagination />", () => {
  it("should render next pages for the first page", () => {
    testVisiblePageNumbers({
      activePage: 1,
      activePageSiblingsVisible: 2,
      expectedNumbers: [1, 2, 3, 100],
      unexpectedNumbers: [4, 5, 98, 99],
    });
  });

  it("should hide numbers if it's too far away from the start", () => {
    testVisiblePageNumbers({
      activePage: 5,
      activePageSiblingsVisible: 2,
      expectedNumbers: [1, 3, 4, 5, 6, 7, 100],
      unexpectedNumbers: [2, 8, 98, 99],
    });
  });

  it("should show previous and next pages from the active page", () => {
    testVisiblePageNumbers({
      activePage: 50,
      activePageSiblingsVisible: 3,
      expectedNumbers: [1, 47, 48, 49, 50, 51, 52, 53, 100],
      unexpectedNumbers: [2, 46, 54, 99],
    });
  });

  it("should show previous pages for the last page", () => {
    testVisiblePageNumbers({
      activePage: 100,
      activePageSiblingsVisible: 5,
      expectedNumbers: [1, 95, 96, 97, 98, 99, 100],
      unexpectedNumbers: [2, 94],
    });
  });

  it("should hide almost last number if it's outside range", () => {
    testVisiblePageNumbers({
      activePage: 93,
      activePageSiblingsVisible: 5,
      expectedNumbers: [1, 93, 94, 95, 96, 97, 98, 100],
      unexpectedNumbers: [2, 99],
    });
  });
});
