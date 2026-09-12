"use client";

import React, { useEffect } from "react";
import "./Research.css";
import { useContent } from "@/hooks/useContent";
import AOS from "aos";
import "aos/dist/aos.css";

function Research() {
  const content = useContent();
  const { research } = content;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getBadgeClass = (type) => {
    switch (type) {
      case "conference":
        return "badge-conference";
      case "journal":
        return "badge-journal";
      case "workshop":
        return "badge-workshop";
      case "preprint":
        return "badge-preprint";
      default:
        return "badge-default";
    }
  };

  return (
    <div className="research">
      <h1 className="research-title" data-aos="fade-down">
        {research.title}
      </h1>
      <div className="research-grid">
        {research.items.map((paper) => (
          <div
            key={paper.id}
            className="research-card"
            data-aos="fade-up"
            data-aos-delay={paper.id * 100}
          >
            <div className="research-card-inner">
              <div className="research-image-container">
                {paper.image && (
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="research-image"
                  />
                )}
                <div className="research-overlay">
                  <div className="research-links">
                    {paper.conferenceUrl && (
                      <a
                        href={paper.conferenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-link"
                      >
                        Conference
                      </a>
                    )}
                    {paper.arxivUrl && (
                      <a
                        href={paper.arxivUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-link"
                      >
                        Paper
                      </a>
                    )}
                    {paper.codeUrl && (
                      <a
                        href={paper.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-link"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="research-content">
                <div className="research-header">
                  <span
                    className={`research-badge ${getBadgeClass(paper.type)}`}
                  >
                    {paper.conferenceBadge || (paper.type === "preprint" ? "arXiv" : paper.venue)}
                  </span>
                  <span className="research-year">{paper.year}</span>
                </div>
                <h3 className="research-paper-title">{paper.title}</h3>
                <p
                  className="research-authors"
                  dangerouslySetInnerHTML={{
                    __html: paper.authors.replace(
                      /Merveilles Agbeti-Messan/gi,
                      "<strong>Merveilles AGBETI-MESSAN</strong>"
                    ),
                  }}
                  />
                {paper.highlight && (
                  <div className="research-highlight">
                    {paper.highlight}
                  </div>
                )}
                <div className="research-venue">
                  <span>{paper.venue}</span>
                  {paper.arxivId && (
                    <span className="research-arxiv-id">
                      arXiv:{paper.arxivId}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;
