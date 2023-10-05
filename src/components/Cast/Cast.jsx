import { CardActor } from 'components/Card/CardActor';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCreditsById } from 'services/movie-api';

export const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function getCreditsMovie() {
      const _credits = await fetchMovieCreditsById(movieId);
      setCredits(_credits.cast);
    }

    getCreditsMovie();
  }, [movieId]);
  return (
    <div>
      <h2>Cast</h2>

      <div className="row g-2">
        {credits.map(actor => {
          return <CardActor actor={actor} />;
        })}
      </div>
    </div>
  );
};
