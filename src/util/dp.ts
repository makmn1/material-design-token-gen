/**
 * Web output unit for converting `dp` strings.
 * - `"rem"`: `rem = (dp * dpPxRatio) / rootFontSizePx`
 * - `"px"`:  `px = dp * dpPxRatio`
 */
export type DpUnit = "rem" | "px";

/**
 * Options for converting `dp` to web units.
 */
export interface DpConvertOptions {
    /**
     * Root font size in px when outputting `rem`.
     * @default 16
     */
    rootFontSizePx?: number;

    /**
     * Device-independent pixel ratio for conversion.
     * Use `1` to follow the “1dp = 1px” convention on web.
     * @default 1
     */
    dpPxRatio?: number;

    /**
     * Output unit.
     * @default "rem"
     */
    unit?: DpUnit;
}

const DEFAULTS: Required<DpConvertOptions> = {
    rootFontSizePx: 16,
    dpPxRatio: 1,
    unit: "rem",
};

// Match all numbers followed by "dp", including decimals and negatives.
const DP_RE = /(-?\d+(?:\.\d+)?)dp\b/g;

function trimZeros(n: number): string {
    // Up to 4 decimals; remove trailing zeros and possible trailing dot.
    return n.toFixed(4).replace(/\.?0+$/, "");
}

/**
 * Convert a numeric `dp` value to a web unit string (`rem` or `px`).
 *
 * @example
 * ```ts
 * dpNumberToUnit(12) // "0.75rem" (12px / 16)
 * dpNumberToUnit(12, { unit: "px" }) // "12px"
 * dpNumberToUnit(12, { dpPxRatio: 2 }) // "1.5rem"
 * ```
 */
export function dpNumberToUnit(dp: number, opts: DpConvertOptions = {}): string {
    const { rootFontSizePx, dpPxRatio, unit } = { ...DEFAULTS, ...opts };
    const px = dp * dpPxRatio;

    if (px === 0) return "0";

    if (unit === "px") {
        return `${trimZeros(px)}px`;
    }
    const rem = px / rootFontSizePx;
    return `${trimZeros(rem)}rem`;
}

/**
 * Convert all `...dp` fragments inside a string to web units.
 * Handles shorthands like `"16dp 16dp 0 0"`.
 *
 * @example
 * ```ts
 * convertDpString("16dp 0 16dp 0") // "1rem 0 1rem 0"
 * ```
 */
export function convertDpString(str: string, opts: DpConvertOptions = {}): string {
    return str.replace(DP_RE, (_m, num) => dpNumberToUnit(parseFloat(num), opts));
}

/**
 * Recursively walk arrays/objects and convert any `...dp` substrings found in strings
 * to web units. Non-string values (numbers, booleans) are returned as-is.
 *
 * @example
 * ```ts
 * const before = { a: "12dp", b: ["8dp", "Circular", "0", "16dp 0 16dp 0"] };
 * const after = convertDpInTree(before);
 * // { a: "0.75rem", b: ["0.5rem", "Circular", "0", "1rem 0 1rem 0"] }
 * ```
 */
export function convertDpInTree<T>(value: T, opts: DpConvertOptions = {}): T {
    if (value == null) return value;
    if (typeof value === "string") {
        return convertDpString(value, opts) as unknown as T;
    }
    if (Array.isArray(value)) {
        return value.map((v) => convertDpInTree(v, opts)) as unknown as T;
    }
    if (typeof value === "object") {
        const out: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
            out[k] = convertDpInTree(v, opts);
        }
        return out as T;
    }

    // numbers/booleans/etc. – leave as-is
    return value;
}