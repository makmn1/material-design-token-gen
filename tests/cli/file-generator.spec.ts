import { describe, it, expect } from "vitest";
import { generateTokens } from "../../src";
import {
    generateColorFiles,
    generateNonColorFiles,
    generateConsolidatedFile,
    generateRipplesFile,
    generateAllFiles,
} from "../../src/cli/file-generator";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { tmpdir } from "node:os";
import prettier from "prettier";
import { verifyFilesWritten, assertHexColorsUnquoted, assertTypographyFormatting } from "./test-utils";

describe("file-generator", () => {
    const bundle = generateTokens({ webUnits: true });

    describe("generateColorFiles", () => {
        it("generates light color file when mode is LIGHT", async () => {
            const files = await generateColorFiles(bundle, "LIGHT", "/tmp/test", false);
            expect(files).toHaveLength(1);
            expect(files[0].path).toContain("colors.light.css");
            expect(files[0].content).toContain(":root,");
            expect(files[0].content).toContain(":root.light");
        });

        it("generates dark color file when mode is DARK", async () => {
            const files = await generateColorFiles(bundle, "DARK", "/tmp/test", false);
            expect(files).toHaveLength(1);
            expect(files[0].path).toContain("colors.dark.css");
            expect(files[0].content).toContain(":root.dark");
        });

        it("generates both files when mode is BOTH", async () => {
            const files = await generateColorFiles(bundle, "BOTH", "/tmp/test", false);
            expect(files).toHaveLength(2);
            expect(files.some((f) => f.path.includes("colors.light.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("colors.dark.css"))).toBe(true);
        });

        it("writes files when generateFiles is true", async () => {
            const tempDir = path.join(tmpdir(), `test-${Date.now()}`);
            try {
                const files = await generateColorFiles(bundle, "LIGHT", tempDir, true);
                expect(files).toHaveLength(1);
                await verifyFilesWritten(files, tempDir, { checkPrettier: true });
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });

        it.each([
            ["LIGHT"],
            ["DARK"],
        ])("outputs hex color values without quotes in %s theme", async (mode) => {
            const files = await generateColorFiles(bundle, mode as "LIGHT" | "DARK", "/tmp/test", false);
            expect(files).toHaveLength(1);
            assertHexColorsUnquoted(files[0].content);
        });
    });

    describe("generateNonColorFiles", () => {
        it("generates all non-color files when all are included", async () => {
            const files = await generateNonColorFiles(
                bundle,
                {
                    typography: true,
                    elevation: true,
                    motion: true,
                    shape: true,
                    state: true,
                },
                "/tmp/test",
                false
            );
            expect(files).toHaveLength(5);
            expect(files.some((f) => f.path.includes("typography.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("elevation.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("motion.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("shape.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("state.css"))).toBe(true);
        });

        it("only generates included files", async () => {
            const files = await generateNonColorFiles(
                bundle,
                {
                    typography: true,
                    elevation: false,
                    motion: true,
                    shape: false,
                    state: false,
                },
                "/tmp/test",
                false
            );
            expect(files).toHaveLength(2);
            expect(files.some((f) => f.path.includes("typography.css"))).toBe(true);
            expect(files.some((f) => f.path.includes("motion.css"))).toBe(true);
        });

        it("writes files when generateFiles is true", async () => {
            const tempDir = path.join(tmpdir(), `test-${Date.now()}`);
            try {
                const files = await generateNonColorFiles(
                    bundle,
                    { typography: true },
                    tempDir,
                    true
                );
                expect(files).toHaveLength(1);
                await verifyFilesWritten(files, tempDir, { checkPrettier: true });
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });
    });

    describe("shape CSS generation", () => {
        it("outputs Circular as 9999rem without quotes", async () => {
            const shapeBundle = generateTokens({
                include: { shape: true },
            });
            const files = await generateNonColorFiles(
                shapeBundle,
                { shape: true },
                "/tmp/test",
                false
            );
            const shapeFile = files.find((f) => f.path.includes("shape.css"));
            expect(shapeFile).toBeDefined();
            
            const content = shapeFile!.content;
            
            expect(content).toMatch(/--md-sys-shape-corner-full:\s+9999rem;/);
            expect(content).not.toMatch(/--md-sys-shape-corner-full:\s+"9999rem";/);
        });
    });

    describe("generateConsolidatedFile", () => {
        it("generates consolidated file with imports", async () => {
            const imports = ["colors.light.css", "typography.css"];
            const file = await generateConsolidatedFile(imports, "/tmp/test", false);
            expect(file.content).toContain("@layer tokens;");
            expect(file.content).toContain("@import url(\"./colors.light.css\")");
            expect(file.content).toContain("@import url(\"./typography.css\")");
        });

        it("writes file when generateFiles is true", async () => {
            const tempDir = path.join(tmpdir(), `test-${Date.now()}`);
            try {
                const file = await generateConsolidatedFile(
                    ["test.css"],
                    tempDir,
                    true
                );
                await verifyFilesWritten([file], tempDir, { checkPrettier: true });
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });
    });

    describe("generateRipplesFile", () => {
        it("generates ripples file with correct path", async () => {
            const files = await generateRipplesFile("/tmp/test", false);
            expect(files).toHaveLength(1);
            expect(files[0].path).toContain("ripples.css");
        });

        it("includes WARNING header in content", async () => {
            const files = await generateRipplesFile("/tmp/test", false);
            expect(files[0].content).toContain("AUTO-GENERATED FILE");
            expect(files[0].content).toContain("DO NOT EDIT");
        });

        it("includes all expected CSS rules", async () => {
            const files = await generateRipplesFile("/tmp/test", false);
            const content = files[0].content;
            
            expect(content).toContain(".simply-mat-ripple");
            expect(content).toContain("position: relative");
            expect(content).toContain("overflow: hidden");
            expect(content).toContain("-webkit-tap-highlight-color: transparent");
            expect(content).toContain("--sm-ripple-origin-x: 0.5");
            expect(content).toContain("--sm-ripple-origin-y: 0.5");
            expect(content).toContain(".sm-ripple__wave");
            expect(content).toContain("position: absolute");
            expect(content).toContain("pointer-events: none");
            expect(content).toContain("border-radius: 50%");
            expect(content).toContain("background: currentColor");
            expect(content).toContain("left: calc(var(--sm-ripple-origin-x) * 100%)");
            expect(content).toContain("top: calc(var(--sm-ripple-origin-y) * 100%)");
            expect(content).toContain("transform: translate(-50%, -50%) scale(0)");
            expect(content).toContain("animation-name: sm-ripple-wave");
            expect(content).toContain("animation-duration: 1000ms");
            expect(content).toContain("@keyframes sm-ripple-wave");
            expect(content).toContain("@media (prefers-reduced-motion: reduce)");
            expect(content).toContain("animation-duration: 0ms");
        });

        it("writes file when generateFiles is true", async () => {
            const tempDir = path.join(tmpdir(), `test-${Date.now()}`);
            try {
                const files = await generateRipplesFile(tempDir, true);
                expect(files).toHaveLength(1);
                await verifyFilesWritten(files, tempDir, { checkPrettier: true });
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });
    });

    describe("generateAllFiles", () => {
        it("includes ripples.css in consolidated file imports", async () => {
            const files = await generateAllFiles(
                bundle,
                "LIGHT",
                { typography: true },
                "/tmp/test",
                false
            );
            
            const consolidatedFile = files.find((f) => f.path.includes("tokens.css"));
            expect(consolidatedFile).toBeDefined();
            expect(consolidatedFile!.content).toContain("@import url(\"./ripples.css\")");
        });

        it("generates ripples.css file when generating all files", async () => {
            const files = await generateAllFiles(
                bundle,
                "LIGHT",
                { typography: true },
                "/tmp/test",
                false
            );
            
            const ripplesFile = files.find((f) => f.path.includes("ripples.css"));
            expect(ripplesFile).toBeDefined();
            expect(ripplesFile!.content).toContain(".simply-mat-ripple");
        });

        it("creates ripples.css file on disk when generateFiles is true", async () => {
            const tempDir = path.join(tmpdir(), `test-ripples-${Date.now()}`);
            try {
                const files = await generateAllFiles(
                    bundle,
                    "LIGHT",
                    { typography: true },
                    tempDir,
                    true
                );
                
                const ripplesFile = files.find((f) => f.path.includes("ripples.css"));
                expect(ripplesFile).toBeDefined();
                
                const ripplesFilePath = path.join(tempDir, "ripples.css");
                const fileExists = await fs.access(ripplesFilePath).then(() => true).catch(() => false);
                expect(fileExists).toBe(true);
                
                const diskContent = await fs.readFile(ripplesFilePath, "utf-8");
                expect(diskContent).toBe(ripplesFile!.content);
                expect(diskContent).toContain(".simply-mat-ripple");
                expect(diskContent).toContain("@keyframes sm-ripple-wave");
                expect(diskContent).toContain("@media (prefers-reduced-motion: reduce)");
                
                const consolidatedFilePath = path.join(tempDir, "tokens.css");
                const consolidatedContent = await fs.readFile(consolidatedFilePath, "utf-8");
                expect(consolidatedContent).toContain("@import url(\"./ripples.css\")");
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });
    });

    describe("typography CSS generation", () => {
        it("formats typography CSS correctly (quoted strings, ref tokens, order, no duplicates)", async () => {
            const typographyBundle = generateTokens({
                include: { typography: true },
            });
            const files = await generateNonColorFiles(
                typographyBundle,
                { typography: true },
                "/tmp/test",
                false
            );
            const typographyFile = files.find((f) => f.path.includes("typography.css"));
            expect(typographyFile).toBeDefined();
            
            assertTypographyFormatting(typographyFile!.content);
        });

        it("does not create duplicate ref token variables", async () => {
            const typographyBundle = generateTokens({
                include: { typography: true },
            });
            const files = await generateNonColorFiles(
                typographyBundle,
                { typography: true },
                "/tmp/test",
                false
            );
            const typographyFile = files.find((f) => f.path.includes("typography.css"));
            expect(typographyFile).toBeDefined();
            
            const content = typographyFile!.content;
            
            const brandMatches = (content.match(/--md-ref-typeface-brand:/g) || []).length;
            const plainMatches = (content.match(/--md-ref-typeface-plain:/g) || []).length;
            const weightRegularMatches = (content.match(/--md-ref-typeface-weight-regular:/g) || []).length;
            const weightMediumMatches = (content.match(/--md-ref-typeface-weight-medium:/g) || []).length;
            const weightBoldMatches = (content.match(/--md-ref-typeface-weight-bold:/g) || []).length;
            
            expect(brandMatches).toBe(1);
            expect(plainMatches).toBe(1);
            expect(weightRegularMatches).toBe(1);
            expect(weightMediumMatches).toBe(1);
            expect(weightBoldMatches).toBe(1);
        });

        it("handles custom typography options correctly", async () => {
            const typographyBundle = generateTokens({
                include: { typography: true },
                typography: {
                    brandTypeface: "Inter",
                    plainTypeface: "Roboto Flex",
                },
            });
            const files = await generateNonColorFiles(
                typographyBundle,
                { typography: true },
                "/tmp/test",
                false
            );
            const typographyFile = files.find((f) => f.path.includes("typography.css"));
            expect(typographyFile).toBeDefined();
            
            const content = typographyFile!.content;
            
            expect(content).toContain('--md-ref-typeface-brand: "Inter";');
            expect(content).toContain('--md-ref-typeface-plain: "Roboto Flex";');
            expect(content).toContain("--md-ref-typeface-weight-regular: 400;");
            expect(content).toContain('--md-sys-typescale-display-large-font: var(--md-ref-typeface-brand);');
            expect(content).toContain('--md-sys-typescale-body-large-font: var(--md-ref-typeface-plain);');
        });
    });
});

