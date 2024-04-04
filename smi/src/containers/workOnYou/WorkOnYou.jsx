import React from "react";
import WorkOnYouImage from "../../assets/workOnYouImg.png";
import "./workOnYou.css";

const WorkOnYou = () => {
  return (
    <div className="smi__possibility section__padding" id="possibility">
      <div className="smi__possibility-image">
        <img src={WorkOnYouImage} alt="possibility" />
      </div>
      <div className="smi__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">SMI helps you to focus on yourself.</h1>
        <p>
          Surround yourself with positive energies. When there is good people
          around you , you will keep growing. The reverse is also true. So just
          be confident on what you are doing and keep building yourself.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default WorkOnYou;
