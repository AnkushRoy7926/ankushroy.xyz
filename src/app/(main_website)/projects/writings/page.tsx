import React from "react";
import "@styles/project.css";
import writings from "@data/writings.json"; 
import Link from "next/link";

import { GiAnchor } from "react-icons/gi";
import { PiFlowerTulipBold } from "react-icons/pi";
import { MdOutlineNightlightRound } from "react-icons/md";
import { IconType } from "react-icons";

// Mapping icons
const iconMap = {
  GiAnchor,
  PiFlowerTulipBold,
  MdOutlineNightlightRound,
};

export default function Writings() {
  return (
    <div className="proj-container">
      <p id='shortProjectText' className="text-center">My written pieces of Literature.</p>

      <div className="project-cards-container">
        {writings.map((writ, index) => (
          <div key={index} className="project-card moveTranslate">
            <Link href={`/${(writ.type).toLowerCase()}/${writ.title}`} target="_blank"
              rel="noopener noreferrer">
              <div>
                <h3 className="ProjHeader story_poem">{writ.title}</h3>
                <h4 className="typeDesc">{writ.type}</h4>
                <div className="emoticonMain">
                  {writ.icon && iconMap[writ.icon as keyof typeof iconMap] && React.createElement(iconMap[writ.icon as keyof typeof iconMap])}
                </div>
                <p className="poem_story_desc">{writ.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
