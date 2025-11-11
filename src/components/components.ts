import { convertDpInTree } from "../util/dp";
import { buttonTokens } from "./tokens/buttonTokens";
import { appBarTokens } from "./tokens/appBarTokens";

const COMPONENT_TOKENS: Array<{
    name: string;
    value: Record<string, string | number>;
}> = [
    { name: "button", value: buttonTokens },
    { name: "app-bar", value: appBarTokens },
];

/**
 * Options for generating component tokens.
 */
export interface GenerateComponentTokensOptions {
    /**
     * Array of component types to exclude from generation.
     * If omitted, all available component types are generated.
     */
    excludes?: string[];

    /**
     * When true, walk the returned bundle and convert any string segments tagged
     * with `dp` (e.g., `"12dp"` or `"16dp 0 16dp 0"`) into `rem`/`px` using
     * the conversion options.
     * Numbers and non-`dp` strings are left untouched.
     * @default true
     */
    webUnits?: boolean;

    /**
     * Root font size in pixels used when converting to `rem`.
     * `rem = (dp * dpPxRatio) / rootFontSizePx`
     * @default 14
     */
    rootFontSizePx?: number;

    /**
     * Device-independent pixel ratio for the web conversion.
     * Set to `1` for the "1dp = 1px" convention on web.
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
 * Generate component tokens from component token files.
 *
 * - Merges all token objects for each component type into a single flat object.
 * - If `webUnits` is `true` (default), any `...dp` substrings across the bundle are converted
 *   to `rem`/`px` using the conversion options.
 * - Use the `excludes` option to exclude specific component types.
 *
 * @example Basic usage (generates all component tokens, converts dp to rem by default)
 * ```ts
 * import { generateComponentTokens } from "@makmn1/material-design-token-gen/components";
 * const tokens = generateComponentTokens();
 * // { button: { "md.comp.button.container.color": "md.sys.color.primary", ... } }
 * ```
 *
 * @example Exclude specific component types
 * ```ts
 * const tokens = generateComponentTokens({ excludes: ["button"] });
 * // {}
 * ```
 *
 * @example With custom web unit conversion
 * ```ts
 * const tokens = generateComponentTokens({
 *   webUnits: true,
 *   rootFontSizePx: 16,
 *   unit: "px"
 * });
 * ```
 */
export function generateComponentTokens(
    options: GenerateComponentTokensOptions = {},
): Record<string, Record<string, string | number>> {
    const {
        excludes = [],
        webUnits = true,
        rootFontSizePx = 14,
        dpPxRatio = 1,
        unit = "rem",
    } = options;

    const filtered = COMPONENT_TOKENS.filter(
        (entry) => !excludes.includes(entry.name),
    );

    const converted = webUnits
        ? filtered.map((entry) => ({
              name: entry.name,
              value: convertDpInTree(entry.value, {
                  rootFontSizePx,
                  dpPxRatio,
                  unit,
              }) as Record<string, string | number>,
          }))
        : filtered;

    const result = converted.reduce(
        (acc, entry) => {
            acc[entry.name] = entry.value;
            return acc;
        },
        {} as Record<string, Record<string, string | number>>,
    );

    return result;
}
