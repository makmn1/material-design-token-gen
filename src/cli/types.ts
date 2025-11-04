import type {
    Variant,
    SpecVersion,
    Platform,
    Hct,
} from "@materialx/material-color-utilities";

export type Mode = "LIGHT" | "DARK" | "BOTH";

export type MotionVariant = "Expressive (2025)" | "Legacy (2021)";

export interface ColorThemeAnswers {
    primaryPaletteKeyColorHex?: string;
    imagePath?: string;
    secondaryPaletteKeyColorHex?: string;
    tertiaryPaletteKeyColorHex?: string;
    neutralPaletteKeyColorHex?: string;
    neutralVariantPaletteKeyColorHex?: string;
    errorPaletteKeyColorHex?: string;
    variant: Variant;
    mode: Mode;
    specVersion: SpecVersion;
    contrastLevel: number;
}

export interface TypographyAnswers {
    brandTypeface: string;
    plainTypeface: string;
    rootFontSizePx: number;
    weightRegular: number;
    weightMedium: number;
    weightBold: number;
}

export interface ScaffoldAnswers {
    wantsCustomizations: boolean;
    motionVariant: MotionVariant;
    wantsTypographyCustomization: boolean;
    typography?: TypographyAnswers;
    colorTheme?: ColorThemeAnswers;
    outputPath: string;
    wantsComponentStyles?: boolean;
}

export interface ThemeColorAnswers {
    colorTheme: ColorThemeAnswers;
    outputPath: string;
}

export interface DynamicSchemeFromInput {
    mode?: Mode;
    variant?: Variant;
    specVersion?: SpecVersion;
    contrastLevel?: number;
    platform?: Platform;

    primaryPaletteKeyColor?: Hct;
    secondaryPaletteKeyColor?: Hct;
    tertiaryPaletteKeyColor?: Hct;
    neutralPaletteKeyColor?: Hct;
    neutralVariantPaletteKeyColor?: Hct;
    errorPaletteKeyColor?: Hct;
}

export interface FileDescriptor {
    path: string;
    content: string;
}

