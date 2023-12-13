// Footer.js
import React from 'react';
import image2 from '../assets/images/image 2.png'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4">
      <div className="container justify-content-center text-center">
        <span><img src={image2} alt="" />All copy rights are reserved by Sukkur IBA University </span>
      </div>
    </footer>
  );
};

export default Footer;
