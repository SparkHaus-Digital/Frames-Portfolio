import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { albums } from "../constants";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = albums.length;

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const getPrevIndex = () => (currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);

  return (
    <div className="relative max-w-3xl overflow-hidden">
      {/* Carousel container */}
      <div className="flex items-center justify-center relative h-3/4">
        {/* Left image (partially visible) */}
        <img
          src={albums[getPrevIndex()].image}
          alt={albums[getPrevIndex()].title}
          className="absolute left-0 top-1/2 h-3/4 rounded-sm object-cover transition-transform duration-500"
          style={{
            width: "10%",
            transform: "translateY(-50%)",
            filter: "brightness(0.7)"
          }}
        />


        {/* Center image with navigation buttons */}
        <div
          className="relative overflow-hidden rounded-sm"
          style={{ width: "75%", height: "100%", filter: "brightness(0.7)", }}
        >
          <img
            src={albums[currentIndex].image}
            alt={albums[currentIndex].title}
            className="object-cover transition-transform duration-500"
          />

          {/* Navigation buttons inside center image */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 p-3 text-white bg-opacity-50 hover:bg-opacity-80 z-10"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 text-white bg-opacity-50 hover:bg-opacity-80 z-10"
            aria-label="Next Slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Right image (partially visible) */}
        <img
          src={albums[getNextIndex()].image}
          alt={albums[getNextIndex()].title}
          className="absolute right-0 top-1/2 h-3/4 rounded-sm object-cover transition-transform duration-500"
          style={{
            width: "10%",
            transform: "translateY(-50%)",
            filter: "brightness(0.7)"
          }}
        />

      </div>

      {/* Caption centered below */}
      <div className="absolute text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h3 className="text-2xl sm:text-2xl font-monserrat-bold mb-1 uppercase">{albums[currentIndex].title}</h3>
        <p className="text-base sm:text-xl font-poppins">{albums[currentIndex].subtitle}</p>
      </div>

    </div>
  );
};

export default Carousel;
