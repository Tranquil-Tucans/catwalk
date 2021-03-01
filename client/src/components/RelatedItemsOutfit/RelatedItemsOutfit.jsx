import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItems/relatedItemsList';
import Left from './styledComponents/styledRelated/left';
import Right from './styledComponents/styledRelated/right';
import RelatedContainer from './styledComponents/styledRelated/relatedContainer';
import SvgArrowR from './styledComponents/styledRelated/svgArrowR';
import SvgArrowL from './styledComponents/styledRelated/svgArrowL';
import OutfitContainer from './styledComponents/styledOutfit/outfitContainer';
import OutfitList from './Outfit/outfitList';

class RelatedItemsOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      hasPrevious: false,
      hasNext: true,
    };
    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { product } = this.props;
    if (product !== prevProps.product) {
      this.getRelated(product.id);
    }
  }

  getRelated(id) {
    axios.get(`/products/${id}/related`)
      .then((response) => {
        this.setState({
          related: response.data,
          hasPrevious: false,
          hasNext: true,
        });
      });
    const slider = document.getElementById('slider');
    slider.scrollLeft = 0;
  }

  right() {
    const slider = document.getElementById('slider');
    this.setState({
      hasPrevious: true,
    });
    const scrollLeftMax = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft += 312;
    if (slider.scrollLeft >= scrollLeftMax - 312) {
      this.setState({
        hasNext: false,
      });
    }
  }

  left() {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 312;
    this.setState({
      hasNext: true,
    });
    if (slider.scrollLeft <= 312) {
      this.setState({
        hasPrevious: false,
      });
    }
  }

  render() {
    const { related, hasPrevious, hasNext } = this.state;
    const { getProduct, product, currentStyle } = this.props;
    return (
      <div>
        <RelatedContainer className="carousel">
          <h2>Related List</h2>
          {hasPrevious ? <Left type="button" id="goLeft" onClick={this.left}><SvgArrowL width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowL></Left> : null}
          <RelatedItemsList
            related={related}
            getProduct={getProduct}
            mainFeatures={product.features}
            mainName={product.name}
          />
          {hasNext ? <Right type="button" id="goRight" onClick={this.right}><SvgArrowR width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowR></Right> : null}
        </RelatedContainer>
        <OutfitContainer>
          <h2>Outfit List</h2>
          {hasPrevious ? <Left type="button" id="goLeft" onClick={this.left}><SvgArrowL width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowL></Left> : null}
          <OutfitList currentStyle={currentStyle} />
          {hasNext ? <Right type="button" id="goRight" onClick={this.right}><SvgArrowR width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowR></Right> : null}
        </OutfitContainer>
      </div>
    );
  }
}

export default RelatedItemsOutfit;

RelatedItemsOutfit.propTypes = {
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
  currentStyle: PropTypes.shape({
    style_id: PropTypes.string,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
  getProduct: PropTypes.func,
};

RelatedItemsOutfit.defaultProps = {
  product: null,
  getProduct: PropTypes.func,
  currentStyle: null,
};
