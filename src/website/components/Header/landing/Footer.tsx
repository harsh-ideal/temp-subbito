// Footer.tsx
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <footer className="relative bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-8">
        {/* Top Section - Character & Download */}
        <div className="flex flex-col items-center justify-center space-y-8 pb-12 border-b border-gray-300">
          {/* Helper Illustration */}
          <div className="relative">
            <img
              src="/cartoon/cleaner.jpeg"
              alt="Subbito Helper"
              className="w-80  object-contain"
            />
          </div>

          {/* Tagline */}
          <p className="text-purple-700 text-2xl font-semibold text-center">
            "Get house help anytime."
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Google Play Button */}
            <a
              href="#"
              onClick={handleAppStoreClick}
              className="inline-flex items-center transition-all duration-300 hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>

            {/* App Store Button */}
            <a
              href="#"
              onClick={handleAppStoreClick}
              className="inline-flex items-center transition-all duration-300 hover:scale-105"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=500x166"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Email Contact */}
          <div className="flex items-center gap-3 bg-gray-200 px-5 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:help@withsubbito.com"
              className="text-gray-800 text-sm font-medium hover:text-purple-700 transition-colors"
            >
              help@withsubbito.com
            </a>
          </div>
        </div>

        {/* Bottom Section - Links & Social */}
        <div className="relative bg-white pt-10  overflow-hidden border-t border-purple-500 border-t-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Legal Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-4 uppercase">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-4 uppercase">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    Delete Account
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-4 uppercase">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:careers@withsubbito.com"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    careers@withsubbito.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-purple-700 transition-colors"
                  >
                    Become a Subbito Professional
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Copyright Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-4 uppercase">
                Follow Us
              </h3>
              <div className="flex items-center gap-3 mb-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-gray-600 text-xs">
                Subbito © 2025
              </p>
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
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center animate-bounce-slow">
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

      {/* Animations */}
      <style>{`
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
    </footer>
  );
};

export default Footer;
