import { useEffect } from 'react'
import './GameHero.css'
import { average } from 'color.js'


interface GameHeroProps {
  game_name: string;
  hero: string;
  cover: string;
  content_style: 'logo' | 'cover';
  hltb?: {
    main_story: string;
    main_plus_sides: string;
    completionist: string;
    all_styles: string;
  } | null;
  colorHandle: (color: any) => void;
}

function GameHero(props: GameHeroProps) {
  // useEffect(() => {
  //   const img = new Image()
  //   img.src = props.hero
  //   img.onload = () => {
  //     average(props.hero, {
  //       amount: 1,
  //       format: "array"
  //     }).then((averageColor) => {props.colorHandle(averageColor)})
  //   }

  //   img.onerror = () => {
  //     console.error('Failed to load the background image')
  //   }

  //   //Cleanup
  //   return () => {
  //     img.onload = null;
  //     img.onerror = null;
  //   };
  
  // }, [props.hero])

  return (
    <div className="hero-container" style={{backgroundImage: `url(${props.hero})`}}>
      <div className="hero-filter">
        <div  className="capsule" >
          { props.content_style == 'cover' && <h1>{props.game_name}</h1> }
          <img src={props.cover} className={props.content_style} width={ props.content_style == 'cover' ? '500' : '300'} />
        </div>
        { props.hltb && <div className="hltb">
          <div className='htlb-content'>
              <div><p>Main Story</p><p>{props.hltb["main_story"]}</p></div>
              <div><p>Main + Sides</p><p>{props.hltb["main_plus_sides"]}</p></div>
              <div><p>Completionist</p><p>{props.hltb["completionist"]}</p></div>
              <div><p>All Styles</p><p>{props.hltb["all_styles"]}</p></div>
          </div>
        </div> }
      </div>
    </div>
  )
}

export default GameHero