import React from 'react';
type Pagination = {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
export const Pagination = ({ nPages, currentPage, setCurrentPage }: Pagination) => {
  const pages = Array.from(Array(nPages + 1).keys()).slice(1);

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page} className={`page-item ${currentPage == page ? 'active' : ''} `}>
            <a onClick={() => setCurrentPage(page)} className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
