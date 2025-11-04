import * as fs from "node:fs/promises";
import {
    argbFromHex,
    sourceColorFromImageBytes,
    Hct,
    DynamicScheme,
    Variant,
    SpecVersion,
    Platform,
    hexFromArgb,
} from "@materialx/material-color-utilities";
import type { ColorThemeAnswers, DynamicSchemeFromInput, Mode } from "./types";

export function isHexString(s: string): boolean {
    return /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(s);
}

export function normalizeHex(hex: string): string {
    const cleaned = hex.replace(/^#/, "");
    return `#${cleaned}`;
}

/**
 * Resolve seed color from hex string or image path.
 * Returns default color #6750A4 if neither is provided.
 */
export async function resolveSeedHct(input: {
    seedColorHex?: string;
    seedImagePath?: string;
}): Promise<Hct> {
    if (!input) {
        return Hct.fromInt(0xff6750a4);
    }
    if (input.seedColorHex) {
        const normalized = normalizeHex(input.seedColorHex);
        if (!isHexString(normalized)) {
            throw new Error(`Invalid hex color: ${input.seedColorHex}`);
        }
        const argb = argbFromHex(normalized);
        return Hct.fromInt(argb);
    } else if (input.seedImagePath) {
        const buf = await fs.readFile(input.seedImagePath);
        const bytes = new Uint8ClampedArray(buf);
        const argb = sourceColorFromImageBytes(bytes);
        return Hct.fromInt(argb);
    }
    return Hct.fromInt(0xff6750a4);
}

/**
 * Quantize an image and extract the seed color.
 * Outputs progress messages to console.
 */
export async function quantizeImage(imagePath: string): Promise<string> {
    console.log("Quantizing image...");
    const buf = await fs.readFile(imagePath);
    const bytes = new Uint8ClampedArray(buf);
    const argb = sourceColorFromImageBytes(bytes);
    const hex = hexFromArgb(argb);
    console.log(`Quantization successful! Extracted seed color: ${hex}`);
    return hex;
}

/**
 * Build DynamicScheme from user answers.
 */
export async function buildSchemeFromAnswers(
    answers: ColorThemeAnswers,
    modeType: "light" | "dark"
): Promise<DynamicScheme> {
    const isDark = modeType === "dark";
    const variant = answers.variant ?? Variant.EXPRESSIVE;
    const specVersion = answers.specVersion ?? SpecVersion.SPEC_2025;
    const contrastLevel = answers.contrastLevel ?? 0;

    if (contrastLevel < -1 || contrastLevel > 1) {
        throw new Error(
            `contrastLevel must be between -1 and 1 inclusive; received ${contrastLevel}`
        );
    }

    let primaryPaletteKeyColor: Hct;
    if (answers.imagePath) {
        const hex = await quantizeImage(answers.imagePath);
        primaryPaletteKeyColor = Hct.fromInt(argbFromHex(hex));
    } else if (answers.primaryPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.primaryPaletteKeyColorHex);
        primaryPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    } else {
        primaryPaletteKeyColor = Hct.fromInt(0xff6750a4);
    }

    const base: any = {
        sourceColorHct: primaryPaletteKeyColor,
        isDark,
        contrastLevel,
        variant,
        specVersion,
        platform: Platform.PHONE,
    };

    if (answers.secondaryPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.secondaryPaletteKeyColorHex);
        base.secondaryPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.tertiaryPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.tertiaryPaletteKeyColorHex);
        base.tertiaryPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.neutralPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.neutralPaletteKeyColorHex);
        base.neutralPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.neutralVariantPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.neutralVariantPaletteKeyColorHex);
        base.neutralVariantPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.errorPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.errorPaletteKeyColorHex);
        base.errorPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }

    return DynamicScheme.from(base);
}

/**
 * Convert ColorThemeAnswers to DynamicSchemeFromInput format.
 */
export function answersToSchemeInput(
    answers: ColorThemeAnswers,
    expressiveMotion: boolean
): DynamicSchemeFromInput {
    const input: DynamicSchemeFromInput = {
        variant: answers.variant,
        specVersion: answers.specVersion,
        contrastLevel: answers.contrastLevel,
        platform: Platform.PHONE,
    };

    if (answers.primaryPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.primaryPaletteKeyColorHex);
        input.primaryPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.secondaryPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.secondaryPaletteKeyColorHex);
        input.secondaryPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.tertiaryPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.tertiaryPaletteKeyColorHex);
        input.tertiaryPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.neutralPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.neutralPaletteKeyColorHex);
        input.neutralPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.neutralVariantPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.neutralVariantPaletteKeyColorHex);
        input.neutralVariantPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }
    if (answers.errorPaletteKeyColorHex) {
        const normalized = normalizeHex(answers.errorPaletteKeyColorHex);
        input.errorPaletteKeyColor = Hct.fromInt(argbFromHex(normalized));
    }

    return input;
}

