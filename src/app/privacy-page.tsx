import React from 'react'

function Privacy() {
    return (
        <section className='max-w-3xl mx-auto px-6 py-12'>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-black mb-6 sm:mb-16">
                Privacy Policy
            </h1>
            <p className="text-lg sm:text-lg md:text-xl leading-relaxed mb-6">
                At AKDK Digital, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use,
                and protect your information when you visit our website or engage our services.
            </p>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Information We Collect</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">We may collect personal information from you when you fill out a form, subscribe to our newsletter, or interact with our website. This information may include your name, email address, phone number, and any other details you provide.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">In these Terms and Conditions, the following terms shall have the following meanings:</p>
                <ul className="list-disc pl-10 space-y-2 text-lg sm:text-xl">
                    <li>To provide and maintain our services.</li>
                    <li>To improve our website and services.</li>
                    <li>To communicate with you, including responding to your inquiries.</li>
                    <li>To send you promotional materials, if you have opted in to receive them.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">3. Data Security</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">4. Sharing Your Information</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">5. Your Rights</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">You have the right to request access to the personal information we hold about you, to request corrections, and to request deletion of your information.</p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">6. Changes to This Privacy Policy</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </div>
        </section>
    )
}

export default Privacy
