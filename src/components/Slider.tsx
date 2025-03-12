import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';

// Import your local images
const images = [
    "/serv-1.jpg",
    "/serv-2.jpg",
    "/serv-3.jpg",
    "/serv-4.jpg"
  ];

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full max-w-5xl py-8"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center bg-white w-64 h-40 shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
