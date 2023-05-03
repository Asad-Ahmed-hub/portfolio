"use client"
import React from 'react';
import Slider from "react-slick";


const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <div className='primary-bg'>
        <h2 className='text-white'> Single Item</h2>
        <Slider {...settings}>
          <div className='text-white bg-gray'>
            <h3 className='text-white'>1</h3>
          </div>
          <div className='text-white'>
            <h3 className='text-white'>2</h3>
          </div>
          <div className='text-white'>
            <h3 className='text-white'>3</h3>
          </div>
          <div className='text-white'>
            <h3 className='text-white'>4</h3>
          </div>
          <div className='text-white'>
            <h3 className='text-white'>5</h3>
          </div>
          <div className='text-white'>
            <h3 className='text-white'>6</h3>
          </div>
        </Slider>
      </div>
  )
}

export default Testimonials