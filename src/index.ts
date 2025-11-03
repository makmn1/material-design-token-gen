import { generateColorTokens } from "./steps/colors";
import { generateElevationTokens } from "./steps/elevation";
import { generateMotionTokens } from "./steps/motion";
import { generateShapeTokens } from "./steps/shape";
import { generateTypographyTokens } from "./steps/typography";
import { generateStateTokens } from "./steps/state";

import {
    DynamicScheme,
    Variant,
    SpecVersion,
} from "@materialx/material-color-utilities";

import { convertDpInTree } from "./util/dp";

/** @packageDocumentation
 * Material Design token generator for the web.
 *
 * This package produces five token sets (color, elevation, motion, shape, typography)
 * plus state-layer tokens, and can optionally:
 *  - derive colors from a Material Color Utilities `DynamicScheme`
 *  - convert `dp` values found in string tokens to web units (`rem` or `px`)
 */

export interface GenerateTokensOptions {

    /**
     * DynamicScheme object from `@materialx/material-color-utilities`.
     * If omitted, a default scheme is created:
     * `{ isDark: false, variant: Variant.EXPRESSIVE, specVersion: SpecVersion.SPEC_2025 }`.
     */
    dynamicScheme?: DynamicScheme;

    /**
     * Whether motion tokens should use the “Expressive” set.
     * @default true
     */
    expressiveMotion?: boolean;

    /**
     * When true, walk the returned bundle and convert any string segments tagged
     * with `dp` (e.g., `"12dp"` or `"16dp 0 16dp 0"`) into `rem`/`px` using
     * {@link DpConvertOptions}.
     * Numbers and non-`dp` strings are left untouched.
     * @default true
     */
    webUnits?: boolean;

    /**
     * Root font size in pixels used when converting to `rem`.
     * `rem = (dp * dpPxRatio) / rootFontSizePx`
     * @default 16
     */
    rootFontSizePx?: number;

    /**
     * Device-independent pixel ratio for the web conversion.
     * Set to `1` for the “1dp = 1px” convention on web.
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
 * Shape of the aggregated token bundle.
 */
export interface TokensBundle {

    /** Material System colors; values are hex strings (e.g., `#6750a4`). */
    colors: Record<string, string>;

    /**
     * Elevation tokens. By step convention these are `...dp` strings (e.g., `"6dp"`),
     * which will be converted to web units if the `webUnits` option is true.
     */
    elevation: Record<string, number | string>;

    /** Motion/spring/duration tokens (numeric). */
    motion: Record<string, number>;

    /**
     * Shape tokens (corner radii / shorthands). Step returns `...dp` strings,
     * possibly space-delimited (e.g., `16dp 16dp 0 0`); converts only if `webUnits` option is true.
     */
    shape: Record<string, string | number>;

    /**
     * Typography tokens (font families, sizes, letter-spacing, etc.).
     * Values are CSS-ready (e.g., `rem`, `em`, unitless where appropriate).
     */
    typography: Record<string, string | number>;

    /**
     * State-layer tokens (opacities for hover, focus, pressed, dragged).
     * Numeric fractions in `[0,1]`.
     */
    state: Record<string, number>;
}

/**
 * Generate all token sets in one call.
 *
 * - If `dynamicScheme` is provided, color tokens are derived from it.
 * - Otherwise a default light expressive 2025 scheme is used.
 * - If `webUnits` is `true` (default), any `...dp` substrings across the bundle are converted
 *   to `rem`/`px` using {@link DpConvertOptions}.
 *
 * @example Basic (default scheme, converts dp to rem by default)
 * ```ts
 * import generateTokens from "@makmn1/material-design-token-gen";
 * const tokens = generateTokens();
 * ```
 *
 * @example With a custom DynamicScheme (dark expressive 2025)
 * ```ts
 * import { DynamicScheme, Variant, SpecVersion } from "@materialx/material-color-utilities";
 * import generateTokens from "@makmn1/material-design-token-gen";
 *
 * const scheme = DynamicScheme.from({
 *   isDark: true,
 *   variant: Variant.EXPRESSIVE,
 *   specVersion: SpecVersion.SPEC_2025,
 * });
 * const tokens = generateTokens({ dynamicScheme: scheme, webUnits: true });
 * ```
 */
export function generateTokens(
    options: GenerateTokensOptions = {},
): TokensBundle {
    const {
        dynamicScheme,
        expressiveMotion = true,
        webUnits = true,
        rootFontSizePx = 16,
        dpPxRatio = 1,
        unit = "rem"
    } = options;

    const scheme =
        dynamicScheme ??
        DynamicScheme.from({
            isDark: false,
            variant: Variant.EXPRESSIVE,
            specVersion: SpecVersion.SPEC_2025,
        });

    const colors = generateColorTokens(scheme);
    const elevation = generateElevationTokens();
    const motion = generateMotionTokens(expressiveMotion ? "expressive" : "standard");
    const shape = generateShapeTokens();
    const typography = generateTypographyTokens();
    const state = generateStateTokens();

    let bundle: TokensBundle = { colors, elevation, motion, shape, typography, state };

    if (webUnits) {
        bundle = convertDpInTree(bundle, { dpPxRatio, rootFontSizePx, unit });
    }

    return bundle;
}

// --- named exports for all generators ---
export { generateColorTokens } from "./steps/colors";
export { generateElevationTokens } from "./steps/elevation";
export { generateMotionTokens } from "./steps/motion";
export { generateShapeTokens } from "./steps/shape";
export { generateTypographyTokens } from "./steps/typography";
export { generateStateTokens } from "./steps/state";

// dp utils
export { convertDpInTree, convertDpString, dpNumberToUnit } from "./util/dp";

// --- export types ---
export type { DpConvertOptions } from "./util/dp";

// noinspection JSUnusedGlobalSymbols
export { generateTokens as default } from "./index"; // or simply: export default generateTokens;
