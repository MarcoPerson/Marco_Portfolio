import React, { useContext } from 'react';
import { ThemeContext } from '../darkcontext';
import './About.css';

function About(props) {
    const theme = useContext(ThemeContext);
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-left-wrapper">
                    <div className="about-bg" style={{backgroundColor: theme.state.darkMode && "#ccc"}}>

                    </div>
                    <div className="about-image">
                        <img src="/assets/computer.jpg" alt="Group Work" className="about-imagepic" />
                    </div>
                </div>
            </div>
            <div className="about-right">
                <div className="about-right-wrapper">
                    <div className="about-card-upper">
                        <h2 className='about-title'>About Me</h2>
                        <div className="about-short">
                        I,m a 3rd year student at INSA Toulouse in computer science and networks
                        </div>
                        <div className="about-desc">
                        My interests are in web and mobile development, data, cybersecurity and mathematics. I am autonomous, rigorous and dynamic. I like working in a team and learning new technologies.
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
                                My team was also the first to solve problem D and so we got two prizes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;