import { Card } from 'components/Card/Card';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/movie-api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
  };

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      const topMovies = await fetchMovies(query, 1);
      setMovies(topMovies.results);
    }
    getMovies();
  }, [query]);

  return (
    <div>
      <form className="d-flex mb-3" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="query"
          // value={query}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="row g-4">
        {movies.map(movie => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
      <Pagination page={5} totalPage={10} />
    </div>
  );
};
