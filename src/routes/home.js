import React from 'react'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import WhyUs from '../components/whyus/WhyUs'
const home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <WhyUs/>
    <Footer/>
    
    </div>
  )
}

export default home