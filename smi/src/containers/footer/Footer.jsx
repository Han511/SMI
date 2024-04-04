import React from "react";
import smiLogo from "../../assets/SMI_logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="smi__footer section__padding">
    <div className="smi__footer-heading">
      <h1 className="gradient__text">
        Do you want to contact us in order to get some advice?
      </h1>
    </div>

    <div className="smi__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="smi__footer-links">
      <div className="smi__footer-links_logo">
        <img src={smiLogo} alt="smi_logo" />
      </div>
      <div className="smi__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="smi__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="smi__footer-links_div">
        <h4>Get in touch</h4>
        <p>Ethiopia, Amhara</p>
        <p>+12345678</p>
        <p>mekdihani5@gmail.com</p>
      </div>
    </div>

    <div className="smi__footer-copyright">
      <p>© 2024 SMI All rights reserved</p>
    </div>
  </div>
);

export default Footer;
