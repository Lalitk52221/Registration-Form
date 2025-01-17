import { useEffect, useState } from "react";
const ImageSlider = ({images}) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full lg:h-[700px] overflow-hidden">
      <div
        className="flex transition-transform duration-500  "
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Navigation Dot  */}
      <div className="absolute bottom-4 left-0 right-0 space-x-2 flex justify-center items-end ">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={` cursor-pointer rounded-full shadow-lg border-zinc-50 border transition-transform duration-500 ease-in-out  ${
              currentSlide === index
                ? "bg-gray-200 w-2 h-2 lg:w-6 animate-trail"
                : "bg-gray-500 w-1 h-1 lg:w-2 lg:h-2"
            }`}
            // style={}
          ></div>
        ))}
      </div>

      {/* Arrows          */}

      <div
        className="arrow left-4 "
        onClick={() =>
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
          )
        }
      >
        &#9664;
      </div>
      <div
        className="arrow right-4"
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
        }
      >
        &#9654;
      </div>
    </div>
  );
};

export default ImageSlider;
