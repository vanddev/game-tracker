import type { IExplorerService } from './types';
import type { ExplorerData, Game } from '../../types';


export const mockExplorerService: IExplorerService = {
  async getExplorerData(): Promise<ExplorerData> {
    const games = [
        { name: "God of War", cover: "/similar_games/godofwar.png", genres: ["Adventure"], ggstatus: 'finished' },
        { name: "Remnant: From the Ashes", cover: "/similar_games/remnant.jpg", genres: ["Action"], ggstatus: 'finished' },
        { name: "Dragon: Marked for Death", cover: "/similar_games/dragonmarketfordeath.png", genres: ["Role-playing (RPG)"], ggstatus: 'dropped' },
        { name: "Borderlands 3", cover: "/similar_games/borderlands3.png", genres: ["Shooter"], ggstatus: 'wishlist' },
        { name: "Life is Feudal: Your Own", cover: "/similar_games/lifeisfeudal.jpg", genres: ["Role-playing (RPG)"], ggstatus: 'finished' },
        { name: "Pokemon Shield", cover: "/similar_games/pokemonshield.png", genres: ["Role-playing (RPG)"], ggstatus: 'finished' },
    ] as Game[];
    const data = {
        lastReleased: games,
        comingSoon: games,
        topRated: games,
        allTimeClassics: games,
        underratedGems: games,
        randomGame: games,
    } as ExplorerData;
    return data;
  },
};
