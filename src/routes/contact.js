import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'
import contacte from '../assets/contacte.jpg'
const contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero img={contacte} heading="Contact us today" text ="Kindly get in touch with us by filling the form below"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default contact