// HowItWorksSection.tsx
import React from 'react';

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  phoneImage: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      stepNumber: '1st Step',
      title: 'Create Account',
      description: 'Fill required details',
      phoneImage: '/mobileScreen/createaccount.jpeg',
    },
    {
      stepNumber: '2nd Step',
      title: 'Choose Service',
      description: 'According to your need',
      phoneImage: '/mobileScreen/serviceselection.jpeg',
    },
    {
      stepNumber: '3rd Step',
      title: 'Pay for Booking',
      description: 'According to slot/date',
      phoneImage: '/mobileScreen/payment.jpeg',
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-white py-30 mt-20 overflow-hidden border-t border-purple-500 border-t-3">
      <div className="container mx-auto px-8">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="text-4xl">💡</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
            How it's Work
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-all duration-500 hover:scale-105"
            >
              {/* Card Container */}
              <div className="relative w-full max-w-sm">
                {/* Purple Background Card */}
                <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-[2.5rem] p-6 shadow-2xl">
                  {/* Info Box */}
                  <div className="bg-white rounded-2xl p-5 mb-6 shadow-lg">
                    <h3 className="text-purple-900 font-bold text-xl mb-2">
                      {step.stepNumber}
                    </h3>
                    <p className="text-purple-800 font-semibold text-lg mb-1">
                      {step.title}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Phone Mockup */}
                  <div className="relative mx-auto" style={{ width: '220px' }}>
                    <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="bg-white rounded-[2rem] overflow-hidden">
                        {/* Phone Content */}
                        <div className="relative" style={{ height: '420px' }}>
                          {/* Status Bar */}
                          <div className="absolute top-0 left-0 right-0 h-6 bg-white flex justify-between items-center px-4 text-xs z-10">
                            <span className="text-gray-800">9:41</span>
                            <div className="w-20 h-4 bg-black rounded-full"></div>
                            <span className="text-gray-800">📶 🔋</span>
                          </div>

                          {/* Mock Screen Content */}
                          <img
                            src={step.phoneImage}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Badge (Optional decorative element) */}
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">→</span>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Get started in just 3 simple steps!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 shadow-lg">
            Start Now
          </button>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default HowItWorksSection;
