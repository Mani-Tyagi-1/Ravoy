import React, { useState } from "react";

const Carousel = ({ images, slidesToShow = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex >= images.length - slidesToShow;
    const newIndex = isLastSlide
      ? images.length - slidesToShow
      : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full  max-w-4xl mx-auto">
      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="min-w-[calc(100%_/_3)]" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>

      
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

