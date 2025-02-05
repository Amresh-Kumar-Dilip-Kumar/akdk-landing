import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", terms: false });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <section className="py-12 ">
            {/* Section 1: Header */}
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-gray-800 mb-4 sm:mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg sm:text-lg md:text-xl text-gray-500 leading-relaxed">
                    Reach out to us for expert web development solutions. Our team is ready to assist <br />
                    you with any inquiries or project discussions.
                </p>
            </div>

            {/* Section 2: Form and Map */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {/* Google Map Section */}
                <div className="w-full">
                    <iframe
                        className="w-full h-[400px] rounded-xl shadow-xl border-2 border-gray-200"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.015217207173!2d-122.3976746846812!3d37.79362227975567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2a5289f%3A0x5e2a0b64cd77a2b8!2s123%20Market%20St%20%23400%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1617264012101!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Contact Form Section */}
                <div className="w-full space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">We’d Love to Hear From You!</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <textarea
                                name="message"
                                placeholder="Type your message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="w-4 h-4 text-orange-600 border-gray-300 rounded"
                            />
                            <label className="text-gray-600">I accept the Terms</label>
                        </div>

                        <button type="submit"
                            className="rounded-md bg-orange-600 px-8 py-2.5 text-sm font-normal hover:bg-orange-500 text-white">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
