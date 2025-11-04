import { describe, it, expect } from "vitest";
import {
    isHexString,
    normalizeHex,
    buildSchemeFromAnswers,
} from "../../src/cli/color-utils";
import { Variant, SpecVersion } from "@materialx/material-color-utilities";
import { createColorThemeAnswers } from "./test-utils";

describe("color-utils", () => {
    describe("isHexString", () => {
        it("validates hex strings with # prefix", () => {
            expect(isHexString("#6750a4")).toBe(true);
            expect(isHexString("#FF0000")).toBe(true);
            expect(isHexString("#12345678")).toBe(true);
        });

        it("validates hex strings without # prefix", () => {
            expect(isHexString("6750a4")).toBe(true);
            expect(isHexString("FF0000")).toBe(true);
        });

        it("rejects invalid hex strings", () => {
            expect(isHexString("not hex")).toBe(false);
            expect(isHexString("#GGGGGG")).toBe(false);
            expect(isHexString("12345")).toBe(false);
            expect(isHexString("")).toBe(false);
        });
    });

    describe("normalizeHex", () => {
        it("adds # prefix if missing", () => {
            expect(normalizeHex("6750a4")).toBe("#6750a4");
            expect(normalizeHex("FF0000")).toBe("#FF0000");
        });

        it("keeps # prefix if present", () => {
            expect(normalizeHex("#6750a4")).toBe("#6750a4");
            expect(normalizeHex("#FF0000")).toBe("#FF0000");
        });
    });

    describe("buildSchemeFromAnswers", () => {
        it("builds scheme with default color when no color provided", async () => {
            const answers = createColorThemeAnswers();
            const scheme = await buildSchemeFromAnswers(answers, "light");
            expect(scheme).toBeDefined();
            expect(scheme.isDark).toBe(false);
        });

        it("builds scheme with provided hex color", async () => {
            const answers = createColorThemeAnswers({
                primaryPaletteKeyColorHex: "#3F9BC7",
            });
            const scheme = await buildSchemeFromAnswers(answers, "light");
            expect(scheme).toBeDefined();
            expect(scheme.isDark).toBe(false);
        });

        it("builds dark scheme when type is dark", async () => {
            const answers = createColorThemeAnswers();
            const scheme = await buildSchemeFromAnswers(answers, "dark");
            expect(scheme.isDark).toBe(true);
        });

        it("builds scheme with variant and specVersion", async () => {
            const answers = createColorThemeAnswers({
                variant: Variant.NEUTRAL,
                specVersion: SpecVersion.SPEC_2021,
            });
            const scheme = await buildSchemeFromAnswers(answers, "light");
            expect(scheme).toBeDefined();
        });

        it("builds scheme with contrast level", async () => {
            const answers = createColorThemeAnswers({
                contrastLevel: 0.5,
            });
            const scheme = await buildSchemeFromAnswers(answers, "light");
            expect(scheme).toBeDefined();
        });

        it("builds scheme with optional palette colors", async () => {
            const answers = createColorThemeAnswers({
                secondaryPaletteKeyColorHex: "#FF0000",
                tertiaryPaletteKeyColorHex: "#00FF00",
            });
            const scheme = await buildSchemeFromAnswers(answers, "light");
            expect(scheme).toBeDefined();
        });

        it("throws error for invalid contrast level", async () => {
            const answers = createColorThemeAnswers({
                contrastLevel: 1.5, // Invalid: > 1
            });
            await expect(buildSchemeFromAnswers(answers, "light")).rejects.toThrow();
        });
    });
});

