import React from 'react';

export const CardActor = ({ actor }) => {
  return (
    <div className="col-2">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
          className="card-img-top"
          alt={actor.name}
        />

        <div className="card-body">
          <h5 className="card-title">{actor.name}</h5>
          <p className="card-text">{actor.character}</p>
        </div>
      </div>
    </div>
  );
};
