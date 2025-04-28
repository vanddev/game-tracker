import { useEffect } from 'react'
import './GameHero.css'
import { average } from 'color.js'


const GameHero = ({ game_name, background_image, foreground_image, content_style, hltb, colorHandle }) => {
  useEffect(() => {
    const img = new Image()
    img.src = background_image
    img.onload = () => {
      average(background_image, {
        amount: 1,
        format: "array"
      }).then((averageColor) => {colorHandle(averageColor)})
    }

    img.onerror = () => {
      console.error('Failed to load the background image')
    }

    //Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  
  }, [background_image])

  return (
    <div className="hero-container" style={{backgroundImage: `url(${background_image})`}}>
      <div className="hero-filter">
        <div  className="capsule" >
          { content_style == 'cover' && <h1>{game_name}</h1> }
          <img src={foreground_image} className={content_style} width={ content_style == 'cover' ? '500' : '300'} />
        </div>
        { hltb && <div className="hltb">
          <div className='htlb-content'>
              <div><p>Main Story</p><p>{hltb["main_story"]}</p></div>
              <div><p>Main + Sides</p><p>{hltb["main_plus_sides"]}</p></div>
              <div><p>Completionist</p><p>{hltb["completionist"]}</p></div>
              <div><p>All Styles</p><p>{hltb["all_styles"]}</p></div>
          </div>
        </div> }
      </div>
    </div>
  )
}

export default GameHero