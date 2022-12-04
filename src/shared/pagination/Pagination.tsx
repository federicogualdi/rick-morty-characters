import React from 'react';
import { createUseStyles } from 'react-jss';
type Pagination = {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const paginationStyles = createUseStyles({
  'pagination-container': {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0
  },
  'pagination-item': {
    margin: '0 0.5rem 0 0.5rem'
  },
  'pagination-item-link': {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  active: {
    fontWeight: 'bolder',
    fontSize: '1.5rem'
  },
  'pagination-item-dots': {
    color: 'white'
  }
});

const siblingCount = 1;

const leftSiblingIndex = (currentPage: number) => Math.max(currentPage - siblingCount, 1);
const shouldShowLeftDots = (currentPage: number) => leftSiblingIndex(currentPage) > siblingCount;

const rightSiblingIndex = (currentPage: number, pages: number[]) =>
  Math.min(currentPage + siblingCount, pages.length);
const shouldShowRightDots = (currentPage: number, pages: number[]) =>
  rightSiblingIndex(currentPage, pages) < pages.length - siblingCount;

const pageToRender = (pages: number[], currentPage: number) => {
  const pageToRender = new Set<number>();
  if (pages.length > 0) {
    pageToRender.add(pages[0]);
    pages
      .slice(leftSiblingIndex(currentPage) - 1, rightSiblingIndex(currentPage, pages))
      .forEach((p) => pageToRender.add(p));
    pageToRender.add(pages[pages.length - 1]);
  }
  return pageToRender;
};

const Pagination = ({ nPages, currentPage, setCurrentPage }: Pagination) => {
  const pages = Array.from(Array((nPages ?? 0) + 1).keys()).slice(1);

  const styles = paginationStyles();

  return (
    <nav>
      <ul className={styles['pagination-container']}>
        {Array.from(pageToRender(pages, currentPage)).map((page, index, array) => (
          <React.Fragment key={page}>
            {index === array.length - 1 && shouldShowRightDots(currentPage, pages) && (
              <span className={styles['pagination-item-dots']}>...</span>
            )}
            <li
              className={`${styles['pagination-item']} ${
                currentPage === page ? styles.active : ''
              } `}
            >
              <a onClick={() => setCurrentPage(page)} className={styles['pagination-item-link']}>
                {page}
              </a>
            </li>
            {index === 0 && shouldShowLeftDots(currentPage) && (
              <span className={styles['pagination-item-dots']}>...</span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
