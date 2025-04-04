// import React from 'react';
import { Link } from "react-router";

import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md p-2 font-baloo-bhai-2 w-full">
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-down"
        data-aos-duration="1000" // Adjust duration for smoothness (in ms)
        data-aos-easing="ease-in-out"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-[#000000]" to="/">
              <span className="sr-only">Home</span>
              <h1 className="text-4xl font-medium">AKDK Digital</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-base">
                {[
                  { name: "About-us", path: "about-us" },
                  { name: "Our Services", path: "service" }, // Corrected path
                  { name: "Portfolio", path: "project" }, // Corrected path
                  { name: "Contact Us", path: "contact-us" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-gray-500 transition hover:text-orange-600"
                      to={`/${item.path}`} // Use the correct path
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:items-center sm:gap-4">
                <div className="inline-flex">
                  <Link
                    className="rounded-md px-5 py-2.5 text-orange-500 hover:bg-orange-600 hover:text-white text-sm font-normal shadow border border-orange-500"
                    to="#"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="hidden sm:inline-flex">
                  <Link
                    className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-normal hover:bg-orange-500 text-white"
                    to="/service"
                  >
                    Our Services
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
