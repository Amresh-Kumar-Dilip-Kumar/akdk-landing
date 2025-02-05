import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white py-10 px-4 border-t border-gray-300">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Explore  */}
                    <div>
                        <h3 className="text-xl font-bold">Explore</h3>
                        <ul className="mt-2 space-y-7 text-gray-600">
                            <li>
                                <a href="/about" className="hover:text-orange-500 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-orange-500 transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect  */}
                    <div>
                        <h3 className="text-xl font-bold">Connect</h3>
                        <ul className="mt-2 space-y-2 text-gray-600">
                            <li>
                                <a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources  */}
                    <div>
                        <h3 className="text-xl font-bold">Resources</h3>
                        <ul className="mt-2 space-y-2 text-gray-600">
                            <li>
                                <a href="/resources" className="hover:text-orange-500 transition-colors">Menu 1</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold">Stay Updated</h3>
                        <p className="text-gray-600 mt-2">
                            Subscribe to our newsletter for the latest updates and insights from AKDK Digital.
                        </p>
                        <div className="mt-4 flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 border border-gray-300 rounded-l w-full outline-none"
                            />
                            <button className="rounded-md bg-orange-600 px-5 p-3  mx-2 text-sm font-normal hover:bg-orange-500 text-white">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Line */}
                <div className="border-t border-gray-300 my-6"></div>

                {/* Bottom part */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p>© 2025 AKDK Digital. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="/tmcd" className="hover:text-orange-500 transition-colors">Terms and Conditions</a>
                        <a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="cursor-pointer hover:text-orange-500 transition-colors" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="cursor-pointer hover:text-orange-500 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

