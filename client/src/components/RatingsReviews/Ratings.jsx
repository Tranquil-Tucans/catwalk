import React from 'react';
import ReactStars from 'react-rating-stars-component';
import RatingsContainer from './styledComponents/RatingsContainer';
import Rating from './StarRatings';

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

  // starRating() {
  //   const { average } = this.state;
  //   return (
  //     // <ReactStars
  //     //   count={5}
  //     //   value={average}
  //     //   size={24}
  //     //   activeColor="#525252"
  //     //   isHalf
  //     //   edit={false}
  //     // />
  //     <Rating />
  //   );
  // }

  render() {
    const { reviews, average } = this.state;
    return (
      <RatingsContainer>
        <p>Ratings and Reviews</p>
        <div className="star-summary">
          <h1>3.5</h1>
          <Rating avg={3.5}/>
          {/* {this.starRating()} */}
        </div>
        {this.ratingsBreakdown()}
        <div> User Recommendations </div>
        <div> Product Breakdown </div>
      </RatingsContainer>
    );
  }
}

export default Ratings;
