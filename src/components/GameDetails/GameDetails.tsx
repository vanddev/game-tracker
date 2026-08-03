import { use, useEffect, useState } from 'react';
import type { Game } from '../../types';
import Section from '../ui/Section/Section'
import './GameDetails.css'
interface GameDetailsProps {
  game: Game;
}

const GameDetails = ({game}: GameDetailsProps) => {

  const [esrbRating, setEsrbRating] = useState<string | null>(null);
  const [pegiRating, setPegiRating] = useState<string | null>(null);
  const [classIndRating, setClassIndRating] = useState<string | null>(null);
  const [releases, setReleases] = useState<string[]>([]);
  const [playersPerspective, setPlayersPerspective] = useState<string[]>([]);

  useEffect(() => {

    const esrbRating = game.ageRatings?.find(rating => rating.organization.toLowerCase() === 'esrb');
    if (esrbRating) {
      setEsrbRating(esrbRating.rating);
    }
    const pegiRating = game.ageRatings?.find(rating => rating.organization.toLowerCase() === 'pegi');
    if (pegiRating) {
      setPegiRating(pegiRating.rating);
    }
    const classIndRating = game.ageRatings?.find(rating => rating.organization.toLowerCase() === 'class_ind');
    if (classIndRating) {
      setClassIndRating(classIndRating.rating);
    }
    const releases = game.releases?.filter(release => release.status == "Full Release" && release.region == "worldwide")
        .map(release => `${release.platform?.name} - ${new Date(release.releaseDate * 1000).getFullYear()}`);
    if (releases) {
      setReleases(releases);
    }

  }, [game]);

  const buildRatingIconUrl = (organization: string, rating: string) => {
    // clean the rating string to remove any non-alphanumeric characters and convert to lowercase
    const cleanedRating = rating.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let cleanedOrganization = organization.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (cleanedOrganization === 'classind') {
      cleanedOrganization = 'class_ind';
    }
    return `https://www.igdb.com/icons/rating_icons/${cleanedOrganization}/${cleanedOrganization}_${cleanedRating}.png`;
  }
  
  return (
    <div className='game-details'>
      <div className='wrapper' style={{marginBottom: 0}}>
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
                { game.playerPerspectives && game.playerPerspectives.map((perspective, index) => <li key={index}>{perspective}</li>) }
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
                { releases.map((release, index) => <li key={index}>{release}</li>) }
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
              <span>IGDB</span>
              <div>
                <span>{Math.round(game.rating)}</span>
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
            { esrbRating && <div className='rating'>
              <span>US</span>
              <img src={buildRatingIconUrl('esrb', esrbRating ? esrbRating : '')}></img>
            </div> }
            { pegiRating && <div className='rating'>
              <span>EU</span>
              <img src={buildRatingIconUrl('pegi', pegiRating ? pegiRating : '')}></img>
            </div> }
            { classIndRating && <div className='rating'>
              <span>BR</span>
              <img src={buildRatingIconUrl('class_ind', classIndRating ? classIndRating : '')}></img>
            </div> }
          </div>
        </Section>
      </div>
      <Section title="Keywords">
        {game.keywords && game.keywords.map((keyword, index) => (
          <span className="keyword" key={index}>{`#${keyword} `}</span>
        ))}
      </Section>
    </div>
    
  )
}

export default GameDetails