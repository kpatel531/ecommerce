import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-100 border-t text-gray-700">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">MegaMart Supermarket</h3>
          <p className="text-sm font-normal">
            Your one-stop shop for groceries, household essentials, and more. Quality products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm font-normal">
            <li><a href="/about" className="hover:text-green-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-green-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-md font-semibold mb-2">Customer Service</h4>
          <ul className="space-y-1 text-sm font-normal">
            <li><a href="/faq" className="hover:text-green-600">FAQs</a></li>
            <li><a href="/returns" className="hover:text-green-600">Returns & Refunds</a></li>
            <li><a href="/shipping" className="hover:text-green-600">Shipping Info</a></li>
            <li><a href="/support" className="hover:text-green-600">Support</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-md font-semibold mb-2">Connect With Us</h4>
          <p className="text-sm mb-2 font-normal">Email: support@megamart.com</p>
          <p className="text-sm mb-4 font-normal">Phone: +91 98765 43210</p>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm bg-sky-200 font-normal">
        © All Rights Reserved 2024. MegaMart Supermarket
      </div>
    </footer>
  );
};

export default Footer;