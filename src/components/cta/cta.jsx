import React from "react";
import "./cta.css";
import quranImage from "../assets/Quran2.webp";




const SubscriptionSection = () => {
  return (
    <div className="subscription-section">
      <div className="subscription-left">
        <h2>Ready to Start Now?</h2>
        <p>Click the Button to Begin</p>
        <button className="begin-button">BEGIN</button>
      </div>
      <div className="subscription-right">
        <h2>£35 Per Month</h2>
        <img src={quranImage} alt="Quran on stand" className="quran-image" />
        <p>Not Ready Just Yet?</p>
        <a href="#" className="free-lessons">
          Learn Limited Lessons For FREE – <span>Without Feedback</span>
        </a>
      </div>
    </div>
  );
};

export default SubscriptionSection;
