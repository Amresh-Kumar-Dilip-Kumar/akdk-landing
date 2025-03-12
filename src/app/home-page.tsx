import React from 'react'

import Mission from '../components/Mission.tsx'
import Services from '../components/Services.tsx'
import Technology from '../components/Technology.tsx'
// import Hero2 from '@/components/Hero2.tsx'
import { Hero } from '@/components/Hero.tsx'
// import Slider from '@/components/Slider.tsx'
// import { Link } from 'react-router'
function MainPage() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <div className="p-12"></div> */}
            <Hero />
            {/* <Slider /> */}
            {/* <Hero2 /> */}
            {/* <Link to="/about-us">About Us</Link> */}
            <Mission />
            <Services />
            <Technology />
            {/* <Footer /> */}
        </>
    )
}

export default MainPage