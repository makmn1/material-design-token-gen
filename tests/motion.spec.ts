import { describe, it, expect } from "vitest";
import { generateMotionTokens } from "../src";

const KEYS = [
    "md.sys.motion.spring.fast.spatial.damping",
    "md.sys.motion.spring.fast.spatial.stiffness",
    "md.sys.motion.spring.fast.effects.damping",
    "md.sys.motion.spring.fast.effects.stiffness",

    "md.sys.motion.spring.default.spatial.damping",
    "md.sys.motion.spring.default.spatial.stiffness",
    "md.sys.motion.spring.default.effects.damping",
    "md.sys.motion.spring.default.effects.stiffness",

    "md.sys.motion.spring.slow.spatial.damping",
    "md.sys.motion.spring.slow.spatial.stiffness",
    "md.sys.motion.spring.slow.effects.damping",
    "md.sys.motion.spring.slow.effects.stiffness",
].sort();

const EXPECTED_STANDARD: Record<string, number> = {
    "md.sys.motion.spring.fast.spatial.damping": 0.9,
    "md.sys.motion.spring.fast.spatial.stiffness": 1400,
    "md.sys.motion.spring.fast.effects.damping": 1,
    "md.sys.motion.spring.fast.effects.stiffness": 3800,

    "md.sys.motion.spring.default.spatial.damping": 0.9,
    "md.sys.motion.spring.default.spatial.stiffness": 700,
    "md.sys.motion.spring.default.effects.damping": 1,
    "md.sys.motion.spring.default.effects.stiffness": 1600,

    "md.sys.motion.spring.slow.spatial.damping": 0.9,
    "md.sys.motion.spring.slow.spatial.stiffness": 300,
    "md.sys.motion.spring.slow.effects.damping": 1,
    "md.sys.motion.spring.slow.effects.stiffness": 800,
};

const EXPECTED_EXPRESSIVE: Record<string, number> = {
    "md.sys.motion.spring.fast.spatial.damping": 0.6,
    "md.sys.motion.spring.fast.spatial.stiffness": 800,
    "md.sys.motion.spring.fast.effects.damping": 1,
    "md.sys.motion.spring.fast.effects.stiffness": 3800,

    "md.sys.motion.spring.default.spatial.damping": 0.8,
    "md.sys.motion.spring.default.spatial.stiffness": 380,
    "md.sys.motion.spring.default.effects.damping": 1,
    "md.sys.motion.spring.default.effects.stiffness": 1600,

    "md.sys.motion.spring.slow.spatial.damping": 0.8,
    "md.sys.motion.spring.slow.spatial.stiffness": 200,
    "md.sys.motion.spring.slow.effects.damping": 1,
    "md.sys.motion.spring.slow.effects.stiffness": 800,
};

describe("generateMotionTokens()", () => {
    it("returns expressive tokens by default (no extras, all numeric)", () => {
        const tokens = generateMotionTokens();
        const keys = Object.keys(tokens).sort();
        expect(keys).toEqual(KEYS);
        expect(tokens).toEqual(EXPECTED_EXPRESSIVE);

        // type sanity
        for (const k of keys) {
            expect(typeof tokens[k]).toBe("number");
            expect(Number.isNaN(tokens[k])).toBe(false);
        }
    });

    it("returns the exact standard token set when variant='standard'", () => {
        const tokens = generateMotionTokens("standard");
        const keys = Object.keys(tokens).sort();
        expect(keys).toEqual(KEYS);
        expect(tokens).toEqual(EXPECTED_STANDARD);
    });

    it("differs between expressive and standard for known keys", () => {
        const expressive = generateMotionTokens("expressive");
        const standard = generateMotionTokens("standard");

        expect(expressive["md.sys.motion.spring.fast.spatial.damping"]).toBe(0.6);
        expect(standard["md.sys.motion.spring.fast.spatial.damping"]).toBe(0.9);

        expect(expressive["md.sys.motion.spring.default.spatial.stiffness"]).toBe(380);
        expect(standard["md.sys.motion.spring.default.spatial.stiffness"]).toBe(700);
    });
});