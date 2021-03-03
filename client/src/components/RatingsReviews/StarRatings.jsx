import React, { useState } from 'react';
import StarRatingContainer from './styledComponents/StarRatingContainer';
import IndividualStarContainer from './styledComponents/IndividualStarContainer';

const wholeStar = <svg width="300" height="300">
  <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="black"/>
</svg>;
const quarterStar = <svg width="300" height="300">
<polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)"/> <defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="40%" stopColor="black" stopOpacity="1" />
    <stop offset="40%" stopColor="white" stopOpacity="1" />
  </linearGradient>
</defs>
</svg>;
const halfStar = <svg width="300" height="300">
<polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)"/> <defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="50%" stopColor="black" stopOpacity="1" />
    <stop offset="50%" stopColor="white" stopOpacity="1" />
  </linearGradient>
</defs>
</svg>;
const threeQuarterStar = <svg width="300" height="300">
<polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)"/> <defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="67%" stopColor="black" stopOpacity="1" />
    <stop offset="67%" stopColor="white" stopOpacity="1" />
  </linearGradient>
</defs>
</svg>;
const emptyStar = <svg width="300" height="300">
<polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="white"/>
</svg>;

function getStars(value) {
  const stars = [];
  let [whole, part] = parseFloat(value).toString().split('.');
  for (let i = 0; i < whole; i += 1) stars.push(wholeStar);
  if (part) {
    part = parseFloat(`.${part}`);
    if (part <= 0.33) {
      stars.push(quarterStar);
    }
    if (part <= 0.66) {
      stars.push(halfStar);
    } else {
      stars.push(threeQuarterStar);
    }
  }
  for (let i = whole; i < (part ? 4 : 5); i += 1) stars.push(emptyStar);
  return stars;
}

const Rating = ({ avg }) => <StarRatingContainer>{getStars(avg).map((star) => <IndividualStarContainer>{star}</IndividualStarContainer>)}</StarRatingContainer>;

export default Rating;
