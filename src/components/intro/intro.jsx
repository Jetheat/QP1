import React from "react";
import "./intro.css";
import mosque from "../assets/mosque.jpg"; // Import the image

const IntroSection = () => {
  return (
    <section
      className="intro-section"
      style={{
        backgroundImage: `url(${mosque})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "white", // Ensuring all text is white
        textAlign: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Transparency layer */}
      <div 
        className="overlay" 
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(16, 11, 65, 0.5)", // Dark overlay
          top: 0,
          left: 0,
        }}
      ></div>

      {/* Content */}
      <div 
        className="content" 
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "600px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "white" }}>
          Master Quran Reading Effortlessly
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px", color: "white" }}>
          Even if you're starting from zero, our step-by-step approach will help you read the Quran fluently, 
          with correct pronunciation and confidence.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px", color: "white" }}>
          Learn at your own pace, build a strong foundation, and experience the beauty of reciting the Quran the way it’s meant to be.
        </p>
        <a 
          href="#" 
          className="btn" 
          style={{
            display: "inline-block",
            padding: "10px 20px",
            color: "white",
            textDecoration: "none",
            borderRadius: "20px",
            transition: "0.3s",
            backgroundColor: "rgb(22, 22, 243)",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "rgb(15, 1, 80)"}
          onMouseOut={(e) => e.target.style.backgroundColor = "rgb(22, 22, 243)"}
        >
          Start Learning
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
