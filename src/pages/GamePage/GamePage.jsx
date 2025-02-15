import "./GamePage.css"
import GameHero from "../../components/GameHero/GameHero"
import GameHeroActions from "../../components/GameHeroActions/GameHeroActions"
import GameDetails from "../../components/GameDetails/GameDetails"
import SimilarGames from "../../components/SimilarGames/SimilarGames"

const GamePage = () => {
  const hero = {url: "./hero.png", name: "God of War"}
  const logo = {url: "./logo.png"}
  const keywords = ['greek mythology', 'exploration', 'violence', 'story driven', 'norse mythology', "crafting", 'dark fantasy', "upgradable weapons", "cinematic", "deer", "mythology", "hand-to-hand combat", "combat", "over the shoulder", "emotional", "trolls", "boss fight", "game critics awards",  "e3 2017", "bow and arrow", "descendants of other characters", "e3 2016", "skill tree", "the game awards 2017", "the game awards - nominee", "the game awards 2016", "narrative", "norse", "male protagonist", "kratos", "the game awards - most anticipated game - nominee", "father and son relationship"]

  return (
    <>
      <GameHero hero={hero} logo={logo}></GameHero>
      <GameHeroActions></GameHeroActions>
      <GameDetails></GameDetails>
      <section>
        <h3>Keywords</h3>
        {keywords && keywords.map((keyword) => (
          <span className="keyword" key={keyword}>{keyword}</span>
        ))}
      </section>
      <SimilarGames></SimilarGames>
      <div className="footer"></div>
    </>
    
  )
}

export default GamePage