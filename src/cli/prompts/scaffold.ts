import { select, input } from "@inquirer/prompts";
import type { ScaffoldAnswers, MotionVariant } from "../types";
import { promptColorTheme } from "./color";
import { promptTypography } from "./typography";

/**
 * Run all scaffold questions and return answers.
 */
export async function promptScaffold(): Promise<ScaffoldAnswers> {
    const wantsCustomizations = await select({
        message: "Do you want to add any customizations?",
        choices: [
            { value: true, name: "Yes" },
            { value: false, name: "No, generate the default tokens" },
        ],
    });

    if (!wantsCustomizations) {
        // Return defaults and skip to output question
        const outputPath = await input({
            message: "What directory do you want to place the generated CSS files in? (Enter a relative path such as 'src/app/styles/' or leave blank to generate at default directory)",
            default: "src/styles/simply-material",
        });

        const wantsComponentStyles = await select({
            message: "Do you want to generate stylesheets for the Material Design component styles? If you're using @simply-material/components, you'll need these styles for the library's components",
            choices: [
                { value: true, name: "Yes" },
                { value: false, name: "No" },
            ],
        });

        return {
            wantsCustomizations: false,
            motionVariant: "Expressive (2025)",
            wantsTypographyCustomization: false,
            outputPath: (outputPath?.trim() || "src/styles/simply-material") as string,
            wantsComponentStyles,
        };
    }

    // Customization flow
    const colorTheme = await promptColorTheme();

    const motionVariant = await select({
        message: "What animation tokens do you want to use?",
        choices: [
            { value: "Expressive (2025)" as MotionVariant, name: "Expressive (2025)" },
            { value: "Legacy (2021)" as MotionVariant, name: "Legacy (2021)" },
        ],
    });

    const wantsTypographyCustomization = await select({
        message: "Do you want to customize typography options (base font size, font weights)?",
        choices: [
            { value: true, name: "Yes" },
            { value: false, name: "No, generate the default typography tokens" },
        ],
    });

    let typography: ScaffoldAnswers["typography"];
    if (wantsTypographyCustomization) {
        typography = await promptTypography();
    }

    const outputPath = await input({
        message: "What directory do you want to place the generated CSS files in? (Enter a relative path such as 'src/app/styles/' or leave blank to generate at default directory)",
        default: "src/styles/simply-material",
    });

    const wantsComponentStyles = await select({
        message: "Do you want to generate stylesheets for the Material Design component styles? If you're using @simply-material/components, you'll need these styles for the library's components",
        choices: [
            { value: true, name: "Yes" },
            { value: false, name: "No" },
        ],
    });

    return {
        wantsCustomizations: true,
        motionVariant,
        wantsTypographyCustomization,
        typography,
        colorTheme,
        outputPath: (outputPath?.trim() || "src/styles/simply-material") as string,
        wantsComponentStyles,
    };
}

