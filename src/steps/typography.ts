export type TypographyOptions = {
    brandTypeface?: string;
    plainTypeface?: string;
    weightRegular?: number;
    weightMedium?: number;
    weightBold?: number;
    rootFontSizePx?: number;
};

// ---- unit helpers -----------------------------------------------------------

const PT_TO_PX = 4 / 3;

function round(n: number, decimals = 4): number {
    const p = Math.pow(10, decimals);
    return Math.round(n * p) / p;
}

function toRemFromPt(pt: number, rootPx: number): string {
    const px = pt * PT_TO_PX;
    const rem = px / rootPx;
    return `${stripTrailingZeros(round(rem, 4))}rem`;
}

function toEmFromPt(trackingPt: number, sizePt: number): string {
    if (sizePt === 0) return "0em";
    const em = trackingPt / sizePt;
    return `${stripTrailingZeros(round(em, 4))}em`;
}

function stripTrailingZeros(n: number): string {
    const s = n.toString();
    return s.indexOf(".") >= 0 ? s.replace(/\.?0+$/, "") : s;
}

// ---- spec tables (pt values) ------------------------------------------------

type StyleRow = {
    key: string;
    label: string;
    family: "brand" | "plain";
    weight: "regular" | "medium" | "bold";
    sizePt: number;
    trackingPt: number; // can be negative
    linePt: number;
};

const BASELINE: StyleRow[] = [
    { key: "display-large",   label: "Display Large",   family: "brand", weight: "regular", sizePt: 57, trackingPt: -0.25, linePt: 64 },
    { key: "display-medium",  label: "Display Medium",  family: "brand", weight: "regular", sizePt: 45, trackingPt:   0.00, linePt: 52 },
    { key: "display-small",   label: "Display Small",   family: "brand", weight: "regular", sizePt: 36, trackingPt:   0.00, linePt: 44 },

    { key: "headline-large",  label: "Headline Large",  family: "brand", weight: "regular", sizePt: 32, trackingPt:   0.00, linePt: 40 },
    { key: "headline-medium", label: "Headline Medium", family: "brand", weight: "regular", sizePt: 28, trackingPt:   0.00, linePt: 36 },
    { key: "headline-small",  label: "Headline Small",  family: "brand", weight: "regular", sizePt: 24, trackingPt:   0.00, linePt: 32 },

    { key: "title-large",     label: "Title Large",     family: "brand", weight: "regular", sizePt: 22, trackingPt:   0.00, linePt: 28 },
    { key: "title-medium",    label: "Title Medium",    family: "brand", weight: "medium",  sizePt: 16, trackingPt:   0.15, linePt: 24 },
    { key: "title-small",     label: "Title Small",     family: "brand", weight: "medium",  sizePt: 14, trackingPt:   0.10, linePt: 20 },

    { key: "body-large",      label: "Body Large",      family: "plain", weight: "regular", sizePt: 16, trackingPt:   0.50, linePt: 24 },
    { key: "body-medium",     label: "Body Medium",     family: "plain", weight: "regular", sizePt: 14, trackingPt:   0.25, linePt: 20 },
    { key: "body-small",      label: "Body Small",      family: "plain", weight: "regular", sizePt: 12, trackingPt:   0.40, linePt: 16 },

    { key: "label-large",     label: "Label Large",     family: "plain", weight: "medium",  sizePt: 14, trackingPt:   0.10, linePt: 20 },
    { key: "label-medium",    label: "Label Medium",    family: "plain", weight: "medium",  sizePt: 12, trackingPt:   0.50, linePt: 16 },
    { key: "label-small",     label: "Label Small",     family: "plain", weight: "medium",  sizePt: 11, trackingPt:   0.50, linePt: 16 },
];

const EMPH: StyleRow[] = [
    { key: "display-large",   label: "Emphasized Display Large",   family: "brand", weight: "medium", sizePt: 57, trackingPt: -0.25, linePt: 64 },
    { key: "display-medium",  label: "Emphasized Display Medium",  family: "brand", weight: "medium", sizePt: 45, trackingPt:   0.00, linePt: 52 },
    { key: "display-small",   label: "Emphasized Display Small",   family: "brand", weight: "medium", sizePt: 36, trackingPt:   0.00, linePt: 44 },

    { key: "headline-large",  label: "Emphasized Headline Large",  family: "brand", weight: "medium", sizePt: 32, trackingPt:   0.00, linePt: 40 },
    { key: "headline-medium", label: "Emphasized Headline Medium", family: "brand", weight: "medium", sizePt: 28, trackingPt:   0.00, linePt: 36 },
    { key: "headline-small",  label: "Emphasized Headline Small",  family: "brand", weight: "medium", sizePt: 24, trackingPt:   0.00, linePt: 32 },

    { key: "title-large",     label: "Emphasized Title Large",     family: "brand", weight: "medium", sizePt: 22, trackingPt:   0.00, linePt: 28 },
    { key: "title-medium",    label: "Emphasized Title Medium",    family: "brand", weight: "bold",   sizePt: 16, trackingPt:   0.15, linePt: 24 },
    { key: "title-small",     label: "Emphasized Title Small",     family: "brand", weight: "bold",   sizePt: 14, trackingPt:   0.10, linePt: 20 },

    { key: "body-large",      label: "Emphasized Body Large",      family: "plain", weight: "medium", sizePt: 16, trackingPt:   0.50, linePt: 24 },
    { key: "body-medium",     label: "Emphasized Body Medium",     family: "plain", weight: "medium", sizePt: 14, trackingPt:   0.25, linePt: 20 },
    { key: "body-small",      label: "Emphasized Body Small",      family: "plain", weight: "medium", sizePt: 12, trackingPt:   0.40, linePt: 16 },

    { key: "label-large",     label: "Emphasized Label Large",     family: "plain", weight: "bold",   sizePt: 14, trackingPt:   0.10, linePt: 20 },
    { key: "label-medium",    label: "Emphasized Label Medium",    family: "plain", weight: "bold",   sizePt: 12, trackingPt:   0.50, linePt: 16 },
    { key: "label-small",     label: "Emphasized Label Small",     family: "plain", weight: "bold",   sizePt: 11, trackingPt:   0.50, linePt: 16 },
];

// ---- generator --------------------------------------------------------------

/**
 * Generate **typography** tokens for both **baseline** and **emphasized** sets.
 *
 * - Values are CSS-ready wherever possible:
 *   - font sizes in `rem`
 *   - letter-spacing in `em`
 *   - line-height unitless (ratios) or `rem` depending on configuration
 * - Typeface pointers are expressed via `md.ref.typeface.*` so consumers can
 *   override brand/plain families and weights.
 *
 * @returns Record of typography tokens to values (string/number).
 *
 * @example
 * ```ts
 * import { generateTypographyTokens } from "@makmn1/material-design-token-gen";
 * const type = generateTypographyTokens();
 * // type["md.sys.typescale.display-large.size"] -> "3.5625rem" (57pt -> 76px -> 4.75rem ? depending on your mapping)
 * // type["md.sys.typescale.display-large.font"] -> "md.ref.typeface.brand"
 * ```
 */
export function generateTypographyTokens(opts: TypographyOptions = {}): Record<string, string | number> {
    const brand = opts.brandTypeface ?? "Roboto";
    const plain = opts.plainTypeface ?? "Roboto";
    const wRegular = opts.weightRegular ?? 400;
    const wMedium  = opts.weightMedium  ?? 500;
    const wBold    = opts.weightBold    ?? 700;
    const rootPx   = opts.rootFontSizePx ?? 16;

    const tokens: Record<string, string | number> = {};

    // ref tokens
    tokens["md.ref.typeface.brand"] = brand;
    tokens["md.ref.typeface.plain"] = plain;
    tokens["md.ref.typeface.weight-regular"] = wRegular;
    tokens["md.ref.typeface.weight-medium"]  = wMedium;
    tokens["md.ref.typeface.weight-bold"]    = wBold;

    const weightPointer = (w: StyleRow["weight"]) =>
        w === "regular" ? "md.ref.typeface.weight-regular"
            : w === "medium" ? "md.ref.typeface.weight-medium"
                : "md.ref.typeface.weight-bold";

    const weightAxis = (w: StyleRow["weight"]) =>
        w === "regular" ? wRegular : w === "medium" ? wMedium : wBold;

    const familyPointer = (f: StyleRow["family"]) =>
        f === "brand" ? "md.ref.typeface.brand" : "md.ref.typeface.plain";

    function emitStyle(prefix: string, row: StyleRow) {
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}`] = row.label;

        // main properties
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.font`]        = familyPointer(row.family);
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.weight`]      = weightPointer(row.weight);
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.size`]        = toRemFromPt(row.sizePt, rootPx);
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.tracking`]    = toEmFromPt(row.trackingPt, row.sizePt);
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.line-height`] = toRemFromPt(row.linePt, rootPx);

        // variable font axes (unitless)
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.wght`] = weightAxis(row.weight);
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.grad`] = 0;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.wdth`] = 100;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.rond`] = 0;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.opsz`] = row.sizePt;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.crsv`] = 0;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.slnt`] = 0;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.fill`] = 0;
        tokens[`md.sys.typescale.${prefix ? prefix + "." : ""}${row.key}.hexp`] = 0;
    }

    for (const row of BASELINE) emitStyle("", row);
    for (const row of EMPH) emitStyle("emphasized", row);

    return tokens;
}