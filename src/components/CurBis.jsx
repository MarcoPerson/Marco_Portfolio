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
            <li><strong>5th year student Distributed Systems and Big Data:</strong>
              <ul>
                <li>Machine Learning: Supervised and unsupervised</li>
                <li>Virtualization and Cloud computing</li>
                <li>Service-oriented architecture: SOAP, RESTful</li>
                <li>Big Data: Hardware and software infrastructures (storage, computation)</li>
                <li>Deep Learning: YOLO object detection</li>
              </ul>
            </li>

            <li><strong>4th year student Computer Science:</strong>
              <ul>
                <li>Artificial Intelligence, Machine Learning, Metaheuristics</li>
                <li>Project management</li>
                <li>Distributed Algorithms</li>
                <li>Law, Finance, Marketing, Organisational Communication</li>
              </ul>
            </li>

            <li><strong>3rd year student Modelling, Computer Science and Communication:</strong>
              <ul>
                <li>Numerical Analysis, Optimisation, Markov Chains</li>
                <li>Data Structures and Algorithms, Complexity</li>
                <li>Functional and Object-oriented design and programming</li>
                <li>Operating System and Micro Controller Programming</li>
                <li>Database management (SQL)</li>
                <li>Finance, Corporate Structure and Organisation, Business Simulation</li>
              </ul>
            </li>
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
          <h4>AI Research Engineer - Data Scientist</h4>
          <h5>February 2024 - Today</h5>
          <p>
            <em>Capgemini Engineering · Internship, Blagnac - FRANCE</em>
          </p>
          <ul>
            <li>Conducting an in-depth literature review on utilizing Knowledge Graphs and Large Language Models (LLMs) to enhance entity recognition in aerospace maintenance texts.</li>
            <li>Performing data preprocessing tasks to ensure optimal quality and relevance for subsequent analysis.</li>
            <li>Implementing a state-of-the-art solution that integrates Knowledge Graphs and LLMs to improve entity recognition performance in aeronautical maintenance texts.</li>
            <li>Writing and documenting the research process, findings, and implications for scientific articles.</li>
          </ul>

          <p style={{fontSize:14}}>This internship provides a unique opportunity to contribute to the forefront of natural language processing for aerospace maintenance, exploring the synergies between knowledge graphs, large language models, and entity recognition.</p>

        </div>
        <div className="item">
          <h4>IT Department & Partnerships Officer</h4>
          <h5>November 2021 - November 2023</h5>
          <p>
            <em>Junior INSA Services, Toulouse - France</em>
          </p>
          <ul>
            <li>Maintain and optimize IT tools for team use.</li>
            <li>Develop tools to enhance Junior Enterprise performance.</li>
            <li>Cultivate and sustain enduring relationships with JIS partners.</li>
            <li>Enhance, improve, and perpetuate relationships with JIS partners.</li>
            <li>Foster the development and improvement of tools for team efficiency.</li>
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
