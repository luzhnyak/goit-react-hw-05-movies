import React from 'react';

export const CardReview = ({ review }) => {
  return (
    <div>
      <div className="card">
        <h5 className="card-header">{review.author}</h5>
        <div className="card-body">
          <p className="card-text">{review.content}</p>
        </div>
      </div>
    </div>
  );
};

// export default CardReview;
