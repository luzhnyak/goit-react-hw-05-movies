// import { FaTimes } from 'react-icons/fa';
// import { StyledLink } from './Header.styled';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="">
          Movies Finder
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="products">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
