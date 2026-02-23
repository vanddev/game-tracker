import type { IExplorerService } from './types';
import { httpExplorerService } from './httpExplorerService';
import { wailsExplorerService } from './wailsExplorerService';
import { mockExplorerService } from './mockExplorerService';

/** Use Wails when running inside Wails (window.go exists); otherwise use HTTP. */
function selectImplementation(): IExplorerService {
  if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
    return mockExplorerService;
  }
  if (typeof window !== 'undefined' && window.go?.main?.App?.GetExplorerData) {
    return wailsExplorerService;
  }
  return httpExplorerService;
}

/**
 * Single explorer service entry point. Components consume this with the same contract
 * regardless of whether data comes from REST or Wails.
 */
export const explorerService: IExplorerService = selectImplementation();

export type { IExplorerService } from './types';
export { httpExplorerService } from './httpExplorerService';
export { wailsExplorerService } from './wailsExplorerService';
export { mockExplorerService } from './mockExplorerService';