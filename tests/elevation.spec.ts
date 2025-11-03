import { describe, it, expect } from "vitest";
import { generateElevationTokens } from "../src";

const EXPECTED = {
    "md.sys.elevation.level0": "0",
    "md.sys.elevation.level1": "1dp",
    "md.sys.elevation.level2": "3dp",
    "md.sys.elevation.level3": "6dp",
    "md.sys.elevation.level4": "8dp",
    "md.sys.elevation.level5": "12dp",
};

describe("generateElevationTokens()", () => {
    it("matches the spec exactly (no extras)", () => {
        const t = generateElevationTokens();
        expect(t).toEqual(EXPECTED);
    });
});
