import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './imageGallery';
import Descriptions from './descriptions';
import ComparissonModal from './comparissonModal';
import ProductContainer from '../styledComponents/productContainer';

const ProductCard = ({
  productInfo, getProduct, mainFeatures, mainName,
}) => {
  const [isPressed, setPressed] = useState(false);
  const [combinedFeatures, setCombinedFeatures] = useState([]);
  // const [relatedFeature, setRelatedFeature] = useState(productInfo.features);
  // console.log(mainFeature);
  // console.log(relatedFeature);
  const combiner = (feat1, feat2) => {
    // console.log(feat1);
    // console.log(feat2);
    const combined = {};
    for (let i = 0; i < feat1.length; i += 1) {
      if (combined[feat1[i].feature] === undefined) {
        combined[feat1[i].feature] = [feat1[i].value, null];
      }
    }
    for (let j = 0; j < feat2.length; j += 1) {
      if (combined[feat2[j].feature] === undefined) {
        combined[feat2[j].feature] = [null, feat2[j].value];
      } else {
        combined[feat2[j].feature][1] = feat2[j].value;
      }
    }
    // console.log(combined);
    const final = [];
    // for (const feature in combined) {
    //   final.push(combined[feature][0], feature, combined[feature][1]);
    // }
    const feats = Object.keys(combined);
    const values = Object.values(combined);
    for (let k = 0; k < feats.length; k += 1) {
      final.push(values[k][0], feats[k], values[k][1]);
    }
    setCombinedFeatures(final);
    console.log(final);
  };

  const comparisonModal = (event, bool, mainFeat, relatedFeat) => {
    if (bool) {
      setPressed(false);
    } else {
      setPressed(true);
    }
    combiner(mainFeat, relatedFeat);
    event.stopPropagation();
  };

  return (
    <ProductContainer onClick={() => getProduct(productInfo.id)}>
      <button type="button" onClick={(event) => comparisonModal(event, isPressed, mainFeatures, productInfo.features)}>Star</button>
      <ImageGallery photos={productInfo.photos} />
      <Descriptions productInfo={productInfo} />
      {isPressed ? (
        <ComparissonModal
          combinedFeatures={combinedFeatures}
          product1={mainName}
          product2={productInfo.name}
        />
      ) : null}
    </ProductContainer>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    defaultPrice: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
    salePrice: PropTypes.string,
    default: PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
    styleId: PropTypes.number,
    style: PropTypes.string,
  }),
  getProduct: PropTypes.func,
  mainFeatures: PropTypes.arrayOf(PropTypes.object),
  mainName: PropTypes.string,
};

ProductCard.defaultProps = {
  productInfo: null,
  getProduct: PropTypes.func,
  mainFeatures: PropTypes.arrayOf(PropTypes.object),
  mainName: PropTypes.string,
};
