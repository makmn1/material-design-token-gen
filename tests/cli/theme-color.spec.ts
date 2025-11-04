import { describe, it, expect } from "vitest";
import { generateFromThemeColor } from "../../src/cli";
import { createThemeColorAnswers, verifyFilesWritten } from "./test-utils";
import { Variant, SpecVersion } from "@materialx/material-color-utilities";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { tmpdir } from "node:os";

describe("generateFromThemeColor", () => {
    it("generates only color files", async () => {
        const answers = createThemeColorAnswers({
            colorTheme: {
                variant: Variant.EXPRESSIVE,
                mode: "LIGHT",
                specVersion: SpecVersion.SPEC_2025,
                contrastLevel: 0.0,
            },
        });
        const files = await generateFromThemeColor(answers, { generateFiles: false });
        expect(files.length).toBe(3);
        expect(files.some((f) => f.path.includes("colors.light.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("ripples.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("tokens.css"))).toBe(true);
        expect(files.every((f) => !f.path.includes("typography.css"))).toBe(true);
    });

    it("generates both light and dark files when mode is BOTH", async () => {
        const answers = createThemeColorAnswers({
            colorTheme: {
                variant: Variant.EXPRESSIVE,
                mode: "BOTH",
                specVersion: SpecVersion.SPEC_2025,
                contrastLevel: 0.0,
            },
        });
        const files = await generateFromThemeColor(answers, { generateFiles: false });
        expect(files.length).toBe(4);
        expect(files.some((f) => f.path.includes("colors.light.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("colors.dark.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("ripples.css"))).toBe(true);
    });

    it("generates dark file when mode is DARK", async () => {
        const answers = createThemeColorAnswers({
            colorTheme: {
                variant: Variant.EXPRESSIVE,
                mode: "DARK",
                specVersion: SpecVersion.SPEC_2025,
                contrastLevel: 0.0,
            },
        });
        const files = await generateFromThemeColor(answers, { generateFiles: false });
        expect(files.length).toBe(3);
        expect(files.some((f) => f.path.includes("colors.dark.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("ripples.css"))).toBe(true);
    });

    it("uses provided hex color", async () => {
        const answers = createThemeColorAnswers({
            colorTheme: {
                variant: Variant.EXPRESSIVE,
                mode: "LIGHT",
                specVersion: SpecVersion.SPEC_2025,
                contrastLevel: 0.0,
                primaryPaletteKeyColorHex: "#3F9BC7",
            },
        });
        const files = await generateFromThemeColor(answers, { generateFiles: false });
        expect(files.length).toBeGreaterThan(0);
    });

    it("writes files when generateFiles is true", async () => {
        const tempDir = path.join(tmpdir(), `test-theme-color-${Date.now()}`);
        const answers = createThemeColorAnswers({
            outputPath: tempDir,
            colorTheme: {
                variant: Variant.EXPRESSIVE,
                mode: "LIGHT",
                specVersion: SpecVersion.SPEC_2025,
                contrastLevel: 0.0,
            },
        });
        try {
            const files = await generateFromThemeColor(answers, { generateFiles: true });
            expect(files.length).toBeGreaterThan(0);
            await verifyFilesWritten(files, tempDir);
        } finally {
            await fs.rm(tempDir, { recursive: true, force: true });
        }
    });
});

