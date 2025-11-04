import * as path from "node:path";
import * as fs from "node:fs/promises";
import { generateTokens } from "../index";
import type {
    ScaffoldAnswers,
    ThemeColorAnswers,
    FileDescriptor,
    Mode,
} from "./types";
import { buildSchemeFromAnswers } from "./color-utils";
import {
    generateColorFiles,
    generateNonColorFiles,
    generateConsolidatedFile,
    generateComponentFiles,
    generateRipplesFile,
} from "./file-generator";
import { generateComponentTokens } from "../components/components";
import { DynamicScheme, Variant, SpecVersion } from "@materialx/material-color-utilities";

export { promptScaffold } from "./prompts/scaffold";
export { promptColorTheme } from "./prompts/color";
export { promptTypography } from "./prompts/typography";

export interface CliOptions {
    generateFiles?: boolean;
}

/**
 * Generate tokens from scaffold answers.
 */
export async function generateFromScaffold(
    answers: ScaffoldAnswers,
    options: CliOptions = {}
): Promise<FileDescriptor[]> {
    const { generateFiles = true } = options;

    const expressiveMotion = answers.motionVariant === "Expressive (2025)";
    const rootFontSizePx = answers.typography?.rootFontSizePx ?? 14;

    const nonColorBundle = generateTokens({
        expressiveMotion,
        webUnits: true,
        rootFontSizePx,
        include: {
            typography: true,
            elevation: true,
            motion: true,
            shape: true,
            state: true,
        },
        typography: answers.typography
            ? {
                  brandTypeface: answers.typography.brandTypeface,
                  plainTypeface: answers.typography.plainTypeface,
                  weightRegular: answers.typography.weightRegular,
                  weightMedium: answers.typography.weightMedium,
                  weightBold: answers.typography.weightBold,
              }
            : undefined,
    });

    const files: FileDescriptor[] = [];
    const mode: Mode = answers.colorTheme?.mode || "LIGHT";
    const outputPath = (answers.outputPath?.trim() || "src/styles/simply-material") as string;

    if (answers.colorTheme) {
        const needLight = mode === "LIGHT" || mode === "BOTH";
        const needDark = mode === "DARK" || mode === "BOTH";

        if (needLight) {
            const lightScheme = await buildSchemeFromAnswers(answers.colorTheme, "light");
            const lightBundle = generateTokens({
                dynamicScheme: lightScheme,
                expressiveMotion,
                webUnits: true,
                rootFontSizePx,
                include: { colors: true },
            });
            const colorFiles = await generateColorFiles(
                lightBundle,
                "LIGHT",
                outputPath,
                generateFiles
            );
            files.push(...colorFiles);
        }

        if (needDark) {
            const darkScheme = await buildSchemeFromAnswers(answers.colorTheme, "dark");
            const darkBundle = generateTokens({
                dynamicScheme: darkScheme,
                expressiveMotion,
                webUnits: true,
                rootFontSizePx,
                include: { colors: true },
            });
            const colorFiles = await generateColorFiles(
                darkBundle,
                "DARK",
                outputPath,
                generateFiles
            );
            files.push(...colorFiles);
        }
    } else {
        const lightBundle = generateTokens({
            expressiveMotion,
            webUnits: true,
            rootFontSizePx,
            include: { colors: true },
        });
        const lightFiles = await generateColorFiles(
            lightBundle,
            "LIGHT",
            outputPath,
            generateFiles
        );
        files.push(...lightFiles);

        const darkBundle = generateTokens({
            expressiveMotion,
            webUnits: true,
            rootFontSizePx,
            include: { colors: true },
            dynamicScheme: DynamicScheme.from({
                isDark: true,
                variant: Variant.EXPRESSIVE,
                specVersion: SpecVersion.SPEC_2025,
            }),
        });
        const darkFiles = await generateColorFiles(
            darkBundle,
            "DARK",
            outputPath,
            generateFiles
        );
        files.push(...darkFiles);
    }

    const include = {
        typography: true,
        elevation: true,
        motion: true,
        shape: true,
        state: true,
    };
    const nonColorFiles = await generateNonColorFiles(
        nonColorBundle,
        include,
        outputPath,
        generateFiles
    );
    files.push(...nonColorFiles);

    const ripplesFiles = await generateRipplesFile(outputPath, generateFiles);
    files.push(...ripplesFiles);

    if (answers.wantsComponentStyles) {
        const componentTokens = generateComponentTokens({
            webUnits: true,
            rootFontSizePx,
        });
        const componentDir = path.join(outputPath, "components");
        const componentFiles = await generateComponentFiles(
            componentTokens,
            componentDir,
            generateFiles
        );
        files.push(...componentFiles);
    } else {
        const componentDir = path.join(outputPath, "components");
        if (generateFiles) {
            try {
                await fs.rm(componentDir, { recursive: true, force: true });
            } catch {
                // Folder might not exist
            }
        }
    }

    const consolidated = await generateConsolidatedFile(
        files.map((f) => f.path),
        outputPath,
        generateFiles
    );
    files.push(consolidated);

    return files;
}

/**
 * Generate tokens from theme-color answers (color only).
 */
export async function generateFromThemeColor(
    answers: ThemeColorAnswers,
    options: CliOptions = {}
): Promise<FileDescriptor[]> {
    const { generateFiles = true } = options;

    const mode = answers.colorTheme.mode;
    const needLight = mode === "LIGHT" || mode === "BOTH";
    const needDark = mode === "DARK" || mode === "BOTH";

    const files: FileDescriptor[] = [];
    const outputPath = (answers.outputPath?.trim() || "src/styles/simply-material") as string;

    if (needLight) {
        const lightScheme = await buildSchemeFromAnswers(answers.colorTheme, "light");
        const lightBundle = generateTokens({
            dynamicScheme: lightScheme,
            webUnits: true,
            include: { colors: true },
        });
        const colorFiles = await generateColorFiles(
            lightBundle,
            "LIGHT",
            outputPath,
            generateFiles
        );
        files.push(...colorFiles);
    }

    if (needDark) {
        const darkScheme = await buildSchemeFromAnswers(answers.colorTheme, "dark");
        const darkBundle = generateTokens({
            dynamicScheme: darkScheme,
            webUnits: true,
            include: { colors: true },
        });
        const colorFiles = await generateColorFiles(
            darkBundle,
            "DARK",
            outputPath,
            generateFiles
        );
        files.push(...colorFiles);
    }

    const ripplesFiles = await generateRipplesFile(outputPath, generateFiles);
    files.push(...ripplesFiles);

    const consolidated = await generateConsolidatedFile(
        files.map((f) => f.path),
        outputPath,
        generateFiles
    );
    files.push(consolidated);

    return files;
}

