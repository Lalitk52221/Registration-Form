import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar } from "swiper"; // Import modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = () => {
  return (
    <Swiper
    //   modules={[Navigation, Pagination, Scrollbar]} // Use the imported modules
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.vecteezy.com/system/resources/previews/035/776/255/non_2x/ai-generated-mountain-stargazing-nature-adventure-under-the-starry-night-sky-outdoors-photo.jpg"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/premium-photo/campfire-dreams-camping-night-photo_960396-27624.jpg"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
