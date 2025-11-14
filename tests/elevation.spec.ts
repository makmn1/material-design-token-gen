import { describe, it, expect } from "vitest";
import { generateElevationTokens } from "../src";

const EXPECTED_DP = {
    "md.sys.elevation.level0": "0",
    "md.sys.elevation.level1": "1dp",
    "md.sys.elevation.level2": "3dp",
    "md.sys.elevation.level3": "6dp",
    "md.sys.elevation.level4": "8dp",
    "md.sys.elevation.level5": "12dp",
};

const EXPECTED_REM = {
    "md.sys.elevation.level0": 0,
    "md.sys.elevation.level1": "0.0625rem",
    "md.sys.elevation.level2": "0.1875rem",
    "md.sys.elevation.level3": "0.375rem",
    "md.sys.elevation.level4": "0.5rem",
    "md.sys.elevation.level5": "0.75rem",
};

describe("generateElevationTokens()", () => {
    it("returns dp strings when webUnits is false", () => {
        const t = generateElevationTokens({ webUnits: false });
        expect(t).toEqual(EXPECTED_DP);
    });

    it("converts to rem when webUnits is true (default)", () => {
        const t = generateElevationTokens({ webUnits: true });
        expect(t).toEqual(EXPECTED_REM);
    });

    it("defaults to webUnits true", () => {
        const t = generateElevationTokens();
        expect(t).toEqual(EXPECTED_REM);
    });
});
