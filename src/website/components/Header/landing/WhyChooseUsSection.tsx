// WhyChooseUsSection.tsx
import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Verified Helpers',
      description: '"All helpers are verified with ID proof"',
    },
    {
      title: 'Background Checked',
      description: '"Safety checks done before onboarding."',
    },
    {
      title: 'Transparent Pricing',
      description: '"No hidden charges. Pay what you see."',
    },
    {
      title: 'On -Time Service',
      description: '"Helpers arrive on time or you get support."',
    },
  ];

  return (
    <section id="why-us" className="relative bg-white py-30 mt-20 overflow-hidden border-t border-purple-500 border-t-3">
      <div className="container mx-auto px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-5xl">⭐</span>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
              Why Choose us
            </h2>
          </div>
          <p className="text-gray-700 text-lg">
            Because your home deserves trusted help
          </p>
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Cards Container - Full Width */}
          <div className="mb-12">
            {/* Top 3 Cards in a Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
              {features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-purple-300 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-purple-900 font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-purple-600 text-sm italic">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 4th Card - Centered */}
            <div className="flex justify-center mb-12">
              <div className="bg-white border-2 border-purple-300 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-purple-500 transition-all duration-300 hover:scale-105 w-full max-w-sm">
                <h3 className="text-purple-900 font-bold text-lg mb-2">
                  {features[3].title}
                </h3>
                <p className="text-purple-600 text-sm italic">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Quote Left, Image Right */}
          <div className="relative max-w-7xl mx-auto">
            {/* Quote - Left Side */}
            <div className="max-w-2xl">
              <p className="text-gray-800 text-xl font-medium pl-4">
                "Book trained, verified professionals for cleaning,
                <br />
                plumbing, and home services - all in one app."
              </p>
            </div>

            {/* Chef Illustration - Absolute Right Bottom */}
            <div className="absolute right-0 bottom-0 hidden lg:block" style={{ transform: 'translateY(20%)' }}>
              <img
                src="/cartoon/cook.jpeg"
                alt="Subbito Helper"
                className="w-60 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default WhyChooseUsSection;
