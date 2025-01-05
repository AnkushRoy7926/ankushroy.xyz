'use client'

import React, { useEffect} from 'react';
import "@styles/index.css";
import IconBar from "@components/iconBar"
import Credits from '@/components/creds';

export default function Home() {
  const text = "Hello, Traveller";

  const typeText = () => {
    const descElement = document.getElementById("desc");
    if (!descElement) return; 

    let typedText = "";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typedText += text[i]; 
        descElement.innerHTML = typedText; 
      }, i * 230);
    }
  };

  
  function animateDiv(id:string) {
    let animatedDiv = document.getElementById(id);
  
    let progress = 0; // Start at 0%
    const animationDuration = 2000; // Duration in ms
    const frameRate = 60; // Frames per second


    const interval = 1000 / frameRate; // Time per frame
    const totalFrames = animationDuration / interval; // Total number of frames
    const increment = 100 / totalFrames; // Increment per frame

    const intervalId = setInterval(() => {
      if (!animatedDiv) return;
      progress += increment; // Increase progress
      animatedDiv.style.clipPath = `inset(0 ${100 - progress}% 0 0)`; // Reveal from left to right
      animatedDiv.style.opacity = `progress / 100`; // Increase opacity

      if (progress >= 100) {
        clearInterval(intervalId); // Stop animation
      }
    }, interval);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      animateDiv("Name");
      animateDiv("mobileName");
    }, 100); // Slight delay to make sure the element exists
    () => clearTimeout(timer);
    typeText();
	}, []);
  

  return (
    <div id="MainContainer">
      <div id="nameDiv">
        <span id="Name">
          <span id="A">A</span>nkush<h1 id="space"></h1><span id="R">R</span>oy
        </span>
        <h1 id="mobileName"><span>Ankush</span> <span>Roy</span></h1>
        <h1 id="desc"></h1>
      </div>
      <IconBar></IconBar>
      <Credits></Credits> 
    </div>
  );
}
