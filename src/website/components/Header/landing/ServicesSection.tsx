// ServicesSection.tsx
import React, { useEffect, useState } from "react";

interface Service {
  id: number;
  title: string;
  image: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    { id: 1, title: "Kitchen Prep", image: "/services/kitchenprep.png" },
    { id: 2, title: "Cooking", image: "/services/cooking.png" },
    { id: 3, title: "Dishwashing", image: "/services/dishwashing.png" },
    { id: 4, title: "Mopping", image: "/services/mopping.png" },
    { id: 5, title: "Dusting", image: "/services/dusting.png" },
    { id: 6, title: "Kitchen Cleaning", image: "/services/kitchencleaning.png" },
    { id: 7, title: "General Help", image: "/services/generalhelp.png" },
    { id: 8, title: "Electrician", image: "/services/electrician.jpeg" },
    { id: 9, title: "Plumber", image: "/services/plumbing.jpeg" },
    { id: 10, title: "Restroom Cleaning", image: "/services/toiletcleaning.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, services.length]);

  const getCardStyle = (index: number) => {
    const total = services.length;
    let position = index - currentIndex;

    if (position < -Math.floor(total / 2)) {
      position += total;
    } else if (position > Math.floor(total / 2)) {
      position -= total;
    }

    const isCenter = position === 0;
    const translateX = position * 360;
    const scale = isCenter ? 1.1 : Math.max(0.8, 1 - Math.abs(position) * 0.12);
    const opacity = isCenter ? 1 : Math.max(0.4, 1 - Math.abs(position) * 0.2);
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
      id="service"
      className="relative py-20 mt-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
          Services We Provide
        </h2>

        {/* Desktop Carousel */}
        <div
          className="relative h-[520px] hidden lg:flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: "1500px" }}
        >
          {services.map((service, index) => (
            <div key={service.id} className="absolute" style={getCardStyle(index)}>
              <div
                className="rounded-3xl shadow-lg overflow-hidden"
                style={{ width: "320px", height: "460px" }}
              >
                <div className="relative h-[360px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}
                </div>

                <div className="p-6 text-center bg-gradient-to-b from-white to-purple-50">
                  <h3 className="text-2xl font-bold text-[#2f0f57]">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (Clean Scroll Version) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center bg-gradient-to-b from-white to-purple-50">
                <h3 className="text-lg font-semibold text-[#2f0f57]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="hidden lg:flex justify-center gap-3 mt-10">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-10 h-3 bg-[#2f0f57]"
                  : "w-3 h-3 bg-[#2f0f57]/30 hover:bg-[#2f0f57]/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Blobs (Softened) */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
