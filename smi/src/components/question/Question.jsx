import React from "react";
import "./question.css";

const Question = () => {
  return (
    <div className="smi_question section__margin">
      <div className="smi_question_content">
        <p>Do you have any question?</p>
      </div>
      <div className="smi_question_button">
        <button type="button">Ask Questions</button>
      </div>
    </div>
  );
};

export default Question;
