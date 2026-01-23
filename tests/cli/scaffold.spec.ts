import { describe, it, expect } from "vitest";
import { generateFromScaffold } from "../../src/cli";
import { Variant, SpecVersion } from "@materialx/material-color-utilities";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { tmpdir } from "node:os";
import { createScaffoldAnswers, verifyFilesWritten } from "./test-utils";
import prettier from "prettier";

describe("generateFromScaffold", () => {
    it("generates files with default answers", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });
        expect(files.length).toBeGreaterThan(0);
        expect(files.some((f) => f.path.includes("colors.light.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("colors.dark.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("typography.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("tokens.css"))).toBe(true);
    });

    it("generates files with custom color theme", async () => {
        const answers = createScaffoldAnswers({
            colorTheme: {
                variant: Variant.NEUTRAL,
                mode: "BOTH",
                specVersion: SpecVersion.SPEC_2025,
                contrastLevel: 0.0,
                primaryPaletteKeyColorHex: "#3F9BC7",
            },
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });
        expect(files.some((f) => f.path.includes("colors.light.css"))).toBe(true);
        expect(files.some((f) => f.path.includes("colors.dark.css"))).toBe(true);
    });

    it("generates files with custom typography", async () => {
        const answers = createScaffoldAnswers({
            wantsTypographyCustomization: true,
            typography: {
                brandTypeface: "Inter",
                plainTypeface: "Roboto",
                weightRegular: 400,
                weightMedium: 500,
                weightBold: 700,
            },
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });
        const typographyFile = files.find((f) => f.path.includes("typography.css"));
        expect(typographyFile).toBeDefined();
        expect(typographyFile!.content).toContain("Inter");
    });

    it("uses motion variant to determine expressive motion", async () => {
        const answers = createScaffoldAnswers({
            motionVariant: "Legacy (2021)",
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });
        expect(files.length).toBeGreaterThan(0);
    });

    it("writes files when generateFiles is true", async () => {
        const tempDir = path.join(tmpdir(), `test-scaffold-${Date.now()}`);
        const answers = createScaffoldAnswers({
            outputPath: tempDir,
            wantsCustomizations: false,
        });
        try {
            const files = await generateFromScaffold(answers, { generateFiles: true });
            expect(files.length).toBeGreaterThan(0);
            await verifyFilesWritten(files, tempDir);
        } finally {
            await fs.rm(tempDir, { recursive: true, force: true });
        }
    });

    it.each([
        ["empty string", ""],
        ["undefined", undefined],
        ["whitespace only", "   "],
    ])("handles %s outputPath by using default", async (description, outputPath) => {
        const answers = createScaffoldAnswers({
            outputPath: outputPath as any,
            wantsCustomizations: false,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });
        expect(files.length).toBeGreaterThan(0);
        files.forEach((file) => {
            const normalizedPath = file.path.replace(/\\/g, "/");
            expect(normalizedPath).toContain("src/styles/simply-material");
        });
    });
});

describe("promptScaffold prompt order", () => {
    it("should have color theme questions before motion variant and typography in source code", async () => {
        const fs = await import("node:fs/promises");
        const path = await import("node:path");
        const scaffoldPath = path.resolve(
            __dirname,
            "../../src/cli/prompts/scaffold.ts"
        );
        const sourceCode = await fs.readFile(scaffoldPath, "utf-8");

        const colorThemeCallIndex = sourceCode.indexOf("promptColorTheme()");
        const motionVariantCallIndex = sourceCode.indexOf(
            'message: "What animation tokens do you want to use?"'
        );
        const typographyCustomizationCallIndex = sourceCode.indexOf(
            'message: "Do you want to customize typography options'
        );

        expect(colorThemeCallIndex).toBeGreaterThan(-1);
        expect(motionVariantCallIndex).toBeGreaterThan(-1);
        expect(typographyCustomizationCallIndex).toBeGreaterThan(-1);

        const customizationFlowStart = sourceCode.indexOf(
            "// Customization flow"
        );

        expect(colorThemeCallIndex).toBeGreaterThan(customizationFlowStart);
        expect(colorThemeCallIndex).toBeLessThan(motionVariantCallIndex);
        expect(motionVariantCallIndex).toBeLessThan(typographyCustomizationCallIndex);
    });
});

describe("scaffold end-to-end with file generation", () => {
    it("generates files with no customizations and asserts typography.css format", async () => {
        const tempDir = path.join(tmpdir(), `test-scaffold-e2e-${Date.now()}-${Math.random().toString(36).substring(7)}`);
        
        try {
            const answers = createScaffoldAnswers({
                wantsCustomizations: false,
                outputPath: tempDir,
            });

            const files = await generateFromScaffold(answers, { generateFiles: true });

            expect(files.length).toBe(9);
            expect(files.some((f) => f.path.includes("colors.light.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("colors.dark.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("typography.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("elevation.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("motion.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("shape.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("state.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("ripples.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("tokens.css"))).toBe(true);

            for (const file of files) {
                if (file.path.endsWith(".css")) {
                    const fileContent = await fs.readFile(file.path, "utf-8");
                    const isFormatted = await prettier.check(fileContent, { parser: "css" });
                    expect(isFormatted).toBe(true);
                }
            }
        } finally {
            await fs.rm(tempDir, { recursive: true, force: true });
        }
    });
});

describe("component stylesheet generation", () => {
    it("generates component CSS files when wantsComponentStyles is true", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const buttonFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile).toBeDefined();
        expect(buttonFile!.content).toContain("@layer tokens");
        expect(buttonFile!.content).toContain(":where(.md-button)");
    });

    it("does NOT generate component CSS files when wantsComponentStyles is false or undefined", async () => {
        const answers1 = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: false,
        });
        const files1 = await generateFromScaffold(answers1, { generateFiles: false });
        const buttonFile1 = files1.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile1).toBeUndefined();

        const answers2 = createScaffoldAnswers({
            wantsCustomizations: false,
        });
        const files2 = await generateFromScaffold(answers2, { generateFiles: false });
        const buttonFile2 = files2.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile2).toBeUndefined();
    });

    it("writes component files to components/ subdirectory when generateFiles is true", async () => {
        const tempDir = path.join(tmpdir(), `test-components-${Date.now()}`);
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
            outputPath: tempDir,
        });

        try {
            const files = await generateFromScaffold(answers, { generateFiles: true });

            const buttonFile = files.find((f) => {
                const normalizedPath = f.path.replace(/\\/g, "/");
                return normalizedPath.includes("components/button.css");
            });
            expect(buttonFile).toBeDefined();
            
            const normalizedPath = buttonFile!.path.replace(/\\/g, "/");
            expect(normalizedPath).toContain("components/button.css");

            const fileExists = await fs.access(buttonFile!.path).then(() => true).catch(() => false);
            expect(fileExists).toBe(true);
        } finally {
            await fs.rm(tempDir, { recursive: true, force: true });
        }
    });

    it("converts md.sys.* token references to var() in component CSS", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const buttonFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile).toBeDefined();

        expect(buttonFile!.content).toContain("var(--md-sys-color-primary)");
        expect(buttonFile!.content).toContain("var(--md-sys-elevation-level0)");
        expect(buttonFile!.content).toContain("var(--md-sys-typescale-label-large)");
        expect(buttonFile!.content).toContain("var(--md-sys-shape-corner-full)");
        expect(buttonFile!.content).toContain("var(--md-sys-state-hover-state-layer-opacity)");
        expect(buttonFile!.content).toContain("--md-comp-button-container-color:");
        expect(buttonFile!.content).toContain("--md-comp-button-container-height:");
    });

    it("converts dp values to rem in component CSS", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const buttonFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile).toBeDefined();

        expect(buttonFile!.content).toContain("2.5rem");
        expect(buttonFile!.content).toContain("1.25rem");
        expect(buttonFile!.content).toContain("1.5rem");
    });

    it("outputs hex color values without quotes in component CSS", async () => {
        const { buildComponentCss } = await import("../../src/cli/file-generator");
        
        const testTokens: Record<string, string> = {
            "md.comp.test.color": "#6750a4",
            "md.comp.test.background": "#ffffff",
            "md.comp.test.border": "#000000",
        };
        
        const css = buildComponentCss("test", testTokens);
        
        expect(css).toMatch(/--md-comp-test-color:\s+#6750a4;/);
        expect(css).toMatch(/--md-comp-test-background:\s+#ffffff;/);
        expect(css).toMatch(/--md-comp-test-border:\s+#000000;/);
        expect(css).not.toMatch(/--md-comp-test-color:\s+"#6750a4";/);
        expect(css).not.toMatch(/--md-comp-test-background:\s+"#ffffff";/);
    });

    it("outputs CSS keyword values without quotes in component CSS", async () => {
        const { buildComponentCss } = await import("../../src/cli/file-generator");
        
        const testTokens: Record<string, string> = {
            "sm.comp.carousel.container.cursor": "pointer",
            "md.comp.test.display": "none",
            "md.comp.test.position": "absolute",
        };
        
        const css = buildComponentCss("test", testTokens);
        
        expect(css).toMatch(/--sm-comp-carousel-container-cursor:\s+pointer;/);
        expect(css).toMatch(/--md-comp-test-display:\s+none;/);
        expect(css).toMatch(/--md-comp-test-position:\s+absolute;/);
        expect(css).not.toMatch(/--sm-comp-carousel-container-cursor:\s+"pointer";/);
        expect(css).not.toMatch(/--md-comp-test-display:\s+"none";/);
        expect(css).not.toMatch(/--md-comp-test-position:\s+"absolute";/);
    });

    it("includes additional CSS rules for carousel component", async () => {
        const { buildComponentCss } = await import("../../src/cli/file-generator");
        
        const testTokens: Record<string, string> = {
            "md.comp.carousel.test": "value",
        };
        
        const css = buildComponentCss("carousel", testTokens);
        
        expect(css).toContain(":where(.md-carousel)");
        expect(css).toMatch(/--md-comp-carousel-test:\s+value;/);
        
        expect(css).toContain(":where(.md-carousel) button,");
        expect(css).toContain(":where(.md-carousel) a {");
        expect(css).toContain("width: 100%;");
        expect(css).toContain("height: 100%;");
        expect(css).toContain("padding: 0;");
        expect(css).toContain("margin: 0;");
        expect(css).toContain("border: none;");
        expect(css).toContain("outline: none;");
        expect(css).toContain("background: none;");
        expect(css).toContain("color: inherit;");
        expect(css).toContain("cursor: pointer;");
        
        expect(css).toMatch(/}\s*\n\s*\n\s+:where\(\.md-carousel\) button,/);
    });

    it("does not include additional CSS rules for components without them", async () => {
        const { buildComponentCss } = await import("../../src/cli/file-generator");
        
        const testTokens: Record<string, string> = {
            "md.comp.button.test": "value",
        };
        
        const css = buildComponentCss("button", testTokens);
        
        expect(css).toContain(":where(.md-button)");
        expect(css).toMatch(/--md-comp-button-test:\s+value;/);
        
        expect(css).not.toContain(":where(.md-button) button,");
        expect(css).not.toContain(":where(.md-button) a {");
        expect(css).not.toContain("width: 100%;");
        expect(css).not.toContain("height: 100%;");
        expect(css).not.toContain("padding: 0;");
    });

    it("outputs carousel cursor token without quotes in generated CSS", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const carouselFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/carousel.css");
        });
        expect(carouselFile).toBeDefined();

        const content = carouselFile!.content;
        
        expect(content).toMatch(/--sm-comp-carousel-container-cursor:\s+pointer;/);
        expect(content).not.toMatch(/--sm-comp-carousel-container-cursor:\s+"pointer";/);
    });

    it("includes button and anchor reset styles in generated carousel CSS", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const carouselFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/carousel.css");
        });
        expect(carouselFile).toBeDefined();

        const content = carouselFile!.content;
        
        expect(content).toContain(":where(.md-carousel) button,");
        expect(content).toContain(":where(.md-carousel) a {");
        expect(content).toContain("width: 100%;");
        expect(content).toContain("height: 100%;");
        expect(content).toContain("padding: 0;");
        expect(content).toContain("margin: 0;");
        expect(content).toContain("border: none;");
        expect(content).toContain("outline: none;");
        expect(content).toContain("background: none;");
        expect(content).toContain("color: inherit;");
        expect(content).toContain("cursor: pointer;");
        
        expect(content).toMatch(/}\s*\n\s*\n\s+:where\(\.md-carousel\) button,/);
    });

    it("outputs numeric opacity values without quotes in component CSS", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const buttonFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile).toBeDefined();

        const content = buttonFile!.content;
        
        expect(content).toMatch(/--md-comp-button-disabled-container-opacity:\s+0\.1;/);
        expect(content).toMatch(/--md-comp-button-disabled-label-text-opacity:\s+0\.38;/);
        expect(content).not.toMatch(/--md-comp-button-disabled-container-opacity:\s+"0\.1";/);
        expect(content).not.toMatch(/--md-comp-button-disabled-label-text-opacity:\s+"0\.38";/);
    });

    it("includes component files in consolidated tokens.css when generated", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const tokensFile = files.find((f) => f.path.includes("tokens.css"));
        expect(tokensFile).toBeDefined();

        expect(tokensFile!.content).toContain("components/button.css");
        expect(tokensFile!.content).toMatch(/@import url\(["']\.\/components\/button\.css["']\) layer\(tokens\);/);
    });

    it("does NOT include component files in consolidated tokens.css when not generated", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: false,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const tokensFile = files.find((f) => f.path.includes("tokens.css"));
        expect(tokensFile).toBeDefined();

        expect(tokensFile!.content).not.toContain("components/button.css");
    });

    it("generates component files with generateFiles: false returns file descriptors", async () => {
        const answers = createScaffoldAnswers({
            wantsCustomizations: false,
            wantsComponentStyles: true,
        });
        const files = await generateFromScaffold(answers, { generateFiles: false });

        const buttonFile = files.find((f) => {
            const normalizedPath = f.path.replace(/\\/g, "/");
            return normalizedPath.includes("components/button.css");
        });
        expect(buttonFile).toBeDefined();
        expect(buttonFile!.path).toBeDefined();
        expect(buttonFile!.content).toBeDefined();
        expect(typeof buttonFile!.content).toBe("string");
    });

    it("deletes components folder when wantsComponentStyles is false and folder exists", async () => {
        const tempDir = path.join(tmpdir(), `test-components-delete-${Date.now()}`);
        const componentDir = path.join(tempDir, "components");
        
        try {
            const answersWithComponents = createScaffoldAnswers({
                wantsCustomizations: false,
                wantsComponentStyles: true,
                outputPath: tempDir,
            });
            await generateFromScaffold(answersWithComponents, { generateFiles: true });

            const componentDirExists = await fs.access(componentDir).then(() => true).catch(() => false);
            expect(componentDirExists).toBe(true);

            const answersWithoutComponents = createScaffoldAnswers({
                wantsCustomizations: false,
                wantsComponentStyles: false,
                outputPath: tempDir,
            });
            await generateFromScaffold(answersWithoutComponents, { generateFiles: true });

            const componentDirStillExists = await fs.access(componentDir).then(() => true).catch(() => false);
            expect(componentDirStillExists).toBe(false);
        } finally {
            await fs.rm(tempDir, { recursive: true, force: true });
        }
    });
});

