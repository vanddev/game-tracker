export interface Pagination<T> {
    items: T[];
    totalPages: number;
    page: number;
    size: number;
    lastPage: boolean;
    firstPage: boolean;
}

export interface Game {
    id: number;
    ggstatus?: string;
    name: string;
    cover: string;
    rating: number;
    hero?: string;
    logo?: string;
    type?: string;
    game_status?: string;
    platforms?: Platform[];
    firstReleaseDate?: number;
    releases?: Release[];
    themes?: Theme[];
    genres: Genre[];
    keywords?: string[];
    playerPerspectives?: string[];
    gameModes?: string[];
    ageRatings?: AgeRating[];
}

export interface Platform {
    name: string;
    abbreviation: string;
    logo: string;
}

export interface Release {
    platform: Platform
    region: string;
    releaseDate: number;
    status: string;
}

export interface AgeRating {
    rating: string;
    organization: string;
    contentDescriptions: string;
}

export interface Genre {
    id: number;
    name: string;
    slug?: string;
}

export interface Theme {
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