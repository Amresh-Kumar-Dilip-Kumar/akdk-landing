import { FaCode, FaDatabase, FaCloud } from "react-icons/fa";

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

                {/* Technologies Grid */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Modern Frameworks */}
                    <div className="flex flex-col items-center text-center p-8  bg-white ">
                        <FaCode className="text-6xl text-blue-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Modern Frameworks
                        </h3>
                        <p className="text-gray-600 mt-3">
                            We use <span className="font-medium text-gray-800">React</span>,
                            <span className="font-medium text-gray-800"> Angular</span>, and <span className="font-medium text-gray-800">Vue.js</span>
                            to develop fast, scalable, and interactive web applications.
                        </p>
                    </div>

                    {/* Robust Databases */}
                    <div className="flex flex-col items-center text-center p-8 ">
                        <FaDatabase className="text-6xl text-green-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Robust Databases
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Our backend is powered by <span className="font-medium text-gray-800">MongoDB</span>,
                            <span className="font-medium text-gray-800"> MySQL</span>, and <span className="font-medium text-gray-800">PostgreSQL</span>
                            for secure and high-performance data management.
                        </p>
                    </div>

                    {/* Cloud Solutions */}
                    <div className="flex flex-col items-center text-center p-8 ">
                        <FaCloud className="text-6xl text-purple-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Cloud Solutions
                        </h3>
                        <p className="text-gray-600 mt-3">
                            We leverage <span className="font-medium text-gray-800">AWS</span>,
                            <span className="font-medium text-gray-800"> Azure</span>, and <span className="font-medium text-gray-800">Google Cloud</span>
                            to ensure seamless scalability and security.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
