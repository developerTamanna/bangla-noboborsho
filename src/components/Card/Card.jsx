import React from 'react';

const Card = ({ card }) => {
  const { caption, image_url, description } = card;

  return (
    <div>
        
        <div className="card bg-base-100 shadow-sm">
      <figure className="h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image_url}
          alt={caption}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{caption}</h2>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;
