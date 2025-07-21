import Section from '../ui/Section/Section'
import './GameDetails.css'

const GameDetails = () => {
  const keywords = ['greek mythology', 'exploration', 'violence', 'story driven', 'norse mythology', "crafting", 'dark fantasy', "upgradable weapons", "cinematic", "deer", "mythology", "hand-to-hand combat", "combat", "over the shoulder", "emotional", "trolls", "boss fight", "game critics awards",  "e3 2017", "bow and arrow", "descendants of other characters", "e3 2016", "skill tree", "the game awards 2017", "the game awards - nominee", "the game awards 2016", "narrative", "norse", "male protagonist", "kratos", "the game awards - most anticipated game - nominee", "father and son relationship"]
  
  return (
    <div className='game-details'>
      <div className='wrapper'>
        <p>God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.</p>
        <hr/>
        <div className="spec">
          <div className="spec-column">
            <div className='spec-item'>
              <span className='el-title'>Main Developers</span>
              <ul><li>Santa Monica Studios</li></ul>
            </div>
            <div className='spec-item'>
              <span className='el-title'>Publishers</span>
              <ul><li>Sony</li></ul>
            </div>
          </div>          
          <div className="spec-column">
            <div className='spec-item'>
              <span className='el-title'>Game Modes</span>
              <ul><li>Single Player</li></ul>
            </div>
            <div className='spec-item'>
              <span className='el-title'>Players Perspective</span>
              <ul>
                <li>Third Person</li>
              </ul>
            </div>
          </div>
          <div className="spec-column">
            <div className='spec-item'>
              <span className='el-title'>Series</span>
              <ul><li>God of War</li></ul>
            </div>
            <div className='spec-item'>
              <span className='el-title'>Is Spin-off of</span>
              <ul><li>-</li></ul>
            </div>
          </div>
          <div className="spec-column">
          <div className='spec-item'>
              <span className='el-title'>Franchises</span>
              <ul><li>God of War</li></ul>
            </div>
            <div className='spec-item'>
              <span className='el-title'>Releases</span>
              <ul>
                <li>Playstation 4 - 2018</li>
                <li>PC - 2022</li>
              </ul>
            </div>
          </div> 
        </div>
        <hr/>
        <span className='el-title'>Story</span>
        <p>Many years have passed since Kratos, Spartan warrior and former Greek God of War, took his vengeance against the Greek Gods, and he now lives with his young son Atreus in ancient Norway in the realm of Midgard. The game begins after the death of the Jötunn warrior Faye, Kratos' second wife and Atreus' mother, whose last request was for her ashes to be spread at the highest speak of the nine realms. Kratos and Atreus prepare a funeral pyre for her, mourn her death and soon go on a hunt as per Kratos' desire. However much to Kratos' disappointment, Atreus proves his incompetence and lack of focus, making Kratos reconsider taking Atreus in his journey. Kratos is soon attacked by a mysterious stranger with godlike powers, and who cannot feel anything physically. After seemingly killing him, Kratos reluctantly takes Atreus with him and begins their journey.</p>
      </div>
      <div className='more-info'>
        <Section title="Player Ratings">
          <div className="ratings">
            <div className='rating'>
              <span>Metacritic</span>
              <div>
                <span>96</span>
              </div>
            </div>
            <div className='rating'>
              <span>HLTB</span>
              <div>
                <span>96</span>
              </div>
            </div>
            <div className='rating'>
              <span>OpenCritic</span>
              <div>
                <span>96</span>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Age Ratings">
          <div className="ratings">
            <div className='rating'>
              <span>US</span>
              <img src='https://www.igdb.com/icons/rating_icons/esrb/esrb_m.png'></img>
            </div>
            <div className='rating'>
              <span>EU</span>
              <img src='https://www.igdb.com/icons/rating_icons/pegi/pegi_18.png'></img>
            </div>
            <div className='rating'>
              <span>BR</span>
              <img src='https://www.igdb.com/icons/rating_icons/class_ind/class_ind_18.png'></img>
            </div>
          </div>
        </Section>
      </div>
      <Section title="Keywords">
        {keywords && keywords.map((keyword) => (
          <span className="keyword" key={keyword}>{keyword}</span>
        ))}
      </Section>
    </div>
    
  )
}

export default GameDetails