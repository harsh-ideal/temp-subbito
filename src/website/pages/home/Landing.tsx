import React from 'react'
import HeroSection from '../../components/Header/landing/HeroSection'
import ServicesSection from '../../components/Header/landing/ServicesSection'
import HowItWorksSection from '../../components/Header/landing/HowItWorksSection'
import WhyChooseUsSection from '../../components/Header/landing/WhyChooseUsSection'
import ReviewsSection from '../../components/Header/landing/ReviewsSection'
import FAQSection from '../../components/Header/landing/FAQSection'
import Footer from '../../components/Header/landing/Footer'

const Landing: React.FC = ()=> {
  return (
   <div className="App w-[90vw] max-w-[1400px] mx-auto">
       <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Landing