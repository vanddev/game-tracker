import type { Game, Pagination } from '../../types';

/**
 * Contract for the explorer data source.
 * Implementations can use REST HTTP or Wails (Go bindings); consumers only use this interface.
 */
export interface IGameService {
  GetGame(id: number): Promise<Game>;
  GetLatestGames(): Promise<Pagination<Game>>;
  GetNextGames(): Promise<Pagination<Game>>;
  GetTopRatedGames(year?: number): Promise<Pagination<Game>>;
  GetAllTimeClassics(): Promise<Pagination<Game>>;
  GetRandomGames(): Promise<Pagination<Game>>;
}
