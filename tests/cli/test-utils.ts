import type {
    ScaffoldAnswers,
    ThemeColorAnswers,
    ColorThemeAnswers,
    TypographyAnswers,
    MotionVariant,
    FileDescriptor,
} from "../../src/cli/types";
import { Variant, SpecVersion } from "@materialx/material-color-utilities";
import * as fs from "node:fs/promises";
import prettier from "prettier";
import { expect } from "vitest";

/**
 * Create default scaffold answers with optional overrides.
 */
export function createScaffoldAnswers(
    overrides: Partial<ScaffoldAnswers> = {}
): ScaffoldAnswers {
    const base = {
        wantsCustomizations: true,
        motionVariant: "Expressive (2025)" as MotionVariant,
        wantsTypographyCustomization: false,
        outputPath: "src/styles/simply-material",
        wantsComponentStyles: false,
        ...overrides,
    };
    
    if (base.wantsCustomizations && !("colorTheme" in overrides)) {
        return {
            ...base,
            colorTheme: createColorThemeAnswers(),
        };
    }
    
    return base;
}

/**
 * Create default color theme answers with optional overrides.
 */
export function createColorThemeAnswers(
    overrides: Partial<ColorThemeAnswers> = {}
): ColorThemeAnswers {
    return {
        variant: Variant.EXPRESSIVE,
        mode: "LIGHT",
        specVersion: SpecVersion.SPEC_2025,
        contrastLevel: 0.0,
        ...overrides,
    };
}

/**
 * Create default create-material-theme-tokens answers with optional overrides.
 */
export function createThemeColorAnswers(
    overrides: Partial<ThemeColorAnswers> = {}
): ThemeColorAnswers {
    return {
        colorTheme: createColorThemeAnswers(),
        outputPath: "src/styles/simply-material",
        ...overrides,
    };
}

/**
 * Verify that files were written to disk and match their expected content.
 * Optionally checks prettier formatting for CSS files.
 */
export async function verifyFilesWritten(
    files: FileDescriptor[],
    tempDir: string,
    options: { checkPrettier?: boolean } = {}
): Promise<void> {
    const { checkPrettier = false } = options;
    
    for (const file of files) {
        const content = await fs.readFile(file.path, "utf-8");
        expect(content).toBe(file.content);
        
        if (checkPrettier && file.path.endsWith(".css")) {
            const isFormatted = await prettier.check(content, { parser: "css" });
            expect(isFormatted).toBe(true);
        }
    }
}

/**
 * Assert that hex color values in CSS content are not quoted.
 */
export function assertHexColorsUnquoted(content: string): void {
    expect(content).toMatch(/--md-sys-color-primary:\s+#[0-9a-fA-F]{6};/);
    expect(content).toMatch(/--md-sys-color-background:\s+#[0-9a-fA-F]{6};/);
    expect(content).not.toMatch(/--md-sys-color-primary:\s+"#[0-9a-fA-F]{6}";/);
    expect(content).not.toMatch(/--md-sys-color-background:\s+"#[0-9a-fA-F]{6}";/);
}

/**
 * Assert typography CSS formatting:
 * - String labels are quoted
 * - Reference tokens are converted to CSS variable references
 * - Core tokens are in :root block
 * - System tokens are in the ":where(.md-typography)" block
 * - No duplicate ref tokens
 */
export function assertTypographyFormatting(content: string): void {
    // Verify selectors exist
    expect(content).toContain(":root {");
    expect(content).toContain(":where(.md-typography) {");
    
    // Verify string labels are quoted (system tokens in :where(.md-typography))
    expect(content).toContain('--md-sys-typescale-display-small: "Display Small";');
    expect(content).toContain('--md-sys-typescale-display-large: "Display Large";');
    
    // Verify reference tokens are converted to CSS variable references (system tokens in :where(.md-typography))
    expect(content).toContain('--md-sys-typescale-display-small-font: var(--md-ref-typeface-brand);');
    expect(content).toContain('--md-sys-typescale-title-medium-weight: var(--md-ref-typeface-weight-medium);');
    
    // Verify core tokens are in :root block
    const rootBlockStart = content.indexOf(":root {");
    const rootBlockEnd = content.indexOf(":where(.md-typography) {");
    const refBrandIndex = content.indexOf("--md-ref-typeface-brand:");
    expect(refBrandIndex).toBeGreaterThan(-1);
    expect(refBrandIndex).toBeGreaterThan(rootBlockStart);
    expect(refBrandIndex).toBeLessThan(rootBlockEnd);
    
    // Verify system tokens are in :where(.md-typography) block
    const sysDisplaySmallFontIndex = content.indexOf("--md-sys-typescale-display-small-font:");
    expect(sysDisplaySmallFontIndex).toBeGreaterThan(-1);
    expect(sysDisplaySmallFontIndex).toBeGreaterThan(rootBlockEnd);
    
    // Verify core tokens are defined before system tokens
    expect(refBrandIndex).toBeLessThan(sysDisplaySmallFontIndex);
    
    // Verify no duplicate ref tokens
    const refBrandMatches = (content.match(/--md-ref-typeface-brand:/g) || []).length;
    expect(refBrandMatches).toBe(1);
}

