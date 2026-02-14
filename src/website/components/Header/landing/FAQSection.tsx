// FAQSection.tsx
import React, { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First one open by default

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What is Subbito ?',
      answer: 'Subbito is a household service platform that helps you find trusted and verified home helpers for daily tasks like cleaning, cooking, dishwashing, and more.',
    },
    {
      id: 2,
      question: 'How do I book a service on subbito ?',
      answer: 'Booking is simple. You just need to contact Subbito on WhatsApp or through our platform, share your requirement, and our team will arrange the service for you.',
    },
    {
      id: 3,
      question: 'What services does Subbito provide ?',
      answer: 'Subbito provides household services such as cleaning, dishwashing, cooking support, and daily home assistance. Services may vary depending on your location.',
    },
    {
      id: 4,
      question: 'Can I book for one day or long-term?',
      answer: 'Subbito offers complete flexibility. You can book help for a single day, a few days, or choose long-term and regular support based on your needs.',
    },
    {
      id: 5,
      question: 'Are Subbito helpers verified?',
      answer: 'All helpers are background-checked and verified to ensure safety, reliability, and trust.',
    },
    {
      id: 6,
      question: 'What if I’m not satisfied with the service?',
      answer: 'Your satisfaction matters to us. If there’s any issue, Subbito support will help resolve it quickly or arrange a replacement.',
    },
    {
      id: 7,
      question: 'Is Subbito available in my area?',
      answer: 'Subbito currently operates in selected locations and is expanding fast. Contact us on WhatsApp to check availability in your area.',
    },
    {
      id: 8,
      question: 'Can helpers join Subbito?',
      answer: 'Helpers can register with Subbito to get respectful work, fair pay, and nearby jobs.',
    },
    {
      id: 9,
      question: 'What is Subbito Subscription?',
      answer: 'Subbito Subscription is a regular service plan that gives you consistent household help without the need to book again and again.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="relative bg-white py-30 mt-20 overflow-hidden border-t border-purple-500 border-t-3">
      <div className="container mx-auto px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-1 bg-[linear-gradient(180deg,#6621BD_39.52%,#2F0F57_100%)] bg-clip-text text-transparent">
            FAQ's
          </h2>
          <p className="text-gray-700 text-lg">
            Frequently Asked Questions
          </p>
        </div>

        {/* Scrollable FAQ Container */}
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl  p-8 overflow-y-auto custom-scrollbar"
            style={{
              maxHeight: '600px',
            }}
          >
            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq) => {
                const isOpen = openFAQ === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`bg-gray-50 rounded-2xl transition-all duration-300 ${
                      isOpen ? 'shadow-lg' : 'shadow-sm'
                    }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 rounded-2xl transition-all duration-300"
                    >
                      <span className="text-gray-900 font-semibold text-lg pr-4">
                        {faq.question}
                      </span>

                      {/* Toggle Icon */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
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

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-6 text-gray-500 text-sm">
              <p>Scroll for more FAQs ↓</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div> */}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9333ea;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7e22ce;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
