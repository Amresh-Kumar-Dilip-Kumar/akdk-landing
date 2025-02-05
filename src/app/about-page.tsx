import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <section className=" text-gray-900">
            {/* Section 1: Our Journey & Mission */}
            <div className="max-w-4xl mx-auto text-center px-6 py-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                    Our Journey & Mission
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    Founded in 2020, <span className="font-semibold text-gray-800">AKDK Digital</span> empowers businesses with
                    innovative web solutions that enhance functionality and drive engagement.
                    Our mission is to deliver quality and innovation.
                </p>
            </div>

            {/* Section 2: Our Talented Team */}
            <div className="max-w-4xl mx-auto text-center px-6 py-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                    Our Talented Team
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    Meet the skilled professionals behind <span className="font-semibold text-gray-800">AKDK Digital</span>’s success.
                </p>
            </div>

            {/* Team Profiles */}
            <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 pb-16">
                {/* Profile 1 */}
                <div className="flex items-center space-x-6 bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
                    <img
                        src="/profile-1.webp"
                        alt="Alice Johnson"
                        className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-orange-500"
                    />
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-900">Alice Johnson</h2>
                        <p className="text-lg text-gray-600">UI/UX Designer</p>
                        <p className="text-gray-500 max-w-sm">
                            With over 10 years of experience in web development, Alice leads
                            our team in creating innovative solutions.
                        </p>
                        <div className="flex space-x-4 mt-2 text-xl text-gray-500">
                            <a href="https://linkedin.com" className="hover:text-orange-500 transition-all">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com" className="hover:text-orange-500 transition-all">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Profile 2 */}
                <div className="flex items-center space-x-6 bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
                    <img
                        src="/profile-2.webp"
                        alt="John Doe"
                        className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-orange-500"
                    />
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-900">John Doe</h2>
                        <p className="text-lg text-gray-600">Lead Developer</p>
                        <p className="text-gray-500 max-w-sm">
                            Passionate about building innovative web solutions that enhance
                            functionality and user experience.
                        </p>
                        <div className="flex space-x-4 mt-2 text-xl text-gray-500">
                            <a href="https://linkedin.com" className="hover:text-orange-500 transition-all">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com" className="hover:text-orange-500 transition-all">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Get in Touch */}
            <div className="max-w-4xl mx-auto text-center px-6 py-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                    Reach out to our team for any inquiries or project discussions.
                </p>
                <Link
                    to="/contact"
                    className="rounded-md px-5 py-2.5 text-orange-500 hover:bg-orange-600 hover:text-white text-sm font-normal shadow border border-orange-500"
                >
                    Contact US
                </Link>
            </div>
        </section>
    );
}

export default AboutUs;
