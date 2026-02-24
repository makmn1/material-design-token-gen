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
    expect(v === "0rem" || v === "0px" || v === "0" || v === 0).toBe(true);
}

describe("generateTokens() smoke", () => {
    it("returns an object with 6 groups and sample keys (all tokens when include is undefined)", () => {
        const tokens = generateTokens();

        expect(tokens).toHaveProperty("colors");
        expect(tokens).toHaveProperty("elevation");
        expect(tokens).toHaveProperty("motion");
        expect(tokens).toHaveProperty("shape");
        expect(tokens).toHaveProperty("typography");
        expect(tokens).toHaveProperty("state");

        expect(tokens.colors).toBeDefined();
        expect(tokens.elevation).toBeDefined();
        expect(tokens.motion).toBeDefined();
        expect(tokens.shape).toBeDefined();
        expect(tokens.typography).toBeDefined();
        expect(tokens.state).toBeDefined();

        const { colors, elevation, motion, shape, typography, state } = tokens;

        expect(typeof colors!["md.sys.color.primary"]).toBe("string");
        expect(colors!["md.sys.color.primary"]).toMatch(/^#([0-9a-f]{6}|[0-9a-f]{8})$/i);

        expectZeroOk(elevation!["md.sys.elevation.level0"]);
        expect(elevation!["md.sys.elevation.level3"]).toBe("0.375rem");

        expect(shape!["md.sys.shape.corner.medium"]).toBe("0.75rem");
        expect(shape!["md.sys.shape.corner.extra-large.top"]).toBe("1.75rem 1.75rem 0 0");

        expect(typeof motion!["md.sys.motion.spring.fast.spatial.damping"]).toBe("number");

        expect(typeof typography!["md.sys.typescale.body-large.size"]).toBe("string");
        expect(typeof typography!["md.sys.typescale.body-large.line-height"]).toMatch(
            /string|number/
        );

        expect(typeof state!["md.sys.state.hover.state-layer-opacity"]).toBe("string");
        expect(state!["md.sys.state.hover.state-layer-opacity"]).toMatch(/^\d+%$/);
    });

    it("uses the provided DynamicScheme when passed (colors match generateColorTokens)", () => {
        const scheme = DynamicScheme.from({
            isDark: true,
            variant: Variant.EXPRESSIVE,
            specVersion: SpecVersion.SPEC_2025,
        });

        const tokens = generateTokens({ dynamicScheme: scheme, webUnits: true });
        const expectedColors = generateColorTokens(scheme);
        expect(tokens.colors).toBeDefined();
        expect(tokens.colors!).toEqual(expectedColors);
    });

    it("expressiveMotion flag toggles motion values (at least one value differs)", () => {
        const expressive = generateTokens({ expressiveMotion: true, webUnits: true }).motion;
        const standard = generateTokens({ expressiveMotion: false, webUnits: true }).motion;

        expect(expressive).toBeDefined();
        expect(standard).toBeDefined();
        const someKeyDiffers = Object.keys(expressive!).some(
            (k) => standard![k] !== expressive![k]
        );
        expect(someKeyDiffers).toBe(true);
    });

    it("DEFAULT: converts dp-tagged strings to rem when webUnits is omitted (true by default)", () => {
        const tokens = generateTokens();

        expect(tokens.shape).toBeDefined();
        expect(tokens.shape!["md.sys.shape.corner.extra-large.top"]).toBe("1.75rem 1.75rem 0 0");
        expect(tokens.shape!["md.sys.shape.corner.medium"]).toBe("0.75rem");

        expect(tokens.elevation).toBeDefined();
        expectZeroOk(tokens.elevation!["md.sys.elevation.level0"]);
        expect(tokens.elevation!["md.sys.elevation.level3"]).toBe("0.375rem");
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
            webUnits: false,
        });

        expect(tokens.shape).toBeDefined();
        expect(tokens.shape!["md.sys.shape.corner.extra-large.top"]).toBe("28dp 28dp 0 0");
        expect(tokens.shape!["md.sys.shape.corner.medium"]).toBe("12dp");

        expect(tokens.elevation).toBeDefined();
        const lvl0 = tokens.elevation!["md.sys.elevation.level0"];
        expect(lvl0 === "0").toBe(true);
        expect(tokens.elevation!["md.sys.elevation.level3"]).toBe("6dp");
    });

    it("applies webUnits + unit to typography tokens (pt/rem/px paths)", () => {
        const ptTokens = generateTokens({
            include: { typography: true },
            webUnits: false,
            unit: "px",
        });
        expect(ptTokens.typography).toBeDefined();
        expect(ptTokens.typography!["md.sys.typescale.body-large.size"]).toBe("16pt");
        expect(ptTokens.typography!["md.sys.typescale.body-large.line-height"]).toBe("24pt");

        const remTokens = generateTokens({
            include: { typography: true },
            webUnits: true,
            unit: "rem",
        });
        expect(remTokens.typography).toBeDefined();
        expect(remTokens.typography!["md.sys.typescale.body-large.size"]).toBe("1rem");
        expect(remTokens.typography!["md.sys.typescale.body-large.line-height"]).toBe("1.5rem");

        const pxTokens = generateTokens({
            include: { typography: true },
            webUnits: true,
            unit: "px",
        });
        expect(pxTokens.typography).toBeDefined();
        expect(pxTokens.typography!["md.sys.typescale.body-large.size"]).toBe("16px");
        expect(pxTokens.typography!["md.sys.typescale.body-large.line-height"]).toBe("24px");
    });

    it("exposes both default and named exports that point to the same function", () => {
        expect(typeof generateTokens).toBe("function");
        expect(typeof generateTokensNamed).toBe("function");
        expect(generateTokens).toBe(generateTokensNamed);
    });

    describe("selective token generation", () => {
        it("generates only colors when include.colors is true", () => {
            const tokens = generateTokens({ include: { colors: true } });

            expect(tokens.colors).toBeDefined();
            expect(typeof tokens.colors!["md.sys.color.primary"]).toBe("string");
            expect(tokens.elevation).toBeUndefined();
            expect(tokens.motion).toBeUndefined();
            expect(tokens.shape).toBeUndefined();
            expect(tokens.typography).toBeUndefined();
            expect(tokens.state).toBeUndefined();
        });

        it("generates only typography when include.typography is true", () => {
            const tokens = generateTokens({ include: { typography: true } });

            expect(tokens.typography).toBeDefined();
            expect(typeof tokens.typography!["md.sys.typescale.body-large.size"]).toBe("string");
            expect(tokens.colors).toBeUndefined();
            expect(tokens.elevation).toBeUndefined();
            expect(tokens.motion).toBeUndefined();
            expect(tokens.shape).toBeUndefined();
            expect(tokens.state).toBeUndefined();
        });

        it("generates multiple specific token types", () => {
            const tokens = generateTokens({
                include: { colors: true, typography: true, elevation: true },
            });

            expect(tokens.colors).toBeDefined();
            expect(tokens.typography).toBeDefined();
            expect(tokens.elevation).toBeDefined();
            expect(tokens.motion).toBeUndefined();
            expect(tokens.shape).toBeUndefined();
            expect(tokens.state).toBeUndefined();
        });

        it("generates all tokens when include is undefined", () => {
            const tokens = generateTokens();

            expect(tokens.colors).toBeDefined();
            expect(tokens.elevation).toBeDefined();
            expect(tokens.motion).toBeDefined();
            expect(tokens.shape).toBeDefined();
            expect(tokens.typography).toBeDefined();
            expect(tokens.state).toBeDefined();
        });

        it("generates no tokens when include is empty object (nothing explicitly true)", () => {
            const tokens = generateTokens({ include: {} });

            expect(tokens.colors).toBeUndefined();
            expect(tokens.elevation).toBeUndefined();
            expect(tokens.motion).toBeUndefined();
            expect(tokens.shape).toBeUndefined();
            expect(tokens.typography).toBeUndefined();
            expect(tokens.state).toBeUndefined();
        });

        it("only generates tokens explicitly set to true", () => {
            const tokens = generateTokens({
                include: { colors: true, typography: false, elevation: true },
            });

            expect(tokens.colors).toBeDefined();
            expect(tokens.elevation).toBeDefined();
            expect(tokens.typography).toBeUndefined();
            // Motion, shape, and state are not explicitly set to true, so they are undefined
            expect(tokens.motion).toBeUndefined();
            expect(tokens.shape).toBeUndefined();
            expect(tokens.state).toBeUndefined();
        });

        it("applies typography options when generating typography", () => {
            const tokens = generateTokens({
                include: { typography: true },
                typography: {
                    brandTypeface: "Inter",
                    plainTypeface: "Roboto",
                    weightRegular: 400,
                    weightMedium: 500,
                    weightBold: 700,
                },
            });

            expect(tokens.typography).toBeDefined();
            expect(tokens.typography!["md.ref.typeface.brand"]).toBe("Inter");
            expect(tokens.typography!["md.ref.typeface.plain"]).toBe("Roboto");
        });

        it("generates colors with custom DynamicScheme when include.colors is true", () => {
            const scheme = DynamicScheme.from({
                isDark: true,
                variant: Variant.NEUTRAL,
                specVersion: SpecVersion.SPEC_2025,
            });

            const tokens = generateTokens({
                dynamicScheme: scheme,
                include: { colors: true },
            });

            expect(tokens.colors).toBeDefined();
            const expectedColors = generateColorTokens(scheme);
            expect(tokens.colors!).toEqual(expectedColors);
        });
    });
});
