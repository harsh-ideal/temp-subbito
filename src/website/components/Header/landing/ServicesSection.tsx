// ServicesSection.tsx
import React, { useEffect, useState } from 'react';

interface Service {
  id: number;
  title: string;
  image: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Kitchen Prep',
      image: '/services/kitchenprep.png',
    },
    {
      id: 2,
      title: 'Cooking',
      image: '/services/cooking.png',
    },
    {
      id: 3,
      title: 'Dishwashing',
      image: '/services/dishwashing.png',
    },
    {
      id: 4,
      title: 'Mopping',
      image: '/services/mopping.png',
    },
    {
      id: 5,
      title: 'Dusting',
      image: '/services/dusting.png',
    },
    {
      id: 6,
      title: 'Kitchen Cleaning',
      image: '/services/kitchencleaning.png',
    }, 
    {
      id: 7,
      title: 'General Help',
      image: '/services/generalhelp.png',
    },
    {
      id: 7,
      title: 'Electrician',
      image: '/services/electrician.jpeg',
    },
    {
      id: 7,
      title: 'Plumber',
      image: '/services/plumbing.jpeg',
    },
    {
      id: 7,
      title: 'Restroom Cleaning',
      image: '/services/toiletcleaning.jpeg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, services.length]);

  // Calculate position for each card
  const getCardStyle = (index: number) => {
    const totalServices = services.length;
    let position = index - currentIndex;

    // Handle wrap around for infinite loop
    if (position < -Math.floor(totalServices / 2)) {
      position += totalServices;
    } else if (position > Math.floor(totalServices / 2)) {
      position -= totalServices;
    }

    const isCenter = position === 0;
    const translateX = position * 380; // Space between cards
    const scale = isCenter ? 1.15 : Math.max(0.75, 1 - Math.abs(position) * 0.15);
    const opacity = isCenter ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.25);
    const rotateY = position * 8; // Subtle 3D rotation
    const zIndex = 50 - Math.abs(position);

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  // const handlePrev = () => {
  //   setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % services.length);
  // };

  return (
    <section
  id="service"
  className="relative bg-white py-30 mt-20 overflow-hidden border-t border-purple-500 border-t-3"
>
      <div className="container mx-auto px-8">
        {/* Section Heading */}
       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
  Services We Provide
</h2>

        {/* Carousel Container */}
        <div
          className="relative h-[550px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: '1500px' }}
        >
          {/* All Service Cards */}
          {services.map((service, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={service.id}
                className="absolute"
                style={getCardStyle(index)}
              >
                {/* Card */}
                <div
                  className={`bg-white rounded-3xl shadow-2xl overflow-hidden `}
                  style={{
                    width: '320px',
                    height: '480px',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-[380px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Subbito Badge (if center) */}
                    {isCenter && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="p-6 text-center bg-gradient-to-b from-white to-purple-50">
                    <h3 className="text-2xl font-bold text-purple-900">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-purple-600'
                  : 'w-3 h-3 bg-purple-300 hover:bg-purple-400'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center text-2xl font-bold"
            aria-label="Previous service"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center text-2xl font-bold"
            aria-label="Next service"
          >
            →
          </button>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default ServicesSection;
