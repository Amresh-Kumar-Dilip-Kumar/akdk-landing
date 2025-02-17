// import React from 'react';
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Navbar() {
    return (
        <motion.header
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md p-2 font-baloo-bhai-2 w-full"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
                data-aos="fade-up"
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
                                    { name: "Contact Us", path: "contact-us" }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link
                                            className="text-gray-500 transition hover:text-orange-600"
                                            to={`/${item.path}`} // Use the correct path
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:items-center sm:gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="inline-flex"
                                >
                                    <Link
                                        className="rounded-md px-5 py-2.5 text-orange-500 hover:bg-orange-600 hover:text-white text-sm font-normal shadow border border-orange-500"
                                        to="#"
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="hidden sm:inline-flex"
                                >
                                    <Link
                                        className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-normal hover:bg-orange-500 text-white"
                                        to="/service"
                                    >
                                        Our Services
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="block md:hidden"
                            >
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.header>
    );
}
