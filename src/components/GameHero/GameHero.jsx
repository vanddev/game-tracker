import { useCallback, useEffect, useRef, useState } from 'react'
import './GameHero.css'
import { average } from 'color.js'

const GameHero = ({ hero, logo, colorHandle }) => {
  const [isBgLoaded, setBgLoaded] = useState(false)
  const [getImage, setImage] = useState(null)
  
  useEffect(() => {
    const img = new Image()
    img.src = hero.url
    img.onload = () => {
      setBgLoaded(true)

      average(hero.url, {
        amount: 1,
        format: "array"
      }).then((averageColor) => {colorHandle(averageColor)})
    }

    img.onerror = () => {
      console.error('Failed to load the background image')
    }

    setImage(img)

    //Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  
  }, [hero])

  return (
    <div className="hero-container" style={{backgroundImage: `url(${hero.url})`}}>
      <img src={logo.url} className="logo" />
      <div className="hltb">
        <div className='htlb-content'>
            <div><p>Main Story</p><p>65 Hours</p></div>
            <div><p>Main + Sides</p><p>82 Hours</p></div>
            <div><p>Completionist</p><p>102 Hours</p></div>
            <div><p>All Styles</p><p>84 Hours</p></div>
        </div>
      </div>
    </div>
  )
}

export default GameHero