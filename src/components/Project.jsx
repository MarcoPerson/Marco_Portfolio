import React, { useEffect } from 'react';
import Tag from './Tag';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project({data}) {
    useEffect(() => {
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='project' data-aos="fade-left">
            <div className="project-style">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={data.link} className="imagewrapper">
                <img src={data.img} alt={data.alt} />
            </a>
            <div className='tools-list'>
                {data.tools.map((item) => <Tag>{item}</Tag>)}
            </div>
        </div>
    );
}

export default Project;