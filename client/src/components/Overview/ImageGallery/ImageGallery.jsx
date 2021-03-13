import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import ImageGalleryContainer from '../StyledComponents/ImageGallery/ImageGalleryContainer';
import GalleryViewerImg from '../StyledComponents/ImageGallery/GalleryViewerImg';
import NextButtonR from '../StyledComponents/ImageGallery/NextButtonR';
import NextButtonL from '../StyledComponents/ImageGallery/NextButtonL';
import ExpandButton from '../StyledComponents/ImageGallery/ExpandButton';

const ImageGallery = ({ photos, windowWidth }) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgLeft, setImgLeft] = useState(0);

  const imgRef = useRef();

  const mouseEnter = () => {
    setIsHovering(true);
  };

  const mouseLeave = () => {
    setIsHovering(false);
  };

  const nextSlide = () => {
    setCurrent(current === photos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? photos.length - 1 : current - 1);
  };

  const handleExpand = () => {
    if (isExpanded) {
      setIsZoomed(false);
    }
    setIsExpanded(!isExpanded);
  };

  const handleClick = (num) => {
    setCurrent(num);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  const imgExpandHandler = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else if (!isZoomed) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  };

  const navSwitch = () => {
    if (isZoomed) {
      return null;
    }

    return (
      <Nav
        current={current}
        photos={photos}
        handleClick={handleClick}
        isHovering={isHovering}
      />
    );
  };

  const buttonSwitch = () => {
    if (isExpanded) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15 2h2v5h7v2h-9v-7zm9 13v2h-7v5h-2v-7h9zm-15 7h-2v-5h-7v-2h9v7zm-9-13v-2h7v-5h2v7h-9z" />
        </svg>
      );
    }
    return (
      <img src="https://img.icons8.com/small/32/000000/full-screen.png" alt="fullscreen" />
    );
  };

  useEffect(() => {
    if (!isZoomed) {
      imgRef.current.style.setProperty('top', 'initial');
      imgRef.current.style.setProperty('left', 'initial');
    }
  }, [isZoomed]);

  useEffect(() => {
    if (isZoomed) {
      setImgLeft(imgRef.current.offsetLeft);
    }
  }, [windowWidth]);

  const mouseMove = (e) => {
    const xMiddle = imgLeft + (imgRef.current.offsetWidth / 2);
    const yMiddle = 0 + (imgRef.current.offsetHeight / 2);

    const newLeft = -(((e.clientX - xMiddle) * 2.5) / 2);
    const newTop = -(((e.clientY - yMiddle) * 2.5) / 2);

    if (isZoomed) {
      imgRef.current.style.setProperty('top', `${newTop}px`);
      imgRef.current.style.setProperty('left', `${newLeft}px`);
    }
  };

  return (
    <ImageGalleryContainer
      isExpanded={isExpanded}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <ExpandButton onClick={handleExpand}>
        {buttonSwitch()}
      </ExpandButton>
      <NextButtonL
        onClick={prevSlide}
        windowWidth={windowWidth}
        shouldButtonsDisplay={photos.length > 2}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </svg>
      </NextButtonL>
      <NextButtonR
        shouldButtonsDisplay={photos.length > 2}
        onClick={nextSlide}
        windowWidth={windowWidth}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </NextButtonR>
      {photos.map((photoObj, index) => {
        const { url } = photoObj;
        const key = index;
        if (index === current) {
          return (
            <GalleryViewerImg onMouseMove={mouseMove} ref={imgRef} isZoomed={isZoomed} isExpanded={isExpanded} onClick={imgExpandHandler} key={key} src={url} alt="active img" />
          );
        }
        return null;
      })}
      {navSwitch()}
    </ImageGalleryContainer>
  );
};
ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  windowWidth: PropTypes.number,
};

ImageGallery.defaultProps = {
  photos: [],
  windowWidth: 0,
};

export default ImageGallery;
