import React from 'react';
import ReactStars from 'react-rating-stars-component';
import RatingsContainer from './styledComponents/RatingsContainer';
import Rating from './StarRatings';
import StarRatingContainer from './styledComponents/StarRatingContainer';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      average: 2.0,
    };
    // this.starRating = this.starRating.bind(this);
    this.ratingsBreakdown = this.ratingsBreakdown.bind(this);
  }

  ratingsBreakdown() {
    const { reviews } = this.state;
    return (
      <div>
        ratings breakdown....
        <p>100% of reviews recommend this product</p>
      </div>
    );
  }

  render() {
    const { reviews, average } = this.state;
    return (
      <RatingsContainer>
        <h5>Ratings and Reviews</h5>
        <div className="star-summary">
          <div className="average-rating">3.5</div>
          <StarRatingContainer>
            <Rating avg={3.5} />
          </StarRatingContainer>
        </div>
        {this.ratingsBreakdown()}
        <div> User Recommendations </div>
        <div> Product Breakdown </div>
      </RatingsContainer>
    );
  }
}

export default Ratings;
