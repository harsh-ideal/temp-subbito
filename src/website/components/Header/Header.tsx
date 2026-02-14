import React, { useState } from "react";
import logo from "../../../assets/img/SubbitoLogo.jpeg";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 md:px-6 py-4 bg-[#FBFAFC]  z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="h-10 w-40 md:w-44 rounded-full overflow-hidden cursor-pointer">
          <img
            src={logo}
            alt="Subbito Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER NAV (Desktop Only) */}
        <div className="hidden md:flex bg-white px-6 py-2 rounded-full shadow-sm items-center gap-6 text-lg font-medium">
          {["Services", "How It Works?", "Faq's"].map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:text-[#2F1B56] transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* RIGHT EMAIL (Desktop) */}
        <div className="hidden md:flex bg-white px-4 py-2 rounded-full text-lg font-medium shadow-sm cursor-pointer hover:bg-gray-100 transition">
          info@subbito.com
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 text-center">
          {["Services", "How It Works?", "Faq's"].map((item) => (
            <span
              key={item}
              className="cursor-pointer py-2 hover:bg-gray-100 rounded-lg"
            >
              {item}
            </span>
          ))}

          <div className="mt-2 py-2 bg-gray-100 rounded-lg cursor-pointer">
            info@subbito.com
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
