import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero';

const services = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading='Check out our services' text='Below is a list of the services we offer' />
      <Services/>
      <Footer/>
    </div>
  )
}

export default services