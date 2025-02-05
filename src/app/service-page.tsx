import React from 'react'

export default function Service() {
    const service = [
        {
            title: "Custom Website Development",
            description: "Tailor-made websites to meet your business needs, optimized for performance and user experience.",
            image: "/serv-1.jpg",
        },
        {
            title: "Responsive Web Design",
            description: "Create visually stunning, mobile-friendly designs that ensure seamless navigation on all devices.",
            image: "/serv-2.jpg",
        },
        {
            title: "E-commerce Solutions",
            description: "Develop robust online stores with secure payment gateways and customizable shopping experiences.",
            image: "/serv-3.jpg",
        },
        {
            title: "SEO Optimization",
            description: "Boost your website’s visibility with strategic SEO techniques for better search rankings.",
            image: "/serv-4.jpg",
        },
        {
            title: "Web Application Development",
            description: "Build scalable and secure web applications tailored to your business needs.",
            image: "/serv-5.jpg",
        },
        {
            title: "UI/UX Design",
            description: "Craft intuitive and visually appealing designs that enhance user experience and engagement.",
            image: "/serv-6.jpg",
        },
        {
            title: "Hosting",
            description: "Reliable and secure web hosting solutions to ensure fast performance, uptime, and scalability for your website.",
            image: "/serv-7.jpg",
        },
    ];

    return (
        <section className="max-w-[1440px] mx-auto py-12 px-6">
            <div className='text-center mb-20'>
                <h2 className="mb-8 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000]">
                    Our Comprehensive Web App Services
                </h2>
                <p className='max-w-4xl mx-auto mb-8 text-lg sm:text-lg md:text-xl leading-relaxed text-gray-500'>
                    At AKDK Digital, we offer a range of web app services designed to meet your business needs.
                    Our team of expert developers is dedicated to delivering custom solutions, seamless upgrades,
                    and ongoing support to ensure your web applications are always performing at their best.
                    Discover how we can help you achieve your digital goals.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {service.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img src={service.image} alt={service.title} className="w-full h-60 sm:h-72 lg:h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
