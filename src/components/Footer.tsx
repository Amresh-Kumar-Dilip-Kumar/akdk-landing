import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" text-gray-900 py-14 px-6 border-t border-gray-300">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Explore */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#000000]">Explore</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="/about" className="hover:text-orange-400 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-orange-400 transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xl font-semibold ext-[#000000]">Connect</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#000000]">Resources</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="/resources" className="hover:text-orange-400 transition-colors">Menu 1</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#000000]">Stay Updated</h3>
                        <p className="mt-4 text-gray-600">
                            Subscribe to our newsletter for the latest updates and insights from <span className="text-white font-semibold">AKDK Digital.</span>
                        </p>
                        <div className="mt-6 flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 bg-gray-800 border border-gray-600 rounded-l-md w-full outline-none placeholder-gray-400 text-white"
                            />
                            <button className="bg-orange-600 px-5 py-3 rounded-r-md text-white text-sm font-semibold hover:bg-orange-500 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-60000 text-sm">
                    <p>© 2025 AKDK Digital. All rights reserved.</p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/tmcd" className="hover:text-orange-400 transition-colors">Terms and Conditions</a>
                        <a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                    </div>

                    <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="cursor-pointer text-gray-600 hover:text-orange-400 transition-all" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="cursor-pointer text-gray-600 hover:text-orange-400 transition-all" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
