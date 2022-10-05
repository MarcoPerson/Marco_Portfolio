import React, { useEffect, useContext } from 'react';
import Tag from './Tag';
import './Project.css';
import AOS from 'aos';
import { ThemeContext } from "../darkcontext";
import 'aos/dist/aos.css';

function Project({data}) {
    const theme = useContext(ThemeContext);
    useEffect(() => {
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='project' style={{borderColor: theme.state.darkMode ? "black" : "#f3f2f2"}} data-aos="fade-left">
            <div className="project-style" style={{backgroundColor: theme.state.darkMode ? "black" : "#f3f2f2"}}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={data.link} className="imagewrapper">
                <img src={data.img} alt={data.alt} />
            </a>
            <div className='tools-list' style={{backgroundColor: theme.state.darkMode ? "black" : "#f3f2f2"}}>
                {data.tools.map((item) => <Tag>{item}</Tag>)}
            </div>
        </div>
    );
}

export default Project;