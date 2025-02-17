import React from 'react'
import { allowedServices } from './service-detail-page';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const service = [
    {
        title: "Custom Website Development",
        description: "Tailor-made websites to meet your business needs, optimized for performance and user experience.",
        image: "/serv-1.jpg",
        link: `/service/${allowedServices.webDevelopment}`
    },
    // {
    //     title: "Responsive Web Design",
    //     description: "Create visually stunning, mobile-friendly designs that ensure seamless navigation on all devices.",
    //     image: "/serv-2.jpg",
    //     link: `/service/${allowedServices.graphicDesign}`
    // },
    {
        title: "E-commerce Solutions",
        description: "Develop robust online stores with secure payment gateways and customizable shopping experiences.",
        image: "/serv-3.jpg",
        link: `/service/${allowedServices.digitalMarketing}`
    },
    // {
    //     title: "SEO Optimization",
    //     description: "Boost your website’s visibility with strategic SEO techniques for better search rankings.",
    //     image: "/serv-4.jpg",
    //     link: `/service/${allowedServices.seo}`
    // },
    {
        title: "Web Application Development",
        description: "Build scalable and secure web applications tailored to your business needs.",
        image: "/serv-5.jpg",
        link: `/service/${allowedServices.mobileApps}`
    },
    {
        title: "UI/UX Design",
        description: "Craft intuitive and visually appealing designs that enhance user experience and engagement.",
        image: "/serv-6.jpg",
        link: `/service/${allowedServices.contentWriting}`
    },
    {
        title: "Hosting",
        description: "Reliable and secure web hosting solutions to ensure fast performance, uptime, and scalability for your website.",
        image: "/serv-7.jpg",
        link: `/service/${allowedServices.webDevelopment}`
    },
];



export default function Service2() {
    const [showQuoteModal, setShowQuoteModal] = React.useState(false);

    return (
        <>
            {showQuoteModal && (
                <GetAQuoteModel setShowQuoteModal={setShowQuoteModal} />
            )}
            <section className="max-w-[1440px] mx-auto py-16 px-6">
                <div className='text-center mb-16'>
                    <h2 className="mb-8 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000]">
                        Our Comprehensive Web App Services
                    </h2>
                    <p className='max-w-4xl mx-auto mb-10 text-lg sm:text-lg md:text-xl leading-relaxed text-gray-500'>
                        At AKDK Digital, we offer a range of web app services designed to meet your business needs.
                        Our team of expert developers is dedicated to delivering custom solutions, seamless upgrades,
                        and ongoing support to ensure your web applications are always performing at their best.
                        Discover how we can help you achieve your digital goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8">
                    {service.map((service, index) => (
                        <ServiceCard key={index} service={service}
                            setShowQuoteModal={setShowQuoteModal}
                        />

                    ))}
                </div>
            </section>
        </>
    );
}




function ServiceCard(
    { service,
        setShowQuoteModal
    }: {
        service: { title: string, description: string, image: string, link: string }
        setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>
    }

) {

    return <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#000000]/20">
        <Link to={service.link} >
            <img src={service.image} alt={service.title} className="w-full h-60 sm:h-72 lg:h-80 object-cover" />
            <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">{service.description}</p>
            </div>
        </Link>
        <div className=" pb-5 "

        >
            <Button variant="link"
                onClick={(e) => {
                    e.stopPropagation();
                    setShowQuoteModal(true);
                }}
            >
                Get a Quote
            </Button>
        </div>

    </div>
}


function GetAQuoteModel(
    { setShowQuoteModal }: {
        setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>
    }
) {
    return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => setShowQuoteModal(false)}
    >
        <div className="bg-white rounded-lg p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                    <Button
                        variant="link"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowQuoteModal(false);
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    </div>
}