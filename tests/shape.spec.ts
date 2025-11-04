import { describe, it, expect } from "vitest";
import { generateShapeTokens } from "../src";

const EXPECTED: Record<string, string> = {
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

describe("generateShapeTokens()", () => {
    it("emits exactly the spec-defined keys (no extras, no omissions)", () => {
        const tokens = generateShapeTokens({ webUnits: false });
        const expectedKeys = Object.keys(EXPECTED).sort();
        const actualKeys = Object.keys(tokens).sort();
        expect(actualKeys).toEqual(expectedKeys);
    });

    it("emits ALL values exactly as dp-tagged strings / literals when webUnits is false", () => {
        const tokens = generateShapeTokens({ webUnits: false });
        expect(tokens).toEqual(EXPECTED);
    });

    it("converts dp values to rem when webUnits is true (default)", () => {
        const tokens = generateShapeTokens({ webUnits: true });
        expect(tokens["md.sys.shape.corner.medium"]).toBe("0.8571rem");
        expect(tokens["md.sys.shape.corner.none"]).toBe(0);
        expect(tokens["md.sys.shape.corner.full"]).toBe("9999rem");
        expect(tokens["md.sys.shape.corner.extra-large.top"]).toBe("2rem 2rem 0 0");
    });

    it("defaults to webUnits true", () => {
        const tokens = generateShapeTokens();
        expect(tokens["md.sys.shape.corner.medium"]).toBe("0.8571rem");
        expect(tokens["md.sys.shape.corner.full"]).toBe("9999rem");
    });

    it("converts Circular to 9999px when unit is px", () => {
        const tokens = generateShapeTokens({ webUnits: true, unit: "px" });
        expect(tokens["md.sys.shape.corner.full"]).toBe("9999px");
    });
});