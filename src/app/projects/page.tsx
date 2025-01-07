import React from "react";
import "@styles/project.css";

export default function About() {
  // Sample project data
  const projects = [
    {
      title: "Recommendation System",
      description: "A project related to K-Nearest Neighbors (KNN) model implementation.",
      github: "https://github.com/LordRaleigh7926/Recommendation_System"
    },
    {
      title: "LordRaleigh7926",
      description: "Personal GitHub profile repository.",
      github: "https://github.com/LordRaleigh7926/LordRaleigh7926"
    },
    {
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      github: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      github: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      github: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <div className="proj-container">
      <p id='shortProjectText' className="text-center">All of my valuable projects. At one place.</p>

      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div id="info"><h3 className="ProjHeader">{project.title}</h3>
            <p>{project.description}</p></div>
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
      </div>
    </div>
  );
}
