import { DpConvertOptions, convertDpString } from "../util/dp";

const SHAPE_TOKENS: Record<string, string> = {
    "md.sys.shape.corner.full": "Circular",
    "md.sys.shape.corner.extra-large.top": "28dp 28dp 0 0",
    "md.sys.shape.corner.extra-large": "28dp",
    "md.sys.shape.corner.large.top": "16dp 16dp 0 0",
    "md.sys.shape.corner.large.end": "0 16dp 16dp 0",
    "md.sys.shape.corner.large.start": "16dp 0 0 16dp",
    "md.sys.shape.corner.large": "16dp",
    "md.sys.shape.corner.medium": "12dp",
    "md.sys.shape.corner.small": "8dp",
    "md.sys.shape.corner.extra-small.top": "4dp 4dp 0 0",
    "md.sys.shape.corner.extra-small": "4dp",
    "md.sys.shape.corner.none": "0",
    "md.sys.shape.corner.large-increased": "20dp",
    "md.sys.shape.corner.extra-large-increased": "32dp",
    "md.sys.shape.corner.extra-extra-large": "48dp",

    "md.sys.shape.corner-value.none": "0",
    "md.sys.shape.corner-value.extra-small": "4dp",
    "md.sys.shape.corner-value.small": "8dp",
    "md.sys.shape.corner-value.medium": "12dp",
    "md.sys.shape.corner-value.large": "16dp",
    "md.sys.shape.corner-value.large-increased": "20dp",
    "md.sys.shape.corner-value.extra-large": "28dp",
    "md.sys.shape.corner-value.extra-large-increased": "32dp",
    "md.sys.shape.corner-value.extra-extra-large": "48dp",
};

/**
 * Configuration options for defining shape styles used in {@link generateShapeTokens}.
 */
export interface ShapeOptions {

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
 * Generate **shape** tokens (corner radii, component shape).
 *
 * Values are returned as `...dp` strings and can be single values (e.g., `"12dp"`)
 * or shorthand lists (e.g., `"16dp 16dp 0 0"`). If `webUnits` is true, these are
 * converted to web units (`rem` or `px`) for direct CSS usage. The "Circular" value
 * is converted to `9999rem` (or `9999px`) when `webUnits` is true.
 *
 * @example
 * ```ts
 * import { generateShapeTokens } from "@makmn1/material-design-token-gen";
 * const shape = generateShapeTokens();
 * // shape["md.sys.shape.corner.medium"] -> "12dp" (if webUnits is false)
 * // shape["md.sys.shape.corner.medium"] -> "0.8571rem" (if webUnits is true)
 * // shape["md.sys.shape.corner.full"] -> "Circular" (if webUnits is false)
 * // shape["md.sys.shape.corner.full"] -> "9999rem" (if webUnits is true)
 * ```
 */
export function generateShapeTokens(opts: ShapeOptions = {}): Record<string, string | number> {
    const {
        webUnits = true,
        unit = "rem"
    } = opts;

    const tokens = { ...SHAPE_TOKENS };

    if (webUnits) {
        const dpOptions: DpConvertOptions = { unit };
        const converted: Record<string, string | number> = {};
        for (const [key, value] of Object.entries(tokens)) {
            if (value === "Circular") {
                converted[key] = `9999${unit}`;
            } else if (value === "0") {
                converted[key] = 0;
            } else {
                converted[key] = convertDpString(value, dpOptions);
            }
        }
        return converted;
    }

    return tokens;
}
