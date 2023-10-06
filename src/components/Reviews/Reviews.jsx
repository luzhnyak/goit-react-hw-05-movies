import { CardReview } from 'components/Card/CardReview';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/movie-api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      const _reviews = await fetchMovieReviewsById(movieId);
      setReviews(_reviews.results);
    }

    getReviewsMovie();
  }, [movieId]);

  return (
    <div>
      <h3 className="mt-3 mb-3">Reviews</h3>

      <div className="row g-2">
        {reviews.map(review => {
          return <CardReview review={review} key={review.id} />;
        })}
      </div>
    </div>
  );
};
