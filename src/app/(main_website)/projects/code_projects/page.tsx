import React from "react";
import "@styles/project.css";
import projects from "@data/projData.json"; // Adjust the path as necessary


export default function Code_Stuff() {
  // Sample project data

  return (
    <div className="proj-container">
      <p id='shortProjectText' className="text-center">My code and tech projects I created.</p>

      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3 className="ProjHeader">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
        <div key="18" className="project-card ">
            <div>
              <h3 className="ProjHeader">Media Server</h3>
              <p>I created a private media server connected with my private network using a very old CPU to store the data. For the OS I used Ubuntu Server, and for the management used NextCloud for handling the data and file transfers.</p>
            </div>
          </div>
      </div>
    </div>
  );
}