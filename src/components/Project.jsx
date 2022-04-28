import React from 'react';
import './Project.css';

function Project({data}) {
    return (
        <div className='project'>
            <div className="project-style">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={data.link} className="imagewrapper">
                <img src={data.img} alt={data.alt} />
            </a>
        </div>
    );
}

export default Project;