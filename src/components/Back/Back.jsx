import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Back = () => {
  const location = useLocation();

  return (
    <div className="mb-3">
      <Link to={location.state?.from} className="btn btn-outline-dark">
        Go back
      </Link>
    </div>
  );
};

// export export default Back
//
