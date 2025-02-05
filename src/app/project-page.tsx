import React from "react";

const projects = [
    {
        title: "Our-Shop.site",
        description:
            "Our-Shop.site is a small-scale e-commerce platform that empowers individuals to launch and manage their online businesses with ease. With user-friendly tools and secure payment options, entrepreneurs can start selling in no time.",
        client: "Retail Corp",
        date: "May 2023",
        features: "User-friendly, Secure Payments",
        image: "port-1.webp",
    },
    {
        title: "Green Corp Agriculture",
        description:
            "Green Corp Agriculture is dedicated to producing high-quality rice through sustainable and innovative farming practices. We focus on delivering premium grains while promoting eco-friendly agriculture to support healthier communities and a greener future.",
        client: "Tech Innovations",
        date: "November 2022",
        features: "Sustainable Farming, Premium Quality",
        image: "project-management.jpg",
    },
    {
        title: "Blogging Platform",
        description:
            "A dynamic platform that empowers users to create and share content, focusing on community engagement.",
        client: "N/A",
        date: "August 2021",
        features: "Content Creation, Community Focus",
        image: "blogging.jpg",
    },
];

const Project = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12">
            <div className="text-center mb-20 sm:mb-40">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#000000] mb-4 sm:mb-6">Explore Our Portfolio</h1>
                <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
                    Discover our innovative projects that showcase our expertise in <br className="hidden sm:block" />
                    creating dynamic web applications tailored to client needs.
                </p>
            </div>

            <div className="border-b mb-8">
                <h3 className="text-3xl sm:text-5xl font-semibold">Showcasing Our Projects</h3>
                <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mt-4 mb-10">
                    Explore our diverse range of web applications that exemplify our
                    commitment to quality and innovation.
                </p>
            </div>

            <div>
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center mb-12 border-b pb-6 gap-6">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h4 className="text-xl sm:text-2xl font-semibold">{project.title}</h4>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">{project.description}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                <strong>Client:</strong> {project.client} | <strong>Date:</strong> {project.date}
                            </p>
                            <p className="text-sm text-gray-500"><strong>Features:</strong> {project.features}</p>
                            <a href="#" className="text-orange-500 mt-2 inline-block text-sm sm:text-base">View Project →</a>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img src={project.image} alt={project.title} className="rounded-lg shadow-md w-full max-w-sm sm:max-w-md md:max-w-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
