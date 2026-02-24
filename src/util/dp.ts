/**
 * Web output unit for converting `dp` strings.
 * - `"rem"`: `rem = dp / 16`
 * - `"px"`:  `px = dp`
 */
export type DpUnit = "rem" | "px";

/**
 * Options for converting `dp` to web units.
 */
export type DpConvertOptions = {
    /**
     * Output unit.
     * @default "rem"
     */
    unit?: DpUnit;
}

const DEFAULTS: Required<DpConvertOptions> = {
    unit: "rem",
};

const DP_RE = /(-?\d+(?:\.\d+)?)dp\b/g;

function trimZeros(n: number): string {
    return n.toFixed(4).replace(/\.?0+$/, "");
}

/**
 * Convert a numeric `dp` value to a web unit string (`rem` or `px`).
 *
 * @example
 * ```ts
 * dpNumberToUnit(12) // "0.75rem" (12px / 16)
 * dpNumberToUnit(12, { unit: "px" }) // "12px"
 * ```
 */
export function dpNumberToUnit(dp: number, opts: DpConvertOptions = {}): string {
    const { unit } = { ...DEFAULTS, ...opts };
    const px = dp;

    if (px === 0) return "0";

    if (unit === "px") {
        return `${trimZeros(px)}px`;
    }
    const rem = px / 16;
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

    return value;
}
