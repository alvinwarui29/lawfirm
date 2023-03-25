import React from 'react'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import WhyUs from '../components/whyus/WhyUs'
import About from '../components/about/About'
import Services from '../components/services/Services'
const home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <WhyUs/>
    <About/>
    <Services/>
    <Footer/>
    
    </div>
  )
}

export default home