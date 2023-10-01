import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CurBis.css";

function Cursus() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="cursus">
      <div className="left" data-aos="fade-left">
        <h1 className="cursus-title" data-aos="fade-up">
          Education
        </h1>
        <div className="item">
          <h4>Operational Research and Optimization</h4>
          <h5>September 2023 - Today</h5>
          <p>
            <em>
              Ecole Natinal de l'Aviation Civile (ENAC), Toulouse -
              FRANCE
            </em>
          </p>
          <ul>
            <li>Mathematical optimization for machine learning</li>
            <li>Deterministic Global Optimization</li>
            <li>Advanced combinatorial optimisation</li>
          </ul>
        </div>
        <div className="item">
          <h4>Computer Science</h4>
          <h5>September 2021 - Today</h5>
          <p>
            <em>
              Institut National des Sciences Appliquées (INSA), Toulouse -
              FRANCE
            </em>
          </p>
          <ul>
            <li>Courses included: Computer Science and Networks</li>
            <li>Graduation Expected: September 2024</li>
          </ul>
        </div>
        <div className="item">
          <h4>Mathematics and Physics</h4>
          <h5>October 2019 - August 2021</h5>
          <p>
            <em>CPGE Ibn Ghazi, Rabat - MAROC</em>
          </p>
          <ul>
            <li>
              <mark>Project</mark> : Images Cryptography using Robert May
              logistic sequence <br /> The presentation support is{" "}
              <a className='projects-github' href="/assets/TIPE_La_cryptographie_des_images.pdf"> <button>here</button></a>
            </li>
            <li>Activities: BasketBall</li>
            <li>
              2 years of intensive courses in Mathematics, Physics, Engineering
              Sciences and IT to prepare for the entrance exams to the best
              French and Moroccan schools.
            </li>
          </ul>
        </div>
        <div className="item">
          <h4>Computer Science</h4>
          <h5>September 2018 - June 2019</h5>
          <p>
            <em>Université de Lomé, Lomé - TOGO</em>
          </p>
          <ul>
            <li>Activities: BasketBall</li>
            <li>
              School : Centre Informatique et de Calcul (CIC) <br />
              A year to see some basics in the following subjects:
              <br />
              - Programming in C<br />
              - The architecture of the computer
              <br />- Sequential logic circuits and some notions in probability
              and linear algebra.
            </li>
          </ul>
        </div>
        <div className="item" style={{ paddingBottom: 0 }}>
          <h4>Mathematics and Physics</h4>
          <h5>September 2015 - August 2018</h5>
          <p>
            <em>Lycée Scientifique de Lomé, Lomé - TOGO</em>
          </p>
          <ul>
            <li>Activities: Computer Science Club</li>
            <li>
              Course centered on Mathematics, Physics, Chemistry and
              Biology.Course centered on Mathematics, Physics, Chemistry and
              Biology.
            </li>
            <li>Baccalaureat : With Highest Honour</li>
          </ul>
        </div>
      </div>
      <div className="right" data-aos="fade-right">
        <h1 className="cursus-title" data-aos="fade-up">
          Experience
        </h1>
        <div className="item">
          <h4>IT Department & Partnerships Officer</h4>
          <h5>November 2021 - Today</h5>
          <p>
            <em>Junior INSA Services, Toulouse - France</em>
          </p>
          <ul>
            <li>
              Maintain IT tools for the team.
            </li>
            <li>
              Develop these tools to improve the performance of the Junior Enterprise.
            </li>
            <li>
              Develop, improve and perpetuate lasting relationships with JIS
              partners.
            </li>
          </ul>
        </div>
        <div className="item">
          <h4>Software Engineer</h4>
          <h5>June 2023 - September 2023</h5>
          <p>
            <em>Sopra Steria · Internship, Colomiers - FRANCE</em>
          </p>
          <ul>
            <li>
            Developed Java services for the French Ministry of Agriculture, enhancing digital infrastructure and efficiency.
            </li>
            <li>
            Mastered the Java Orion framework to work on PAGODE, a secure application for electronic declarations and fishing activities, as well as LOGICS, an application for agricultural operation authorization.
            </li>
            <li>
              Worked on 100+ Jira test cases for TeleAgape, ensuring the reliability of fishing permit requests.
            </li>
          </ul>
        </div>
        <div className="item">
          <h4>Software Engineer</h4>
          <h5>June 2022 - September 2022</h5>
          <p>
            <em>We Build Up · Internship, Versailles - FRANCE</em>
          </p>
          <ul>
            <li>
              Increased BIMView TypeScript code readability by over 10% by
              reformatting NextJS components and CSS objects.
            </li>
            <li>
              Assured Quality Assurance by writing components and hooks unit and
              integration tests and multiple end to end tests using Jest and
              PlayWright.
            </li>
            <li>Developed the company website using NextJS and TailWindCSS.
            <a className='projects-github' href="https://webuildup.io"> <button>WeBuildUp</button></a>
            </li>
          </ul>
        </div>
        <div className="item">
          <h4>Python Developper</h4>
          <h5>August 2019 - September 2019</h5>
          <p>
            <em>StaroCity, Lomé - TOGO</em>
          </p>
          <ul>
            <li>
              Designed and Created a Desktop App using Python and PyQT5 to
              create usernames and passwords for a WiFi center according to the
              time paid.
            </li>
            <li>
              Increased the efficiency by 100% by eliminating the possibility of
              duplicate and increased the speed via python decorators.
            </li>
          </ul>
        </div>
        <div className="item" style={{ paddingBottom: 0 }}>
          <h4>Mathematics and Physics Teacher</h4>
          <h5>November 2018 - May 2019</h5>
          <p>
            <em>Independent, Lomé - TOGO</em>
          </p>
          <ul>
            <li>
              Helped high school students to master the basics of mathematics
              and physics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cursus;
