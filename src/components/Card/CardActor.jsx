import React from 'react';
import noPhoto from '../../images/no-photo.jpg';

export const CardActor = ({ actor }) => {
  return (
    <div className="col-2 me-auto">
      <div className="card">
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
              : noPhoto
          }
          className="card-img-top"
          alt={actor.name}
        />

        <div className="card-body">
          <h5 className="card-title overflow-hidden">{actor.name}</h5>
          <p className="card-text overflow-hidden">{actor.character}</p>
        </div>
      </div>
    </div>
  );
};
