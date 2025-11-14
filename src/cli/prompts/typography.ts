import { select, input } from "@inquirer/prompts";
import type { TypographyAnswers } from "../types";

/**
 * Run all typography questions and return answers.
 */
export async function promptTypography(): Promise<TypographyAnswers> {
    const brandTypeface = await input({
        message: "What font do you want to use for your brand typeface (display, title, and headings)? Leave blank to use Material Design default \"Roboto\"",
        default: "Roboto",
    });

    const plainTypeface = await input({
        message: "What font do you want to use for your plain typeface (body and label)? Leave blank to use Material Design default \"Roboto\"",
        default: "Roboto",
    });

    const wantsWeightCustomization = await select({
        message: "Do you want to customize font weights (regular, medium, and bold)?",
        choices: [
            { value: true, name: "Yes" },
            { value: false, name: "No, use Material defaults" },
        ],
    });

    let weightRegular = 400;
    let weightMedium = 500;
    let weightBold = 700;

    if (wantsWeightCustomization) {
        const weightRegularStr = await input({
            message: "What font weight do you want to use for regular? Leave blank to use Material Design default of 400",
            default: "400",
            validate: (value) => {
                if (!value.trim()) return true;
                const num = parseFloat(value.trim());
                if (isNaN(num) || num < 1 || num > 1000) {
                    return "Please enter a valid font weight between 1 and 1000";
                }
                return true;
            },
        });

        const weightMediumStr = await input({
            message: "What font weight do you want to use for medium? Leave blank to use Material Design default of 500",
            default: "500",
            validate: (value) => {
                if (!value.trim()) return true;
                const num = parseFloat(value.trim());
                if (isNaN(num) || num < 1 || num > 1000) {
                    return "Please enter a valid font weight between 1 and 1000";
                }
                return true;
            },
        });

        const weightBoldStr = await input({
            message: "What font weight do you want to use for bold? Leave blank to use Material Design default of 700",
            default: "700",
            validate: (value) => {
                if (!value.trim()) return true;
                const num = parseFloat(value.trim());
                if (isNaN(num) || num < 1 || num > 1000) {
                    return "Please enter a valid font weight between 1 and 1000";
                }
                return true;
            },
        });

        weightRegular = weightRegularStr.trim() ? parseFloat(weightRegularStr.trim()) : 400;
        weightMedium = weightMediumStr.trim() ? parseFloat(weightMediumStr.trim()) : 500;
        weightBold = weightBoldStr.trim() ? parseFloat(weightBoldStr.trim()) : 700;
    }

    return {
        brandTypeface: brandTypeface.trim() || "Roboto",
        plainTypeface: plainTypeface.trim() || "Roboto",
        weightRegular,
        weightMedium,
        weightBold,
    };
}

