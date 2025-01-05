import "@styles/about.css"

export default function About() {
    return (
      <div id="MainContainerAbout">

        <span id="shortAboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde placeat nemo molestias, at in illum doloremque sed ratione.
        </span>

        {/* About Me */}
        <div className="bg">
          <h1 className="Header">👨‍🎓 <i>About Me</i></h1>
          <div className="infoSection">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vero deserunt nihil, mollitia excepturi natus molestiae eius autem ipsa fuga rerum, pariatur suscipit perspiciatis. Suscipit perferendis alias laboriosam possimus animi. Odit distinctio accusantium illum dolorem iusto, quisquam, mollitia eaque, enim aliquam itaque veniam odio voluptatibus praesentium temporibus modi. Nam ex temporibus reiciendis voluptas minima numquam atque qui perferendis, inventore ipsa modi iste cumque vel in dolor ipsum quas voluptatum maiores rem doloribus? Architecto corrupti sequi dolore cupiditate, enim quo, hic obcaecati nam sint fugiat possimus itaque iure? Veniam impedit deleniti dolor placeat temporibus atque, eum, esse necessitatibus repellendus autem aperiam.
          </div>
        </div>

        {/* Work */}
        <div className="bg">
          <h1 className="Header">💻 <i>Experience</i></h1>
          <div className="infoSection">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vero deserunt nihil, mollitia excepturi natus molestiae eius autem ipsa fuga rerum, pariatur suscipit perspiciatis. Suscipit perferendis alias laboriosam possimus animi. Odit distinctio accusantium illum dolorem iusto, quisquam, mollitia eaque, enim aliquam itaque veniam odio voluptatibus praesentium temporibus modi. Nam ex temporibus reiciendis voluptas minima numquam atque qui perferendis, inventore ipsa modi iste cumque vel in dolor ipsum quas voluptatum maiores rem doloribus? Architecto corrupti sequi dolore cupiditate, enim quo, hic obcaecati nam sint fugiat possimus itaque iure? Veniam impedit deleniti dolor placeat temporibus atque, eum, esse necessitatibus repellendus autem aperiam.
          </div>
        </div>

        {/* Achievements */}
        <div className="bg">
          <h1 className="Header">🏆 <i>Achievements</i></h1>
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

      </div>
    );
  }