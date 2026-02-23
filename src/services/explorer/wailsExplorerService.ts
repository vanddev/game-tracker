import type { IExplorerService } from './types';
import type { ExplorerData } from '../../types';

/**
 * Wails bindings type. When running in Wails, Go exposes methods under window.go.<app>.<Struct>.<Method>.
 * Define the shape here so we can call it when available.
 */
declare global {
  interface Window {
    go?: {
      main?: {
        App?: {
          GetExplorerData?: () => Promise<ExplorerData>;
        };
      };
    };
  }
}

/**
 * Explorer service implementation using Wails (calls Go backend directly).
 * Use this when the app runs inside Wails; bind GetExplorerData in Go to return ExplorerData JSON.
 */
export const wailsExplorerService: IExplorerService = {
  async getExplorerData(): Promise<ExplorerData> {
    const fn = window.go?.main?.App?.GetExplorerData;
    if (typeof fn !== 'function') {
      throw new Error(
        'Wails GetExplorerData is not bound. Run in Wails or use HTTP explorer service.'
      );
    }
    return fn();
  },
};
