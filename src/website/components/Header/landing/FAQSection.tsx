// FAQSection.tsx
import React, { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is Subbito ?",
      answer:
        "Subbito is a household service platform that helps you find trusted and verified home helpers for daily tasks like cleaning, cooking, dishwashing, and more.",
    },
    {
      id: 2,
      question: "How do I book a service on subbito ?",
      answer:
        "Booking is simple. You just need to contact Subbito on WhatsApp or through our platform, share your requirement, and our team will arrange the service for you.",
    },
    {
      id: 3,
      question: "What services does Subbito provide ?",
      answer:
        "Subbito provides household services such as cleaning, dishwashing, cooking support, and daily home assistance. Services may vary depending on your location.",
    },
    {
      id: 4,
      question: "Can I book for one day or long-term?",
      answer:
        "Subbito offers complete flexibility. You can book help for a single day, a few days, or choose long-term and regular support based on your needs.",
    },
    {
      id: 5,
      question: "Are Subbito helpers verified?",
      answer:
        "All helpers are background-checked and verified to ensure safety, reliability, and trust.",
    },
    {
      id: 6,
      question: "What if I’m not satisfied with the service?",
      answer:
        "Your satisfaction matters to us. If there’s any issue, Subbito support will help resolve it quickly or arrange a replacement.",
    },
    {
      id: 7,
      question: "Is Subbito available in my area?",
      answer:
        "Subbito currently operates in selected locations and is expanding fast. Contact us on WhatsApp to check availability in your area.",
    },
    {
      id: 8,
      question: "Can helpers join Subbito?",
      answer:
        "Helpers can register with Subbito to get respectful work, fair pay, and nearby jobs.",
    },
    {
      id: 9,
      question: "What is Subbito Subscription?",
      answer:
        "Subbito Subscription is a regular service plan that gives you consistent household help without the need to book again and again.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="relative  py-24 mt-16 "
    >
      <div className="max-w-[950px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
            FAQ's
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-xl border border-[#2f0f57]/20"
                    : "bg-gray-50 border border-gray-100 hover:border-[#2f0f57]/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-gray-900 font-semibold text-lg pr-6">
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#2f0f57] rotate-180 shadow-md"
                        : "bg-[#2f0f57]/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        isOpen ? "text-white" : "text-[#2f0f57]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Soft Decorative Accents */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default FAQSection;
