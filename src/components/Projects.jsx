import React, { useEffect } from 'react';
import './Projects.css';
import { projectsData } from '../data';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects(props) {
    useEffect(() => {
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='projects'>
            <div className="projects-title" data-aos="fade-right">
                <h1>Some Of My Projects</h1>
                <p>Here are some projects i did during my free time. Some backend projects here <a className='projects-github' href="https://replit.com/@MarcoPerson"> <button>Replit</button></a><br /> My repository and other projects here <a className='projects-github' href="https://github.com/MarcoPerson"> <button>GitHub</button></a></p>
            </div>
            <div className="projects-list">
                {projectsData.map((item) => {
                    return (
                        <Project key={item.id} data={item} />
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;