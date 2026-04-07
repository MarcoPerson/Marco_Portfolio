import React, { useEffect } from 'react';
import './Skills.css';
import { useContent } from '../hooks/useContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills(props) {
    const content = useContent();
    const { skills } = content;

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className='skills'>
            <h1 className="skills-title" data-aos="fade-down">{skills.title}</h1>
            <div className="skills-wrapper">
                {skills.domains.map((domain, domainIndex) => (
                    <div key={domainIndex} className="skills-domains" data-aos={domainIndex % 2 === 0 ? "fade-right" : domainIndex % 3 === 0 ? "fade-up" : "fade-left"}>
                        <h2 className="skills-domains-header">{domain.name}</h2>
                        <div className="skills-list">
                            {domain.levels.map((level, levelIndex) => (
                                <div key={levelIndex} className="skills-a">
                                    <h3>{level.level}</h3>
                                    <div className="skills-sublist">
                                        {level.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="skills-content">
                                                <img src={item.icon} title={item.name} alt="#" className="skills-image" />
                                                <p>{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
