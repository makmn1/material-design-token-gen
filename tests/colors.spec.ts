import { describe, it, expect } from "vitest";
import { generateColorTokens } from "../src";

const EXPECTED_KEYS = [
    // palette key colors
    "md.sys.color.primary-palette-key-color",
    "md.sys.color.secondary-palette-key-color",
    "md.sys.color.tertiary-palette-key-color",
    "md.sys.color.neutral-palette-key-color",
    "md.sys.color.neutral-variant-palette-key-color",
    "md.sys.color.error-palette-key-color",

    // surface/background family
    "md.sys.color.background",
    "md.sys.color.on-background",
    "md.sys.color.surface",
    "md.sys.color.surface-dim",
    "md.sys.color.surface-bright",
    "md.sys.color.surface-container-lowest",
    "md.sys.color.surface-container-low",
    "md.sys.color.surface-container",
    "md.sys.color.surface-container-high",
    "md.sys.color.surface-container-highest",
    "md.sys.color.on-surface",
    "md.sys.color.surface-variant",
    "md.sys.color.on-surface-variant",
    "md.sys.color.outline",
    "md.sys.color.outline-variant",
    "md.sys.color.inverse-surface",
    "md.sys.color.inverse-on-surface",
    "md.sys.color.shadow",
    "md.sys.color.scrim",
    "md.sys.color.surface-tint",

    // primary
    "md.sys.color.primary",
    "md.sys.color.primary-dim",
    "md.sys.color.on-primary",
    "md.sys.color.primary-container",
    "md.sys.color.on-primary-container",
    "md.sys.color.primary-fixed",
    "md.sys.color.primary-fixed-dim",
    "md.sys.color.on-primary-fixed",
    "md.sys.color.on-primary-fixed-variant",
    "md.sys.color.inverse-primary",

    // secondary
    "md.sys.color.secondary",
    "md.sys.color.secondary-dim",
    "md.sys.color.on-secondary",
    "md.sys.color.secondary-container",
    "md.sys.color.on-secondary-container",
    "md.sys.color.secondary-fixed",
    "md.sys.color.secondary-fixed-dim",
    "md.sys.color.on-secondary-fixed",
    "md.sys.color.on-secondary-fixed-variant",

    // tertiary
    "md.sys.color.tertiary",
    "md.sys.color.tertiary-dim",
    "md.sys.color.on-tertiary",
    "md.sys.color.tertiary-container",
    "md.sys.color.on-tertiary-container",
    "md.sys.color.tertiary-fixed",
    "md.sys.color.tertiary-fixed-dim",
    "md.sys.color.on-tertiary-fixed",
    "md.sys.color.on-tertiary-fixed-variant",

    // error
    "md.sys.color.error",
    "md.sys.color.error-dim",
    "md.sys.color.on-error",
    "md.sys.color.error-container",
    "md.sys.color.on-error-container",

    // text / controls
    "md.sys.color.control-activated",
    "md.sys.color.control-normal",
    "md.sys.color.control-highlight",
    "md.sys.color.text-primary-inverse",
    "md.sys.color.text-secondary-and-tertiary-inverse",
    "md.sys.color.text-primary-inverse-disable-only",
    "md.sys.color.text-secondary-and-tertiary-inverse-disabled",
    "md.sys.color.text-hint-inverse",
];

const HEX = /^#[0-9a-fA-F]{6}$/;

describe("generateColorTokens()", () => {
    it("emits exactly the expected color tokens (no extras) and hex values", () => {
        const tokens = generateColorTokens();

        const keys = Object.keys(tokens).sort();
        const expected = [...EXPECTED_KEYS].sort();

        expect(keys).toEqual(expected);

        for (const k of EXPECTED_KEYS) {
            const v = tokens[k];
            expect(typeof v).toBe("string");
            expect(HEX.test(v as string)).toBe(true);
        }
    });
});