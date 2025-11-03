import { describe, it, expect } from "vitest";
import generateTokens, {
    generateTokens as generateTokensNamed,
    generateColorTokens,
} from "../src/index";
import {
    DynamicScheme,
    Variant,
    SpecVersion,
} from "@materialx/material-color-utilities";

function expectZeroOk(v: unknown) {
    // Some steps may emit numeric 0; others "0dp" -> "0rem".
    // All are CSS-safe. Accept the common encodings.
    expect(v === "0rem" || v === "0px" || v === "0" || v === 0).toBe(true);
}

describe("generateTokens() smoke", () => {
    it("returns an object with 6 groups and sample keys", () => {
        const tokens = generateTokens();

        // shape
        expect(tokens).toHaveProperty("colors");
        expect(tokens).toHaveProperty("elevation");
        expect(tokens).toHaveProperty("motion");
        expect(tokens).toHaveProperty("shape");
        expect(tokens).toHaveProperty("typography");
        expect(tokens).toHaveProperty("state");

        const { colors, elevation, motion, shape, typography, state } = tokens;

        // colors
        expect(typeof colors["md.sys.color.primary"]).toBe("string");
        expect(colors["md.sys.color.primary"]).toMatch(/^#([0-9a-f]{6}|[0-9a-f]{8})$/i);

        // elevation (default webUnits = true)
        expectZeroOk(elevation["md.sys.elevation.level0"]);  // 0dp -> 0rem OR numeric 0
        expect(elevation["md.sys.elevation.level3"]).toBe("0.375rem"); // 6dp -> 0.375rem

        // shape conversion (space-separated shorthands)
        expect(shape["md.sys.shape.corner.medium"]).toBe("0.75rem"); // 12dp -> 0.75rem
        expect(shape["md.sys.shape.corner.extra-large.top"]).toBe(
            "1.75rem 1.75rem 0 0"
        ); // 28dp 28dp 0 0

        // motion
        expect(typeof motion["md.sys.motion.spring.fast.spatial.damping"]).toBe("number");

        // typography
        expect(typeof typography["md.sys.typescale.body-large.size"]).toBe("string");
        expect(typeof typography["md.sys.typescale.body-large.line-height"]).toMatch(
            /string|number/
        );

        // state
        expect(state["md.sys.state.hover.state-layer-opacity"]).toBeGreaterThanOrEqual(0);
        expect(state["md.sys.state.hover.state-layer-opacity"]).toBeLessThanOrEqual(1);
    });

    it("uses the provided DynamicScheme when passed (colors match generateColorTokens)", () => {
        const scheme = DynamicScheme.from({
            isDark: true,
            variant: Variant.EXPRESSIVE,
            specVersion: SpecVersion.SPEC_2025,
        });

        const tokens = generateTokens({ dynamicScheme: scheme, webUnits: true });
        const expectedColors = generateColorTokens(scheme);
        expect(tokens.colors).toEqual(expectedColors);
    });

    it("expressiveMotion flag toggles motion values (at least one value differs)", () => {
        const expressive = generateTokens({ expressiveMotion: true, webUnits: true }).motion;
        const standard = generateTokens({ expressiveMotion: false, webUnits: true }).motion;

        const someKeyDiffers = Object.keys(expressive).some(
            (k) => standard[k] !== expressive[k]
        );
        expect(someKeyDiffers).toBe(true);
    });

    it("DEFAULT: converts dp-tagged strings to rem when webUnits is omitted (true by default)", () => {
        const tokens = generateTokens(); // webUnits defaults to true

        // shape: shorthands converted
        expect(tokens.shape["md.sys.shape.corner.extra-large.top"]).toBe(
            "1.75rem 1.75rem 0 0"
        );
        expect(tokens.shape["md.sys.shape.corner.medium"]).toBe("0.75rem");

        // elevation: level0 may be numeric 0; others convert
        expectZeroOk(tokens.elevation["md.sys.elevation.level0"]);
        expect(tokens.elevation["md.sys.elevation.level3"]).toBe("0.375rem");
    });

    it("when webUnits = false, leaves dp-tagged strings untouched", () => {
        const scheme = DynamicScheme.from({
            isDark: false,
            variant: Variant.EXPRESSIVE,
            specVersion: SpecVersion.SPEC_2025,
        });

        const tokens = generateTokens({
            dynamicScheme: scheme,
            expressiveMotion: true,
            webUnits: false, // <- important
        });

        // shape values remain as dp strings
        expect(tokens.shape["md.sys.shape.corner.extra-large.top"]).toBe(
            "28dp 28dp 0 0"
        );
        expect(tokens.shape["md.sys.shape.corner.medium"]).toBe("12dp");

        // elevation values remain dp
        const lvl0 = tokens.elevation["md.sys.elevation.level0"];
        expect(lvl0 === "0").toBe(true);
        expect(tokens.elevation["md.sys.elevation.level3"]).toBe("6dp");
    });

    it("exposes both default and named exports that point to the same function", () => {
        expect(typeof generateTokens).toBe("function");
        expect(typeof generateTokensNamed).toBe("function");
        expect(generateTokens).toBe(generateTokensNamed);
    });
});