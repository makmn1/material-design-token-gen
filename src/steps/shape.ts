const SHAPE_TOKENS: Record<string, string> = {
    // Corner tokens
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

    // Corner-value tokens
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
 * Generate **shape** tokens (corner radii, component shape).
 *
 * Values are returned as `...dp` strings and can be single values (e.g., `"12dp"`)
 * or shorthand lists (e.g., `"16dp 16dp 0 0"`). Use `generateTokens({ webUnits: true })`
 * to convert them into `rem`/`px` for direct CSS usage.
 *
 * @example
 * ```ts
 * import { generateShapeTokens } from "@makmn1/material-design-token-gen";
 * const shape = generateShapeTokens();
 * // shape["md.sys.shape.corner.medium"] -> "12dp"
 * // shape["md.sys.shape.corner.extra-large.top"] -> "28dp 28dp 0 0"
 * ```
 */
export function generateShapeTokens(): Record<string, string> {
    return { ...SHAPE_TOKENS };
}