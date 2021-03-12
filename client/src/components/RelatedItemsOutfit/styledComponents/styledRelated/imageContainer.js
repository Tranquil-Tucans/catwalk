import styled from 'styled-components';

const ImageContainer = styled.div`
  height: 220px;
  width: auto;
  margin-bottom: 10px;
  background-color: #ebedee;
  border-bottom: 1px solid #ebedee;
  transition: transform .5s;
  position: relative;
  /* @keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
  }
  animate: fadein .5s;
  transition-duration: 0.3s;
  transition-timing-function: ease; */
  .imageButtonContainer {
    position: absolute;
    top: 75%;
    left: 0%;
    width: 228px;
  }

  .imageLeft, .imageRight {
    position: absolute;
    top: 0%;
    height: 40px;
    width: 23px;
    z-index: 1;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .imageLeft {
    left: -1%;
  }

  .imageRight {
    right: -1%;
  }

  .imageLeftSVG {
    transform: scale(.3) rotate(-180deg);
    fill: white;
    left: -65%;
    top: -20%;
    position: absolute;
    z-index: -1;
  }

  .imageRightSVG {
    transform: scale(.3);
    fill: white;
    right: -65%;
    top: -20%;
    position: absolute;
    z-index: -1;
  }

  .carouselContainer{
    position: absolute;
    top: 71%;
    left: 8.5%;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    width: 188px;
  }
  .thumbnailContainer{
    @keyframes grow {
      from {
        height: 0;
      }
      to {
        height: 40px;
      }
    }
    &:hover {
      border: 1px solid black;
      transition: .5s;
      border-radius: 10%;
    }
    outline: 0;
    margin: 0 1.5% 0 1.5%;
    flex-shrink: 0;
    flex-grow: 0;
    animation: grow .5s;
    height: 40px;
    width: 40px;
    border: 1px solid #ebedee;
    /* border-bottom: 5px solid #black; */
    border-radius: 10%;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
  .thumbnail{
    transition-duration: none;
    transition-timing-function: none;
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

export default ImageContainer;
