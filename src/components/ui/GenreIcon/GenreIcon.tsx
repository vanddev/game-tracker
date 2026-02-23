import {
    Compass,
    Joystick,
    Spade,
    HandFist,
    Swords,
    Sparkles,
    LandPlot,
    HelpCircle,
    Music,
    CircleDot,
    SquareStack,
    MousePointer,
    Puzzle,
    Gauge,
    Sword,
    Map,
    Crosshair,
    Gamepad2,
    Volleyball,
    ChessKnight,
    Target,
    RefreshCw,
    BookOpen
} from "lucide-react";

const genreIconMap: Record<number, React.ComponentType<any>> = {
    2: MousePointer, // Point-and-click
    4: HandFist, // Fighting
    5: Crosshair, // Shooter
    7: Music, // Music
    8: SquareStack, // Platform
    9: Puzzle, // Puzzle
    10: Gauge, // Racing 
    11: Map,    // Real Time Strategy (RTS)
    12: Sword, // Role-playing (RPG)
    13: Gamepad2, // Simulator
    14: Volleyball, // Sport
    15: ChessKnight, // Strategy
    16: RefreshCw, // Turn-based strategy (TBS)
    24: Target, // Tactical
    25: Swords, // Hack and slash/Beat 'em up
    26: HelpCircle, // Quiz/Trivia
    30: CircleDot, // Pinball
    31: Compass, // Adventure
    32: Sparkles, // Indie
    33: Joystick, // Arcade
    34: BookOpen, // Visual Novel
    35: Spade, // Card & Board Game
    36: LandPlot, // MOBA
} as const;

type GenreIconProps = {
    genreId: number;
    size?: number;
};

export function GenreIcon({ genreId, size = 18 }: GenreIconProps) {
    const Icon = genreIconMap[genreId];

    if (!Icon) return null;

    return <Icon size={size} />;
}