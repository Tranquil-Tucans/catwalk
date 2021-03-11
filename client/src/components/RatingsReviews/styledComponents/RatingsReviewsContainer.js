import styled from 'styled-components';

const RatingsReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5%;
  height: auto;
  /* max-height: 35%; */
  margin-left: 13%;
  margin-right: 2%;
  font-family: Arial, sans-serif;
  color: #ffffff;

  h3, h5 {
    text-transform: uppercase;
     color: #000000;
  }

  h5 {
    font-size: 2em;
  }

  /* .buttons {
    width: 5%;
    font-size: 1.5em;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: 20%;
  } */
`;

export default RatingsReviewContainer;
