import { describe, it, expect } from "vitest";
import { generateElevationTokens } from "../src";

const BOX_SHADOW_TOKENS = {
    "sm.sys.elevation.box-shadow.level0": "rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px",
    "sm.sys.elevation.box-shadow.level1": "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "sm.sys.elevation.box-shadow.level2": "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    "sm.sys.elevation.box-shadow.level3": "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
    "sm.sys.elevation.box-shadow.level4": "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
    "sm.sys.elevation.box-shadow.level5": "rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px",
};

const EXPECTED_DP = {
    "md.sys.elevation.level0": "0",
    "md.sys.elevation.level1": "1dp",
    "md.sys.elevation.level2": "3dp",
    "md.sys.elevation.level3": "6dp",
    "md.sys.elevation.level4": "8dp",
    "md.sys.elevation.level5": "12dp",
    ...BOX_SHADOW_TOKENS,
};

const EXPECTED_REM = {
    "md.sys.elevation.level0": 0,
    "md.sys.elevation.level1": "0.0625rem",
    "md.sys.elevation.level2": "0.1875rem",
    "md.sys.elevation.level3": "0.375rem",
    "md.sys.elevation.level4": "0.5rem",
    "md.sys.elevation.level5": "0.75rem",
    ...BOX_SHADOW_TOKENS,
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

    it("includes box-shadow tokens in both webUnits modes", () => {
        const tFalse = generateElevationTokens({ webUnits: false });
        const tTrue = generateElevationTokens({ webUnits: true });
        
        expect(tFalse["sm.sys.elevation.box-shadow.level0"]).toBe(BOX_SHADOW_TOKENS["sm.sys.elevation.box-shadow.level0"]);
        expect(tTrue["sm.sys.elevation.box-shadow.level0"]).toBe(BOX_SHADOW_TOKENS["sm.sys.elevation.box-shadow.level0"]);
        
        expect(tFalse["sm.sys.elevation.box-shadow.level3"]).toBe(BOX_SHADOW_TOKENS["sm.sys.elevation.box-shadow.level3"]);
        expect(tTrue["sm.sys.elevation.box-shadow.level3"]).toBe(BOX_SHADOW_TOKENS["sm.sys.elevation.box-shadow.level3"]);
    });
});
