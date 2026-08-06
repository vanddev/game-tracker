import { mdiCheckBold } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import { mdiCancel } from '@mdi/js';
import type { Genre } from '../types';

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

export const mainGenres: Genre[] = [
  {
      "id": 4,
      "name": "Fighting"
  },
  {
      "id": 5,
      "name": "Shooter"
  },
  {
      "id": 9,
      "name": "Puzzle"
  },
  {
      "id": 10,
      "name": "Racing"
  },
  {
      "id": 14,
      "name": "Sport"
  },
  {
      "id": 31,
      "name": "Adventure"
  }
]

export const moreGenres: Genre[] = [
  {
      "id": 2,
      "name": "Point'n Click"
  },
  {
      "id": 7,
      "name": "Music"
  },
  {
      "id": 8,
      "name": "Platform"
  },
  {
      "id": 11,
      "name": "Real Time Strategy",
      "slug": "RTS"
  },
  {
      "id": 12,
      "name": "Role-playing",
      "slug": "RPG" 
  },
  {
      "id": 13,
      "name": "Simulator"
  },
  {
      "id": 15,
      "name": "Strategy"
  },
  {
      "id": 16,
      "name": "Turn-based strategy",
      "slug": "TBS"
  },
  {
      "id": 24,
      "name": "Tactical"
  },
  {
      "id": 25,
      "name": "Hack'n slash"
  },
  {
      "id": 26,
      "name": "Quiz/Trivia"
  },
  {
      "id": 30,
      "name": "Pinball"
  },
  {
      "id": 32,
      "name": "Indie"
  },
  {
      "id": 33,
      "name": "Arcade"
  },
  {
      "id": 34,
      "name": "Visual Novel"
  },
  {
      "id": 35,
      "name": "Card"
  },
  {
      "id": 36,
      "name": "MOBA"
  }
]

export const getGenre = (genreName: string): Genre => {
  const allGenres = [...mainGenres, ...moreGenres];
  const genre = allGenres.find(g => g.name.toLowerCase() === genreName.toLowerCase());
  return genre ? genre : { id: -1, name: genreName };
}

export const mainThemes = [
    {
        "id": 1,
        "name": "Action"
    },
    {
        "id": 17,
        "name": "Fantasy"
    },
    {
        "id": 19,
        "name": "Horror"
    },
    {
        "id": 21,
        "name": "Survival"
    },
    {
        "id": 23,
        "name": "Stealth"
    },
    {
        "id": 38,
        "name": "Open world"
    },
]

export const moreThemes = [
    {
        "id": 18,
        "name": "Science fiction"
    },
    {
        "id": 20,
        "name": "Thriller"
    },
    {
        "id": 22,
        "name": "Historical"
    },
    {
        "id": 27,
        "name": "Comedy"
    },
    {
        "id": 28,
        "name": "Business"
    },
    {
        "id": 31,
        "name": "Drama"
    },
    {
        "id": 32,
        "name": "Non-fiction"
    },
    {
        "id": 33,
        "name": "Sandbox"
    },
    {
        "id": 34,
        "name": "Educational"
    },
    {
        "id": 35,
        "name": "Kids"
    },
    {
        "id": 39,
        "name": "Warfare"
    },
    {
        "id": 40,
        "name": "Party"
    },
    {
        "id": 41,
        "name": "4X",
        "slug": "explore, expand, exploit, and exterminate"
    },
    {
        "id": 42,
        "name": "Erotic"
    },
    {
        "id": 43,
        "name": "Mystery"
    },
    {
        "id": 44,
        "name": "Romance"
    }
]