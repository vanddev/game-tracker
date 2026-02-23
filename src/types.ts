export interface Game {
    ggstatus: string;
    name: string;
    cover: string;
    type: string;
    game_status: string;
    platforms: Platform[];
    releases: Release[];
    keywords: string[];
    themes: string[];
    genres: string[];
    player_perspectives: string[];
    game_modes: string[];
    age_ratings: AgeRating[];
}

export interface Platform {
    name: string;
    abbreviation: string;
    logo: string;
}

export interface Release {
    platform: Platform
    region: string;
    year: string;
    month: string;
    status: string;
}

export interface AgeRating {
    rating: string;
    organization: string;
    descriptions: string[];
}

export interface Genre {
    id: number;
    name: string;
    slug?: string;
}

/** Payload returned by the explorer API (REST or Wails). Same contract for all backends. */
export interface ExplorerData {
    lastReleased: Game[];
    comingSoon: Game[];
    topRated: Game[];
    allTimeClassics: Game[];
    underratedGems: Game[];
    randomGame: Game[];
}