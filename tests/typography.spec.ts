import { describe, expect, it } from "vitest";
import { generateTypographyTokens } from "../src";

// helpers to build the expected dictionary identically to spec values
const PT_TO_PX = 4/3;
function round(n: number, d = 4) {
    const p = Math.pow(10, d);
    return Math.round(n * p) / p;
}
function strip(n: number) {
    const s = n.toString();
    return s.includes(".") ? s.replace(/\.?0+$/, "") : s;
}
function remFromPt(pt: number, root = 16) {
    const px = pt * PT_TO_PX;
    const rem = px / root;
    return `${strip(round(rem, 4))}rem`;
}
function emFromPt(trackingPt: number, sizePt: number) {
    if (sizePt === 0) return "0em";
    return `${strip(round(trackingPt / sizePt, 4))}em`;
}

// same tables used inside the generator (from the spec)
type StyleRow = {
    key: string; label: string; family: "brand"|"plain";
    weight: "regular"|"medium"|"bold"; sizePt: number; trackingPt: number; linePt: number;
};

const BASELINE: StyleRow[] = [
    { key: "display-large",   label: "Display Large",   family: "brand", weight: "regular", sizePt: 57, trackingPt: -0.25, linePt: 64 },
    { key: "display-medium",  label: "Display Medium",  family: "brand", weight: "regular", sizePt: 45, trackingPt: 0.00,  linePt: 52 },
    { key: "display-small",   label: "Display Small",   family: "brand", weight: "regular", sizePt: 36, trackingPt: 0.00,  linePt: 44 },

    { key: "headline-large",  label: "Headline Large",  family: "brand", weight: "regular", sizePt: 32, trackingPt: 0.00,  linePt: 40 },
    { key: "headline-medium", label: "Headline Medium", family: "brand", weight: "regular", sizePt: 28, trackingPt: 0.00,  linePt: 36 },
    { key: "headline-small",  label: "Headline Small",  family: "brand", weight: "regular", sizePt: 24, trackingPt: 0.00,  linePt: 32 },

    { key: "title-large",     label: "Title Large",     family: "brand", weight: "regular", sizePt: 22, trackingPt: 0.00,  linePt: 28 },
    { key: "title-medium",    label: "Title Medium",    family: "brand", weight: "medium",  sizePt: 16, trackingPt: 0.15,  linePt: 24 },
    { key: "title-small",     label: "Title Small",     family: "brand", weight: "medium",  sizePt: 14, trackingPt: 0.10,  linePt: 20 },

    { key: "body-large",      label: "Body Large",      family: "plain", weight: "regular", sizePt: 16, trackingPt: 0.50,  linePt: 24 },
    { key: "body-medium",     label: "Body Medium",     family: "plain", weight: "regular", sizePt: 14, trackingPt: 0.25,  linePt: 20 },
    { key: "body-small",      label: "Body Small",      family: "plain", weight: "regular", sizePt: 12, trackingPt: 0.40,  linePt: 16 },

    { key: "label-large",     label: "Label Large",     family: "plain", weight: "medium",  sizePt: 14, trackingPt: 0.10,  linePt: 20 },
    { key: "label-medium",    label: "Label Medium",    family: "plain", weight: "medium",  sizePt: 12, trackingPt: 0.50,  linePt: 16 },
    { key: "label-small",     label: "Label Small",     family: "plain", weight: "medium",  sizePt: 11, trackingPt: 0.50,  linePt: 16 },
];

const EMPH: StyleRow[] = [
    { key: "display-large",   label: "Emphasized Display Large",   family: "brand", weight: "medium", sizePt: 57, trackingPt: -0.25, linePt: 64 },
    { key: "display-medium",  label: "Emphasized Display Medium",  family: "brand", weight: "medium", sizePt: 45, trackingPt: 0.00,  linePt: 52 },
    { key: "display-small",   label: "Emphasized Display Small",   family: "brand", weight: "medium", sizePt: 36, trackingPt: 0.00,  linePt: 44 },

    { key: "headline-large",  label: "Emphasized Headline Large",  family: "brand", weight: "medium", sizePt: 32, trackingPt: 0.00,  linePt: 40 },
    { key: "headline-medium", label: "Emphasized Headline Medium", family: "brand", weight: "medium", sizePt: 28, trackingPt: 0.00,  linePt: 36 },
    { key: "headline-small",  label: "Emphasized Headline Small",  family: "brand", weight: "medium", sizePt: 24, trackingPt: 0.00,  linePt: 32 },

    { key: "title-large",     label: "Emphasized Title Large",     family: "brand", weight: "medium", sizePt: 22, trackingPt: 0.00,  linePt: 28 },
    { key: "title-medium",    label: "Emphasized Title Medium",    family: "brand", weight: "bold",   sizePt: 16, trackingPt: 0.15,  linePt: 24 },
    { key: "title-small",     label: "Emphasized Title Small",     family: "brand", weight: "bold",   sizePt: 14, trackingPt: 0.10,  linePt: 20 },

    { key: "body-large",      label: "Emphasized Body Large",      family: "plain", weight: "medium", sizePt: 16, trackingPt: 0.50,  linePt: 24 },
    { key: "body-medium",     label: "Emphasized Body Medium",     family: "plain", weight: "medium", sizePt: 14, trackingPt: 0.25,  linePt: 20 },
    { key: "body-small",      label: "Emphasized Body Small",      family: "plain", weight: "medium", sizePt: 12, trackingPt: 0.40,  linePt: 16 },

    { key: "label-large",     label: "Emphasized Label Large",     family: "plain", weight: "bold",   sizePt: 14, trackingPt: 0.10,  linePt: 20 },
    { key: "label-medium",    label: "Emphasized Label Medium",    family: "plain", weight: "bold",   sizePt: 12, trackingPt: 0.50,  linePt: 16 },
    { key: "label-small",     label: "Emphasized Label Small",     family: "plain", weight: "bold",   sizePt: 11, trackingPt: 0.50,  linePt: 16 },
];

const weightPointer = (w: StyleRow["weight"]) =>
    w === "regular" ? "md.ref.typeface.weight-regular"
        : w === "medium" ? "md.ref.typeface.weight-medium"
            : "md.ref.typeface.weight-bold";

const familyPointer = (f: StyleRow["family"]) =>
    f === "brand" ? "md.ref.typeface.brand" : "md.ref.typeface.plain";

function expectedTokens(root = 16) {
    const expected: Record<string, string | number> = {};

    // refs
    expected["md.ref.typeface.brand"] = "Roboto";
    expected["md.ref.typeface.plain"] = "Roboto";
    expected["md.ref.typeface.weight-regular"] = 400;
    expected["md.ref.typeface.weight-medium"]  = 500;
    expected["md.ref.typeface.weight-bold"]    = 700;

    function emit(prefix: "" | "emphasized", row: StyleRow) {
        const ns = prefix ? `md.sys.typescale.${prefix}.${row.key}` : `md.sys.typescale.${row.key}`;
        const labelKey = prefix ? `md.sys.typescale.${prefix}.${row.key}` : `md.sys.typescale.${row.key}`;
        expected[labelKey] = row.label;

        expected[`${ns}.font`] = familyPointer(row.family);
        expected[`${ns}.weight`] = weightPointer(row.weight);
        expected[`${ns}.size`] = remFromPt(row.sizePt, root);
        expected[`${ns}.tracking`] = emFromPt(row.trackingPt, row.sizePt);
        expected[`${ns}.line-height`] = remFromPt(row.linePt, root);

        // axes
        expected[`${ns}.wght`] = row.weight === "regular" ? 400 : row.weight === "medium" ? 500 : 700;
        expected[`${ns}.grad`] = 0;
        expected[`${ns}.wdth`] = 100;
        expected[`${ns}.rond`] = 0;
        expected[`${ns}.opsz`] = row.sizePt;
        expected[`${ns}.crsv`] = 0;
        expected[`${ns}.slnt`] = 0;
        expected[`${ns}.fill`] = 0;
        expected[`${ns}.hexp`] = 0;
    }

    for (const r of BASELINE) emit("", r);
    for (const r of EMPH) emit("emphasized", r);

    return expected;
}

describe("generateTypographyTokens()", () => {
    it("emits ALL baseline + emphasized tokens with spec-correct values (455) and nothing extra", () => {
        const tokens = generateTypographyTokens({ webUnits: true });
        const exp = expectedTokens(16);

        expect(Object.keys(tokens).length).toBe(455);
        expect(tokens).toEqual(exp);
    });

    it("accepts webUnits option (though it doesn't affect output since typography already uses rem/em)", () => {
        const tokens1 = generateTypographyTokens({ webUnits: true });
        const tokens2 = generateTypographyTokens({ webUnits: false });
        expect(tokens1).toEqual(tokens2);
    });

    it("keeps pointer tokens stable when overriding ref values", () => {
        const tokens = generateTypographyTokens({
            brandTypeface: "Inter",
            plainTypeface: "Roboto Flex",
            weightRegular: 410,
            weightMedium:  510,
            weightBold:    710,
        });

        expect(tokens["md.ref.typeface.brand"]).toBe("Inter");
        expect(tokens["md.ref.typeface.plain"]).toBe("Roboto Flex");
        expect(tokens["md.ref.typeface.weight-regular"]).toBe(410);
        expect(tokens["md.ref.typeface.weight-medium"]).toBe(510);
        expect(tokens["md.ref.typeface.weight-bold"]).toBe(710);

        expect(tokens["md.sys.typescale.display-large.font"]).toBe("md.ref.typeface.brand");
        expect(tokens["md.sys.typescale.title-medium.weight"]).toBe("md.ref.typeface.weight-medium");
        expect(tokens["md.sys.typescale.emphasized.title-medium.weight"]).toBe("md.ref.typeface.weight-bold");
    });

    it("uses rootFontSizePx to convert pt→rem", () => {
        const tokens = generateTypographyTokens({ rootFontSizePx: 20 });
        expect(tokens["md.sys.typescale.display-large.size"]).toBe("3.8rem");
        expect(tokens["md.sys.typescale.display-large.line-height"]).toBe("4.2667rem");
        expect(tokens["md.sys.typescale.display-large.tracking"]).toBe("-0.0044em");
    });
});