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
    justifyContent: 'center'
  },
  'pagination-item': {
    margin: '0 0.5rem 0 0.5rem'
  },
  'pagination-item-link': {
    color: 'black',
    textDecoration: 'none'
  },
  active: {
    fontWeight: 'bolder',
    fontSize: '1.5rem'
  }
});

export const Pagination = ({ nPages, currentPage, setCurrentPage }: Pagination) => {
  const pages = Array.from(Array(nPages + 1).keys()).slice(1);
  const styles = paginationStyles();
  return (
    <nav>
      <ul className={styles['pagination-container']}>
        {pages.map((page) => (
          <li
            key={page}
            className={`${styles['pagination-item']} ${currentPage === page ? styles.active : ''} `}
          >
            <a
              onClick={() => setCurrentPage(page)}
              className={styles['pagination-item-link']}
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
