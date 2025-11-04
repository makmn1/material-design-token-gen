import { describe, it, expect } from "vitest";
import { convertDpInTree, convertDpString, dpNumberToUnit } from "../src/util/dp";

describe("dp utilities", () => {
    it("dpNumberToUnit converts dp to rem with defaults (14px root, ratio 1)", () => {
        expect(dpNumberToUnit(14)).toBe("1rem");
        expect(dpNumberToUnit(12)).toBe("0.8571rem");
        expect(dpNumberToUnit(0)).toBe("0");
    });

    it("convertDpString converts multi-dp shorthands and preserves non-dp parts", () => {
        expect(convertDpString("14dp 14dp 0 0")).toBe("1rem 1rem 0 0");
        expect(convertDpString("Circular")).toBe("Circular");
        expect(convertDpString("4dp 0 Circular 8dp")).toBe("0.2857rem 0 Circular 0.5714rem");
    });

    it("convertDpInTree converts multi-dp shorthands and preserves non-dp parts", () => {
        const before = "14dp 14dp 0 0";
        const after = convertDpInTree(before); // default root=14
        expect(after).toBe("1rem 1rem 0 0");
    });

    it("convertDpInTree walks nested objects and arrays", () => {
        const tree = {
            a: "12dp",
            b: ["8dp", "Circular", "0", "16dp 0 16dp 0"],
            c: { d: "0", e: "4dp 4dp 0 0" },
            f: 42,
        };

        const out = convertDpInTree(tree, { rootFontSizePx: 14 });
        expect(out).toEqual({
            a: "0.8571rem",
            b: ["0.5714rem", "Circular", "0", "1.1429rem 0 1.1429rem 0"],
            c: { d: "0", e: "0.2857rem 0.2857rem 0 0" },
            f: 42,
        });
    });

    it("supports px output unit", () => {
        expect(convertDpString("12dp", { unit: "px" })).toBe("12px");
        expect(convertDpString("16dp 0 4dp", { unit: "px" })).toBe("16px 0 4px");
    });

    it("respects dpPxRatio", () => {
        expect(convertDpString("12dp", { dpPxRatio: 2 })).toBe("1.7143rem");
        expect(convertDpString("12dp", { dpPxRatio: 2, unit: "px" })).toBe("24px");
    });

    it("respects custom rootFontSizePx", () => {
        expect(convertDpString("20dp", { rootFontSizePx: 20 })).toBe("1rem");
    });
});