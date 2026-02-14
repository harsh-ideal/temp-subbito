// HeroSection.tsx
import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section className="relative bg-gray-50  max-h-[800px] items-center ">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-center gap-12">
          {/* Left Nav Items */}
          <a href="#why-us" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Why us
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            How it Works
          </a>

          {/* Logo - Center */}
          <div className="text-4xl font-bold text-purple-600 mx-8">
            Subbito
          </div>

          {/* Right Nav Items */}
          <a href="#service" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Service
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Reviews
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-8 pt-10">
        <div className="grid grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-purple-900 leading-tight">
              Trusted House Help For
              <br />
              Everyday Living
            </h1>

            <p className="text-lg text-gray-800">
              Empowering service proffesionals while provideing verified maid, cooks,cleaners, and home repairs for everyday home needs.
            </p>

            <div className='flex flex-row items-center justify-between'>
              {/* Download Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                {/* Google Play Button */}
                <a
                  href="#"
                  onClick={handleAppStoreClick}
                  className="inline-flex items-center rounded-xl w-fit transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                  />
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  onClick={handleAppStoreClick}
                  className="inline-flex items-center rounded-xl w-fit transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=500x166" 
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                  />
                </a>
              </div>

              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-white border-2 border-green-500 px-2 py-1 rounded-lg h-fit">
                <span className="text-xl font-bold text-green-600">4.8</span>
                <span className="text-green-600 text-lg">★</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative h-[600px] flex justify-center items-center">
            {/* Purple Gradient Blob Background - Animated */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 animate-pulse-slow">
              <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-300 via-purple-500 to-pink-400 rounded-full opacity-40 blur-3xl"></div>
            </div>

            {/* Purple Cube - Bottom Left - Floating Animation */}
           <div className="absolute bottom-16 -left-4">
  <div 
    className="w-32 h-32 "
    style={{
      background: 'linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)',
      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      transform: 'rotateX(-20deg) rotateY(25deg) rotateZ(10deg)',
      transformStyle: 'preserve-3d',
      boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.5)',
      filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1))'
    }}
  />
</div>

            {/* Small Purple Cube - Top Right - Floating Animation (delayed) */}
            <div className="absolute top-0 right-32 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl transform rotate-12 shadow-xl "></div>

            {/* Phone Mockups Container */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Left Phone - Services Screen - Hover Tilt */}
              <div className="relative transform transition-all duration-500 hover:scale-105 hover:-rotate-4">
                <div className="bg-black rounded-[3rem] p-2 shadow-2xl w-72 h-[580px]">
                  <div className="bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
                    {/* Phone Content */}
                    <div className="relative w-full h-full">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-9 bg-white flex justify-between items-center px-6 text-xs">
                        <span>9:41</span>
                        <div className="w-24 h-6 bg-black rounded-full"></div>
                        <span>📶 🔋</span>
                      </div>

                      {/* Mock Screen Content */}
                      <img
                        src="/mobileScreen/serviceselection.jpeg"
                        alt="Service Screen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone - Payment Success Screen - Hover Tilt */}
              <div className="relative -ml-10 -z-20 transform transition-all duration-500 rotate-6 hover:scale-102 hover:rotate-2 hover:z-10">
                <div className="bg-black rounded-[3rem] p-2 shadow-2xl w-72 h-[580px]">
                  <div className="bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
                    {/* Phone Content */}
                    <div className="relative w-full h-full">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-9 bg-white flex justify-between items-center px-6 text-xs">
                        <span>9:41</span>
                        <div className="w-24 h-6 bg-black rounded-full"></div>
                        <span>📶 🔋</span>
                      </div>

                      {/* Mock Screen Content */}
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
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-4 transform animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center ">
                <span className="text-4xl">🚀</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-4">
              Coming Soon!
            </h2>

            {/* Message */}
            <p className="text-gray-600 text-center text-lg mb-6">
              Our app is launching very soon! Get ready for a seamless house help experience at your fingertips.
            </p>

            {/* Subtext */}
            <p className="text-sm text-gray-500 text-center mb-8">
              Stay tuned for updates 🎉
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(12deg);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
