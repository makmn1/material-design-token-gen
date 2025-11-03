/**
 * Generate **elevation** tokens.
 *
 * By convention, this step returns `...dp` strings (e.g., `"6dp"`, `"12dp"`),
 * mirroring the Material spec units.
 *
 * Keys: `md.sys.elevation.level{0..5}`
 *
 * @example
 * ```ts
 * import { generateElevationTokens } from "@makmn1/material-design-token-gen";
 * const elevation = generateElevationTokens();
 * // elevation["md.sys.elevation.level3"] === "6dp"
 * ```
 */
export function generateElevationTokens(): Record<string, string> {
    return {
        "md.sys.elevation.level0": "0",
        "md.sys.elevation.level1": "1dp",
        "md.sys.elevation.level2": "3dp",
        "md.sys.elevation.level3": "6dp",
        "md.sys.elevation.level4": "8dp",
        "md.sys.elevation.level5": "12dp",
    };
}
