import Link from 'next/link';
import React from 'react';
import '@styles/navbar.css'

export default function Navbar() {
    return (
      <div id="navContainer">
        <div id='Nav'>
              <Link className='links' id='link1' href="/">Home</Link>

              <Link className='links' href="/projects">Projects</Link>

              <Link className='links' href="/about">About & Portfolio</Link>

              <Link className='links' href="/contact">Contact</Link>
          
        </div>
      </div>
    );
  }