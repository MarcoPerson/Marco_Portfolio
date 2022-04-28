import React, { useEffect } from 'react';
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
        </div>
    );
}

export default Project;