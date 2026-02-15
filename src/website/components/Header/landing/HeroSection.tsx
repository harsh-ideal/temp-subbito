// HeroSection.tsx
import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section className="relative  overflow-hidden">
      {/* Navigation */}
      <nav className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between lg:justify-center">
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <a href="#why-us" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Why us
            </a>
            <a href="#how-it-works" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              How it Works
            </a>
          </div>

          {/* Logo */}
          <div className="text-3xl md:text-4xl font-bold text-[#2f0f57] lg:mx-12">
            Subbito
          </div>

          {/* Desktop Right Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <a href="#service" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Service
            </a>
            <a href="#faqs" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              FAQ's
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold bg-gradient-to-r from-[#2f0f57] via-[#2f0f57] to-purple-900 bg-clip-text text-transparent leading-tight">
              Trusted House Help For
              <br />
              Everyday Living
            </h1>

            <p className="text-base md:text-lg text-gray-800 max-w-xl mx-auto lg:mx-0">
              Empowering service proffesionals while provideing verified maid,
              cooks, cleaners and home repairs for everyday home needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#"
                onClick={handleAppStoreClick}
                className="inline-flex items-center justify-center w-[180px] h-[55px] hover:scale-105 transition-transform"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-full h-full object-contain"
                />
              </a>

              <a
                href="#"
                onClick={handleAppStoreClick}
                className="inline-flex items-center justify-center w-[180px] h-[55px] scale-105 hover:scale-110 transition-transform"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=500x166"
                  alt="App Store"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Content */}
          {/* Right Content */}
<div className="relative hidden lg:flex justify-center items-center h-[600px]">

  {/* Background Glow (Same as before, subtle depth) */}
  <div className="absolute top-1/2 right-10 -translate-y-1/2 -z-20">
    <div className="w-[480px] h-[480px] bg-gradient-to-br from-purple-300 via-purple-400 to-pink-400 rounded-full opacity-30 blur-3xl"></div>
  </div>

  {/* Bottom Left Decorative Image */}
  <div className="absolute -bottom-10 -left-25 z-100 scale-150 hover:scale-155">
    <img 
      src="/cartoon/box1.png" 
      alt="box1" 
      className="w-40 object-contain"
    />
  </div>

  {/* Top Right Decorative Image */}
  <div className="absolute top-20 -right-22 z-100 scale-120 hover:sacle-125">
    <img 
      src="/cartoon/box2.png" 
      alt="box2" 
      className="w-36 object-contain"
    />
  </div>

  {/* Phones Container */}
  <div className="relative z-10 flex items-center justify-center">
    
    {/* Left Phone */}
    <div className="relative transition-all duration-500 hover:scale-105 hover:-rotate-3">
      <div className="bg-black rounded-[3rem] p-2 shadow-2xl w-72 h-[580px]">
        <div className="bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
          <img
            src="/mobileScreen/serviceselection.jpeg"
            alt="Service Screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Right Phone */}
    <div className="relative -ml-10 -z-10 rotate-6 transition-all duration-500 hover:scale-105 hover:rotate-2 hover:z-10">
      <div className="bg-black rounded-[3rem] p-2 shadow-2xl w-72 h-[580px]">
        <div className="bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
          <img
            src="/mobileScreen/paymentsuccess.jpeg"
            alt="Payment Screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-4 border border-[#2f0f57]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2f0f57] to-[#3d176b] rounded-full flex items-center justify-center">
                <span className="text-4xl text-white">🚀</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#2f0f57] to-[#3d176b] bg-clip-text text-transparent">
              Coming Soon!
            </h2>

            <p className="text-gray-700 text-center text-lg mb-6">
              Our app is launching very soon! Get ready for a seamless house
              help experience at your fingertips.
            </p>

            <p className="text-sm text-[#2f0f57]/70 text-center mb-8">
              Stay tuned for updates 🎉
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-[#2f0f57] to-[#3d176b] text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
