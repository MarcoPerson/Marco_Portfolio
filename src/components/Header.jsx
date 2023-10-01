import React, { useEffect, useContext } from "react";
import "./Header.css";
import AOS from "aos";
import { ThemeContext } from "../darkcontext";

import "aos/dist/aos.css";

function Header(props) {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="intro" data-aos="zoom-in" data-aos-delay={500}>
      <a
        href="/assets/4A_CV_Merveilles_AGBETI_MESSAN_English.pdf"
        className="download-resume"
      >
        <button>Download My Resume</button>
      </a>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-text">Hello, My Name is</h2>
          <h1 className="intro-name">
            Merveilles <br className="introname-cutter" /> AGBETI-MESSAN
          </h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web & Mobile Developer</div>
              <div className="intro-title-item">Engineering Student</div>
            </div>
          </div>
          <div className="intro-desc">
          I specialize in the development of websites and website components for clients. <br />  
          I am currently pursuing my fifth-year studies in IT engineering at INSA Toulouse. <br />
          Additionally, I am enthusiastic about incorporating machine learning techniques into web development projects.
          </div>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke={theme.state.darkMode ? "white" : "black"}
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="intro-right" data-aos-delay={2000}>
        <div className="intro-background"></div>
        <div className="intro-image">
          <img src="/assets/Me2.png" alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default Header;
