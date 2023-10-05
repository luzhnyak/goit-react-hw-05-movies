import React from 'react';
import { Link } from 'react-router-dom/dist';

export const Card = ({ movie }) => {
  return (
    <div className="col-3">
      <div className="card">
        <Link to={`movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            className="card-img-top"
            alt={movie.title}
          />
        </Link>
        <div className="card-body">
          <Link to={`movies/${movie.id}`}>
            <h5 className="card-title">{movie.title}</h5>
          </Link>
          {/* <p className="card-text">{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
};
