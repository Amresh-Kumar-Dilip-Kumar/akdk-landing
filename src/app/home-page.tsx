import React from 'react'

import Navbar from '../components/Navbar.tsx'
import { Hero } from '../components/Hero.tsx'
import Mission from '../components/Mission.tsx'
import Services from '../components/Services.tsx'
import Technology from '../components/Technology.tsx'
import Footer from '../components/Footer.tsx'
// import { Link } from 'react-router'
function MainPage() {
    return (
        <>
            <Navbar />
            {/* <div className="p-12"></div> */}
            <Hero />
            {/* <Link to="/about-us">About Us</Link> */}
            <Mission />
            <Services />
            <Technology />
            <Footer />
        </>
    )
}

export default MainPage