import React, { useEffect } from 'react';
import './Projects.css';
import { certifsData } from '../data';
import { useContent } from '../hooks/useContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Certif from './Certif';

function Certifs(props) {
    const content = useContent();
    const { certifications } = content;

    useEffect(() => {
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='projects'>
            <div className="projects-title" data-aos="fade-right">
                <h1>{certifications.title}</h1>
            </div>
            <div className="projects-list">
                {certifsData.map((item) => {
                    return (
                        <Certif key={item.id} data={item} />
                    )
                })}
            </div>
        </div>
    );
}

export default Certifs;