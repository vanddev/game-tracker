import GenericGameList from '../../components/ui/GenericGameList/GenericGameList';
import './GenreGamesPage.css'
import { useParams } from "react-router-dom"

const GenreGamesPage = () => {

  const { genreName } = useParams();

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <article>
      <h1>{ `${capitalize(genreName)} Games` }</h1>
      <GenericGameList games={[
          { name: "God of War", image: "/similar_games/godofwar.png", platforms: ['PlayStation', 'PC'] },
          { name: "Remnant: From the Ashes", image: "/similar_games/remnant.jpg", platforms: ['PC', 'Xbox One'] },
          { name: "Dragon: Marked for Death", image: "/similar_games/dragonmarketfordeath.png", platforms: ['Nintendo Switch'] },
          { name: "Borderlands 3", image: "/similar_games/borderlands3.png", platforms: ['PC', 'PlayStation', 'Xbox One'] },
          { name: "Life is Feudal: Your Own", image: "/similar_games/lifeisfeudal.jpg", platforms: ['PC'] },
          { name: "Pokemon Shield", image: "/similar_games/pokemonshield.png", platforms: ['Nintendo Switch'] },
          { name: "Hollow Knight", image: "/similar_games/hollowknight.png", platforms: ['PC', 'Nintendo Switch'] },
          { name: "Celeste", image: "/similar_games/celeste.png", platforms: ['PC', 'PlayStation', 'Xbox One', 'Nintendo Switch'] },
          { name: "Hades", image: "/similar_games/hades.jpg", platforms: ['PC', 'PlayStation', 'Xbox One', 'Nintendo Switch'] },
      ]} lastPage={1}/>
    </article>
    
  )
}
export default GenreGamesPage