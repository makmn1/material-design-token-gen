import { select, input } from "@inquirer/prompts";
import { Variant, SpecVersion } from "@materialx/material-color-utilities";
import type { ColorThemeAnswers } from "../types";
import { isHexString } from "../color-utils";

const VARIANT_OPTIONS = [
    { value: Variant.MONOCHROME, name: "MONOCHROME" },
    { value: Variant.NEUTRAL, name: "NEUTRAL" },
    { value: Variant.TONAL_SPOT, name: "TONAL_SPOT" },
    { value: Variant.VIBRANT, name: "VIBRANT" },
    { value: Variant.EXPRESSIVE, name: "EXPRESSIVE" },
    { value: Variant.FIDELITY, name: "FIDELITY" },
    { value: Variant.CONTENT, name: "CONTENT" },
    { value: Variant.RAINBOW, name: "RAINBOW" },
    { value: Variant.FRUIT_SALAD, name: "FRUIT_SALAD" },
];

const SPEC_VERSION_OPTIONS = [
    { value: SpecVersion.SPEC_2025, name: "Expressive (2025)" },
    { value: SpecVersion.SPEC_2021, name: "Legacy (2021)" },
];

const MODE_OPTIONS = [
    { value: "LIGHT" as const, name: "LIGHT" },
    { value: "DARK" as const, name: "DARK" },
    { value: "BOTH" as const, name: "BOTH" },
];

/**
 * Prompt for primary color seeding method.
 */
async function promptPrimaryColorSeeding(): Promise<{
    primaryPaletteKeyColorHex?: string;
    imagePath?: string;
}> {
    const method = await select({
        message: "How do you want to seed the theme's primary color?",
        choices: [
            { value: "default", name: "Use the default color #6750A4" },
            { value: "hex", name: "Use a color hex value (e.g. #3F9BC7)" },
            { value: "image", name: "Use an image (must give an image path, e.g. \"image.jpg\")" },
        ],
    });

    if (method === "default") {
        return {};
    } else if (method === "hex") {
        const hex = await input({
            message: "Enter your hex code (e.g. #3F9BC7 or 3F9BC7)",
            validate: (value) => {
                const normalized = value.trim().startsWith("#") ? value.trim() : `#${value.trim()}`;
                if (!isHexString(normalized)) {
                    return "Please enter a valid hex color (e.g. #3F9BC7 or 3F9BC7)";
                }
                return true;
            },
        });
        return { primaryPaletteKeyColorHex: hex.trim() };
    } else {
        const imagePath = await input({
            message: "Enter the path to your image relative to your project directory (e.g. public/theme/logo.jpg)",
            validate: (value) => {
                if (!value.trim()) {
                    return "Please enter a valid image path";
                }
                return true;
            },
        });
        return { imagePath: imagePath.trim() };
    }
}

/**
 * Prompt for optional palette colors.
 */
async function promptOptionalPalettes(): Promise<{
    secondaryPaletteKeyColorHex?: string;
    tertiaryPaletteKeyColorHex?: string;
    neutralPaletteKeyColorHex?: string;
    neutralVariantPaletteKeyColorHex?: string;
    errorPaletteKeyColorHex?: string;
}> {
    const wantsCustomization = await select({
        message: "Do you want to customize the other color palettes (e.g. secondary, tertiary)? Choose no to use generated colors from Material",
        choices: [
            { value: true, name: "Yes" },
            { value: false, name: "No, let Material generate the other color palettes" },
        ],
    });

    if (!wantsCustomization) {
        return {};
    }

    const secondary = await input({
        message: "What HEX color should be used represent the secondary color palette? (Leave blank to use generated colors from Material)",
        default: "",
        validate: (value) => {
            if (!value.trim()) return true;
            const normalized = value.trim().startsWith("#") ? value.trim() : `#${value.trim()}`;
            if (!isHexString(normalized)) {
                return "Please enter a valid hex color (e.g. #3F9BC7) or leave blank";
            }
            return true;
        },
    });

    const tertiary = await input({
        message: "What HEX color should be used represent the tertiary color palette? (Leave blank to use generated colors from Material)",
        default: "",
        validate: (value) => {
            if (!value.trim()) return true;
            const normalized = value.trim().startsWith("#") ? value.trim() : `#${value.trim()}`;
            if (!isHexString(normalized)) {
                return "Please enter a valid hex color (e.g. #3F9BC7) or leave blank";
            }
            return true;
        },
    });

    const neutral = await input({
        message: "What HEX color should be used represent the neutral color palette? (Leave blank to use generated colors from Material)",
        default: "",
        validate: (value) => {
            if (!value.trim()) return true;
            const normalized = value.trim().startsWith("#") ? value.trim() : `#${value.trim()}`;
            if (!isHexString(normalized)) {
                return "Please enter a valid hex color (e.g. #3F9BC7) or leave blank";
            }
            return true;
        },
    });

    const neutralVariant = await input({
        message: "What HEX color should be used represent the neutral variant color palette? (Leave blank to use generated colors from Material)",
        default: "",
        validate: (value) => {
            if (!value.trim()) return true;
            const normalized = value.trim().startsWith("#") ? value.trim() : `#${value.trim()}`;
            if (!isHexString(normalized)) {
                return "Please enter a valid hex color (e.g. #3F9BC7) or leave blank";
            }
            return true;
        },
    });

    const error = await input({
        message: "What HEX color should be used represent the error color palette? (Leave blank to use generated colors from Material)",
        default: "",
        validate: (value) => {
            if (!value.trim()) return true;
            const normalized = value.trim().startsWith("#") ? value.trim() : `#${value.trim()}`;
            if (!isHexString(normalized)) {
                return "Please enter a valid hex color (e.g. #3F9BC7) or leave blank";
            }
            return true;
        },
    });

    return {
        secondaryPaletteKeyColorHex: secondary.trim() || undefined,
        tertiaryPaletteKeyColorHex: tertiary.trim() || undefined,
        neutralPaletteKeyColorHex: neutral.trim() || undefined,
        neutralVariantPaletteKeyColorHex: neutralVariant.trim() || undefined,
        errorPaletteKeyColorHex: error.trim() || undefined,
    };
}

/**
 * Run all color theme questions and return answers.
 */
export async function promptColorTheme(): Promise<ColorThemeAnswers> {
    const primaryColorResult = await promptPrimaryColorSeeding();
    const optionalPalettes = await promptOptionalPalettes();

    const variant = await select({
        message: "What theme variant do you want to generate? (check the README for guidance)",
        choices: VARIANT_OPTIONS,
    });

    const mode = await select({
        message: "Light mode, dark mode, or both?",
        choices: MODE_OPTIONS,
    });

    const specVersion = await select({
        message: "What color spec do you want to use?",
        choices: SPEC_VERSION_OPTIONS,
    });

    const contrastLevelStr = await input({
        message: "What contrast level do you want to use? Pick a number between -1.0 and 1.0. Leave blank to use the default value of 0",
        default: "0.0",
        validate: (value) => {
            if (!value.trim()) return true;
            const num = parseFloat(value.trim());
            if (isNaN(num)) {
                return "Please enter a valid number";
            }
            if (num < -1 || num > 1) {
                return "Contrast level must be between -1.0 and 1.0";
            }
            return true;
        },
    });

    const contrastLevel = contrastLevelStr.trim() ? parseFloat(contrastLevelStr.trim()) : 0.0;

    return {
        ...primaryColorResult,
        ...optionalPalettes,
        variant,
        mode,
        specVersion,
        contrastLevel,
    };
}

