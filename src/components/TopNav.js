import React from 'react';
import '../styles/TopNav.css';

const TopNav = () => {
  return (
    <div className="topnav">
      <img src="/logo.png" alt="Logo" className="logo" />
      <div className="links">
        <a href="#about" className="active">About</a>
        <a href="#category">Category</a>
        <a href="#services">Services</a>
        <a href="#colour">colours</a>
        <a href="#download">Downloads</a>
        <a href="#dalers">Become A Dealer</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contacts</a>
        <button className="enquiry-button">Enquiry Now</button>      </div>
    </div>
  );
};

export default TopNav;
