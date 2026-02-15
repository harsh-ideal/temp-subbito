// WhyChooseUsSection.tsx
import React, { useEffect, useState } from "react";

interface Feature {
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Verified Helpers",
      description: '"All helpers are verified with ID proof"',
    },
    {
      title: "Background Checked",
      description: '"Safety checks done before onboarding."',
    },
    {
      title: "Transparent Pricing",
      description: '"No hidden charges. Pay what you see."',
    },
    {
      title: "On -Time Service",
      description: '"Helpers arrive on time or you get support."',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, features.length]);

  const getCardStyle = (index: number) => {
    const total = features.length;
    let position = index - currentIndex;

    if (position < -Math.floor(total / 2)) {
      position += total;
    } else if (position > Math.floor(total / 2)) {
      position -= total;
    }

    const isCenter = position === 0;

    const translateX = position * 420;
    const scale = isCenter ? 1.08 : Math.max(0.85, 1 - Math.abs(position) * 0.1);
    const opacity = isCenter ? 1 : 0.6;
    const rotateY = position * 6;
    const zIndex = 50 - Math.abs(position);

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <section
      id="why-us"
      className="relative py-20 mt-8  overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
            Why Choose us
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            Because your home deserves trusted help
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative h-[300px] hidden lg:flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: "1500px" }}
        >
          {features.map((feature, index) => (
            <div key={index} className="absolute" style={getCardStyle(index)}>
              <div
                className="bg-white rounded-3xl border border-[#2f0f57]/20 shadow-lg p-8"
                style={{ width: "380px" }}
              >
                <h3 className="text-[#2f0f57] font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#2f0f57]/90 text-semibold">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-[#2f0f57]/20 rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-[#2f0f57] font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-[#2f0f57]/70 text-sm italic">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote + Image */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mt-20">

          <div className="max-w-2xl text-center mx-auto lg:text-left">
            <p className="text-gray-800 text-xl font-medium">
              "Book trained, verified professionals for cleaning,
              <br />
              plumbing, and home services - all in one app."
            </p>
          </div>

          
        </div>
      </div>
     <div className="absolute bottom-0 right-0 hidden lg:block">
            <img
              src="/cartoon/cook.png"
              alt="Subbito Helper"
              className="w-80 object-contain"
            />
          </div>

      {/* Soft Blobs */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default WhyChooseUsSection;
