import React from 'react';
import '../index.css'; 

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="footer-logo mb-4">
        <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="footer-links flex space-x-8 mb-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="footer-social mb-4">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a> <br/>
            <a href="#" className="hover:text-gray-400">Twitter</a><br/>
            <a href="#" className="hover:text-gray-400">Instagram</a><br/>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
        <p className="text-center mt-6">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
