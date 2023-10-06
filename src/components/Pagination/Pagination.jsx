import React from 'react';

export const Pagination = ({ totalPage, page }) => {
  const items = [];
  for (let i = 0; i < totalPage; i++) {
    items.push(i + 1);
  }

  return (
    <nav className="mt-4 m-auto">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {items.map(item => {
          return (
            <li
              className={page === item ? 'page-item active' : 'page-item'}
              key={item}
            >
              <a className="page-link" href="/">
                {item}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

// export default Pagination;
