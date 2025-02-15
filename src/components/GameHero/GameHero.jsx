import './GameHero.css'

const GameHero = ({hero, logo}) => {
  return (
    <div className="hero-container">
      <img src={hero.url} alt={hero.name}/>
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