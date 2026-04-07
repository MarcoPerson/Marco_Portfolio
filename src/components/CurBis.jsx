import React, { useEffect } from "react";
import AOS from "aos";
import { useContent } from "../hooks/useContent";
import "aos/dist/aos.css";
import "./CurBis.css";

function Cursus() {
  const content = useContent();
  const { education, experience } = content;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const renderDetail = (detail, index) => {
    if (typeof detail === 'string') {
      return <li key={index}>{detail}</li>;
    }
    if (detail.type === 'project') {
      return (
        <li key={index}>
          <mark>Project</mark> : {detail.text} <br /> The presentation support is{" "}
          <a className='projects-github' href={detail.link}> <button>{detail.linkText}</button></a>
        </li>
      );
    }
    if (detail.type === 'link') {
      return (
        <li key={index}>
          {detail.text}
          <a className='projects-github' href={detail.url}> <button>{detail.linkText}</button></a>
        </li>
      );
    }
    if (detail.year) {
      return (
        <li key={index}>
          <strong>{detail.year}:</strong>
          <ul>
            {detail.courses.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </li>
      );
    }
    return null;
  };

  return (
    <div className="cursus">
      <div className="left" data-aos="fade-left">
        <h1 className="cursus-title" data-aos="fade-up">
          {education.title}
        </h1>
        {education.items.map((item, index) => (
          <div className="item" key={index} style={index === education.items.length - 1 ? { paddingBottom: 0 } : {}}>
            <h4>{item.degree}</h4>
            <h5>{item.period}</h5>
            <p>
              <em>{item.institution}</em>
            </p>
            {item.details && item.details.length > 0 && (
              <ul>
                {item.details.map((detail, idx) => renderDetail(detail, idx))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="right" data-aos="fade-right">
        <h1 className="cursus-title" data-aos="fade-up">
          {experience.title}
        </h1>
        {experience.items.map((item, index) => (
          <div className="item" key={index} style={index === experience.items.length - 1 ? { paddingBottom: 0 } : {}}>
            <h4>{item.title}</h4>
            <h5>{item.period}</h5>
            <p>
              <em>{item.company}</em>
            </p>
            {item.details && item.details.length > 0 && (
              <ul>
                {item.details.map((detail, idx) => renderDetail(detail, idx))}
              </ul>
            )}
            {item.note && (
              <p style={{fontSize:14}}>{item.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursus;
