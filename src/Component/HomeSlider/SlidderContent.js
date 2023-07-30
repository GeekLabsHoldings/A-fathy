import React from "react";
import { Link } from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="slider-imgs">
          <img className="slide-image" src={slide.urls} alt="" />
          </div>
          <div className="slid-abs">
          <p className="slide-text">{slide.description} <br /><button className="read-more"><Link to={"/article"}>Read More</Link></button></p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;