import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { product } = this.props;
    const { currentStyle } = this.props;
    const { original_price: originalPrice } = currentStyle;
    const { sale_price: salePrice } = currentStyle;
    const { category } = product;
    const { name } = product;

    return (
      <div>
        <div>Stars Stars Stars</div>
        <div>{category}</div>
        <div>{name}</div>
        <div><Price originalPrice={originalPrice} salePrice={salePrice} /></div>
      </div>
    );
  }
}
ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
  currentStyle: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
};

ProductInfo.defaultProps = {
  product: null,
  currentStyle: {},
};

export default ProductInfo;