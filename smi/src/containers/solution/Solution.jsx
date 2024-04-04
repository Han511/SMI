import React from "react";
import Feature from "../../components/feature/Feature";
import "./solution.css";

const featuresData = [
  {
    title: "Self-awareness and self-acceptance",
    text: "Develop a strong sense of self-awareness and acceptance of your own strengths, weaknesses, and values. Understanding yourself better can reduce the impact of external opinions .",
  },
  {
    title: "Focus on internal validation",
    text: "Work on cultivating self-confidence and self-validation. Instead of seeking validation from others, recognize and celebrate your own accomplishments and qualities.",
  },
  {
    title: "Seek professional help",
    text: "If caring too much about what others think negatively impacts your mental health and well-being, consider seeking support from a therapist or counselor.",
  },
  {
    title: "Set boundaries",
    text: "Establish clear boundaries with others to protect your mental and emotional well-being. Learn to say no when necessary and prioritize your own needs and opinions.",
  },
];

const solution = () => {
  return (
    <div className="smi__features section__padding" id="features">
      <div className="smi__features-heading">
        <h1 className="gradient__text">
          Best solution for It. Try this in your every day life & Make it
          Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="smi__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default solution;
