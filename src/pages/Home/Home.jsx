import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom/dist';
import { fetchTopMovies } from 'services/movie-api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const topMovies = await fetchTopMovies();
      console.log(topMovies);
      setMovies(topMovies.results);
    }
    getMovies();
  }, []);

  return (
    <div className="row">
      {movies.map(movie => {
        return (
          <div className="card col-3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card-img-top"
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              {/* <p className="card-text">{movie.overview}</p> */}
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
