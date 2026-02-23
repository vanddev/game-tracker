import {
    Baby,
    Boxes,
    Briefcase,
    Crosshair,
    Drama,
    Eye,
    Flame,
    FlameKindling,
    FlaskConical,
    Globe2,
    GraduationCap,
    HatGlasses,
    Landmark,
    Laugh,
    PartyPopper,
    Rose,
    ScrollText,
    Skull,
    VectorSquare,
    VenetianMask,
    WandSparkles,
    Zap
} from "lucide-react";

const genreIconMap: Record<number, React.ComponentType<any>> = {
    1: Zap, // Action
    17: WandSparkles, // Fantasy
    18: FlaskConical, // Sci-fi
    19: Skull,   // Horror
    20: Eye,    // Thriller
    21: FlameKindling, // Survival
    22: Landmark, // Historical
    23: HatGlasses, // Stealth
    27: Laugh, // Comedy
    28: Briefcase, // Business
    31: Drama, // Drama
    32: ScrollText, // Non-fiction
    33: Boxes, // Sandbox
    34: GraduationCap, // Educational
    35: Baby, // Kids
    38: Globe2, // Open World
    39: Crosshair, // Warfare
    40: PartyPopper, // Party
    41: VectorSquare, // 4x
    42: Flame, // Erotic
    43: VenetianMask, // Mystery
    44: Rose, // Romance
} as const;

type ThemeIconProps = {
    genreId: number;
    size?: number;
};

export function ThemeIcon({ genreId, size = 18 }: ThemeIconProps) {
    const Icon = genreIconMap[genreId];

    if (!Icon) return null;

    return <Icon size={size} />;
}