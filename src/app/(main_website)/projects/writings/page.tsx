import React from "react";
import "@styles/project.css";
import writings from "@data/writings.json"; 

export default function Writings() {

  return (
    <div className="proj-container">
      <p id='shortProjectText' className="text-center">My written pieces of Literature.</p>

      <div className="project-cards-container">
        {writings.map((writ, index) => (
          <div key={index} className="project-card">
            <div>
              <h3 className="ProjHeader">{writ.title}</h3>
              <p>{writ.description}</p>
            </div>
            <a
              href={`/${(writ.type).toLowerCase()}/${writ.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}