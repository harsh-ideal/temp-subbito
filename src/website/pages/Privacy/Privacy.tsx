import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/SubbitoLogo.jpeg";
import { useNavigate } from "react-router-dom";

const Privacy: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen  px-6 md:px-16 py-10 text-gray-900">
      {/* Top Bar (same style as your reference) */}
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
      <h2 className="text-3xl font-semibold mb-2">Privacy Policy – Subbito</h2>
      <p className="text-gray-500 mb-6">Last updated: [Add date]</p>

      <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
        <p>
          Subbito values your trust. This Privacy Policy explains how Subbito
          Private Limited (“Subbito”, “we”, “our”, or “us”) collects, uses,
          stores, shares, and protects your information when you use our
          website, mobile application, or services (collectively, the
          “Platform”).
        </p>

        <p>
          By accessing or using Subbito, you agree to the terms of this Privacy
          Policy.
        </p>

        <h3 className="text-xl font-semibold mt-4">1. About Us</h3>
        <p>
          The Platform is owned and operated by Subbito Private Limited, an
          Indian company engaged in providing quick and reliable household
          services through trained professionals.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          2. Who This Policy Applies To
        </h3>
        <p>This Privacy Policy applies to:</p>
        <ul className="list-disc pl-6">
          <li>Users who book services through Subbito</li>
          <li>Service professionals/experts providing services via Subbito</li>
          <li>Anyone visiting or using our Platform</li>
        </ul>
        <p>In this policy, “you” refers to any user of the Platform.</p>

        <h3 className="text-xl font-semibold mt-4">
          3. Information We Collect
        </h3>

        <h4 className="font-semibold">A. Personal Information</h4>
        <p>We may collect the following information:</p>
        <ul className="list-disc pl-6">
          <li>Name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Address and location details</li>
          <li>Home details required for services</li>
          <li>Payment information (secure third-party processing)</li>
        </ul>

        <h4 className="font-semibold mt-2">B. Non-Personal Information</h4>
        <p>We automatically collect:</p>
        <ul className="list-disc pl-6">
          <li>IP address</li>
          <li>Device type, browser, OS</li>
          <li>App usage data</li>
          <li>Cookies and analytics</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">
          4. How We Use Your Information
        </h3>
        <ul className="list-disc pl-6">
          <li>Provide and manage services</li>
          <li>Connect you with professionals</li>
          <li>Process payments</li>
          <li>Improve app experience</li>
          <li>Send service updates</li>
          <li>Prevent fraud</li>
          <li>Comply with laws</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">
          5. Sharing of Information
        </h3>
        <p>We may share information:</p>
        <ul className="list-disc pl-6">
          <li>With service professionals</li>
          <li>With payment partners</li>
          <li>With legal authorities if required</li>
        </ul>
        <p className="font-semibold">We do NOT sell your personal data.</p>

        <h3 className="text-xl font-semibold mt-4">6. Cookies & Tracking</h3>
        <p>
          We use cookies to improve performance and user experience. You can
          manage cookies in your browser settings.
        </p>

        <h3 className="text-xl font-semibold mt-4">7. Third-Party Links</h3>
        <p>We are not responsible for third-party privacy policies.</p>

        <h3 className="text-xl font-semibold mt-4">8. Data Security</h3>
        <p>We protect your data but no system is 100% secure.</p>

        <h3 className="text-xl font-semibold mt-4">9. Data Retention</h3>
        <p>We keep your data only as long as necessary.</p>

        <h3 className="text-xl font-semibold mt-4">10. Your Rights</h3>
        <ul className="list-disc pl-6">
          <li>Access your data</li>
          <li>Correct your data</li>
          <li>Withdraw consent</li>
          <li>Request deletion</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">11. Opt-Out</h3>
        <p>Email us at support@subbito.com to stop promotions.</p>

        <h3 className="text-xl font-semibold mt-4">12. Children’s Privacy</h3>
        <p>Subbito is only for users above 18 years.</p>

        <h3 className="text-xl font-semibold mt-4">13. Changes to Policy</h3>
        <p>Updates will be posted on the Platform.</p>

        <h3 className="text-xl font-semibold mt-4">14. Grievance Officer</h3>
        <p>
          Email: grievance@subbito.com
          <br />
          Response Time: Within 30 days
        </p>

        <h3 className="text-xl font-semibold mt-4">15. Contact Us</h3>
        <p>📧 help@subbito.com</p>

        <h3 className="text-xl font-semibold mt-4">16. Consent</h3>
        <p>
          By using Subbito, you confirm that you are above 18 and agree to this
          policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
