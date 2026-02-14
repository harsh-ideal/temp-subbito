// ReviewsSection.tsx
import React, { useEffect, useState } from 'react';

interface Review {
  id: number;
  name: string;
  location: string;
  avatar: string;
  review: string;
}

const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Pradnyesh Suncity',
      location: 'Sector 56',
      avatar: 'https://placehold.co/80x80/8B5CF6/FFF?text=PS',
      review: 'I hired a cook from Subbito, and I am very happy. Food taste is very good and is like home. She comes on time daily, and the kitchen is always clean after cooking. Very satisfied. 👍',
    },
    {
      id: 2,
      name: 'Ridhi Saluja',
      location: 'Sector 56',
      avatar: 'https://placehold.co/80x80/7C3AED/FFF?text=RS',
      review: 'Subbito cooking service is very helpful for working families. Our cook makes fresh food morning and evening. She listens to our preferences and adjusts spices as we like. Very good experience till now',
    },
    {
      id: 3,
      name: 'Kirti',
      location: 'Sector 56',
      avatar: 'https://placehold.co/80x80/6D28D9/FFF?text=K',
      review: `Earlier, we had many issues with cooks not coming on time. After booking from Subbito, things are smooth. Cook is polite, trained and hygiene is maintained properly. I recommend this service.`,
    },
    {
      id: 4,
      name: 'Amit Sharma',
      location: 'Sector 62',
      avatar: 'https://placehold.co/80x80/5B21B6/FFF?text=AS',
      review: 'Very professional cleaning service by Subbito. Maid is regular and does proper dusting and mopping. My house looks neat every day, with good and trusted service.',
    },
    {
      id: 5,
      name: 'Neha Gupta',
      location: 'Sector 45',
      avatar: 'https://placehold.co/80x80/4C1D95/FFF?text=NG',
      review: 'I booked a cleaning service from Subbito for my 3BHK. Staff are well behaved, and work is done without any reminder. It gives peace of mind. Thank you, Subbito team.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, reviews.length]);

  // Calculate position for each card
  const getCardStyle = (index: number) => {
    const totalReviews = reviews.length;
    let position = index - currentIndex;

    // Handle wrap around for infinite loop
    if (position < -Math.floor(totalReviews / 2)) {
      position += totalReviews;
    } else if (position > Math.floor(totalReviews / 2)) {
      position -= totalReviews;
    }

    const isCenter = position === 0;
    const translateX = position * 420; // Space between cards
    const scale = isCenter ? 1.1 : Math.max(0.8, 1 - Math.abs(position) * 0.12);
    const opacity = isCenter ? 1 : Math.max(0.4, 1 - Math.abs(position) * 0.2);
    const zIndex = 50 - Math.abs(position);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="relative bg-white py-30 mt-20 overflow-hidden border-t border-purple-500 border-t-3">
      <div className="container mx-auto px-8">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="text-5xl">⭐</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
            Reviews & Feedback
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative h-[400px] flex items-center justify-center mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* All Review Cards */}
          {reviews.map((review, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={review.id}
                className="absolute"
                style={getCardStyle(index)}
              >
                {/* Review Card */}
                <div
                  className={`bg-white rounded-3xl shadow-lg border-2 overflow-hidden ${
                    isCenter ? 'border-purple-400 shadow-2xl' : 'border-gray-200'
                  }`}
                  style={{
                    width: '380px',
                    minHeight: '280px',
                  }}
                >
                  {/* Card Content */}
                  <div className="p-8">
                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-purple-300"
                        />
                      </div>

                      {/* Name & Location */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{review.location}</p>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="relative">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-purple-600 font-bold mr-1">•</span>
                        {review.review}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-purple-600'
                  : 'w-3 h-3 bg-purple-300 hover:bg-purple-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center text-2xl font-bold"
            aria-label="Previous review"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center text-2xl font-bold"
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default ReviewsSection;
