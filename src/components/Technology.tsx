import { FaCode, FaDatabase, FaCloud } from "react-icons/fa";

export default function Technologies() {
    return (
        <section className="py-16 px-4">
            <div className="w-full max-w-[1440px] mx-auto text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-black">
                    Our Cutting-Edge Technologies
                </h2>
                <p className='max-w-4xl mx-auto mb-8 text-lg sm:text-lg md:text-xl leading-relaxed text-gray-500 mt-4'>
                    At AKDK Digital, we leverage the latest technologies to deliver
                    innovative and efficient web solutions. Our expertise spans a wide
                    range of tools and platforms, ensuring that we can meet the diverse
                    needs of our clients.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <FaCode className="text-5xl text-gray-500" />
                        <h3 className="mt-4 text-2xl font-bold text-black">
                            Modern Frameworks
                        </h3>
                        <p className="text-gray-600 mt-2">
                            We utilize modern frameworks like React, Angular, and Vue.js to
                            build dynamic and responsive web applications.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <FaDatabase className="text-5xl text-gray-500" />
                        <h3 className="mt-4 text-2xl font-bold text-black">
                            Robust Databases
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Our projects are powered by robust databases such as MongoDB,
                            MySQL, and PostgreSQL, ensuring data integrity and performance.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <FaCloud className="text-5xl text-gray-500" />
                        <h3 className="mt-4 text-2xl font-bold text-black">
                            Cloud Solutions
                        </h3>
                        <p className="text-gray-600 mt-2">
                            We offer cloud-based solutions using AWS, Azure, and Google Cloud
                            to provide scalable and secure applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

