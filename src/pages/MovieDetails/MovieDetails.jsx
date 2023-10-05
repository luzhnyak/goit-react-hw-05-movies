import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMovieById } from 'services/movie-api';
import noPoster from '../../images/no-poster.jpg';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const topMovies = await fetchMovieById(movieId);
      setMovie(topMovies);
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : noPoster
            }
            className="card-img-top"
            alt={movie.title}
          />
        </div>
        <div className="col-8">
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <div>
            {movie.genres &&
              movie.genres.map(genre => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
          </div>
        </div>
      </div>

      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <Link className="nav-link" to="cast">
            Get to know the cast
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="reviews">
            Go through the reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
