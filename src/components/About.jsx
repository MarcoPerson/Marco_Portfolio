import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../darkcontext";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About(props) {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="about" data-aos="fade-left">
      <div className="about-left">
        <div className="about-left-wrapper">
          <div
            className="about-bg"
            style={{ backgroundColor: theme.state.darkMode && "#ccc" }}
          ></div>
          <div className="about-image">
            <img
              src="/assets/computer.jpg"
              alt="Group Work"
              className="about-imagepic"
            />
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-right-wrapper">
          <div className="about-card-upper">
            <h2 className="about-title">About Me</h2>
            <div className="linkedin-container">
              <a
                className="linkedin-button"
                href="https://www.linkedin.com/in/merveilles-agbeti-messan-3bb03b1ba/"
              >
                <button>LinkedIn Account</button>
              </a>
            </div>
            <div className="about-short">
              <b>PHD Student</b> at Rouen University, <b>Computer Science</b> Engineer from INSA Toulouse, <b>Mathematics and Optimization</b> double degree with ENAC, fueled by a profound passion for AI.
            </div>
            <div className="about-desc">
              My heart lies in web and mobile development, complemented by a keen interest in machine learning and mathematics. Renowned for my autonomy, rigor, and dynamism, I excel in collaborative team environments and relish the challenge of mastering new technologies.
            </div>


          </div>
          <div className="about-card-lower">
            <div className="award-image">
              <img src="/assets/icpc.png" alt="" className="award-imagepic" />
            </div>
            <div className="award-body">
              <h4 className="award-title">
                Second place in the programming contest
              </h4>
              <div className="award-text">
                Achieving the feat of being the first to solve problem D, we secured two prizes.
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
