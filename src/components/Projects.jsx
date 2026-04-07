import React, { useEffect } from 'react';
import './Projects.css';
import { projectsData } from '../data';
import { useContent } from '../hooks/useContent';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects(props) {
    const content = useContent();
    const { projects } = content;

    useEffect(() => {
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='projects'>
            <div className="projects-title" data-aos="fade-right">
                <h1>{projects.title}</h1>
                <p>{projects.description} <a className='projects-github' href={projects.replitUrl}> <button>{projects.replitButton}</button></a><br /> {projects.githubText} <a className='projects-github' href={projects.githubUrl}> <button>{projects.githubButton}</button></a></p>
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