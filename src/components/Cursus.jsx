import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Cursus.css";

function Cursus() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="cursus">
      <div className="cursus-container">
        <div className="cursus-left">
          <h1 className="cursus-title" data-aos="fade-up">
            Experience
          </h1>
          <div className="timeline-container" data-aos="fade-right">
            <ul>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">November 2021 - Today</h3>
                  <h3 className="timeline-place">Toulouse, France</h3>
                </div>
                <h1 className="timeline-title">
                  Partnerships Officer <br />
                  <span>Junior INSA Services</span>
                </h1>
                <p>
                  • Develop, improve and perpetuate lasting relationships with
                  JIS partners.
                </p>
              </li>

              <li>
                <div className="timeline">
                  <h3 className="timeline-date">June 2022 - September 2022</h3>
                  <h3 className="timeline-place">Versailles, FRANCE</h3>
                </div>
                <h1 className="timeline-title">
                  Software Engineer <br />
                  <span>We Build Up · Internship</span>
                </h1>
                <p>
                  • Increased BIMView TypeScript code readability by over 10% by
                  reformatting NextJS components and CSS objects. <br />•
                  Assured Quality Assurance by writing components and hooks unit
                  and integration tests and multiple end to end tests using Jest
                  and PlayWright <br />• Developed the company website using
                  NextJS and TailWindCSS
                </p>
              </li>

              <li>
                <div className="timeline">
                  <h3 className="timeline-date">
                    August 2019 - September 2019
                  </h3>
                  <h3 className="timeline-place">Lomé, TOGO</h3>
                </div>
                <h1 className="timeline-title">
                  Python Developper <br /> <span>StaroCity</span>
                </h1>

                <p>
                  • Designed and Created a Desktop App using Python and PyQT5 to
                  create usernames and passwords for a WiFi center according to
                  the time paid. <br />• Increased the efficiency by 100% by
                  eliminating the possibility of duplicate and increased the
                  speed via python decorators.
                </p>
              </li>

              <li>
                <div className="timeline">
                  <h3 className="timeline-date">November 2018 - May 2019</h3>
                  <h3 className="timeline-place">Lomé, TOGO</h3>
                </div>
                <h1 className="timeline-title">
                  Mathematics and Physics Teacher <br />{" "}
                  <span>Independent</span>
                </h1>

                <p>
                  • Helped high school students to master the basics of
                  mathematics and physics.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="cursus-right">
          <h1 className="cursus-title" data-aos="fade-up">
            Education
          </h1>
          <div className="timeline-container" data-aos="fade-left">
            <ul>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">September 2021 - Today</h3>
                  <h3 className="timeline-place">Toulouse - FRANCE</h3>
                </div>
                <h1 className="timeline-title">
                  Institut National des Sciences Appliquées (INSA) <br />
                  <span>Computer Science</span>
                </h1>
                <p>
                • Courses included: Computer Science and Networks
                  <br />
                  •  Graduation Expected: September 2024
                </p>
              </li>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">October 2019 - August 2021</h3>
                  <h3 className="timeline-place">Rabat - MAROC</h3>
                </div>
                <h1 className="timeline-title">
                  CPGE Ibn Ghazi <br />
                  <span>Mathematics and Physics</span>
                </h1>
                <p>
                • Activities: BasketBall <br />• 2 years of intensive courses in
                  Mathematics, Physics, Engineering Sciences and IT to prepare
                  for the entrance exams to the best French and Moroccan
                  schools.
                </p>
              </li>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">September 2018 - June 2019</h3>
                  <h3 className="timeline-place">Lomé - TOGO</h3>
                </div>
                <h1 className="timeline-title">
                  Université de Lomé <br />
                  <span>Computer Science</span>
                </h1>
                <p>
                • Activities: BasketBall <br />
                • School : Centre Informatique et de Calcul (CIC) <br />
                  A year to see some basics in the following subjects:
                  <br />
                  - Programming in C<br />
                  - The architecture of the computer
                  <br />- Sequential logic circuits and some notions in
                  probability and linear algebra.
                </p>
              </li>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">
                    September 2015 - August 2018
                  </h3>
                  <h3 className="timeline-place">Lomé - TOGO</h3>
                </div>
                <h1 className="timeline-title">
                  Lycée Scientifique de Lomé <br />
                  <span>Mathematics and Physics</span>
                </h1>
                <p>
                • Activities: Computer Club <br />
                • Course centered on Mathematics, Physics, Chemistry and
                  Biology. <br />
                  • Baccalaureat : With Highest Honour
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursus;
