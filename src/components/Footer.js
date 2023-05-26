import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer-container mt-3">
      <div>
        <h3>Contact Us</h3>
        <p>Mobile Number : 6304632563 </p>
      </div>
      <div>
        <h3>Address</h3>

        <p>Ameerpet,Hyderabad</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@company.com</p>
      </div>
      <div className="social-icons">
        <h3>Follow Us</h3>
        <a href='https://github.com/bhavanijava'><i className="fa fa-github fa-2x"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://www.linkedin.com/in/bhavani-sankar-botchula-032630261/'><i className="fa fa-linkedin-square fa-2x"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Footer;
