import React, { useState } from 'react';
import { SliderData } from './SliderData';
import "./Homepage.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import{ GrFormNext,GrPrevious,GrFormPrevious } from 'react-icons/gr';
import {FcPrevious} from 'react-icons/fc'

const ImageSliderTwo = ({ slides }) => {
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
      <GrFormPrevious className='left-arrow' onClick={prevSlide} />
      <GrFormNext className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className='parent'>
            <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
            <div className='abs'>
               {index === current && (
                  <p>{slide.prg}</p>
                )}
            </div>
          </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSliderTwo;