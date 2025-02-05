import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import { BrowserRouter, Routes, Route } from 'react-router'
import MainPage from './app/home-page.tsx'
import AboutUs from './app/about-page.tsx'
import ContactUs from './app/contact-page.tsx'
import Service from './app/service-page.tsx'
import Project from './app/project-page.tsx'
import TMCD from './app/tmcd-page.tsx'
import Privacy from './app/privacy-page.tsx'
// import ContactUs from './app/contact-page.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tmcd" element={<TMCD />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>


    {/* <App /> */}

  </StrictMode>,
)
