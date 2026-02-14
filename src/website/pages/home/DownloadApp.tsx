import React, { useEffect, useState } from "react";

const DownloadApp: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative lg:rounded-t-[300px] rounded-t-4xl w-full min-h-screen flex flex-col justify-between text-white overflow-hidden"
      style={{ backgroundColor: "#2F1B56" }}
    >
      {/* -------- PARALLAX BACKGROUND -------- */}
      <div
        className="absolute inset-0 bg-[url('/stars.png')] opacity-20 transition-transform duration-75"
        style={{ transform: `translateY(${offset * 0.25}px)` }}
      />

      <div
        className="absolute inset-0 bg-linear-to-b from-transparent to-[#2F1B56]"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      />

      {/* -------- APP BUTTONS -------- */}
      <div className="sticky top-6 z-40 flex justify-center gap-4 mt-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          className="h-12 cursor-pointer transition-transform hover:scale-105"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          className="h-12 cursor-pointer transition-transform hover:scale-105"
        />
      </div>

      {/* -------- BIG BACKGROUND TEXT -------- */}
      <div className="absolute bottom-[-5%] left-0 right-0 text-center text-[12rem] font-extrabold opacity-10 select-none pointer-events-none">
        SUBBITO
      </div>

      {/* -------- HERO CONTENT -------- */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6">
        <p className="uppercase tracking-widest text-sm opacity-80 mb-2">
          INDIA'S FIRST
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-purple-400 underline decoration-purple-400">
            QUICK
          </span>{" "}
          SERVICE APP
        </h1>

        <p className="mt-4 max-w-xl text-lg opacity-90">
          On-demand home services to empower urban households
        </p>
      </div>

      {/* ✅ -------- NEW LINKS SECTION (YOUR REQUEST) -------- */}
      <div className="relative z-20 text-center pb-20">
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a
            href="/privacy-policy"
            target="_blank"
            className="opacity-80 hover:opacity-100 transition underline"
          >
            Privacy Policy
          </a>

          <span className="opacity-50">|</span>

          <a
            href="/terms-and-conditions"
            target="_blank"
            className="opacity-80 hover:opacity-100 transition underline"
          >
            Terms and Conditions
          </a>

         
        </div>
      </div>

      {/* -------- BOTTOM LEFT CARD -------- */}
      <div className="fixed hidden lg:block bottom-6 left-6 z-20">
        <div className="bg-white text-black rounded-2xl shadow-xl p-5 w-64 transform transition hover:-translate-y-1">
          <p className="font-bold">DOWNLOAD THE</p>
          <p className="text-purple-500 text-xl font-bold">Subbito</p>

          <div className="mt-3 flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
