import React from 'react';
import './Projects.css';
import { projectsData } from '../data';
import Project from './Project';

function Projects(props) {
    return (
        <div className='projects'>
            <div className="projects-title">
                <h1>Some Of My Projects</h1>
                <p>Here are some projects i did during my free time. It is always interesting to start a project</p>
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