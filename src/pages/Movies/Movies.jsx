import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMovies } from 'services/movie-api';
import { Card } from 'components/Card/Card';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');
  const page = searchParams.get('page') ?? 1;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value, page: 1 });
    form.reset();
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    if (Number(page) < 1 || !Number(page)) {
      setSearchParams({ query: query, page: 1 });
      return;
    }

    async function getMovies() {
      try {
        setLoading(true);
        const allMovies = await fetchMovies(query, page);
        setMovies(allMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query, page, setSearchParams]);

  if (loading) {
    return <Loader />;
  }

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
        {movies.results?.map(movie => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
      {movies.total_pages > 1 && (
        <Pagination totalPage={movies.total_pages} page={page} query={query} />
      )}
    </div>
  );
};
