import React from "react";
import { FaUsers, FaUserTie, FaStar } from "react-icons/fa";

export default function Mission() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* Section Heading */}
                <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-900 tracking-tight leading-tight">
                    Discover <span className="text-orange-600">AKDK Digital</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    We build innovative web solutions that drive business success. Our mission, values, and expert team make us your ideal digital partner.
                </p>

                {/* Mission Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    {/* Our Mission */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform hover:scale-105">
                        <FaStar className="text-5xl text-orange-600" />
                        <h3 className="mt-6 text-2xl font-bold text-gray-900">Our Mission</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We strive to provide exceptional web app services that exceed client expectations. Our focus is on innovation and quality, ensuring every project is a success.
                        </p>
                    </div>

                    {/* Our Values */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform hover:scale-105">
                        <FaUsers className="text-5xl text-orange-600" />
                        <h3 className="mt-6 text-2xl font-bold text-gray-900">Our Values</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We prioritize quality, collaboration, and innovation. By working closely with clients, we ensure their vision is realized while leveraging the latest technologies.
                        </p>
                    </div>

                    {/* Meet Our Team */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform hover:scale-105">
                        <FaUserTie className="text-5xl text-orange-600" />
                        <h3 className="mt-6 text-2xl font-bold text-gray-900">Meet Our Team</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our talented team of developers and designers collaborates to create outstanding web solutions, ensuring seamless functionality and beautiful designs.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
