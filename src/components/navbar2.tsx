"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@styles/navbar2.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <div className="navbar">
      <div className="container nav-container">
        <input
          className="checkbox"
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <div className="hamburger-lines" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="menu-items">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About & Portfolio</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/projects/writings">List of Writings</Link></li>
        </div>
      </div>
    </div>
  );
}
