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
      <img id="hero-img" src={hero.url} alt={hero.name} onLoad={onLoadHandle}/>
      <img src={logo.url} className="logo" />
      <div className="tags are-large tags_container">
        <span className="tag">Not Played</span>
        <span className="tag">Steam</span>
        <span className="tag">PS5</span>
        <span className="tag">PS4</span>
      </div>
    </div>
  )
}

export default GameHero