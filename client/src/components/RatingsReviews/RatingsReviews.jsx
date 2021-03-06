import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './RatingsBreakdown/Ratings';
import ReviewsList from './ReviewsList/ReviewsList';
import RatingsReviewsContainer from './styledComponents/RatingsReviewsContainer';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { product } = this.props;
    return (
      <RatingsReviewsContainer>
        {product && (
        <div className="ratings" id="ratings">
          <Ratings product={product} reviews={product.reviews} id={product.id} />
        </div>
        )}
        {product && (
        <div className="reviews">
          <ReviewsList product={product} productName={product.name} />
        </div>
        )}
      </RatingsReviewsContainer>
    );
  }
}

RatingsReviews.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.object),
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
};

RatingsReviews.defaultProps = {
  product: null,
};

export default RatingsReviews;
