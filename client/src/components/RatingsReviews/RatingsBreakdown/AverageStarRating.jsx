import React from 'react';
import PropTypes from 'prop-types';
import StarRatingContainer from '../styledComponents/StarRatingContainer';
import AverageStarContainer from '../styledComponents/AvgRatingContainer';

const wholeStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="black" />
  </svg>
);
const quarterStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)" />
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="67%" stopColor="black" stopOpacity="1" />
        <stop offset="67%" stopColor="white" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
const halfStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)" />
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" stopColor="black" stopOpacity="1" />
        <stop offset="50%" stopColor="white" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
const threeQuarterStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)" />
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="40%" stopColor="black" stopOpacity="1" />
        <stop offset="40%" stopColor="white" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
const emptyStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="white" />
  </svg>
);

function getStars(value) {
  const stars = [];
  const [whole, part] = value.toString().split('.');
  for (let i = 0; i < whole; i += 1) stars.push(wholeStar);
  if (part) {
    const parts = Number(`.${part}`);
    if (parts <= 0.33) {
      stars.push(quarterStar);
    } else if (parts <= 0.66 && parts > 0.33) {
      stars.push(halfStar);
    } else {
      stars.push(threeQuarterStar);
    }
  }
  for (let i = Number(whole); i < (part ? 4 : 5); i += 1) stars.push(emptyStar);
  return stars;
}

const AverageStarRating = ({ avg }) => (
  <StarRatingContainer className="average">
    {getStars(avg).map((star) => <AverageStarContainer key={`${avg}_${Math.random()}`}>{star}</AverageStarContainer>)}
    <h3 className="number-rating">{Number.parseFloat(avg).toFixed(2)}</h3>
  </StarRatingContainer>
);

AverageStarRating.propTypes = {
  avg: PropTypes.number,
};

AverageStarRating.defaultProps = {
  avg: 0,
};

export default AverageStarRating;
