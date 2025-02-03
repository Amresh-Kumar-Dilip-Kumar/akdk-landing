import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { Hero } from './components/Hero.tsx'
import Mission from './components/Mission.tsx'
import Services from './components/Services.tsx'
import Technology from './components/Technology.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
    <Hero />
    <Mission />
    <Services />
    <Technology />
    <Footer />
  </StrictMode>,
)
