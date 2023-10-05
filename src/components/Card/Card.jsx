import React from 'react';
import { Link } from 'react-router-dom/dist';
import noPoster from '../../images/no-poster.jpg';

export const Card = ({ movie }) => {
  return (
    <div className="col-3">
      <div className="card">
        <Link to={`movies/${movie.id}`}>
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
          <Link to={`movies/${movie.id}`}>
            <h5 className="card-title">{movie.title}</h5>
          </Link>
          {/* <p className="card-text">{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
};
