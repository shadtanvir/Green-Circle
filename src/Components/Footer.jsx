import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-secondary text-error font-lora pt-10 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold font-merriweather mb-4">
              Contact Us
            </h2>
            <p>Email: tahmedshad127@gmail.com</p>
            <p>Phone: +8801751038180</p>
            <p>Location: Dhaka,Bangladesh</p>
          </div>

          {/* Terms & Policies */}
          <div>
            <h2 className="text-xl font-semibold font-merriweather mb-4">
              Terms and policies
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold font-merriweather mb-4">
              Connect With Us
            </h2>
            <div className="flex gap-4 text-2xl ">
              <a
                href="https://www.facebook.com/tahmedshad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="text-blue-500" />
              </a>
              <a
                href="https://twitter.com/tanvir70469110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter size={24} className="text-black" />
              </a>

              <a
                href="https://www.instagram.com/shadtanvir127/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} color="red" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Bottom Branding */}
        <div className="border-t border-green-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-error pb-6">
          <p>© 2025 Green Circle. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Grow. Share. Connect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
