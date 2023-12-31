import { Link } from "react-router-dom";
import "./HeroImgStyles.css" ;
import IntroImg from "../assets/wallpaper.jpg"
import React from "react";

const HeroImg = () => {
  return  <div className="hero">
    <div className="mask">
<img className="into-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>HI,I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project" className="btn">
            Projects
            </Link>
            <Link to="/contact"
            className="btn btn-light"> 
            Contact
            </Link>
        </div>
    </div>
</div>;
};

export default HeroImg ;