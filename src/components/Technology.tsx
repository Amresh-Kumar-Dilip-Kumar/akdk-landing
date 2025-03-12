import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';

// Import your local images
const images = [
    "/tech-1.png",
    "/tech-2.png",
    "/tech-3.png",
    "/tech-4.png",
    "/tech-5.png",
];

export default function Technologies() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
            <div className="w-full max-w-[1440px] mx-auto text-center">
                <h2 className="text-4xl sm:text-6xl font-bold text-gray-900">
                    Our Cutting-Edge Technologies
                </h2>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed text-gray-600 mt-6">
                    At <span className="font-semibold text-black">AKDK Digital</span>, we embrace the latest technologies to craft exceptional web solutions.
                    Our expertise spans modern frameworks, robust databases, and powerful cloud platforms to bring your vision to life.
                </p>

                {/* Swiper Carousel with Autoplay */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1500, // 1.5 seconds delay between slides
                        disableOnInteraction: false, // Allows user interaction without stopping autoplay
                    }}
                    modules={[Pagination, Autoplay]}
                    className="w-full max-w-5xl py-8"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center bg-white w-64 h-40 shadow-md rounded-lg overflow-hidden">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
