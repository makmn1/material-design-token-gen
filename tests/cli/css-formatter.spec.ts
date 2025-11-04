import { describe, it, expect } from "vitest";
import { formatCssFile } from "../../src/cli/css-formatter";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { tmpdir } from "node:os";
import prettier from "prettier";

describe("css-formatter", () => {
    describe("formatCssFile", () => {
        it("formats a CSS file with prettier", async () => {
            const tempDir = path.join(tmpdir(), `test-css-formatter-${Date.now()}`);
            const testFile = path.join(tempDir, "test.css");
            const unformattedCss = `/* Comment */
:root{
--var1:value1;
--var2:value2;
}`;

            try {
                await fs.mkdir(tempDir, { recursive: true });
                await fs.writeFile(testFile, unformattedCss, "utf-8");

                await formatCssFile(testFile);

                const formatted = await fs.readFile(testFile, "utf-8");
                expect(formatted).not.toBe(unformattedCss);
                const isFormatted = await prettier.check(formatted, { parser: "css" });
                expect(isFormatted).toBe(true);
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });

        it("does not format non-CSS files", async () => {
            const tempDir = path.join(tmpdir(), `test-css-formatter-${Date.now()}`);
            const testFile = path.join(tempDir, "test.txt");
            const content = "some content";

            try {
                await fs.mkdir(tempDir, { recursive: true });
                await fs.writeFile(testFile, content, "utf-8");

                await formatCssFile(testFile);

                const fileContent = await fs.readFile(testFile, "utf-8");
                expect(fileContent).toBe(content);
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });

        it("does not throw if file does not exist", async () => {
            const nonExistentFile = path.join(tmpdir(), `non-existent-${Date.now()}.css`);
            await expect(formatCssFile(nonExistentFile)).resolves.not.toThrow();
        });

        it("formats already formatted CSS correctly", async () => {
            const tempDir = path.join(tmpdir(), `test-css-formatter-${Date.now()}`);
            const testFile = path.join(tempDir, "test.css");
            const formattedCss = `/* Comment */
:root {
    --var1: value1;
    --var2: value2;
}
`;

            try {
                await fs.mkdir(tempDir, { recursive: true });
                await fs.writeFile(testFile, formattedCss, "utf-8");

                await formatCssFile(testFile);

                const afterFormat = await fs.readFile(testFile, "utf-8");
                const isFormatted = await prettier.check(afterFormat, { parser: "css" });
                expect(isFormatted).toBe(true);
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });

        it("handles errors gracefully", async () => {
            const tempDir = path.join(tmpdir(), `test-css-formatter-${Date.now()}`);
            try {
                await fs.mkdir(tempDir, { recursive: true });
                await expect(formatCssFile(tempDir)).resolves.not.toThrow();
            } finally {
                await fs.rm(tempDir, { recursive: true, force: true });
            }
        });
    });
});

