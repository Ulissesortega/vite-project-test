import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
  // Import all images from the MilzenKC directory
  const imagesGlob = import.meta.glob('../../assets/MilzenKC/*.webp', { eager: true });
  const images = Object.values(imagesGlob).map((mod) => mod.default);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            {/* Blurred Background */}
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url(${src})` }} 
            />
            {/* Foreground Image */}
            <img src={src} alt={`Slide ${index + 1}`} className="slide-img" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
