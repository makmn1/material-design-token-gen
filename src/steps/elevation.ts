import { DpConvertOptions, convertDpString } from "../util/dp";

/**
 * Configuration options for defining elevation styles used in {@link generateElevationTokens}.
 */
export type ElevationOptions = {

    /**
     * When true, convert `...dp` strings to web units.
     * Unlike `dp` units, web units can be used in CSS.
     * For configuring the type of web unit, see {@link unit}.
     *
     * @default true
     */
    webUnits?: boolean;

    /**
     * Output unit for `dp` conversion. Used if {@link webUnits} is true. 1rem = 16px.
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
 * Also includes box-shadow tokens for each elevation level. Box-shadow values
 * are CSS-ready strings and are not affected by the `webUnits` option.
 *
 * Keys:
 * - `md.sys.elevation.level{0..5}` - Elevation level values
 * - `sm.sys.elevation.box-shadow.level{0..5}` - Box-shadow values for each level
 *
 * @example
 * ```ts
 * import { generateElevationTokens } from "@makmn1/material-design-token-gen";
 * const elevation = generateElevationTokens();
 * // elevation["md.sys.elevation.level3"] === "6dp" (if webUnits is false)
 * // elevation["md.sys.elevation.level3"] === "0.375rem" (if webUnits is true)
 * // elevation["sm.sys.elevation.box-shadow.level3"] === "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, ..."
 * ```
 */
export function generateElevationTokens(opts: ElevationOptions = {}): Record<string, string | number> {
    const {
        webUnits = true,
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

    // Box-shadow tokens are CSS-ready strings and are not affected by webUnits
    const boxShadowTokens: Record<string, string> = {
        "sm.sys.elevation.box-shadow.level0": "rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px",
        "sm.sys.elevation.box-shadow.level1": "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
        "sm.sys.elevation.box-shadow.level2": "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
        "sm.sys.elevation.box-shadow.level3": "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
        "sm.sys.elevation.box-shadow.level4": "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
        "sm.sys.elevation.box-shadow.level5": "rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px",
    };

    if (webUnits) {
        const dpOptions: DpConvertOptions = { unit };
        const converted: Record<string, string | number> = {};
        for (const [key, value] of Object.entries(tokens)) {
            if (value === "0") {
                converted[key] = 0;
            } else {
                converted[key] = convertDpString(value, dpOptions);
            }
        }
        // Add box-shadow tokens (unchanged regardless of webUnits)
        return { ...converted, ...boxShadowTokens };
    }

    return { ...tokens, ...boxShadowTokens };
}
