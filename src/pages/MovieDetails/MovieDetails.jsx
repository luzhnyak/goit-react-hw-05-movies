import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';

import { fetchMovieById } from 'services/movie-api';
import { Back } from 'components/Back/Back';
import { Loader } from 'components/Loader/Loader';

import noPoster from '../../images/no-poster.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const searchMovie = await fetchMovieById(movieId);
        setMovie(searchMovie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Back />
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
          <p>User Score: {Math.round(movie.vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <div>
            {movie.genres &&
              movie.genres.map(genre => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
          </div>
        </div>
      </div>
      <h2 className="mt-3 mb-3">Additional Information</h2>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="cast">
            Cast
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      {/* <ul className="nav flex-column">
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
      </ul> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
