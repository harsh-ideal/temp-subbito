import React, { useEffect, useRef, useState } from "react";
import phn from "../../../assets/img/phn.png"

const Feature: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#F3F4FF] min-h-screen py-16 px-4"
    >
      <style>
        {`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes slidePhoneIn {
          from { opacity: 0; transform: translateX(80px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .animate-pop {
          animation: popIn 0.6s ease-out forwards;
        }

        .animate-phone {
          animation: slidePhoneIn 0.8s ease-out forwards;
        }
        `}
      </style>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#38177a] uppercase">
          HOW IT WORKS
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          A clean, app-like experience from launch to services — just like Subbito.
        </p>
      </div>

      {/* GRID: TREE + MOBILE */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE: TREE FLOW */}
        <div className="flex flex-col items-center gap-6 relative">
          <TreeBox title="Tap on App Icon" delay="0s" animate={inView} />
          <Connector animate={inView} />

          <TreeBox title="Splash Screen" delay="0.2s" animate={inView} />
          <Connector animate={inView} />

          <TreeBox title="Onboarding Screens" delay="0.4s" animate={inView} />
          <Connector animate={inView} />

          <TreeBox title="Create Account / Login" delay="0.6s" animate={inView} />

          {/* BRANCHES */}
          <div className="grid grid-cols-2 gap-6 w-full mt-4 text-center">
            <TreeBoxSmall title="Sign Up" delay="0.8s" animate={inView} />
            <TreeBoxSmall title="Login" delay="0.8s" animate={inView} />
          </div>

          <Connector animate={inView} />

          <TreeBoxSmall title="Forgot Password" delay="1s" animate={inView} />

          <Connector animate={inView} />

          <TreeBox title="Home Screen" delay="1.2s" animate={inView} />

          {/* FEATURE BRANCHES */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6 text-center">
            <TreeBoxSmall title="Search" delay="1.4s" animate={inView} />
            <TreeBoxSmall title="Services" delay="1.4s" animate={inView} />
            <TreeBoxSmall title="Messages" delay="1.4s" animate={inView} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4 text-center">
            <TreeBoxSmall title="My Profile" delay="1.6s" animate={inView} />
            <TreeBoxSmall title="Chat" delay="1.6s" animate={inView} />
            <TreeBoxSmall title="Notifications" delay="1.6s" animate={inView} />
          </div>

          <Connector animate={inView} />

          <div className="grid grid-cols-2 gap-6 w-full mt-4 text-center">
            <TreeBoxSmall title="Book Service" delay="1.8s" animate={inView} />
            <TreeBoxSmall title="Track Booking" delay="1.8s" animate={inView} />
          </div>

          <TreeBoxSmall title="Support Chat" delay="2s" animate={inView} />
        </div>

        {/* RIGHT SIDE: MOBILE MOCKUP LIKE YOUR IMAGE */}
        <div
          className={`flex justify-center items-start transition-all ${
            inView ? "animate-phone" : "translate-x-20"
          }`}
        >
          <div className="relative w-[320px] md:w-90">
            <img
              src={phn}
              alt="Subbito App Preview"
              className="w-full rounded-"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- UI Components ---------- */

const TreeBox = ({
  title,
  delay,
  animate,
}: {
  title: string;
  delay: string;
  animate: boolean;
}) => (
  <div
    className={`bg-white text-[#2F1B56] px-6 py-3 rounded-full shadow-lg text-center w-64 transform transition-all hover:scale-105 ${
      animate ? "animate-pop" : "opacity-0 scale-90"
    }`}
    style={{ animationDelay: delay }}
  >
    {title}
  </div>
);

const TreeBoxSmall = ({
  title,
  delay,
}: {
  title: string;
  delay: string;
  animate: boolean;
}) => (
  <div
    className={`bg-[#E6E8FF] text-[#2F1B56] px-4 py-2 rounded-lg shadow-md text-sm text-center transform transition-all hover:scale-105"
    }`}
    style={{ animationDelay: delay }}
  >
    {title}
  </div>
);

const Connector = ({ animate }: { animate: boolean }) => (
  <div
    className={`h-10 w-1 bg-[#2F1B56] rounded-full transition-all ${
      animate ? "opacity-100" : "opacity-0"
    }`}
  ></div>
);

export default Feature;
