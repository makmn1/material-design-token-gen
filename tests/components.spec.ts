import { describe, it, expect } from "vitest";
import {generateComponentTokens} from "../src/components/components";

describe("generateComponentTokens()", () => {
    it("generates button tokens by default (no excludes, webUnits=true)", () => {
        const tokens = generateComponentTokens();

        expect(tokens).toHaveProperty("button");
        expect(tokens.button).toBeDefined();
        expect(typeof tokens.button).toBe("object");

        const buttonTokenKeys = Object.keys(tokens.button);
        expect(buttonTokenKeys.length).toBeGreaterThan(0);

        for (const value of Object.values(tokens.button)) {
            expect(typeof value === "string" || typeof value === "number").toBe(true);
        }
    });

    it("loads all button token groups correctly (representative sample)", () => {
        const tokens = generateComponentTokens();

        expect(tokens.button).toBeDefined();

        const sampleTokens = [
            { key: "md.comp.button.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.hovered.container.state.layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.focused.container.state.layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.pressed.container.state.layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.filled.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.filled.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.elevated.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.button.elevated.hovered.container.state.layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.tonal.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.button.tonal.hovered.container.state.layer.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.button.outlined.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.button.outlined.hovered.state.layer.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.button.text.label.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.text.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.xsmall.container.height", expected: "2.2857rem" },
            { key: "md.comp.button.small.container.height", expected: "2.8571rem" },
            { key: "md.comp.button.medium.container.height", expected: "4rem" },
            { key: "md.comp.button.large.container.height", expected: "6.8571rem" },
            { key: "md.comp.button.xlarge.container.height", expected: "9.7143rem" },
        ];

        for (const { key, expected } of sampleTokens) {
            expect(tokens.button[key]).toBe(expected);
        }
    });

    it("excludes button tokens when 'button' is in excludes array", () => {
        const tokens1 = generateComponentTokens({ excludes: ["button"] });
        expect(tokens1).not.toHaveProperty("button");
        expect(tokens1).toHaveProperty("app-bar");
        expect(tokens1).toHaveProperty("badge");

        const tokens2 = generateComponentTokens({
            excludes: ["button", "app-bar", "badge"],
        });
        expect(tokens2).not.toHaveProperty("button");
        expect(tokens2).not.toHaveProperty("app-bar");
        expect(tokens2).not.toHaveProperty("badge");
        expect(Object.keys(tokens2).length).toBe(0);
    });

    it("converts dp to rem when webUnits is true (default)", () => {
        const tokens = generateComponentTokens();

        expect(tokens.button["md.comp.button.container.height"]).toBe("2.8571rem");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("1.4286rem");
        expect(tokens.button["md.comp.button.leading.space"]).toBe("1.7143rem");
        expect(tokens.button["md.comp.button.between.icon.label.space"]).toBe("0.5714rem");
    });

    it("leaves dp strings untouched when webUnits is false", () => {
        const tokens = generateComponentTokens({ webUnits: false });

        expect(tokens.button["md.comp.button.container.height"]).toBe("40dp");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("20dp");
        expect(tokens.button["md.comp.button.leading.space"]).toBe("24dp");
        expect(tokens.button["md.comp.button.between.icon.label.space"]).toBe(
            "8dp"
        );
    });

    it("respects custom rootFontSizePx", () => {
        const tokens = generateComponentTokens({
            rootFontSizePx: 16,
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("2.5rem");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("1.25rem");
    });

    it("respects custom dpPxRatio", () => {
        const tokens = generateComponentTokens({
            dpPxRatio: 2,
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe(
            "5.7143rem"
        );
        expect(tokens.button["md.comp.button.icon.size"]).toBe("2.8571rem");
    });

    it("respects custom unit option (px)", () => {
        const tokens = generateComponentTokens({
            unit: "px",
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("40px");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("20px");
        expect(tokens.button["md.comp.button.leading.space"]).toBe("24px");
    });

    it("respects custom unit option (px) with custom dpPxRatio", () => {
        const tokens = generateComponentTokens({
            unit: "px",
            dpPxRatio: 2,
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("80px");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("40px");
    });

    it("does not convert non-dp strings", () => {
        const tokens = generateComponentTokens({ webUnits: true });

        expect(tokens.button["md.comp.button.container.color"]).toBe(
            "md.sys.color.primary"
        );
        expect(tokens.button["md.comp.button.elevation"]).toBe(
            "md.sys.elevation.level0"
        );
        expect(tokens.button["md.comp.button.label.size"]).toBe(
            "md.sys.typescale.label-large"
        );
    });

    it("keeps numeric opacity values as numbers", () => {
        const tokens = generateComponentTokens({ webUnits: true });

        expect(tokens.button["md.comp.button.disabled.container.opacity"]).toBe(0.1);
        expect(tokens.button["md.comp.button.disabled.label.opacity"]).toBe(0.38);
        expect(typeof tokens.button["md.comp.button.disabled.container.opacity"]).toBe("number");
    });

    it("generates all tokens when excludes is omitted or empty", () => {
        const tokens1 = generateComponentTokens();
        expect(tokens1).toHaveProperty("button");
        expect(tokens1.button).toBeDefined();
        expect(Object.keys(tokens1.button).length).toBeGreaterThan(0);

        const tokens2 = generateComponentTokens({ excludes: [] });
        expect(tokens2).toHaveProperty("button");
        expect(tokens2.button).toBeDefined();
        expect(Object.keys(tokens2.button).length).toBeGreaterThan(0);
    });

    it("loads all app bar token groups correctly (representative sample)", () => {
        const tokens = generateComponentTokens();

        expect(tokens["app-bar"]).toBeDefined();

        const sampleTokens = [
            { key: "md.comp.app-bar.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.app-bar.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.app-bar.container.elevation.on.scroll", expected: "md.sys.elevation.level2" },
            { key: "md.comp.app-bar.title.text", expected: "md.sys.color.on-surface" },
            { key: "md.comp.app-bar.icon.spacing", expected: 0 },
            { key: "md.comp.app-bar.left.padding", expected: "0.2857rem" },
            { key: "md.comp.app-bar.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.app-bar.avatar.size", expected: "2.2857rem" },
            { key: "md.comp.app-bar.small.container.height", expected: "4.5714rem" },
            { key: "md.comp.app-bar.small.title.font.name", expected: "md.sys.typescale.title-large.font" },
            { key: "md.comp.app-bar.medium.flexible.container.height", expected: "8rem" },
            { key: "md.comp.app-bar.medium.title.font.size", expected: "md.sys.typescale.headline-medium.size" },
            { key: "md.comp.app-bar.large.flexible.container.height", expected: "8.5714rem" },
            { key: "md.comp.app-bar.large.title.font.name", expected: "md.sys.typescale.display-small.font" },
            { key: "md.comp.app-bar.search.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.app-bar.search.container.height", expected: "4rem" },
        ];

        for (const { key, expected } of sampleTokens) {
            expect(tokens["app-bar"][key]).toBe(expected);
        }
    });

    it("excludes app bar tokens when 'app-bar' is in excludes array", () => {
        const tokens1 = generateComponentTokens({ excludes: ["app-bar"] });
        expect(tokens1).not.toHaveProperty("app-bar");
        expect(tokens1).toHaveProperty("button");
        expect(tokens1).toHaveProperty("badge");

        const tokens2 = generateComponentTokens({
            excludes: ["app-bar", "button", "badge"],
        });
        expect(tokens2).not.toHaveProperty("app-bar");
        expect(tokens2).not.toHaveProperty("button");
        expect(tokens2).not.toHaveProperty("badge");
        expect(Object.keys(tokens2).length).toBe(0);
    });

    it("loads all badge token groups correctly (representative sample)", () => {
        const tokens = generateComponentTokens();

        expect(tokens.badge).toBeDefined();

        const sampleTokens = [
            { key: "md.comp.badge.color", expected: "md.sys.color.error" },
            { key: "md.comp.badge.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.badge.size", expected: "0.4286rem" },
            { key: "md.comp.badge.large.color", expected: "md.sys.color.error" },
            { key: "md.comp.badge.large.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.badge.large.size", expected: "1.1429rem" },
            { key: "md.comp.badge.large.label.text.color", expected: "md.sys.color.on-error" },
            { key: "md.comp.badge.large.label.text.font", expected: "md.sys.typescale.label-small.font" },
            { key: "md.comp.badge.large.label.text.line.height", expected: "md.sys.typescale.label-small.line-height" },
            { key: "md.comp.badge.large.label.text.size", expected: "md.sys.typescale.label-small.size" },
            { key: "md.comp.badge.large.label.text.tracking", expected: "md.sys.typescale.label-small.tracking" },
            { key: "md.comp.badge.large.label.text.weight", expected: "md.sys.typescale.label-small.weight" },
            { key: "md.comp.badge.large.max.width", expected: "2.4286rem" },
            { key: "md.comp.badge.small.distance.from.top.trailing.icon.corner.to.leading.badge.corner", expected: "0.4286rem" },
            { key: "md.comp.badge.large.distance.from.top.trailing.icon.corner.to.bottom.trailing.badge.corner", expected: "1rem" },
        ];

        for (const { key, expected } of sampleTokens) {
            expect(tokens.badge[key]).toBe(expected);
        }
    });

    it("excludes badge tokens when 'badge' is in excludes array", () => {
        const tokens1 = generateComponentTokens({ excludes: ["badge"] });
        expect(tokens1).not.toHaveProperty("badge");
        expect(tokens1).toHaveProperty("button");
        expect(tokens1).toHaveProperty("app-bar");

        const tokens2 = generateComponentTokens({
            excludes: ["badge", "button", "app-bar"],
        });
        expect(tokens2).not.toHaveProperty("badge");
        expect(tokens2).not.toHaveProperty("button");
        expect(tokens2).not.toHaveProperty("app-bar");
        expect(Object.keys(tokens2).length).toBe(0);
    });
});

