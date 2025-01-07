import React, { useState } from 'react';
import "@styles/IconBar.css";
import Link from 'next/link';
import { RiGithubLine, RiLinkedinFill, RiAtLine, RiDiscordLine } from "react-icons/ri";

export default function IconBar() {
  const email = "ankushroy7926@outlook.com";
  const [showEmailBox, setShowEmailBox] = useState(false);

  const handleDisplayEmail = () => {
    setShowEmailBox(true);
    setTimeout(() => setShowEmailBox(false), 3000); // Hide the email box after 3 seconds
  };

  return (
    <div id="iconBarContainer">
      <div className="space-x-0">
        <ul className='mx-auto text-center space-x-12 lg:max-w-md max-w-[20rem] py-28 pb-20' id='iconList'>
          <li className='text-5xl lg:text-7xl font-semibold icons'>
            <Link target='_blank' rel="noopener noreferrer" href="https://github.com/LordRaleigh7926">
              <RiGithubLine />
            </Link>
          </li>
          <li className='text-5xl lg:text-7xl font-semibold icons'>
            <Link target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ankush-roy-7926ar/">
              <RiLinkedinFill />
            </Link>
          </li>
          <li 
            className='text-5xl lg:text-7xl font-semibold icons' 
            onClick={handleDisplayEmail} 
            style={{ cursor: 'pointer' }}
          >
            <RiAtLine />
          </li>
          <li className='text-5xl lg:text-7xl font-semibold icons'>
            <Link target='_blank' rel="noopener noreferrer" href="https://discord.com/channels/@me/933364775709204541">
              <RiDiscordLine />
            </Link>
          </li>
        </ul>
      </div>

      {/* Display Email Box */}
      {showEmailBox && (
        <div className="email-box">
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}
