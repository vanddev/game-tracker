import './GameDetails.css'

const GameDetails = () => {
  return (
    <>
      <div className='game-details' style={{display: "flex"}}>
        <div id='about' style={{flexBasis: "700px"}}>
          <p>God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.</p>
          <p>Many years have passed since Kratos, Spartan warrior and former Greek God of War, took his vengeance against the Greek Gods, and he now lives with his young son Atreus in ancient Norway in the realm of Midgard. The game begins after the death of the Jötunn warrior Faye, Kratos' second wife and Atreus' mother, whose last request was for her ashes to be spread at the highest speak of the nine realms. Kratos and Atreus prepare a funeral pyre for her, mourn her death and soon go on a hunt as per Kratos' desire. However much to Kratos' disappointment, Atreus proves his incompetence and lack of focus, making Kratos reconsider taking Atreus in his journey. Kratos is soon attacked by a mysterious stranger with godlike powers, and who cannot feel anything physically. After seemingly killing him, Kratos reluctantly takes Atreus with him and begins their journey.</p>
        </div>
        <div id="spec">
          <div>
            <p>Releases</p>
            <div>
              <span>Playstation 4</span> <span>2018-4-20</span>
            </div>
            <div>
              <span>PC</span> <span>2022-4-20</span>
            </div>  
          </div>
        </div>
      </div>
      <div className="game-details columns">
        <div className="column is-half about">
          <p>God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.</p>
          <p>Many years have passed since Kratos, Spartan warrior and former Greek God of War, took his vengeance against the Greek Gods, and he now lives with his young son Atreus in ancient Norway in the realm of Midgard. The game begins after the death of the Jötunn warrior Faye, Kratos' second wife and Atreus' mother, whose last request was for her ashes to be spread at the highest speak of the nine realms. Kratos and Atreus prepare a funeral pyre for her, mourn her death and soon go on a hunt as per Kratos' desire. However much to Kratos' disappointment, Atreus proves his incompetence and lack of focus, making Kratos reconsider taking Atreus in his journey. Kratos is soon attacked by a mysterious stranger with godlike powers, and who cannot feel anything physically. After seemingly killing him, Kratos reluctantly takes Atreus with him and begins their journey.</p>
        </div>
        <div className="column is-narrow spec">
            <div>
              <p>Releases</p>
              <div>
                <span>Playstation 4</span> <span>2018-4-20</span>
              </div>
              <div>
                <span>PC</span> <span>2022-4-20</span>
              </div>  
            </div>
            <div>
              <p>Genre</p>
              <span>RPG</span> <span>Hack'n Slash</span> <span>Adventure</span>
            </div>
            <div>
              <p>Game Modes</p>
              <span>Single Player</span>
            </div>
            <div>
              <p>Player Perspective</p>
              <span>Third Person</span>
            </div>
            <div>
              <p>Age Ratings</p>
              <span>M</span>
              <span>18</span>
              <span>18</span>
            </div>
            <div>
              <span>Genre</span>
              <span>Actions</span>
            </div>
        </div>
      </div>
      <div className='wrapper'>
        <h3>How Long to Beat</h3>
        <div className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Main Story</p>
              <p className="title">65</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Main + Sides</p>
              <p className="title">82</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Completionist</p>
              <p className="title">102</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">All Styles</p>
              <p className="title">84</p>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default GameDetails