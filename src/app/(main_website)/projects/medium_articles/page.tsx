import React from "react";
import "@styles/project.css";
import medium_posts from "@data/medium_articles.json";

export default function Medium_Articles() {
    return (
        <div className="proj-container">
          <p id='shortProjectText' className="text-center">All of my medium articles. At one place.</p>
    
          <div className="project-cards-container">
            {medium_posts.map((med_post, index) => (
              <div key={index} className="project-card">
                <div>
                  <h3 className="ProjHeader">{med_post.title}</h3>
                  <p>{med_post.description}</p>
                </div>
                <a
                  href={med_post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on Medium
                </a>
              </div>
            ))}
          </div>
        </div>
      );
}