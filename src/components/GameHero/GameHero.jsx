import { useEffect, useRef } from 'react'
import './GameHero.css'
import { average } from 'color.js'

const GameHero = ({ hero, logo, colorHandle }) => {

  const onLoadHandle = async (e) => {
    const image = e.currentTarget

    const averageColor = await average(image, {
        amount: 1,
        format: "array"
    });

    colorHandle(averageColor)
  }

  return (
    <div className="hero-container">
      <img src={hero.url} alt={hero.name} onLoad={onLoadHandle}/>
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