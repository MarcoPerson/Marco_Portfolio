import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../darkcontext";
import { useContent } from "../hooks/useContent";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About(props) {
  const theme = useContext(ThemeContext);
  const content = useContent();
  const { about } = content;

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
              src={about.imagePath}
              alt={about.imageAlt}
              className="about-imagepic"
            />
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-right-wrapper">
          <div className="about-card-upper">
            <h2 className="about-title">{about.title}</h2>
            <div className="linkedin-container">
              <a
                className="linkedin-button"
                href={about.linkedInUrl}
              >
                <button>{about.linkedInButton}</button>
              </a>
            </div>
            <div className="about-short" dangerouslySetInnerHTML={{ __html: about.shortDescription }} />
            <div className="about-desc">
              {about.description}
            </div>


          </div>
          <div className="about-card-lower">
            <div className="award-image">
              <img src={about.award.imagePath} alt={about.award.imageAlt} className="award-imagepic" />
            </div>
            <div className="award-body">
              <h4 className="award-title">
                {about.award.title}
              </h4>
              <div className="award-text">
                {about.award.description}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
