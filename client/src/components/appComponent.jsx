/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Overview from './Overview/Overview';
import RelatedItemsOutfit from './RelatedItemsOutfit/RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import AllContainer from './RelatedItemsOutfit/styledComponents/sharedStyledC/allCarouselContainer';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentStyle: {},
    };
    this.getProduct = this.getProduct.bind(this);
    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    if (location) {
      if (!location.pathname.split('/')[2]) {
        console.log('hi');
        this.getProduct('14931');
      } else {
        this.getProduct(`${location.pathname.split('/')[2]}`);
      }
    }
  }

  getProduct(id) {
    axios.get(`/products/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState(({
          product: response.data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentStyle(styleInfo) {
    this.setState({
      currentStyle: styleInfo,
    });
  }

  render() {
    const { product, currentStyle } = this.state;
    return (
      <div>
        Product Page
        <Overview
          product={product}
          currentStyle={currentStyle}
          getProduct={this.getProduct}
          updateCurrentStyle={this.updateCurrentStyle}
        />
        <RelatedItemsOutfit
          product={product}
          getProduct={this.getProduct}
          currentStyle={currentStyle}
        />
        <RatingsReviews product={product} getProduct={this.getProduct} />
      </div>
    );
  }
}

export default AppComponent;

AppComponent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.string,
  }),
};

AppComponent.defaultProps = {
  location: null,
};
