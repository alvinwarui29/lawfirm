import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero';
import servicess from '../assets/servicess.jpg';
const services = () => {
  return (
    <div>
      <Navbar/>
      <Hero img={servicess} heading='Check out our services' text='Below is a list of the services we offer' />
      <Services/>
      <Footer/>
    </div>
  )
}

export default services