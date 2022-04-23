import React, { useState } from 'react';

const Slide = ({ sliderData , sliderName }) => {

  const [slideIndex] = useState(1)

  return (
    <div id={sliderName} className="carousel slide pointer-event"  data-bs-ride="carousel">
      <div className="carousel-indicators">
        {sliderData.map((slide,index) => (
          <button
            key={index + 1}
            type="button"
            data-bs-target={"#" + sliderName}
            data-bs-slide-to={index}
            className={slideIndex === index + 1 ? "active" : "" }
            aria-label={index + 1}
            aria-current={slideIndex === index + 1 ? "true" : "" }
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index + 1}
              className={slideIndex === index + 1 ? "carousel-item active" : "carousel-item"}
            >
              <img
                className="d-block w-100"
                src={process.env.REACT_APP_BACKEND_URL + slide.attributes.url}
                alt="Alt slide"
              />
            </div>
          )
        })}
      </div>        
    <button className="carousel-control-prev" type="button" data-bs-target={"#" + sliderName} data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={"#" + sliderName} data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>
  );
};

export default Slide;