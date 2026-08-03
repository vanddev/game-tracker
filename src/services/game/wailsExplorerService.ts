import type { IGameService } from './types';
import type { Game, Pagination } from '../../types';

/**
 * Transform API response from snake_case to camelCase
 */
function transformGameResponse(data: any): Game {
  const { age_rating, player_perspectives, game_modes, ...rest } = data;
  return {
    ...rest,
    ageRatings: age_rating || data.ageRatings,
    playerPerspectives: player_perspectives || data.playerPerspectives,
    gameModes: game_modes || data.gameModes,
  };
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
 * Wails bindings type. When running in Wails, Go exposes methods under window.go.<app>.<Struct>.<Method>.
 * Define the shape here so we can call it when available.
 */
declare global {
  interface Window {
    go?: {
      main?: {
        App?: {
          GetGame?: (id: number) => Promise<Game>;
          GetLatestGames?: () => Promise<Pagination<Game>>;
          GetNextGames?: () => Promise<Pagination<Game>>;
          GetTopRatedGames?: (year: number) => Promise<Pagination<Game>>;
          GetAllTimeClassics?: () => Promise<Pagination<Game>>;
          GetRandomGame?: () => Promise<Pagination<Game>>;
        };
      };
    };
  }
}

/**
 * Explorer service implementation using Wails (calls Go backend directly).
 * Use this when the app runs inside Wails; bind GetExplorerData in Go to return ExplorerData JSON.
 */
export const wailsExplorerService: IGameService = {
  async GetGame(id: number): Promise<Game> {
    const fn = window.go?.main?.App?.GetGame;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetGame is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    const data = await fn(id);
    return transformGameResponse(data);
  },
  async GetLatestGames(): Promise<Pagination<Game>> {
    const fn = window.go?.main?.App?.GetLatestGames;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetLatestGames is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    const data = await fn();
    return transformPaginationResponse(data);
  },

  async GetNextGames(): Promise<Pagination<Game>> {
    const fn = window.go?.main?.App?.GetNextGames;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetNextGames is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    const data = await fn();
    return transformPaginationResponse(data);
  },

  async GetTopRatedGames(year: number): Promise<Pagination<Game>> {
    const fn = window.go?.main?.App?.GetTopRatedGames;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetTopRatedGames is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    const data = await fn(year);
    return transformPaginationResponse(data);
  },

  async GetAllTimeClassics(): Promise<Pagination<Game>> {
    const fn = window.go?.main?.App?.GetAllTimeClassics;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetAllTimeClassics is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    const data = await fn();
    return transformPaginationResponse(data);
  },

  async GetRandomGames(): Promise<Pagination<Game>> {
    const fn = window.go?.main?.App?.GetRandomGame;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetRandomGame is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    const data = await fn();
    return transformPaginationResponse(data);
  },
};
