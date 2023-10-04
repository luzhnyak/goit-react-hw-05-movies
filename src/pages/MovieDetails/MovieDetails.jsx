import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMovieById } from 'services/movie-api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const topMovies = await fetchMovieById(movieId);
      setMovie(topMovies);
    }

    getMovie();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
      <div>{movie.overview}</div>
      <ul>
        <li>
          <Link to="cast">Get to know the cast</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
