import React, { useState } from 'react';

import BtnSlider from './BtnSlider';
import "./Slider.css";


const Slide = ({ sliderData, sliderName }) => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === sliderData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(sliderData.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }


  return (
    <div className='container-slider'>
      {sliderData.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.REACT_APP_BACKEND_URL + slide.attributes.url}
            />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: sliderData.length }).map((item, index) => (
          <div
          key={index + 1}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slide;