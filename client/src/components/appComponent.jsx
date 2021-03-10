/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Overview from './Overview/Overview';
import RelatedItemsOutfit from './RelatedItemsOutfit/RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import AllContainer from './RelatedItemsOutfit/styledComponents/sharedStyledC/allCarouselContainer';
import ComparissonModal from './RelatedItemsOutfit/RelatedItems/comparissonModal';
import Sidebar from './Sidebar';
import MainContainer from './Overview/SharedComponents/MainContainer';

const AppComponent = () => {
  const [product, setProduct] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [isPressed, setPressed] = useState(false);
  const [relatedName, setRelatedName] = useState('');
  const [combinedFeatures, setCombinedFeatures] = useState([]);

  const combiner = (feat1, feat2) => {
    const combined = {};
    for (let i = 0; i < feat1.length; i += 1) {
      if (combined[feat1[i].feature] === undefined) {
        combined[feat1[i].feature] = [(feat1[i].value ? feat1[i].value : '✓'), null];
      }
    }
    for (let j = 0; j < feat2.length; j += 1) {
      if (combined[feat2[j].feature] === undefined) {
        combined[feat2[j].feature] = [null, (feat2[j].value ? feat2[j].value : '✓')];
      } else {
        combined[feat2[j].feature][1] = (feat2[j].value ? feat2[j].value : '✓');
      }
    }
    const final = [];
    const feats = Object.keys(combined);
    const values = Object.values(combined);
    for (let k = 0; k < feats.length; k += 1) {
      final.push(values[k][0], feats[k], values[k][1]);
    }
    setCombinedFeatures(final);
  };

  const comparisonModal = (event, relatedFeat, relatedProduct) => {
    event.preventDefault();
    event.stopPropagation();
    if (isPressed) {
      setPressed(false);
    } else {
      setPressed(true);
    }
    setRelatedName(relatedProduct);
    if (!combinedFeatures.length) {
      combiner(product.features, relatedFeat);
    }
  };

  const getProduct = (id) => {
    axios.get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { location } = window;
  useEffect(() => {
    if (location) {
      if (!location.pathname.split('/')[2]) {
        getProduct('14931');
      } else {
        getProduct(`${location.pathname.split('/')[2]}`);
      }
    }
  }, []);

  const updateCurrentStyle = (styleInfo) => {
    setCurrentStyle(styleInfo);
  };

  return (
    <div>
      {isPressed ? (
        <ComparissonModal
          combinedFeatures={combinedFeatures}
          product1={product.name}
          product2={relatedName}
          comparisonModal={comparisonModal}
        />
      ) : null}
      <AllContainer>
        <MainContainer>
          <Overview
            product={product}
            currentStyle={currentStyle}
            getProduct={getProduct}
            updateCurrentStyle={updateCurrentStyle}
          />
          <RatingsReviews product={product} getProduct={getProduct} />
          <RelatedItemsOutfit
            product={product}
            getProduct={getProduct}
            currentStyle={currentStyle}
            comparisonModal={comparisonModal}
          />
        </MainContainer>
        <Sidebar
          product={product}
          currentStyle={currentStyle}
          getProduct={getProduct}
          updateCurrentStyle={updateCurrentStyle}
        />
      </AllContainer>
    </div>
  );
};

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
