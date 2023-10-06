import React from 'react';
import { Link, useLocation } from 'react-router-dom/dist';
import noPoster from '../../images/no-poster.jpg';

export const Card = ({ movie }) => {
  const location = useLocation();

  return (
    <div className="col-3">
      <div className="card">
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : noPoster
            }
            className="card-img-top"
            alt={movie.title}
          />
        </Link>
        <div className="card-body">
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h5 className="card-title">{movie.title}</h5>
          </Link>
          {/* <p className="card-text">{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
};
