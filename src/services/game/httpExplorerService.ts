import type { IGameService } from './types';
import type { Game, Pagination } from '../../types';
import camelcaseKeys from 'camelcase-keys';


const DEFAULT_BASE = '';

/**
 * Transform API response from snake_case to camelCase
 */
function transformGameResponse(data: any): Game {
  const { age_ratings, player_perspectives, game_modes, ...rest } = data;
  const transformed = {
    ...rest,
    ageRatings: age_ratings || data.ageRatings,
    playerPerspectives: player_perspectives || data.playerPerspectives,
    gameModes: game_modes || data.gameModes,
    firstReleaseDate: data.first_release_date || data.firstReleaseDate,
  };
  return transformed;
}

/**
 * Transform pagination response with game items
 */
function transformPaginationResponse(data: any): Pagination<Game> {
  return {
    ...data,
    items: data.items.map(transformGameResponse),
  };
}

/**
 * Explorer service implementation using REST HTTP (JSON).
 * Use this when the app runs as a standalone frontend or when the backend exposes /api.
 */
export const httpExplorerService: IGameService = {

  async GetGame(id: number): Promise<Game> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/games/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch game data: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    return camelcaseKeys(data, { deep: true }) as Game;
    // return transformGameResponse(data);
  },

  async GetLatestGames(): Promise<Pagination<Game>> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/games/latest-released`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch explorer data: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return camelcaseKeys(data, { deep: true }) as Pagination<Game>;
  },

  async GetNextGames(): Promise<Pagination<Game>> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/games/next-release`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch next games: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return camelcaseKeys(data, { deep: true }) as Pagination<Game>;
  },

  async GetTopRatedGames(year?: number): Promise<Pagination<Game>> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/games/top-rated${year ? `?year=${year}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch top rated games: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return camelcaseKeys(data, { deep: true }) as Pagination<Game>;
  },

  async GetAllTimeClassics(): Promise<Pagination<Game>> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/api/explorer/all-time-classics`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch all time classics: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return camelcaseKeys(data, { deep: true }) as Pagination<Game>;
  },

  async GetRandomGames(): Promise<Pagination<Game>> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/games/random`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch random game: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return camelcaseKeys(data, { deep: true }) as Pagination<Game>;
  }
};
