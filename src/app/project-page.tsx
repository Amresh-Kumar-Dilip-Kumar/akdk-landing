import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const projects = [
    {
        title: "Our-Shop.site",
        description:
            "Our-Shop.site is a small-scale e-commerce platform that empowers individuals to launch and manage their online businesses with ease. With user-friendly tools and secure payment options, entrepreneurs can start selling in no time.",
        client: "Retail Corp",
        date: "May 2023",
        features: "User-friendly, Secure Payments",
        image: ["port-1.webp", "project-management.jpg"],
    },
    {
        title: "Green Corp Agriculture",
        description:
            "Green Corp Agriculture is dedicated to producing high-quality rice through sustainable and innovative farming practices. We focus on delivering premium grains while promoting eco-friendly agriculture to support healthier communities and a greener future.",
        client: "Tech Innovations",
        date: "November 2022",
        features: "Sustainable Farming, Premium Quality",
        image: ["port-1.webp", "project-management.jpg"],

    },
    // {
    //     title: "Blogging Platform",
    //     description:
    //         "A dynamic platform that empowers users to create and share content, focusing on community engagement.",
    //     client: "N/A",
    //     date: "August 2021",
    //     features: "Content Creation, Community Focus",
    //     image: ["port-1.webp", "project-management.jpg"],

    // },
];

const Project = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-6 py-16">
            <div className="text-center mb-20 sm:mb-40">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#000000] mb-4 sm:mb-6">Explore Our Portfolio</h1>
                <p className="text-lg sm:text-xl text-gray-500 leading-relaxed px-5">
                    Discover our innovative projects that showcase our expertise in <br className="hidden sm:block" />
                    creating dynamic web applications tailored to client needs.
                </p>
            </div>

            <div className="border-b mb-12">
                <h3 className="text-3xl sm:text-5xl font-semibold text-gray-800">Showcasing Our Projects</h3>
                <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mt-4 mb-8">
                    Explore our diverse range of web applications that exemplify our
                    commitment to quality and innovation.
                </p>
            </div>

            <div>
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-16 border-b pb-8 gap-16`}>
                        <div className="md:w-1/2 text-center md:text-left">
                            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">{project.title}</h4>
                            <p className="text-gray-600 mt-3 text-sm sm:text-base">{project.description}</p>
                            <p className="text-sm text-gray-500 mt-3">
                                <strong>Client:</strong> {project.client} | <strong>Date:</strong> {project.date}
                            </p>
                            <p className="text-sm text-gray-500 mt-2"><strong>Features:</strong> {project.features}</p>
                            <a href="#" className="text-orange-500 mt-4 inline-block text-sm sm:text-base hover:text-orange-600 transition-colors duration-300">View Project →</a>
                        </div>
                        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 ">
                            <Carousel>
                                <CarouselContent>
                                    {
                                        project.image.map(url => <CarouselItem>
                                            <img src={url} alt={project.title} className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full transition-transform duration-300 transform hover:scale-105" />
                                        </CarouselItem>)
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
