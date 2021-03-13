import styled from 'styled-components';

const RatingsReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5%;
  height: auto;
  margin-left: 13%;
  margin-right: 2%;
  font-family: Arial, sans-serif;
  color: #ffffff;


.ratings, .reviews {
  animation-duration: 3.5s;
  animation-name: slidein;
}


@keyframes slidein {
  from {
    margin-top: 100%;
    height: 300%;
  }

  to {
    margin-top: 0%;
    height: 100%;
    }
  }


  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-bottom: 5%;
  }

  h3, h5 {
    text-transform: uppercase;
     color: #000000;
  }

  h5 {
    font-size: 2em;
  }

`;

export default RatingsReviewContainer;
