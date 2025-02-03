import React from 'react'
import { FaUsers, FaUserTie, FaStar } from "react-icons/fa";

export default function Mission() {
    return (
        <section className="pt-8 pb-20 overflow-hidden">
            <div className=" w-full max-w-[1440px] mx-auto px-4">
                {/* <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">The features that made us special</p> */}
                <h2 className="mb-20 font-heading font-semibold text-3xl sm:text-6xl text-[#000000] text-center">Discover AKDK Digital</h2>
                <div className="flex flex-wrap -m-4">
                    <div className="w-full md:w-1/3 p-4">
                        <div className="md:max-w-xs mx-auto ">
                            <FaStar className="text-4xl text-gray-400" />
                            <h3 className='text-3xl font-extrabold tracking-wider mt-4'>Our Mission</h3>
                            <p className="font-heading font-normal text-base text-gray-500">We strive to provide exceptional web app services that not only meet but exceed our clients' expectations. Our focus is on innovation and quality, ensuring every project is a success.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="md:max-w-xs mx-auto ">
                            <FaUsers className="text-4xl text-gray-400" />
                            <h3 className='text-3xl font-extrabold mt-4'>Our Values</h3>
                            <p className="font-heading font-normal text-base text-gray-500">We prioritize quality, collaboration, and innovation in all our projects. By working closely with our clients, we ensure their vision is realized while staying ahead with the latest technologies.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="md:max-w-xs mx-auto ">
                            <FaUserTie className="text-4xl text-gray-400" />
                            <h3 className='text-3xl font-extrabold mt-4'>Meet Our Team</h3>
                            <p className="font-heading font-normal text-base text-gray-500">Our talented team consists of experienced professionals who are passionate about web development. From developers to designers, we work together to create outstanding solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
