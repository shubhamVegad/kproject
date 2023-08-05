import React from 'react'
import SubHeroBanner from '../Components/SubHeroBanner'
import ContactImg from '../assets/ContactUs.png'
import ContInfo from '../components/ContInfo'


function ContactUs() {
  return (
    <div>
      <SubHeroBanner BannerName="Contact Us" BannerContent="We are here to help you with any queries and questions you may have. Get familiar with us and kick-start with our services." BannerImg={ContactImg} />
      <ContInfo />
    </div>
  )
}

export default ContactUs
