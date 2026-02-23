import type { Game } from "../types";

async function FetchGamesLastReleased(): Promise<Game[]> {
  try {
    const response = await fetch('/api/games/last-released');
    if (!response.ok) {
      throw new Error(`Failed to fetch last released games: ${response.status} ${response.statusText}`);
    }
    const data = (await response.json()) as Game[];
    return data;
  } catch (error) {
    console.error('Error fetching last released games:', error);
    throw error;
  }
}