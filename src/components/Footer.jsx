import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm"> Hikeers
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="text-sm space-y-2">
              <li>Email: hiikers@gmail.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 414 Hike street, Hikeer City</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="<FaFacebook />"><FaFacebook /></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"><FaXTwitter /></i>
              </a>
              
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()}hiikers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
