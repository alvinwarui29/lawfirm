import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero';

const services = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default services