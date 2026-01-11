import { describe, it, expect } from "vitest";
import { generateTokens } from "../../src";
import {
    generateColorFiles,
    generateNonColorFiles,
    generateConsolidatedFile,
    generateRipplesFile,
    generateAllFiles,
    generateComponentFiles,
} from "../../src/cli/file-generator";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { tmpdir } from "node:os";
import prettier from "prettier";
import { verifyFilesWritten, assertHexColorsUnquoted, assertTypographyFormatting } from "./test-utils";
import { generateComponentTokens } from "../../src/components/components";

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
            expect(content).toContain("overflow: visible");
            expect(content).toContain("-webkit-tap-highlight-color: transparent");
            expect(content).toContain("--sm-ripple-origin-x: 0.5");
            expect(content).toContain("--sm-ripple-origin-y: 0.5");
            expect(content).toContain(".simply-mat-ripple__surface");
            expect(content).toContain("inset: 0");
            expect(content).toContain("border-radius: inherit");
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
            
            // Verify core tokens are under :root
            expect(content).toContain(":root {");
            expect(content).toContain(":where(.md-typography) {");
            
            // Verify core tokens appear only once under :root
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
            
            // Verify core tokens are in :root block, not in :where(.md-typography) block
            const rootBlockEnd = content.indexOf(":where(.md-typography) {");
            const brandInRoot = content.indexOf("--md-ref-typeface-brand:");
            expect(brandInRoot).toBeGreaterThan(-1);
            expect(brandInRoot).toBeLessThan(rootBlockEnd);
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
            
            // Verify core tokens with custom values are under :root
            expect(content).toContain(":root {");
            expect(content).toContain('--md-ref-typeface-brand: "Inter";');
            expect(content).toContain('--md-ref-typeface-plain: "Roboto Flex";');
            expect(content).toContain("--md-ref-typeface-weight-regular: 400;");
            
            // Verify system tokens reference core tokens via CSS variables and are under :where(.md-typography)
            expect(content).toContain(":where(.md-typography) {");
            expect(content).toContain('--md-sys-typescale-display-large-font: var(--md-ref-typeface-brand);');
            expect(content).toContain('--md-sys-typescale-body-large-font: var(--md-ref-typeface-plain);');
            
            // Verify core tokens are in :root block, system tokens are in :where(.md-typography) block
            const rootBlockEnd = content.indexOf(":where(.md-typography) {");
            const brandInRoot = content.indexOf('--md-ref-typeface-brand: "Inter";');
            const displayLargeInTypography = content.indexOf('--md-sys-typescale-display-large-font:');
            expect(brandInRoot).toBeGreaterThan(-1);
            expect(brandInRoot).toBeLessThan(rootBlockEnd);
            expect(displayLargeInTypography).toBeGreaterThan(rootBlockEnd);
        });
    });

    describe("component CSS value quoting", () => {
        it("does not quote multi-measurement CSS values for component tokens", async () => {
            const componentTokens = generateComponentTokens({ webUnits: true });
            const tabsTokens = {
                tabs: componentTokens["tabs"],
            };

            const files = await generateComponentFiles(tabsTokens, "/tmp/test", false);
            const tabsFile = files.find((f) => f.path.endsWith("tabs.css"));

            expect(tabsFile).toBeDefined();
            const content = tabsFile!.content;

            // md.comp.primary-navigation-tab.active-indicator.shape comes from "3dp 3dp 0 0"
            // and should be converted to "0.1875rem 0.1875rem 0 0" without quotes.
            expect(content).toMatch(
                /--md-comp-primary-navigation-tab-active-indicator-shape:\s+0\.1875rem 0\.1875rem 0 0;/,
            );
            expect(content).not.toMatch(
                /--md-comp-primary-navigation-tab-active-indicator-shape:\s+"0\.1875rem 0\.1875rem 0 0";/,
            );

            // Single measurement CSS values remain unquoted
            expect(content).toMatch(/--md-comp-primary-navigation-tab-active-indicator-height:\s+0\.1875rem;/);
            expect(content).not.toMatch(
                /--md-comp-primary-navigation-tab-active-indicator-height:\s+"0\.1875rem";/,
            );
        });

        it("does not quote cubic-bezier and ms duration values for component tokens", async () => {
            const componentTokens = generateComponentTokens({ webUnits: true });
            const tabsTokens = {
                tabs: componentTokens["tabs"],
            };

            const files = await generateComponentFiles(tabsTokens, "/tmp/test", false);
            const tabsFile = files.find((f) => f.path.endsWith("tabs.css"));

            expect(tabsFile).toBeDefined();
            const content = tabsFile!.content;

            // Verify cubic-bezier values are not quoted
            expect(content).toMatch(
                /--sm-comp-tabs-active-indicator-animation-ease-standard:\s+cubic-bezier\(\.2,\s+0,\s+0,\s+1\);/,
            );
            expect(content).not.toMatch(
                /--sm-comp-tabs-active-indicator-animation-ease-standard:\s+"cubic-bezier\(\.2,\s+0,\s+0,\s+1\)";/,
            );

            expect(content).toMatch(
                /--sm-comp-tabs-active-indicator-animation-ease-in:\s+cubic-bezier\(\.4,\s+0,\s+1,\s+1\);/,
            );
            expect(content).not.toMatch(
                /--sm-comp-tabs-active-indicator-animation-ease-in:\s+"cubic-bezier\(\.4,\s+0,\s+1,\s+1\)";/,
            );

            expect(content).toMatch(
                /--sm-comp-tabs-panel-animation-easing:\s+cubic-bezier\(0\.2,\s+0,\s+0,\s+1\);/,
            );
            expect(content).not.toMatch(
                /--sm-comp-tabs-panel-animation-easing:\s+"cubic-bezier\(0\.2,\s+0,\s+0,\s+1\)";/,
            );

            // Verify ms duration values are not quoted
            expect(content).toMatch(
                /--sm-comp-tabs-active-indicator-animation-duration:\s+400ms;/,
            );
            expect(content).not.toMatch(
                /--sm-comp-tabs-active-indicator-animation-duration:\s+"400ms";/,
            );

            expect(content).toMatch(
                /--sm-comp-tabs-active-indicator-animation-fade-duration:\s+150ms;/,
            );
            expect(content).not.toMatch(
                /--sm-comp-tabs-active-indicator-animation-fade-duration:\s+"150ms";/,
            );
        });
    });

    describe("elevation CSS value quoting", () => {
        it("does not quote box-shadow values for elevation tokens", async () => {
            const bundle = generateTokens({ webUnits: true });
            const files = await generateNonColorFiles(
                bundle,
                {
                    elevation: true,
                    typography: false,
                    motion: false,
                    shape: false,
                    state: false,
                },
                "/tmp/test",
                false
            );
            const elevationFile = files.find((f) => f.path.includes("elevation.css"));

            expect(elevationFile).toBeDefined();
            const content = elevationFile!.content;

            // Verify box-shadow values are not quoted
            // Box-shadow values contain rgba() functions, px values, and commas
            expect(content).toMatch(
                /--sm-sys-elevation-box-shadow-level1:\s+rgba\(0,\s+0,\s+0,\s+0\.2\)\s+0px\s+2px\s+1px\s+-1px,\s+rgba\(0,\s+0,\s+0,\s+0\.14\)\s+0px\s+1px\s+1px\s+0px,\s+rgba\(0,\s+0,\s+0,\s+0\.12\)\s+0px\s+1px\s+3px\s+0px;/,
            );
            expect(content).not.toMatch(
                /--sm-sys-elevation-box-shadow-level1:\s+"rgba\(0,\s+0,\s+0,\s+0\.2\)\s+0px\s+2px\s+1px\s+-1px,\s+rgba\(0,\s+0,\s+0,\s+0\.14\)\s+0px\s+1px\s+1px\s+0px,\s+rgba\(0,\s+0,\s+0,\s+0\.12\)\s+0px\s+1px\s+3px\s+0px";/,
            );

            expect(content).toMatch(
                /--sm-sys-elevation-box-shadow-level3:\s+rgba\(0,\s+0,\s+0,\s+0\.2\)\s+0px\s+3px\s+5px\s+-1px,\s+rgba\(0,\s+0,\s+0,\s+0\.14\)\s+0px\s+6px\s+10px\s+0px,\s+rgba\(0,\s+0,\s+0,\s+0\.12\)\s+0px\s+1px\s+18px\s+0px;/,
            );
            expect(content).not.toMatch(
                /--sm-sys-elevation-box-shadow-level3:\s+"rgba\(0,\s+0,\s+0,\s+0\.2\)\s+0px\s+3px\s+5px\s+-1px,\s+rgba\(0,\s+0,\s+0,\s+0\.14\)\s+0px\s+6px\s+10px\s+0px,\s+rgba\(0,\s+0,\s+0,\s+0\.12\)\s+0px\s+1px\s+18px\s+0px";/,
            );
        });
    });
});

