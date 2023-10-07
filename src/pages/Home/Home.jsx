import { useState } from 'react';
import { useEffect } from 'react';

import { fetchTopMovies } from 'services/movie-api';
import { Card } from 'components/Card/Card';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const topMovies = await fetchTopMovies();
        setMovies(topMovies.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="row g-4">
      {movies.map(movie => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Home;