import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import './starRating.scss';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStarEmpty} />
      ))}
    </div>
  );
};

export default StarRating;
