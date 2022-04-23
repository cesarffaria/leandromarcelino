import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const Slide = ({ sliderData, sliderName }) => {
  return (
    <Carousel fade="true" touch="true" variant="dark">
      {sliderData.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={process.env.REACT_APP_BACKEND_URL + slide.attributes.url}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;