import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: false,
        include: ["tests/**/*.spec.ts"],
        environment: "node"
    }
});