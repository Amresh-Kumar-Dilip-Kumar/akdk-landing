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
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
// import ContactUs from './app/contact-page.tsx'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="p-12"></div>
      {children}
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><MainPage /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/service" element={<Layout><Service /></Layout>} />
        <Route path="/project" element={<Layout><Project /></Layout>} />
        <Route path="/tmcd" element={<Layout><TMCD /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
      </Routes>
    </BrowserRouter>


    {/* <App /> */}

  </StrictMode>,
)
