import React, { useEffect, useState } from 'react';
import data from './data.json';
import './imageCarousel.css';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCurrentIndex(currentIndex + 1);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, [currentIndex])

    const handlePrev = () => {
        // if(currentIndex === 0){
        //     return setCurrentIndex(data.length - 1);
        // }
        setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1));
    }

  return (
    <div>
        <h1>Image Carousel</h1>
        <div className='img-container'>
            {currentIndex > 0 && <button className='btn-prev' onClick={handlePrev}>Prev</button>}
            <img className='img-carousel' src={data[currentIndex].image} alt={data[currentIndex].alt} />
            {currentIndex < data.length - 1 && <button className='btn-next' onClick={handleNext}>Next</button>}
        </div>
    </div>
  )
}

export default ImageCarousel;