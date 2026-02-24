import { describe, it, expect } from "vitest";
import { convertDpInTree, convertDpString, dpNumberToUnit } from "../src/util/dp";

describe("dp utilities", () => {
    it("dpNumberToUnit converts dp to rem with defaults (16px root)", () => {
        expect(dpNumberToUnit(16)).toBe("1rem");
        expect(dpNumberToUnit(12)).toBe("0.75rem");
        expect(dpNumberToUnit(0)).toBe("0");
    });

    it("convertDpString converts multi-dp shorthands and preserves non-dp parts", () => {
        expect(convertDpString("14dp 14dp 0 0")).toBe("0.875rem 0.875rem 0 0");
        expect(convertDpString("Circular")).toBe("Circular");
        expect(convertDpString("4dp 0 Circular 8dp")).toBe("0.25rem 0 Circular 0.5rem");
    });

    it("convertDpInTree converts multi-dp shorthands and preserves non-dp parts", () => {
        const before = "16dp 16dp 0 0";
        const after = convertDpInTree(before); // default root=16
        expect(after).toBe("1rem 1rem 0 0");
    });

    it("convertDpInTree walks nested objects and arrays", () => {
        const tree = {
            a: "12dp",
            b: ["8dp", "Circular", "0", "16dp 0 16dp 0"],
            c: { d: "0", e: "4dp 4dp 0 0" },
            f: 42,
        };

        const out = convertDpInTree(tree);
        expect(out).toEqual({
            a: "0.75rem",
            b: ["0.5rem", "Circular", "0", "1rem 0 1rem 0"],
            c: { d: "0", e: "0.25rem 0.25rem 0 0" },
            f: 42,
        });
    });

    it("supports px output unit", () => {
        expect(convertDpString("12dp", { unit: "px" })).toBe("12px");
        expect(convertDpString("16dp 0 4dp", { unit: "px" })).toBe("16px 0 4px");
    });
});
