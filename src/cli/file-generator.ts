import * as fs from "node:fs/promises";
import * as path from "node:path";
import type { TokensBundle } from "../index";
import type { FileDescriptor, Mode } from "./types";
import { formatCssFile } from "./css-formatter";

const WARNING =
    `/* ⚠️ AUTO-GENERATED FILE\n` +
    ` * DO NOT EDIT — this stylesheet is managed by the CLI.\n` +
    ` * Put overrides in your own custom stylesheet and import it after these files.\n` +
    ` */\n`;

export type NonColorGroup = "typography" | "elevation" | "motion" | "shape" | "state";

export const GROUP_FILES = {
    colors: ["colors.light.css", "colors.dark.css"],
    typography: ["typography.css"],
    elevation: ["elevation.css"],
    motion: ["motion.css"],
    shape: ["shape.css"],
    state: ["state.css"],
} as const;

export function toKebab(s: string): string {
    return s.replace(/\./g, "-").replace(/_/g, "-");
}

/**
 * Check if a value is a reference token (md.ref.* or md.sys.* pattern).
 */
function isReferenceToken(value: string | number): boolean {
    return typeof value === "string" && (value.startsWith("md.ref.") || value.startsWith("md.sys."));
}

/**
 * Convert a reference token value to a CSS variable reference.
 */
function toCssVarRef(tokenKey: string): string {
    return `var(--${toKebab(tokenKey)})`;
}

/**
 * Check if a string is a hex color value (#RRGGBB or #RRGGBBAA).
 */
function isHexColor(value: string): boolean {
    const trimmed = value.trim();
    return /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{8}$/.test(trimmed);
}

/**
 * Check if a string is a CSS value (contains CSS units like rem, em, px, %, etc.).
 */
function isCssValue(value: string): boolean {
    const trimmed = value.trim();
    return /[0-9.+\-]\s*(rem|em|px|%|deg|rad|grad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx|fr|vw|vh|vmin|vmax|cm|mm|in|pt|pc|ex|ch|cap|ic|lh|rlh|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cqw|cqh|cqi|cqb|cqmin|cqmax)\s*$/i.test(trimmed);
}

/**
 * Format a CSS value, quoting string labels and converting reference tokens.
 * CSS values (with units) and hex colors are not quoted, but string labels are.
 */
function formatCssValue(value: string | number): string {
    if (typeof value === "number") {
        return String(value);
    }
    
    if (isReferenceToken(value)) {
        return toCssVarRef(value);
    }
    
    if (isHexColor(value)) {
        return value;
    }
    
    if (isCssValue(value)) {
        return value;
    }
    
    return `"${value}"`;
}

export function toCssVars(vars: Record<string, string | number>, indent = 4): string {
    const pad = " ".repeat(indent);
    return Object.entries(vars)
        .map(([k, v]) => `${pad}--${toKebab(k)}: ${formatCssValue(v)};`)
        .join("\n");
}

/**
 * Build the light/dark color CSS for a generated bundle (colors only).
 */
export function buildColorsCss(bundle: TokensBundle): { light: string; dark: string } {
    if (!bundle.colors) {
        throw new Error("Colors are required but not present in bundle");
    }
    const colors = bundle.colors as Record<string, string | number>;
    const vars = toCssVars(colors, 4);

    const light =
        `${WARNING}` +
        `@layer tokens {\n` +
        `:root,\n` +
        `:root.light,\n` +
        `:root[data-theme="light"] {\n` +
        `${vars}\n` +
        `}\n` +
        `@media (prefers-color-scheme: light) {\n` +
        `    :root {\n${vars}\n    }\n` +
        `}\n` +
        `}\n`;

    const dark =
        `${WARNING}` +
        `@layer tokens {\n` +
        `:root.dark,\n` +
        `:root[data-theme="dark"] {\n` +
        `${vars}\n` +
        `}\n` +
        `@media (prefers-color-scheme: dark) {\n` +
        `    :root {\n${vars}\n    }\n` +
        `}\n` +
        `}\n`;

    return { light, dark };
}

/**
 * Build a non-color group CSS (:root variables in a tokens layer).
 * Handles ref tokens separately and converts references to CSS variables for all groups.
 */
export function buildNonColorCss(bundle: TokensBundle, group: NonColorGroup): string {
    const map = bundle[group];
    if (!map) {
        throw new Error(`${group} tokens are required but not present in bundle`);
    }
    
    const tokens = map as Record<string, string | number>;
    
    const refTokens: Record<string, string | number> = {};
    const otherTokens: Record<string, string | number> = {};
    
    for (const [key, value] of Object.entries(tokens)) {
        if (key.startsWith("md.ref.")) {
            refTokens[key] = value;
        } else {
            otherTokens[key] = value;
        }
    }
    
    const refVars = toCssVars(refTokens, 4);
    
    const otherVars = Object.entries(otherTokens)
        .map(([k, v]) => {
            const pad = " ".repeat(4);
            const cssValue = formatCssValue(v);
            return `${pad}--${toKebab(k)}: ${cssValue};`;
        })
        .join("\n");
    
    return (
        `${WARNING}` +
        `@layer tokens {\n` +
        `:root {\n` +
        `${refVars}\n` +
        `${otherVars}\n` +
        `}\n` +
        `}\n`
    );
}

/**
 * Build ripples CSS (static styles for ripple effects).
 * Returns CSS content with a WARNING header and all ripple styles.
 */
export function buildRipplesCss(): string {
    return (
        `${WARNING}` +
        `.simply-mat-ripple {\n` +
        `  position: relative;\n` +
        `  overflow: visible;\n` +
        `  -webkit-tap-highlight-color: transparent;\n` +
        `  --sm-ripple-origin-x: 0.5;\n` +
        `  --sm-ripple-origin-y: 0.5;\n` +
        `}\n\n` +
        `.simply-mat-ripple__surface {\n` +
        `  position: absolute;\n` +
        `  inset: 0;\n` +
        `  overflow: hidden;\n` +
        `  border-radius: inherit;\n` +
        `  pointer-events: none;\n` +
        `}\n\n` +
        `.sm-ripple__wave {\n` +
        `  position: absolute;\n` +
        `  pointer-events: none;\n` +
        `  border-radius: 50%;\n` +
        `  background: currentColor;\n\n` +
        `  /* Position the center of the ripple using fractional origins from the directive */\n` +
        `  left: calc(var(--sm-ripple-origin-x) * 100%);\n` +
        `  top: calc(var(--sm-ripple-origin-y) * 100%);\n` +
        `  transform: translate(-50%, -50%) scale(0);\n\n` +
        `  opacity: 0.25;\n` +
        `  animation-name: sm-ripple-wave;\n` +
        `  animation-duration: 1000ms;\n` +
        `  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n` +
        `  animation-fill-mode: forwards;\n` +
        `}\n\n` +
        `@keyframes sm-ripple-wave {\n` +
        `  60% {\n` +
        `    transform: translate(-50%, -50%) scale(1);\n` +
        `  } /* grow the circle */\n` +
        `  100% {\n` +
        `    transform: translate(-50%, -50%) scale(1);\n` +
        `    opacity: 0;\n` +
        `  } /* then fade out */\n` +
        `}\n\n` +
        `/* Respect reduced motion */\n` +
        `@media (prefers-reduced-motion: reduce) {\n` +
        `  .sm-ripple__wave {\n` +
        `    animation-duration: 0ms;\n` +
        `  }\n` +
        `}\n`
    );
}

/**
 * Generate ripples CSS file.
 * If generateFiles is true, writes to filesystem; otherwise returns file descriptors.
 */
export async function generateRipplesFile(
    outDir: string,
    generateFiles: boolean
): Promise<FileDescriptor[]> {
    const content = buildRipplesCss();
    const filePath = path.join(outDir, "ripples.css");
    const files: FileDescriptor[] = [];

    if (generateFiles) {
        await fs.mkdir(outDir, { recursive: true });
        await fs.writeFile(filePath, content, "utf-8");
        await formatCssFile(filePath);
        const formatted = await fs.readFile(filePath, "utf-8");
        files.push({ path: filePath, content: formatted });
    } else {
        files.push({ path: filePath, content });
    }

    return files;
}

/**
 * Generate color files according to mode.
 * Returns FileDescriptor array if generateFiles is false, otherwise writes to filesystem.
 */
export async function generateColorFiles(
    bundle: TokensBundle,
    mode: Mode,
    outDir: string,
    generateFiles: boolean
): Promise<FileDescriptor[]> {
    const { light, dark } = buildColorsCss(bundle);
    const needLight = mode === "LIGHT" || mode === "BOTH";
    const needDark = mode === "DARK" || mode === "BOTH";

    const files: FileDescriptor[] = [];

    if (needLight) {
        const filePath = path.join(outDir, "colors.light.css");
        if (generateFiles) {
            await fs.mkdir(outDir, { recursive: true });
            await fs.writeFile(filePath, light, "utf-8");
            await formatCssFile(filePath);
            const formatted = await fs.readFile(filePath, "utf-8");
            files.push({ path: filePath, content: formatted });
        } else {
            files.push({ path: filePath, content: light });
        }
    }

    if (needDark) {
        const filePath = path.join(outDir, "colors.dark.css");
        if (generateFiles) {
            await fs.mkdir(outDir, { recursive: true });
            await fs.writeFile(filePath, dark, "utf-8");
            await formatCssFile(filePath);
            const formatted = await fs.readFile(filePath, "utf-8");
            files.push({ path: filePath, content: formatted });
        } else {
            files.push({ path: filePath, content: dark });
        }
    }

    return files;
}

/**
 * Generate non-color group files.
 * Returns FileDescriptor array if generateFiles is false, otherwise writes to filesystem.
 */
export async function generateNonColorFiles(
    bundle: TokensBundle,
    include: Partial<Record<NonColorGroup, boolean>>,
    outDir: string,
    generateFiles: boolean
): Promise<FileDescriptor[]> {
    const files: FileDescriptor[] = [];
    const groups: NonColorGroup[] = ["typography", "elevation", "motion", "shape", "state"];

    for (const group of groups) {
        if (include[group]) {
            const rel = GROUP_FILES[group][0];
            const filePath = path.join(outDir, rel);
            const content = buildNonColorCss(bundle, group);
            if (generateFiles) {
                await fs.mkdir(outDir, { recursive: true });
                await fs.writeFile(filePath, content, "utf-8");
                await formatCssFile(filePath);
                const formatted = await fs.readFile(filePath, "utf-8");
                files.push({ path: filePath, content: formatted });
            } else {
                files.push({ path: filePath, content });
            }
        }
    }

    return files;
}

/**
 * Build component CSS for a single component type.
 * Generates :root variables in a tokens layer with token references converted to CSS variables.
 */
export function buildComponentCss(componentName: string, tokens: Record<string, string | number>): string {
    const vars = Object.entries(tokens)
        .map(([k, v]) => {
            const pad = " ".repeat(4);
            const cssValue = formatCssValue(v);
            return `${pad}--${toKebab(k)}: ${cssValue};`;
        })
        .join("\n");

    return (
        `${WARNING}` +
        `@layer tokens {\n` +
        `:root {\n` +
        `${vars}\n` +
        `}\n` +
        `}\n`
    );
}

/**
 * Generate component CSS files.
 * Returns FileDescriptor array if generateFiles is false, otherwise writes to filesystem.
 */
export async function generateComponentFiles(
    componentTokens: Record<string, Record<string, string | number>>,
    outDir: string,
    generateFiles: boolean
): Promise<FileDescriptor[]> {
    const files: FileDescriptor[] = [];

    for (const [componentName, tokens] of Object.entries(componentTokens)) {
        const fileName = `${componentName}.css`;
        const filePath = path.join(outDir, fileName);
        const content = buildComponentCss(componentName, tokens);

        if (generateFiles) {
            await fs.mkdir(outDir, { recursive: true });
            await fs.writeFile(filePath, content, "utf-8");
            await formatCssFile(filePath);
            const formatted = await fs.readFile(filePath, "utf-8");
            files.push({ path: filePath, content: formatted });
        } else {
            files.push({ path: filePath, content });
        }
    }

    return files;
}

/**
 * Generate consolidated tokens.css file with imports.
 * If generateFiles is true, writes to filesystem; otherwise returns file descriptor.
 */
export async function generateConsolidatedFile(
    imports: string[],
    outDir: string,
    generateFiles: boolean
): Promise<FileDescriptor> {
    const lines = [
        WARNING,
        `@layer tokens;`,
        ...imports.map((p) => {
            if (!p.includes(path.sep) && !p.includes("/")) {
                return `@import url("./${p}") layer(tokens);`;
            }
            
            const relativePath = path.relative(outDir, p);
            const normalizedPath = relativePath.replace(/\\/g, "/");
            const importPath = normalizedPath.startsWith(".") ? normalizedPath : `./${normalizedPath}`;
            return `@import url("${importPath}") layer(tokens);`;
        }),
        ``,
    ];
    const content = lines.join("\n");
    const filePath = path.join(outDir, "tokens.css");

    if (generateFiles) {
        await fs.mkdir(outDir, { recursive: true });
        await fs.writeFile(filePath, content, "utf-8");
        await formatCssFile(filePath);
        const formatted = await fs.readFile(filePath, "utf-8");
        return { path: filePath, content: formatted };
    }

    return { path: filePath, content };
}

/**
 * Generate all token files (colors, non-colors, ripples, consolidated).
 * If generateFiles is true, writes to filesystem; otherwise returns file descriptors.
 */
export async function generateAllFiles(
    bundle: TokensBundle,
    mode: Mode,
    include: Partial<Record<NonColorGroup, boolean>>,
    outDir: string,
    generateFiles: boolean
): Promise<FileDescriptor[]> {
    const allFiles: FileDescriptor[] = [];

    const colorFiles = await generateColorFiles(bundle, mode, outDir, generateFiles);
    allFiles.push(...colorFiles);

    const nonColorFiles = await generateNonColorFiles(bundle, include, outDir, generateFiles);
    allFiles.push(...nonColorFiles);

    const ripplesFiles = await generateRipplesFile(outDir, generateFiles);
    allFiles.push(...ripplesFiles);

    const importPaths = [
        ...colorFiles.map((f) => f.path),
        ...nonColorFiles.map((f) => f.path),
        ...ripplesFiles.map((f) => f.path),
    ];
    const consolidated = await generateConsolidatedFile(importPaths, outDir, generateFiles);
    allFiles.push(consolidated);

    return allFiles;
}

