#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import { promptColorTheme } from "../cli";
import { generateFromThemeColor } from "../cli";
import type { ThemeColorAnswers } from "../cli/types";

async function main() {
    try {
        const colorTheme = await promptColorTheme();

        const outputPath = await input({
            message: "What directory do you want to place the generated CSS files in? (Enter a relative path such as 'src/app/styles/' or leave blank to generate at default directory)",
            default: "src/styles/simply-material",
        });

        const answers: ThemeColorAnswers = {
            colorTheme,
            outputPath: (outputPath?.trim() || "src/styles/simply-material") as string,
        };

        const files = await generateFromThemeColor(answers, { generateFiles: true });

        console.log(`\n✅ Successfully generated ${files.length} file(s):`);
        files.forEach((file) => {
            console.log(`   - ${file.path}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error(`\n❌ Error: ${error.message}`);
        } else {
            console.error(`\n❌ Error:`, error);
        }
        process.exit(1);
    }
}

main();

