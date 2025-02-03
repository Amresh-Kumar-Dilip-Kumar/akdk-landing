import React from 'react'

import { useState } from 'react';

const Services = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const slideCount = 3;

    return (
        <section className='max-w-[1440px] mx-auto pt-8'>
            <h2 className="mb-8 font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000] text-center">
                Explore Our Comprehensive Web App Services
            </h2>
            <p className='max-w-4xl mx-auto mb-8 text-lg sm:text-lg md:text-xl leading-relaxed text-gray-500'>
                At AKDK Digital, we offer a range of web app services designed to meet your business needs. Our team of expert developers is dedicated to delivering custom solutions, seamless upgrades,
                and ongoing support to ensure your web applications are always performing at their best. Discover how we can help you achieve your digital goals.
            </p>

            <div className="relative py-16 bg-black">
                <img
                    className="absolute top-0 left-0 w-full h-full select-none object-cover"
                    src="fily-assets/gradients/gradient-httpcodes2.png"
                    alt=""
                />
                <div className="relative container mx-auto px-4">
                    <div className="py-24 md:py-36 px-10 md:px-24 bg-black rounded-3xl">
                        <div className="flex flex-wrap -m-8">
                            <div className="w-full md:w-1/2 p-8">
                                <div className="overflow-hidden">
                                    <div
                                        style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                                        className="flex transition-transform duration-500 ease-in-out"
                                    >
                                        {[1, 2, 3].map((slide, index) => (
                                            <div key={index} className="flex-shrink-0 w-full px-4">
                                                <h2 className="mb-12 font-heading text-6xl text-white text-opacity-10 font-bold">
                                                    {String(slide).padStart(2, '0')}
                                                </h2>
                                                <h2 className="mb-12 text-3xl md:text-4xl text-white font-medium">
                                                    {`Slide ${slide} Title`}
                                                </h2>
                                                <p className="mb-12 text-xl text-white font-light leading-relaxed">
                                                    Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor.
                                                </p>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -m-7 px-4">
                                    <div className="w-full md:flex-1 p-7">
                                        <div
                                            className="relative bg-white bg-opacity-10 overflow-hidden rounded-full"
                                            style={{ height: '3px' }}
                                        >
                                            <div
                                                className="absolute top-0 left-0 h-full bg-blue-500"
                                                style={{ width: `${(100 / slideCount) * activeSlide}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto p-7">
                                        <div className="flex flex-wrap justify-center md:justify-end">
                                            <div className="w-auto p-2">
                                                <button
                                                    onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 1))}
                                                    className="flex items-center justify-center w-14 h-14 text-gray-500 hover:text-white focus:text-white bg-white bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 focus:ring focus:ring-gray-200 rounded-full transition duration-200"
                                                >
                                                    <svg xmlns="https://your-uploaded-svg-url.com/yourfile.svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M7.31536 13.7141C7.40574 13.6211 7.47747 13.5105 7.52643 13.3886C7.57538 13.2667 7.60059 13.1359 7.60059 13.0039C7.60059 12.8718 7.57538 12.7411 7.52643 12.6192C7.47747 12.4973 7.40574 12.3867 7.31536 12.2937L4.14286 9.00276L13.7857 9.00276C14.0415 9.00276 14.2867 8.89738 14.4676 8.70979C14.6484 8.5222 14.75 8.26777 14.75 8.00248C14.75 7.73719 14.6484 7.48277 14.4676 7.29518C14.2867 7.10759 14.0415 7.0022 13.7857 7.0022L4.14286 7.0022L7.31536 3.71127C7.40574 3.61828 7.47747 3.50765 7.52643 3.38576C7.57539 3.26387 7.60059 3.13312 7.60059 3.00107C7.60059 2.86903 7.57539 2.73828 7.52643 2.61639C7.47747 2.4945 7.40574 2.38386 7.31536 2.29087C7.13469 2.10457 6.89029 2 6.63553 2C6.38078 2 6.13638 2.10457 5.95571 2.29087L1.81893 6.59209C1.45675 6.96554 1.25215 7.47276 1.25 8.00248C1.25469 8.52874 1.4591 9.03187 1.81893 9.40288L5.95571 13.7041C6.13511 13.8917 6.37879 13.9981 6.63355 14C6.8883 14.0018 7.13341 13.8991 7.31536 13.7141Z" fill="currentColor"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="w-auto p-2">
                                                <button
                                                    onClick={() => setActiveSlide((prev) => Math.min(prev + 1, slideCount))}
                                                    className="flex items-center justify-center w-14 h-14 text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-blue-200 rounded-full transition duration-200"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M8.68464 2.28591C8.59426 2.3789 8.52253 2.48953 8.47357 2.61142C8.42461 2.73332 8.39941 2.86406 8.39941 2.99611C8.39941 3.12816 8.42461 3.2589 8.47357 3.38079C8.52253 3.50269 8.59426 3.61332 8.68464 3.70631L11.8571 6.99723L2.21429 6.99724C1.95854 6.99724 1.71327 7.10262 1.53243 7.29021C1.35159 7.4778 1.25 7.73223 1.25 7.99752C1.25 8.26281 1.35159 8.51723 1.53243 8.70482C1.71327 8.89241 1.95854 8.9978 2.21429 8.9978L11.8571 8.9978L8.68464 12.2887C8.59426 12.3817 8.52253 12.4923 8.47357 12.6142C8.42461 12.7361 8.39941 12.8669 8.39941 12.9989C8.39941 13.131 8.42461 13.2617 8.47357 13.3836C8.52253 13.5055 8.59426 13.6161 8.68464 13.7091C8.86531 13.8954 9.10971 14 9.36447 14C9.61922 14 9.86362 13.8954 10.0443 13.7091L14.1811 9.40791C14.5432 9.03446 14.7478 8.52724 14.75 7.99752C14.7453 7.47126 14.5409 6.96812 14.1811 6.59712L10.0443 2.29591C9.86489 2.10827 9.62121 2.0019 9.36645 2.00002C9.1117 1.99815 8.86659 2.10093 8.68464 2.28591Z" fill="currentColor"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8">
                                <img
                                    className="w-full h-full object-cover rounded-3xl"
                                    style={{ height: '680px' }}
                                    src="fily-assets/how-it-works/pic.jpg"
                                    alt=""
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

