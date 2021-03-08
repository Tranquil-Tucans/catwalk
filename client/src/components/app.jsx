/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Overview from './Overview/Overview';
import RelatedItemsOutfit from './RelatedItemsOutfit/RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews/RatingsReviews';

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
    if (!location.pathname.split('/')[2]) {
      console.log('hi');
      this.getProduct('14042');
    } else {
      this.getProduct(`${location.pathname.split('/')[2]}`);
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

const App = () => (
  <Router>
    <Switch>
      <Route path="/product/:product_id" component={AppComponent} />
      <Route exact path="/" component={AppComponent} />
    </Switch>
  </Router>
);

export default App;

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
