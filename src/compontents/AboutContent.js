import "./AboutContentStyles.css";
import React from "react";
import React1 from "../assets/photo3.png";
//import React2 from "../assets/photo2.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a react developer. I create responsive secure websites for my clients.</p>
        <a href="/contact">
          <button className="btn">Contact</button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack bottom">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
