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
  const images = [
    'https://picsum.photos/id/1018/1200/600',
    'https://picsum.photos/id/1015/1200/600',
    'https://picsum.photos/id/1016/1200/600',
    'https://picsum.photos/id/1020/1200/600',
    'https://picsum.photos/id/1024/1200/600',
    'https://picsum.photos/id/1025/1200/600',
    'https://picsum.photos/id/1027/1200/600',
    'https://picsum.photos/id/1031/1200/600',
    'https://picsum.photos/id/1035/1200/600',
  ];

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
          <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
