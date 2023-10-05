import { Card } from 'components/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTopMovies } from 'services/movie-api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const topMovies = await fetchTopMovies();
      setMovies(topMovies.results);
    }
    getMovies();
  }, []);

  return (
    <div className="row g-4">
      {movies.map(movie => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
