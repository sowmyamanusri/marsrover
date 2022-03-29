const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type Direction = typeof DIRECTIONS[number];
