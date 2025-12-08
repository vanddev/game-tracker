import { mdiCheckBold } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import { mdiCancel } from '@mdi/js';

/** Represents a single status item in the UI */
export interface StatusItem {
  icon: string;
  label: string;
  id: "finished" | "wishlist" | "dropped";
}

/** Strongly typed status list */
export const statusList: StatusItem[] = [
  { icon: mdiCheckBold, label: "Finished", id: "finished" },
  { icon: mdiHeart, label: "Want to Play", id: "wishlist" },
  { icon: mdiCancel, label: "Dropped", id: "dropped" }
];

export const chartLabelColor = '#e6e6e6';

export const chartDatasetLabelColor = '#e6e6e6';

export const chartRulerColor = '#ffffff5e';

export const chartGridColor = '#ffffff5e';