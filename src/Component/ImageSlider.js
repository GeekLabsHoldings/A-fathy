import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import{ GrNext,GrPrevious } from 'react-icons/gr'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div className='two-arrow'>
      <GrPrevious className='left-arrow' onClick={prevSlide} />
      <GrNext className='right-arrow' onClick={nextSlide} />
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          <p className='auth-name'>Author Name</p>
            <p className='auth-las'>Journalist</p>
            <p className='home-p'>The New Delivery Service Company Stock Is Rising And Never Going Down</p>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;