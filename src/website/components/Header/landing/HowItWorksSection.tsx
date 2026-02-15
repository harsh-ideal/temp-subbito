// HowItWorksSection.tsx
import React from "react";

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  phoneImage: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      stepNumber: "1st Step",
      title: "Create Account",
      description: "Fill required details",
      phoneImage: "/mobileScreen/createaccount.jpeg",
    },
    {
      stepNumber: "2nd Step",
      title: "Choose Service",
      description: "According to your need",
      phoneImage: "/mobileScreen/serviceselection.jpeg",
    },
    {
      stepNumber: "3rd Step",
      title: "Pay for Booking",
      description: "According to slot/date",
      phoneImage: "/mobileScreen/payment.jpeg",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 mt-6 overflow-hidden "
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Heading */}
        <div className="flex items-center justify-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
            How it's Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-500 hover:scale-[1.03]"
            >
              <div className="relative w-full max-w-sm">
                
                {/* Purple Card */}
                <div className="bg-gradient-to-br from-[#2f0f57] via-[#3d176b] to-[#4c1d95] rounded-[2.5rem] p-6 shadow-xl">
                  
                  {/* Info Box */}
                  <div className="bg-white rounded-2xl p-5 mb-6 shadow-md">
                    <h3 className="text-[#2f0f57] font-bold text-xl mb-2">
                      {step.stepNumber}
                    </h3>
                    <p className="text-[#2f0f57] font-semibold text-lg mb-1">
                      {step.title}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="relative mx-auto w-[220px]">
                    <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="bg-white rounded-[2rem] overflow-hidden">
                        <div className="relative h-[420px]">
                          
                          {/* Status Bar */}
                          <div className="absolute top-0 left-0 right-0 h-6 bg-white flex justify-between items-center px-4 text-xs z-10">
                            <span className="text-gray-800">9:41</span>
                            <div className="w-20 h-4 bg-black rounded-full"></div>
                            <span className="text-gray-800">📶 🔋</span>
                          </div>

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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Decorative Blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;
