export type Direction = "linen" | "sage";
export type Hero = "photo" | "split";
export type Mood = "natural" | "warm" | "muted" | "bw";

export const DIRECTION_PRESET: Record<Direction, { accent: string; radius: number }> = {
  linen: { accent: "#BD5B34", radius: 8 },
  sage:  { accent: "#5E7A43", radius: 16 },
};

export interface ThemeConfig {
  direction: Direction;
  hero: Hero;
  mood: Mood;
  accent?: string;
  radius?: number;
}

export const theme: ThemeConfig = {
  direction: "linen",
  hero: "photo",
  mood: "warm",
};

export function resolveTheme(t: ThemeConfig = theme) {
  const preset = DIRECTION_PRESET[t.direction];
  return {
    ...t,
    accent: t.accent ?? preset.accent,
    radius: t.radius ?? preset.radius,
  };
}
