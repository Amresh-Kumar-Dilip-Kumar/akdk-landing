import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'


function AboutUs() {
    return (
        <section>
            {/* Section 1: Our Journey & Mission */}
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12 mb-20">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-black mb-4 sm:mb-6">
                    Our Journey & Mission
                </h1>
                <p className="text-lg sm:text-lg md:text-xl text-gray-500 leading-relaxed">
                    Founded in 2020, AKDK Digital empowers businesses with innovative web
                    <br />
                    solutions that enhance functionality and drive engagement. Our mission
                    is to <br />
                    deliver quality and innovation.
                </p>
            </div>

            {/* Section 2: Our Talented Team */}
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12 mb-20">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-black mb-4 sm:mb-6">
                    Our Talented Team
                </h1>
                <p className="text-lg sm:text-lg md:text-xl text-gray-500 leading-relaxed">
                    Discover the skilled professionals behind AKDK Digital’s success in web
                    <br />
                    development.
                </p>
            </div>

            {/* Team Profiles */}
            <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6">
                {/* Profile 1 */}
                <div className="flex items-center space-x-8 max-w-2xl mx-auto p-6 rounded-lg bg-white shadow-lg">
                    <img
                        src="/profile-1.webp"
                        alt="Profile"
                        className="w-24 h-24 sm:w-48 sm:h-48 rounded-full object-cover"
                    />
                    <div className="space-y-5">
                        <h2 className="text-2xl font-semibold text-gray-900">Alice Johnson</h2>
                        <p className="text-gray-600 text-lg">UI/UX Designer</p>
                        <p className="text-gray-500 mt-2 max-w-sm">
                            With over 10 years of experience in web development, Alice leads
                            our team in creating innovative solutions.
                        </p>
                        <div className="flex space-x-4 mt-3">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Profile 2 */}
                <div className="flex items-center space-x-8 max-w-2xl mx-auto p-6 rounded-lg bg-white shadow-lg">
                    <img
                        src="/profile-2.webp"
                        alt="Profile"
                        className="w-24 h-24 sm:w-48 sm:h-48 rounded-full object-cover"
                    />
                    <div className="space-y-5">
                        <h2 className="text-2xl font-semibold text-gray-900">John Doe</h2>
                        <p className="text-gray-600 text-lg">Lead Developer</p>
                        <p className="text-gray-500 mt-2 max-w-sm">
                            Passionate about building innovative web solutions that enhance
                            functionality and user experience.
                        </p>
                        <div className="flex space-x-4 mt-3">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Get in Touch */}
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12 mt-16">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-black mb-4 sm:mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-8">
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
