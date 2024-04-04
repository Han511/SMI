import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatSMI.css";

const WhatSMI = () => (
  <div className="smi__whatsmi section__margin" id="wsmi">
    <div className="smi__whatsmi-feature">
      <Feature
        title="What is SMI"
        text='"SocialMirrorInsights" could refer to a concept or platform that provides insights into social dynamics, particularly regarding how individuals perceive themselves in relation to others. It might encompass various aspects of social psychology, including self-perception, social comparison, and interpersonal relationships.'
      />
    </div>
    <div className="smi__whatsmi-heading">
      <h1 className="gradient__text">
        Our mind is Influenced by various factors:
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="smi__whatsmi-container">
      <Feature
        title="Social acceptance"
        text=" Being accepted by others ensures
        access to resources, protection,
        and support."
      />
      <Feature
        title="Self-esteem"
        text="People often derive their self-worth from how they are perceived by others. "
      />
      <Feature
        title="Belongingness"
        text=" Feeling accepted by others fosters a sense of belonging and contentedness, fulfilling fundamental psychological needs"
      />
    </div>
  </div>
);

export default WhatSMI;
