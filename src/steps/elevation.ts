import { DpConvertOptions, convertDpString } from "../util/dp";

export interface ElevationOptions {
    /**
     * When true, convert `...dp` strings to web units (`rem` or `px`).
     * @default true
     */
    webUnits?: boolean;
    /**
     * Root font size in pixels used when converting to `rem`.
     * @default 16
     */
    rootFontSizePx?: number;
    /**
     * Device-independent pixel ratio for the web conversion.
     * @default 1
     */
    dpPxRatio?: number;
    /**
     * Output unit for `dp` conversion.
     * @default "rem"
     */
    unit?: "rem" | "px";
}

/**
 * Generate **elevation** tokens.
 *
 * By convention, this step returns `...dp` strings (e.g., `"6dp"`, `"12dp"`),
 * mirroring the Material spec units. If `webUnits` is true, these are converted
 * to web units (`rem` or `px`).
 *
 * Keys: `md.sys.elevation.level{0..5}`
 *
 * @example
 * ```ts
 * import { generateElevationTokens } from "@makmn1/material-design-token-gen";
 * const elevation = generateElevationTokens();
 * // elevation["md.sys.elevation.level3"] === "6dp" (if webUnits is false)
 * // elevation["md.sys.elevation.level3"] === "0.4286rem" (if webUnits is true)
 * ```
 */
export function generateElevationTokens(opts: ElevationOptions = {}): Record<string, string | number> {
    const {
        webUnits = true,
        rootFontSizePx = 16,
        dpPxRatio = 1,
        unit = "rem"
    } = opts;

    const tokens: Record<string, string> = {
        "md.sys.elevation.level0": "0",
        "md.sys.elevation.level1": "1dp",
        "md.sys.elevation.level2": "3dp",
        "md.sys.elevation.level3": "6dp",
        "md.sys.elevation.level4": "8dp",
        "md.sys.elevation.level5": "12dp",
    };

    if (webUnits) {
        const dpOptions: DpConvertOptions = { rootFontSizePx, dpPxRatio, unit };
        const converted: Record<string, string | number> = {};
        for (const [key, value] of Object.entries(tokens)) {
            if (value === "0") {
                converted[key] = 0;
            } else {
                converted[key] = convertDpString(value, dpOptions);
            }
        }
        return converted;
    }

    return tokens;
}
