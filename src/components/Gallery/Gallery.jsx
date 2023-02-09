import React, { useState, useEffect } from 'react';
import './style.css'
const images = [
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  imagem2,
  imagem1
];


export const Gallery1 = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(i => (i + 3) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(i => (i + images.length - 3) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(i => (i + 3) % images.length);
  };

  return <div>
    <div id="slider">
        <button onClick={handlePrevClick}>Prev</button>
        <div className="image-container">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <button onClick={handleNextClick}>Next</button>
      </div>
    
    </div>;
};
