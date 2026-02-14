import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/SubbitoLogo.jpeg";

const Terms: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen  px-6 md:px-16 py-10 text-gray-900">
      {/* Top Bar - same as Privacy page */}
      <div className="flex justify-between items-center mb-10">
        <div className="h-8 w-28 md:h-10 md:w-44 rounded-full overflow-hidden cursor-pointer" onClick={()=>navigate("/")}>
          <img
            src={logo}
            alt="Subbito Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 text-purple-700 font-medium hover:underline"
        >
          ⬅ Home Screen
        </Link>
      </div>

      {/* Title Section */}
      <h2 className="text-3xl font-semibold mb-2">
        Terms and Conditions – Subbito
      </h2>
      <p className="text-gray-500 mb-6">Last Updated: 01 January 2026</p>

      <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
        <p>
          Welcome to Subbito! These Terms and Conditions (“Terms”) explain how
          you can use our services, what we do, and what we expect from you.
          When you use our website https://www.subbito.com or the Subbito mobile
          app (collectively, the “Platform”), you agree to follow these Terms.
        </p>

        <p className="font-semibold">
          If you do not agree, please do not use our Platform or Services.
        </p>

        <h3 className="text-xl font-semibold mt-4">1. What These Terms Mean</h3>
        <ul className="list-disc pl-6">
          <li>
            “Subbito”, “we”, “us”, and “our” mean Subbito Private Limited and
            its affiliates.
          </li>
          <li>
            “You”, “your”, and “Customer” mean any person who uses the Platform
            and booking Services.
          </li>
          <li>
            The “Services” means everything we provide through the Platform,
            including the ability to request and pay for services from
            independent providers.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">2. Who Can Use Subbito</h3>
        <p>To use our Platform and Services, you must:</p>
        <ul className="list-disc pl-6">
          <li>Be at least 18 years old</li>
          <li>Have the legal right to agree to these Terms</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">3. How Subbito Works</h3>
        <p>
          Subbito is a technology platform that connects you with independent
          Service Professionals.
        </p>
        <ul className="list-disc pl-6">
          <li>We do not directly provide the service.</li>
          <li>Service Professionals are not Subbito employees.</li>
          <li>You contract directly with the professional.</li>
          <li>Subbito only facilitates booking and payment.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">4. Your Account</h3>
        <p>You must create an account to use the services.</p>
        <ul className="list-disc pl-6">
          <li>Your details must be accurate.</li>
          <li>You are responsible for your login.</li>
          <li>You must report unauthorized access.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">5. Booking Services</h3>
        <ul className="list-disc pl-6">
          <li>Select service, date, and time.</li>
          <li>We match you with a professional.</li>
          <li>Booking gets confirmed.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">6. Paying for Services</h3>
        <p>You may pay via UPI, cards, or cash (if available).</p>
        <p className="font-semibold">
          Payments are generally final and non-refundable.
        </p>

        <h3 className="text-xl font-semibold mt-4">7. Subbito Credits</h3>
        <ul className="list-disc pl-6">
          <li>Credits are not cash.</li>
          <li>They may expire.</li>
          <li>They cannot be transferred.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">8. Communication</h3>
        <p>
          You agree to receive SMS, WhatsApp, email, and calls related to your
          bookings.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          9. Your Behaviour and Safety
        </h3>
        <ul className="list-disc pl-6">
          <li>Treat professionals with respect.</li>
          <li>No discrimination allowed.</li>
          <li>No illegal or unsafe requests.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">10. Reviews and Ratings</h3>
        <p>You may leave honest reviews. Subbito may use them publicly.</p>

        <h3 className="text-xl font-semibold mt-4">11. Privacy and Data Use</h3>
        <p>Your data is handled according to our Privacy Policy.</p>

        <h3 className="text-xl font-semibold mt-4">
          12. Intellectual Property
        </h3>
        <p>
          All content belongs to Subbito. You may not copy or redistribute it.
        </p>

        <h3 className="text-xl font-semibold mt-4">13. Termination</h3>
        <p>
          We may suspend or terminate accounts for misuse or illegal activity.
        </p>

        <h3 className="text-xl font-semibold mt-4">14. Liability</h3>
        <p>Subbito is not responsible for actions of service professionals.</p>
        <p className="font-semibold">
          Our liability is limited to ₹10,000 unless law requires otherwise.
        </p>

        <h3 className="text-xl font-semibold mt-4">15. Indemnity</h3>
        <p>
          You agree to hold Subbito harmless from any claims related to your
          use.
        </p>

        <h3 className="text-xl font-semibold mt-4">16. Governing Law</h3>
        <p>
          These Terms are governed by Indian law. Disputes will be resolved in
          New Delhi through arbitration.
        </p>

        <h3 className="text-xl font-semibold mt-4">17. Contact Us</h3>
        <p>📧 help@subbito.com</p>

        <h3 className="text-xl font-semibold mt-4">
          18. Changes to These Terms
        </h3>
        <p>
          We may update these Terms anytime. Continued use means acceptance.
        </p>
      </div>
    </div>
  );
};

export default Terms;
