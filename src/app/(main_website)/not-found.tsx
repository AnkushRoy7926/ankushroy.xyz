'use client'

import "@styles/index.css";
import Credits from '@/components/creds';

export default function Home() {


  return (
    <div id="MainContainer">
      <div id="nameDiv">
        <span id="Name" className='_404'>
          404
        </span>
        <h1 id="mobileName" className='_404_mob'><span>404</span></h1>
        <h1 id="desc" className='my-10'>You sure you came to the right place?</h1>
      </div>
      <Credits></Credits> 
    </div>
  );
}
