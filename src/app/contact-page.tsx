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
        <section>
            {/* Section 1: */}
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12 ">
                <h1 className="text-3xl sm:text-5xl font-heading font-bold text-black mb-4 sm:mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg sm:text-lg md:text-xl text-gray-500 leading-relaxed">
                    Reach out to us for expert web development solutions. Our team is ready to assist <br />
                    you with any inquiries or project discussions.
                </p>
            </div>

            {/* Section 2: n */}

            <div className="  max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center mt-16 p-6">
                <div className="w-full md:w-1/2">
                    <iframe
                        className="w-full h-96 rounded-xl shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.015217207173!2d-122.3976746846812!3d37.79362227975567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2a5289f%3A0x5e2a0b64cd77a2b8!2s123%20Market%20St%20%23400%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1617264012101!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-gray-600 mb-4">We’d love to hear from you!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        />
                        <textarea
                            name="message"
                            placeholder="Type your message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg h-32"
                        ></textarea>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label>I accept the Terms</label>
                        </div>
                        <button type="submit" className="rounded-md bg-orange-600 px-8 py-2.5 text-sm font-normal hover:bg-orange-500 text-white">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
