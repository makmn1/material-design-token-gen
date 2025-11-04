import * as fs from "node:fs/promises";
import prettier from "prettier";

/**
 * Format a CSS file using prettier.
 * Reads the file, formats it, and writes it back.
 * Only formats if the file exists and has a .css extension.
 *
 * @param filePath - Path to the CSS file to format
 * @throws Will not throw, but logs warning if formatting fails
 */
export async function formatCssFile(filePath: string): Promise<void> {
    try {
        if (!filePath.endsWith(".css")) {
            return;
        }

        try {
            await fs.access(filePath);
        } catch {
            return;
        }

        const content = await fs.readFile(filePath, "utf-8");
        const formatted = await prettier.format(content, {
            parser: "css",
        });

        if (formatted !== content) {
            await fs.writeFile(filePath, formatted, "utf-8");
        }
    } catch (error) {
        console.warn(`Warning: Failed to format CSS file ${filePath}:`, error);
    }
}

