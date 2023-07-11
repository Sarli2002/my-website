import React from "react";
import myimage from "./my-image.png";
import "./Header.css";
export default function Header() {
  return (
    <div id="header" class="header">
      <div class="header-max-width">
        <div class="header-content">
          <div class="text-1">
            Hello, <span>I am</span>
          </div>
          <div class="text-2">Sarli</div>
          <p>
            I am a front-end developer currently pursuing my undergraduate
            studies at NSUT.
          </p>
          <a href="#" class="btn">
            About me
          </a>
          <div class="social-media">
            <p> Check out my </p>
            <a href="#" class="social-btn">
              <i class="fa-brands fa-linkedin-in "></i>
            </a>
            <a href="#" class="social-btn">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-btn">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="right">
          <img class="header-image" src={myimage} />
        </div>
      </div>
    </div>
  );
}
