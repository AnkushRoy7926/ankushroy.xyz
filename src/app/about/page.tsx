'use client'

import "@styles/about.css";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
// import { useEffect } from "react";

export default function About() {

  // useEffect(() => {
  //   // Select all elements with the 'bg' class and apply VanillaTilt
  //   const elements = document.querySelectorAll(".bg");
  //   VanillaTilt.init(elements, {

  //     max: 2, // Maximum tilt angle
  //     speed: 400, // Speed of the effect
  //     perspective: 1000,
  //     // glare: true, // Enables glare effect
  //     // "max-glare": 0.5, // Maximum glare opacity
  //     // scale: 1.025,
      
  //   });

  //   // Optional cleanup function to destroy tilt instances
  //   return () => {
  //     elements.forEach((element) => element.vanillaTilt?.destroy());
  //   };
  // }, []);


    return (
      <div id="MainContainerAbout">

        <span id="shortAboutText">
          A collection of my achievements, experiences and personal interests.
        </span>

        {/* About Me */}
        <div className="bg">
          <h1 className="Header">👨‍🎓 <i>About Me</i></h1>
          
          <div className="infoSection">

            💻 I am <span className="keywords">Ankush Roy</span>, a student studying in Class 10 <i>(as of 2025 Feb)</i> {/* in Delhi Public School Ruby Park, Kolkata, West Bengal  */} in India. I am a self taught programmer, developer, graphics designer.
            I have explored various tech areas out of which my favourite <i>(and in which I have the most experience)</i> are <span className="keywords">Web Development</span>, <span className="keywords">Data Science</span> and <span className="keywords">Machine Learning</span>.
            My key strengths include <span className="keywords_2">patience</span> and <span className="keywords_2">perseverence</span>.
            Other than tech I have an interest in pure maths and psychology.

            <br/><br/>

            ⚛️ I am a diehard <span className="keywords">learner</span>, always on the lookout to learn about new things, technologies, facts. 
            <span className="keywords_2"> Curiosity</span> along with the <span className="keywords_2">desire to stand out from the average</span> is what fuels my ambition, my passion, my determination and helps me overcome whatever problem life throws at me.
            Being a curious individual I also hold an interest in <span className="keywords">World Economics & Politics</span>, <span className="keywords">Astronomy</span>, <span className="keywords">Prehistoric Creatures & Climate</span> and <span className="keywords">Business</span>.

            {/* <br/><br/>

            📚 I  */}

            <br/><br/>

            ♟️ I also love playing <span className="keywords">Chess</span> and <span className="keywords">football</span>.
            Chess is something I picked up from my father.
            The sheer number of possible positions added with tactics and endless strategies are the things which make me love it.
            My favourite opening for black being the classical line of the <span className="keywords_2">Pirc Defense</span> and also like to play the <span className="keywords_2">Stonewall Defense</span> or <span className="keywords_2">Catalan</span> as White.
            Football as an interest is relatively newer but I am a <span className="keywords_2">Messi Fan</span>.

            <br/><br/>

            <i>I do a lot of things, so feel free to contact me in case you have work for me, or just want to know me more and connect.</i>
          </div>
        </div>

        {/* Work */}
        <div className="bg">
          <h1 className="Header">💻 <i>Experience</i></h1>
          <div className="infoSection">



          <div className="indivPoint indivPointExp">
              <div className="pointHead">
                Senior Member  |  Tech Club DPSRPK 2023
              </div>
              <div className="pointInfo">
                I was chosen as the senior member of my school's Tech Club under the department of Development. <i>(This included <span className="keywords_2">Web Development</span>  and <span className="keywords_2">App Development</span>)</i>
              </div>
          </div>



          <div className="indivPoint indivPointExp">
              <div className="pointHead">
                Workshop  |  Tech Club DPSRPK 2024
              </div>
              <div className="pointInfo">
              I conducted a workshop regarding AI where I showed and used different AI tools <i>(like ChatGPT, Character.ai, Bing Image Generator)</i> which could be used for entertainment and productive purposes. I continued by teaching the difference in <span className="keywords_2">AI terminologies</span>, basics of <span className="keywords_2">regression</span> and <span className="keywords_2">classification</span> and winded the 4th and the last session of the workshop making a <span className="keywords_2">reccomendation model</span> as a mini project using KNN. 
              </div>
          </div>



          <div className="indivPoint indivPointExp">
              <div className="pointHead">
                AI Executive  |  Tech Club DPSRPK 2024
              </div>
              <div className="pointInfo">
                I opened a new <span className="keywords_2">AI Department</span> in the club. Here I taught some classification models and addressed topics related to AI. 
              </div>
          </div>



          <div className="indivPoint indivPointExp">
              <div className="pointHead">
                Tech Head  |  Quizathon 2024
              </div>
              <div className="pointInfo">
                I was assigned the post of the Tech Head on the day of the Event due to the absence of the previously assigned person. It turned out that a lot of the presentations of the quizzes were not made at all. My job was to make sure the quiz was running by making the presentations on spot during the quizzes and control and change the slides as the quizmaster went through the questions. There were moments I was making the very next round of the ongoing quiz. I was in an immense time pressure, but at the end of the day got the job done, and made sure that the event was a success. This was a very valuable experience as I learnt to handle work pressure.
              </div>
          </div>



          <div className="indivPoint indivPointExp">
              <div className="pointHead">
                Graphics Designer & Tech Help  |  Calcutta Quizzing Circuit | Nov 2024 - Present
              </div>
              <div className="pointInfo">
                <i><Link target='_blank' rel="noopener noreferrer" href={'https://www.calcuttaquizzingcircuit.site/'}><span className="keywords_2">Calcutta Quizzing Circuit</span></Link></i> is a student led non-profit organisation made to provide oppurtunities to people who want to quiz. I am a part of the graphics department and am part of a team that make the certificates, banners and other graphics related things. In the tech side of things I helped develop the rating system in python and help in other areas.
              </div>
          </div>



          {/* <div className="indivPoint indivPointExp">
              <div className="pointHead">
                President  |  Tech Club DPSRPK 2025
              </div>
              <div className="pointInfo">
                I was chosen as the president of the club and was given the opportunity to lead it because of my active contributions to the club.  
              </div>
          </div>



          <div className="indivPoint indivPointExp">
              <div className="pointHead">
                Off Stage Executive  |  Quiz Club DPSRPK 2025
              </div>
              <div className="pointInfo">
                I was chosen as one of the offstage executives due to my experience in technical matters, and my ability to work under pressure and time constraint which I displayed when I was the Tech Head in Quizathon 2024. 
              </div>
          </div> */}

          </div>

        </div>

        {/* Competitive Achievements */}
        <div className="bg">
          <h1 className="Header">🏆 <i>Competitive Achievements</i></h1>
          <div className="infoSection">

            {/* Logique UnicornX 2023 */}
            <div className="indivPoint">
              <div className="pointHead">
                🥇 First Place  |   Logique UnicornX 2023
              </div>
              <div className="pointInfo">
                App Development Hackathon, awarded by Delhi Public School, Kolkata
              </div>
            </div>

            {/* Quizzinius SciTechBiz Quiz 2023 */}
            <div className="indivPoint">
              <div className="pointHead">
                🥇 First Place | Quizzinius SciTechBiz Quiz 2023
              </div>
              <div className="pointInfo">
              Science, Tech and Business related quiz, awarded by Delhi Public School, Kolkata
              </div>
            </div>

            {/* Logique WebVerse 2024 */}
            <div className="indivPoint">
              <div className="pointHead">
                🥇 First Place | Logique WebVerse 2023
              </div>
              <div className="pointInfo">
                Composed of fixing existing broken websites, awarded by Delhi Public School, Kolkata
              </div>
            </div>

            {/* La Marts Computer Quiz 2024 */}
            <div className="indivPoint">
              <div className="pointHead">
                🥇 First Place | Exypnos Computer Quiz 2023
              </div>
              <div className="pointInfo">
                Tech Quiz, awarded by La Martiniere's for Boys
              </div>
            </div>

            


          {/* 🥇 First Place at Birla Bharati Infotsav 2K21 - Batch Programming
          🥈 Second Place at Hack4Earth 2023 - Advanced Category
          🥈 Second Place at Youthopia 2024 - Competitive Programming, awarded by the Heritage School Kolkata.
          🥉 Third Place at CHC Calcutta Heritage Quiz, awarded by Calcutta Heritage Collective           */}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg">
          <h1 className="Header">📜 <i>Certifications</i></h1>
          <div className="indivPoint">
              <div className="pointHead">
              Deep Learning Specialization | Coursera
              </div>
              <div className="pointInfo">
                This is a 5 course ACE recommended programme of intermediate difficulty, and focuses on Deep Learning and different types of neural networks. The programme consists of the following courses - 
                <br/> <br/>
                <span className="keywords_2">Neural Networks and Deep Learning</span>
                <br />
                <span className="keywords_2">Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</span>
                <br />
                <span className="keywords_2">Structuring Machine Learning Projects</span>
                <br />
                <span className="keywords_2">Convolutional Neural Networks</span>
                <br />
                <span className="keywords_2">Sequence Models</span>
                <br /><br />

                <i>PS: The last 2 courses are work in progress</i><br /><br />
              </div>
            </div>


        <div className="indivPoint">
              <div className="pointHead">
              ML and Datascience | Kaggle
              </div>
              <div className="pointInfo">
                I have completed a number of courses in kaggle.com. They are -
                <br/> <br/>
                <span className="keywords_2">Data Visualization</span>
                <br />
                <span className="keywords_2">Intro to Machine Learning</span>
                <br />
                <span className="keywords_2">Intermediate Machine Learning</span>
                <br />
                <span className="keywords_2">Machine Learning Explainability</span>
                <br />
                <span className="keywords_2">Intro to Deep Learning</span>
                <br /><br />

              </div>
            </div>

        </div>

      </div>
    );
  }