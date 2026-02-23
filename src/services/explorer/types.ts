import type { ExplorerData } from '../../types';

/**
 * Contract for the explorer data source.
 * Implementations can use REST HTTP or Wails (Go bindings); consumers only use this interface.
 */
export interface IExplorerService {
  getExplorerData(): Promise<ExplorerData>;
}
