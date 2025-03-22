import React from "react";
import "@styles/project.css";
import { RiCodeSSlashLine} from "react-icons/ri";
import { GiBlackBook } from "react-icons/gi";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import "@styles/globals.css";


export default function Projects() {

  return (<div>
    <p id='shortProjectText' className="text-center mt-10">All of my work. At one place.</p>


    <div className="menu-container">
      
      <div className="iconMenu main-f2">
        <Link className="MenuLink" href="/projects/code_projects">
         <RiCodeSSlashLine />
         <p className="nameIconMenu">TECH PROJECTS</p>
        </Link>
      </div>

      <div className="iconMenu main-f2">
        <Link className="MenuLink" href="/projects/medium_articles">
         <SiMedium />
         <p className="nameIconMenu">MEDIUM ARTICLES</p>
        </Link>
      </div>

      <div className="f2">
      <div className="iconMenu">
        <Link className="MenuLink" href="/projects/code_projects">
         <RiCodeSSlashLine />
         <p className="nameIconMenu">TECH PROJECTS</p>
        </Link>
      </div>

      <div className="iconMenu">
        <Link className="MenuLink" href="/projects/medium_articles">
         <SiMedium />
         <p className="nameIconMenu">MEDIUM ARTICLES</p>
        </Link>
      </div>
      </div>

      <div className="iconMenu">
        <Link className="MenuLink" href="/projects/writings">
         <GiBlackBook />
         <p className="nameIconMenu">STORIES & POEMS</p>
        </Link>
      </div>

      
    </div></div>
  );
}
