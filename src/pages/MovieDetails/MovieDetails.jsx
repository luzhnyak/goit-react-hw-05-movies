import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { productId } = useParams();
  return (
    <div>
      <div>Now showing product with id - {productId}</div>
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
