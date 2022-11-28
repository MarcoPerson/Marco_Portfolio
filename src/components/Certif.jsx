import React, { useEffect, useContext } from 'react';
import Tag from './Tag';
import './Project.css';
import AOS from 'aos';
import { ThemeContext } from "../darkcontext";
import 'aos/dist/aos.css';

function Certif({data}) {
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
            <a href={data.link} className="certifimagewrapper">
                <img src={data.img} alt={data.alt} />
                <div className="certif-hoover">
                    <span>{data.name}</span>
                </div>
            </a>
        </div>
    );
}

export default Certif;