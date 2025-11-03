import { describe, it, expect } from "vitest";
import { generateStateTokens } from "../src";

describe("generateStateTokens()", () => {
    it("emits the 4 state-layer opacity tokens with spec values", () => {
        const tokens = generateStateTokens();

        const expected: Record<string, number> = {
            "md.sys.state.hover.state-layer-opacity": 0.08,
            "md.sys.state.focus.state-layer-opacity": 0.1,
            "md.sys.state.pressed.state-layer-opacity": 0.1,
            "md.sys.state.dragged.state-layer-opacity": 0.16,
        };

        expect(Object.keys(tokens).length).toBe(4);
        expect(tokens).toEqual(expected);
    });
});