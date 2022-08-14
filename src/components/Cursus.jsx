import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Cursus.css";

function Cursus() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
  return (
    <div className="cursus">
      <div className="cursus-container">
        <div className="cursus-left">
          <h1 className="cursus-title" data-aos="fade-up">Experience</h1>
          <div className="timeline-container" data-aos="fade-right">
            <ul>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">
                    June 2022 - Today
                  </h3>
                  <h3 className="timeline-place">
                    Versailles, FRANCE
                  </h3>
                </div>
                <h1 className="timeline-title">Web and Mobile development <br /><span>We Build Up · Internship</span></h1>
                
              </li>

              <li>
                <div className="timeline">
                  <h3 className="timeline-date">
                    November 2021 - Today
                  </h3>
                  <h3 className="timeline-place">
                    Toulouse, France
                  </h3>
                </div>
                <h1 className="timeline-title">Partnerships Officer <br /><span>Junior INSA Services</span></h1>
                
              </li>

              <li>
                <div className="timeline">
                  <h3 className="timeline-date">
                    August 2019 - September 2019
                  </h3>
                  <h3 className="timeline-place">
                    Lomé, TOGO
                  </h3>
                </div>
                <h1 className="timeline-title">Python Developper <br /> <span>StaroCity</span></h1>
                
                <p>A desktop application development with Python and PyQT5
for the user names and passwords  management according to the required
Internet access time</p>
              </li>

              <li>
                <div className="timeline">
                  <h3 className="timeline-date">
                    November 2018 - May 2019
                  </h3>
                  <h3 className="timeline-place">
                    Lomé, TOGO
                  </h3>
                </div>
                <h1 className="timeline-title">Mathematics and Physics Teacher <br /> <span>Independent</span></h1>
                
                <p>Support course for two high school students in Mathematics, Physics and Chemical</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="cursus-right">
          <h1 className="cursus-title" data-aos="fade-up">Education</h1>
          <div className="timeline-container" data-aos="fade-left">
            <ul>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">September 2021 - Today</h3>
                  <h3 className="timeline-place">Toulouse - FRANCE</h3>
                </div>
                <h1 className="timeline-title">
                  Institut National des Sciences Appliquées (INSA) <br />
                  <span>
                    Computer Science
                </span>
                </h1>
                <p>
                Courses included: Computer Science and Networks 
                  <br />
                Graduation Expected: September 2024
                </p>
              </li>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">October 2019 - August 2021</h3>
                  <h3 className="timeline-place">Rabat - MAROC</h3>
                </div>
                <h1 className="timeline-title">
                  CPGE Ibn Ghazi <br /> 
                  <span>
                    Mathematics and Physics
                </span>
                </h1>
                <p>
                Activities: BasketBall <br />2 years of intensive courses in Mathematics, Physics, Engineering Sciences
                  and IT to prepare for the entrance exams to the best French and Moroccan schools.
                </p>
              </li>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">September 2018 - June 2019</h3>
                  <h3 className="timeline-place">Lomé - TOGO</h3>
                </div>
                <h1 className="timeline-title">
                Université de Lomé <br /> 
                <span>
                    Computer Science
                </span>
                </h1>
                <p>
                Activities: BasketBall <br />
                School : Centre Informatique et de Calcul (CIC) <br />
                A year to see some basics in the following subjects:<br />
        - Programming in C<br />
        - The architecture of the computer<br />
        - Sequential logic circuits
        and some notions in probability and linear algebra.
                </p>
              </li>
              <li>
                <div className="timeline">
                  <h3 className="timeline-date">September 2015 - August 2018</h3>
                  <h3 className="timeline-place">Lomé - TOGO</h3>
                </div>
                <h1 className="timeline-title">
                Lycée Scientifique de Lomé <br /> 
                <span>
                    Mathematics and Physics
                </span>
                </h1>
                <p>
                Activities: Computer Club <br />
                Course centered on Mathematics, Physics, Chemistry and Biology. <br />
                Baccalaureat : With Highest Honour
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
