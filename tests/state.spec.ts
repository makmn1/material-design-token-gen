import { describe, it, expect } from "vitest";
import { generateStateTokens } from "../src";

describe("generateStateTokens()", () => {
    it("emits the 4 state-layer opacity tokens and 2 focus-indicator tokens with spec values (webUnits: false)", () => {
        const tokens = generateStateTokens({ webUnits: false });

        const expected: Record<string, number | string> = {
            "md.sys.state.hover.state-layer-opacity": "8%",
            "md.sys.state.focus.state-layer-opacity": "10%",
            "md.sys.state.pressed.state-layer-opacity": "10%",
            "md.sys.state.dragged.state-layer-opacity": "16%",
            "md.sys.state.focus-indicator.thickness": "3dp",
            "md.sys.state.focus-indicator.outer-offset": "2dp",
        };

        expect(Object.keys(tokens).length).toBe(6);
        expect(tokens).toEqual(expected);
    });

    it("emits opacity tokens as percentage strings and converts dp tokens to rem when webUnits is true (default)", () => {
        const tokens = generateStateTokens();

        expect(tokens["md.sys.state.hover.state-layer-opacity"]).toBe("8%");
        expect(tokens["md.sys.state.focus.state-layer-opacity"]).toBe("10%");
        expect(tokens["md.sys.state.pressed.state-layer-opacity"]).toBe("10%");
        expect(tokens["md.sys.state.dragged.state-layer-opacity"]).toBe("16%");

        expect(typeof tokens["md.sys.state.focus-indicator.thickness"]).toBe("string");
        expect(tokens["md.sys.state.focus-indicator.thickness"]).toMatch(/^\d+\.?\d*rem$/);
        expect(typeof tokens["md.sys.state.focus-indicator.outer-offset"]).toBe("string");
        expect(tokens["md.sys.state.focus-indicator.outer-offset"]).toMatch(/^\d+\.?\d*rem$/);

        expect(Object.keys(tokens).length).toBe(6);
    });

    it("converts dp tokens to px when unit option is 'px'", () => {
        const tokens = generateStateTokens({ unit: "px" });

        expect(typeof tokens["md.sys.state.focus-indicator.thickness"]).toBe("string");
        expect(tokens["md.sys.state.focus-indicator.thickness"]).toMatch(/^\d+px$/);
        expect(typeof tokens["md.sys.state.focus-indicator.outer-offset"]).toBe("string");
        expect(tokens["md.sys.state.focus-indicator.outer-offset"]).toMatch(/^\d+px$/);
    });
});