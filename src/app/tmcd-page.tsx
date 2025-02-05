import React from 'react'

function TMCD() {
    return (
        <section className='max-w-3xl mx-auto px-6 py-12'>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-black mb-6 sm:mb-16">
                Terms and Conditions
            </h1>
            <p className="text-lg sm:text-lg md:text-xl leading-relaxed mb-6">
                Welcome to AKDK Digital. These Terms and Conditions outline the rules and regulations for the use of our website and services.
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use AKDK Digital’s website if you do not accept all of the terms and conditions stated on this page.
            </p>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Definitions</h3>
                <p className="mb-4">In these Terms and Conditions, the following terms shall have the following meanings:</p>
                <ul className="list-disc pl-10 space-y-2 text-lg sm:text-xl">
                    <li><strong className="font-bold">“Client”</strong> refers to any individual or entity that engages AKDK Digital for services.</li>
                    <li><strong className="font-bold">“Services”</strong> refers to the web app development services provided by AKDK Digital.</li>
                    <li><strong className="font-bold">“Website”</strong> refers to the AKDK Digital website located at [insert URL].</li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">2. Services</h3>
                <p className="text-lg sm:text-xl leading-relaxed">AKDK Digital provides web app development services tailored to meet the unique needs of our clients. We reserve the right to modify or discontinue any service at any time without prior notice.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">3. Intellectual Property</h3>
                <p className="text-lg sm:text-xl leading-relaxed">All content, trademarks, and other intellectual property on the website are the property of AKDK Digital or its licensors. You may not reproduce, distribute, or create derivative works from any content on the website without our express written permission.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">4. Limitation of Liability</h3>
                <p className="text-lg sm:text-xl leading-relaxed">In no event shall AKDK Digital be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">5. Governing Law</h3>
                <p className="text-lg sm:text-xl leading-relaxed">These Terms and Conditions shall be governed by and construed in accordance with the laws of [insert jurisdiction].</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">6. Changes to Terms</h3>
                <p className="text-lg sm:text-xl leading-relaxed">AKDK Digital reserves the right to revise these Terms and Conditions at any time. By using this website, you are agreeing to be bound by the current version of these Terms and Conditions.</p>
            </div>
        </section>
    )
}

export default TMCD
