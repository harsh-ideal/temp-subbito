import React, { useState } from "react";


interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
}

const faqIcon = (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is Subbito?",
      answer:
        "Subbito is a household service platform that helps you find trusted and verified home helpers for daily tasks like cleaning, cooking, dishwashing, and more.",
      icon: faqIcon,
      category: "About",
    },
    {
      id: 2,
      question: "How do I book a service on Subbito?",
      answer:
        "Booking is simple. You just need to contact Subbito on WhatsApp or through our platform, share your requirement, and our team will arrange the service for you.",
      icon: faqIcon,
      category: "Booking",
    },
    {
      id: 3,
      question: "What services does Subbito provide?",
      answer:
        "Subbito provides household services such as cleaning, dishwashing, cooking support, and daily home assistance. Services may vary depending on your location.",
      icon: faqIcon,
      category: "Services",
    },
    {
      id: 4,
      question: "Can I book for one day or long-term?",
      answer:
        "Yes. Subbito offers complete flexibility. You can book help for a single day, a few days, or choose long-term and regular support based on your needs.",
      icon: faqIcon,
      category: "Plans",
    },
    {
      id: 5,
      question: "Are Subbito helpers verified?",
      answer:
        "Yes. All helpers are background-checked and verified to ensure safety, reliability, and trust.",
      icon: faqIcon,
      category: "Safety",
    },
    {
      id: 6,
      question: "What if I’m not satisfied with the service?",
      answer:
        "Your satisfaction matters to us. If there’s any issue, Subbito support will help resolve it quickly or arrange a replacement.",
      icon: faqIcon,
      category: "Support",
    },
    {
      id: 7,
      question: "Is Subbito available in my area?",
      answer:
        "Subbito currently operates in selected locations and is expanding fast. Contact us on WhatsApp to check availability in your area.",
      icon: faqIcon,
      category: "Availability",
    },
    {
      id: 8,
      question: "Can helpers join Subbito?",
      answer:
        "Yes. Helpers can register with Subbito to get respectful work, fair pay, and nearby jobs.",
      icon: faqIcon,
      category: "For Helpers",
    },
    {
      id: 9,
      question: "What is Subbito Subscription?",
      answer:
        "Subbito Subscription is a regular service plan that gives you consistent household help without the need to book again and again.",
      icon: faqIcon,
      category: "Subscription",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F3F4FF] py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F1B56]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F1B56]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-[#38177a] uppercase">
            Subbito FAQ's
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`group bg-white rounded-xl shadow-sm transition-all duration-500 overflow-hidden border-2 ${
                openId === faq.id
                  ? "border-[#2F1B56] shadow-xl shadow-[#2F1B56]/10"
                  : "border-transparent hover:border-[#2F1B56]"
              } ${
                hoveredId === faq.id && openId !== faq.id
                  ? "transform scale-[1.01]"
                  : ""
              }`}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredId(faq.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 md:px-6 py-4 flex items-start md:items-center gap-3 md:gap-4 text-left transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    openId === faq.id
                      ? "bg-[#2F1B56] text-white shadow-lg shadow-[#2F1B56]/30 scale-110"
                      : "bg-[#F3F4FF] text-[#2F1B56] group-hover:bg-[#2F1B56]/10"
                  }`}
                >
                  {faq.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                        openId === faq.id ? "text-[#2F1B56]" : "text-gray-500"
                      }`}
                    >
                      {faq.category}
                    </span>
                  </div>
                  <h3
                    className={`font-bold text-base md:text-lg leading-tight transition-colors ${
                      openId === faq.id
                        ? "text-[#2F1B56]"
                        : "text-gray-800 group-hover:text-[#2F1B56]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div
                  className={`shrink-0 transition-all duration-500 ${
                    openId === faq.id
                      ? "rotate-180 text-[#2F1B56]"
                      : "text-gray-400 group-hover:text-[#2F1B56]"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openId === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:px-6 pb-4 md:pl-20">
                  <div className="bg-linear-to-br from-[#F3F4FF] to-white rounded-lg p-4 border border-[#2F1B56]/10">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Faq;
