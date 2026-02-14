import React from "react";
import { 
  Home, 
  Hammer, 
  Car, 
  Sparkles, 
  Laptop, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    title: "Home Cleaning",
    desc: "Professional deep cleaning for homes and offices.",
    icon: <Sparkles size={40} />,
  },
  {
    title: "Plumbing",
    desc: "Expert plumbing repair and installation services.",
    icon: <Hammer size={40} />,
  },
  {
    title: "Electrician",
    desc: "Safe and reliable electrical solutions at your doorstep.",
    icon: <Laptop size={40} />,
  },
  {
    title: "Car Wash",
    desc: "Premium doorstep car cleaning and detailing.",
    icon: <Car size={40} />,
  },
  {
    title: "Home Repair",
    desc: "End-to-end home maintenance services.",
    icon: <Home size={40} />,
  },
  {
    title: "Verified Professionals",
    desc: "Background-checked and trained service providers.",
    icon: <ShieldCheck size={40} />,
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-[#F3F4FF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-[#2F1B56]">
          Our Services
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Subbito brings trusted professionals to your doorstep
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-[#2F1B56] mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2F1B56]">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
