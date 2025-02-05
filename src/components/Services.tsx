import React, { useState } from 'react';

const Services = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const slideCount = 3;
    const slides = [
        {
            title: "Custom Web Development",
            description: "We build scalable and feature-rich web applications tailored to your needs.",
            image: "/serv-1.jpg",
        },
        {
            title: "Seamless Upgrades",
            description: "Keep your web apps up-to-date with the latest technologies and enhancements.",
            image: "/serv-2.jpg",
        },
        {
            title: "Ongoing Support",
            description: "We provide long-term support and maintenance for smooth app performance.",
            image: "/serv-3.jpg",
        },
    ];

    return (
        <section className="max-w-[1440px] mx-auto pt-8">
            <h2 className="mb-8 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black text-center">
                Explore Our Comprehensive Web App Services
            </h2>
            <p className="max-w-4xl mx-auto mb-8 text-lg sm:text-lg md:text-xl leading-relaxed text-gray-600 ">
                At AKDK Digital, we offer a range of web app services designed to meet your business needs. Our team of expert developers is dedicated to delivering custom solutions, seamless upgrades,
                and ongoing support to ensure your web applications are always performing at their best. Discover how we can help you achieve your digital goals.
            </p>

            <div className="relative py-16 bg-black">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/assets/gradient-background.png" // Replace with actual path
                    alt="Background Gradient"
                />
                <div className="relative container mx-auto px-4">
                    <div className="py-24 md:py-36 px-10 md:px-24 bg-black rounded-3xl">
                        <div className="flex flex-wrap -m-8">
                            {/* Left Section - Text Content */}
                            <div className="w-full md:w-1/2 p-8">
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                                    >
                                        {slides.map((slide, index) => (
                                            <div key={index} className="flex-shrink-0 w-full px-4">
                                                <h2 className="mb-6 font-heading text-6xl text-white text-opacity-10 font-bold">
                                                    {String(index + 1).padStart(2, '0')}
                                                </h2>
                                                <h2 className="mb-6 text-3xl md:text-4xl text-white font-medium">
                                                    {slide.title}
                                                </h2>
                                                <p className="mb-6 text-xl text-white font-light leading-relaxed">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="flex flex-wrap items-center -m-7 px-4">
                                    <div className="w-full md:flex-1 p-7">
                                        <div className="relative bg-white bg-opacity-10 rounded-full h-1">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500"
                                                style={{ width: `${(100 / slideCount) * activeSlide}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="w-full md:w-auto p-7 flex space-x-4">
                                        <button
                                            onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 1))}
                                            className="w-14 h-14 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-gray-500 hover:text-white rounded-full transition"
                                            aria-label="Previous Slide"
                                        >
                                            &#8592;
                                        </button>
                                        <button
                                            onClick={() => setActiveSlide((prev) => Math.min(prev + 1, slideCount))}
                                            className="w-14 h-14 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
                                            aria-label="Next Slide"
                                        >
                                            &#8594;
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Image */}
                            <div className="w-full md:w-1/2 p-8">
                                <img
                                    className="w-full h-full object-cover rounded-3xl"
                                    src={slides[activeSlide - 1].image} // Use dynamic image based on active slide
                                    alt={`Service Preview ${activeSlide}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

