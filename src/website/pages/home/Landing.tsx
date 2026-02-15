import React from 'react'
import HeroSection from '../../components/Header/landing/HeroSection'
import ServicesSection from '../../components/Header/landing/ServicesSection'
import HowItWorksSection from '../../components/Header/landing/HowItWorksSection'
import WhyChooseUsSection from '../../components/Header/landing/WhyChooseUsSection'
// import ReviewsSection from '../../components/Header/landing/ReviewsSection'
import FAQSection from '../../components/Header/landing/FAQSection'
import Footer from '../../components/Header/landing/Footer'

const Landing: React.FC = ()=> {
  return (
   <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
       <HeroSection />
       <div className="w-200 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[#2f0f57] to-transparent rounded-full opacity-60"></div>
      <ServicesSection />
       <div className="w-200 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[#2f0f57] to-transparent rounded-full opacity-60"></div>
      <HowItWorksSection />
       <div className="w-200 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[#2f0f57] to-transparent rounded-full opacity-60"></div>
      <WhyChooseUsSection />
       <div className="w-200 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[#2f0f57] to-transparent rounded-full opacity-60"></div>
      {/* <ReviewsSection /> */}
      <FAQSection />
       <div className="w-200 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[#2f0f57] to-transparent rounded-full opacity-60"></div>
      <Footer />
    </div>
  )
}

export default Landing