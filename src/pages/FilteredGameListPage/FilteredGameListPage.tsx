import GenericGameList from '../../components/ui/GenericGameList/GenericGameList';
import { useLocation, useParams } from "react-router-dom"
import ScrollToTop from '../../components/ScrollToTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import useURIDecode from '../../hooks/useURIDecode';
import type { Game, Platform } from '../../types';
import { useState } from 'react';

interface LocationState {
  initialPage?: Game[];
}

function FilteredGameListPage() {
  ScrollToTop();
  const { category } = useParams();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [games, setGames] = useState<Game[]>(state?.initialPage || []);
  const [page, setPage]   = useState(1);
  const [loading, setLoading] = useState(!state?.initialPage);



  // useEffect(() => {
  //   if (!state?.initialPage) {
  //     // fetch first page from API
  //     loadGames(1);
  //   }
  // }, [state]);

  function capitalize(s: string | undefined) {
    if (typeof s !== 'string') return '';
    return useURIDecode(s)
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const platforms: Platform[] = [
    { name: "PlayStation", abbreviation: "PS", logo: "" },
    { name: "Xbox One", abbreviation: "XB1", logo: "" },
    { name: "Nintendo Switch", abbreviation: "NS", logo: "" },
    { name: "PC", abbreviation: "PC", logo: "" },
  ];

  return (
    <article>
      <PageTitle title={ `${capitalize(category)} Games` } />
      <GenericGameList games={[
          { name: "God of War", cover: "/similar_games/godofwar.png", platforms: [platforms[0], platforms[3]] },
          { name: "Remnant: From the Ashes", cover: "/similar_games/remnant.jpg", platforms: [] },
          { name: "Dragon: Marked for Death", cover: "/similar_games/dragonmarketfordeath.png", platforms: [platforms[2]] },
          { name: "Borderlands 3", cover: "/similar_games/borderlands3.png", platforms: [platforms[3], platforms[0], platforms[1]] },
          { name: "Life is Feudal: Your Own", cover: "/similar_games/lifeisfeudal.jpg", platforms: [platforms[3]] },
          { name: "Pokemon Shield", cover: "/similar_games/pokemonshield.png", platforms: [platforms[2]] },
          { name: "Hollow Knight", cover: "/similar_games/hollowknight.png", platforms: [platforms[3], platforms[2]] },
          { name: "Celeste", cover: "/similar_games/celeste.png", platforms: [platforms[3], platforms[0], platforms[1], platforms[2]] },
          { name: "Hades", cover: "/similar_games/hades.jpg", platforms: [platforms[3], platforms[0], platforms[1], platforms[2]] },
      ]} lastPage={1}/>
    </article>
    
  )
}
export default FilteredGameListPage