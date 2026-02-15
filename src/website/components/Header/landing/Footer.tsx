// Footer.tsx
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <footer className="relative  py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center space-y-8 pb-16 border-b border-gray-200">

          {/* Illustration */}
          <img
            src="/cartoon/cleaner.png"
            alt="Subbito Helper"
            className="w-90 object-contain"
          />

          {/* Tagline */}
          <p className="text-[#2f0f57] text-2xl md:text-3xl font-semibold">
            "Get house help anytime."
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              onClick={handleAppStoreClick}
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>

            <a
              href="#"
              onClick={handleAppStoreClick}
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=500x166"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-[#2f0f57]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
              />
            </svg>
            <a
              href="mailto:help@withsubbito.com"
              className="text-gray-800 text-sm font-medium hover:text-[#2f0f57] transition-colors"
            >
              help@withsubbito.com
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {/* Legal */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#2f0f57]">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-[#2f0f57]">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wide">
                Support
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#2f0f57]">Contact Us</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#2f0f57]">Careers</a></li>
                <li>
                  <a
                    href="mailto:careers@withsubbito.com"
                    className="hover:text-[#2f0f57]"
                  >
                    careers@withsubbito.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2f0f57]">
                    Become a Subbito Professional
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wide">
                Follow Us
              </h3>

              <div className="flex items-center gap-4 mb-6">
                {["facebook", "linkedin", "instagram"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#2f0f57] hover:bg-[#2f0f57]/5 transition"
                  >
                    <span className="text-xs text-[#2f0f57] font-semibold">
                      {platform[0].toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>

              <p className="text-gray-500 text-xs">
                Subbito © 2025
              </p>
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

            <p className="text-gray-600 text-center mb-6">
              Our app is launching very soon! Get ready for a seamless house help experience.
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
    </footer>
  );
};

export default Footer;
