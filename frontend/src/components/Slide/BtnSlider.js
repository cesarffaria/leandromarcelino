import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide , sliderName}) {
    return (
        <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
       {direction === "next" ? ">" : "<"}
    </button>
    );
}