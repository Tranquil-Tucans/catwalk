/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import CompareContainer from '../styledComponents/styledRelated/compareContainer';
import TitleContainer from '../styledComponents/styledRelated/titleContainer';
import ModalContainer from '../styledComponents/styledRelated/modalContainer';
import Modal from '../styledComponents/styledRelated/modal';

const ComparisonModal = ({
  combinedFeatures, product1, product2, comparisonModal,
}) => (
  <ModalContainer onClick={(event) => { event.stopPropagation(); comparisonModal(event); }}>
    <Modal>
      <TitleContainer>
        <div><small>COMPARING</small></div>
        <div>{null}</div>
        <div>{null}</div>
        <div><b>{product1}</b></div>
        <div>{null}</div>
        <div><b>{product2}</b></div>
      </TitleContainer>
      <div className="compareBox">
        <CompareContainer>
          {combinedFeatures.map((element, i) => <div key={`modal${i}`} className="features">{element}</div>)}
        </CompareContainer>
      </div>
    </Modal>
  </ModalContainer>
);

ComparisonModal.displayName = 'comparisonModal';
export default ComparisonModal;

ComparisonModal.propTypes = {
  combinedFeatures: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.string,
  product2: PropTypes.string,
  comparisonModal: PropTypes.func,
};

ComparisonModal.defaultProps = {
  combinedFeatures: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.string,
  product2: PropTypes.string,
  comparisonModal: null,
};
