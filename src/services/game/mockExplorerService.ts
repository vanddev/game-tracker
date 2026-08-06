import type { IGameService } from './types';
import type { Game, Pagination } from '../../types';
import { getGenre } from '../../constants/constants';

const games: Pagination<Game> = {
    size: 6,
    firstPage: true,
    lastPage: true,
    totalPages: 1,
    page: 1,
    items: [
        { id: 1, name: "God of War", cover: "/similar_games/godofwar.png", genres: [getGenre("Adventure")], ggstatus: 'finished', },
        { id: 2, name: "Remnant: From the Ashes", cover: "/similar_games/remnant.jpg", genres: [getGenre("Action")], ggstatus: 'finished' },
        { id: 3, name: "Dragon: Marked for Death", cover: "/similar_games/dragonmarketfordeath.png", genres: [getGenre("Role-playing (RPG)")], ggstatus: 'dropped' },
        { id: 4, name: "Borderlands 3", cover: "/similar_games/borderlands3.png", genres: [getGenre("Shooter")], ggstatus: 'wishlist' },
        { id: 5, name: "Life is Feudal: Your Own", cover: "/similar_games/lifeisfeudal.jpg", genres: [getGenre("Role-playing (RPG)")], ggstatus: 'finished' },
        { id: 6, name: "Pokemon Shield", cover: "/similar_games/pokemonshield.png", genres: [getGenre("Role-playing (RPG)")], ggstatus: 'finished' },
    ]
};

export const mockExplorerService: IGameService = {
  async GetGame(id: number): Promise<Game> {
    return games.items.find(game => game.id === id) || games.items[0];
  },

  async GetLatestGames(): Promise<Pagination<Game>> {
    return games;
  },

  async GetNextGames(): Promise<Pagination<Game>> {
    return games;
  },

  async GetTopRatedGames(year: number): Promise<Pagination<Game>> {
    return games;
  },

  async GetAllTimeClassics(): Promise<Pagination<Game>> {
    return games;
  },

  async GetRandomGames(): Promise<Pagination<Game>> {
    return games;
  },
};
