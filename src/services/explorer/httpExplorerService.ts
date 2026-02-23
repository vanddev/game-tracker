import type { IExplorerService } from './types';
import type { ExplorerData } from '../../types';

const DEFAULT_BASE = '';

/**
 * Explorer service implementation using REST HTTP (JSON).
 * Use this when the app runs as a standalone frontend or when the backend exposes /api.
 */
export const httpExplorerService: IExplorerService = {
  async getExplorerData(): Promise<ExplorerData> {
    const base = (import.meta.env?.VITE_API_BASE_URL as string) ?? DEFAULT_BASE;
    const url = `${base}/api/explorer`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch explorer data: ${response.status} ${response.statusText}`
      );
    }
    const data = (await response.json()) as ExplorerData;
    return data;
  },
};
