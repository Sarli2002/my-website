import React from "react";
import "./Skills.css"
import HTML from "./HTML.png";
import CSS from "./CSS.png";
import Javascript from "./Javascript.png";
import Reactjs from "./React.png";
import C from "./C.png";
import Cpp from "./Cpp.png";
import Python from "./Python.png";
import Canva from "./Canva.png";

export default function Skills() {
  return (
    <div class="skills-section" id="Skills">
      <div class="skills-max-width">
        <div class="skills-header">
          <h1>Skills</h1>
        </div>
        <div class="skills-container">
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={HTML} />
              </div>
              <h3>HTML</h3>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={CSS} />
              </div>
              <h3>CSS</h3>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={Javascript} />
              </div>
              <h3>JAVASCRIPT</h3>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={Reactjs} />
              </div>
              <h3>REACT JS</h3>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={C} />
              </div>
              <h3>C</h3>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={Cpp} />
              </div>
              <h3>C++</h3>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={Python} />
              </div>
              <h3>PYTHON</h3>
            </div>
          </div>
          
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img class="skills-icons" src={Canva} />
              </div>
              <h3>CANVA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
