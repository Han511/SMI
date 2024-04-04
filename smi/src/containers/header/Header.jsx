import React from "react";
import people from "../../assets/people.png";
import SMI from "../../assets/SMI_image.svg";
import "./header.css";

const Header = () => (
  <div className="smi__header section__padding" id="home">
    <div className="smi__header-content">
      <h1 className="gradient__text">
        Why do we care about what others think of us?
      </h1>
      <p>
        We care about what others think about us due to various reasons deeply
        ingrained in human nature and influenced by societal norms and
        individual experiences. These reasons include the need for social
        acceptance, validation, belonging, self-esteem, and social comparison.
      </p>

      <div className="smi__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="smi__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="smi__header-image">
      <img src={SMI} alt="smi_image" />
    </div>
  </div>
);

export default Header;
